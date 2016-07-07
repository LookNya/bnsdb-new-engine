#!/usr/bin/node
"use strict"

const fs = require('fs')
const zlib = require('zlib')
const pathutils = require('path').posix
const dot = require('dot')
const beautify = require('js-beautify').html
const marked = require('marked')
const stylus = require('stylus')
const {write, link, forEachFile, Logger} = require('./utils.js')
const {getMarkedConfig} = require('./marked_config.js')


const OUT_DIR = 'www'
const PAGES_DIR = 'pages'
const MAIN_LANGSERVER = 'ru-srv'
const DO_NOT_GROUP = ['CNAME', 'static', 'img', 'robots.txt', '404.html', 'sitemap.xml'].map(name => PAGES_DIR+'/'+name)
const DO_NOT_CLEAN = ['.git'].map(name => OUT_DIR+'/'+name)
const GZIP = ['html', 'css', 'js', 'xml', 'txt', 'json']


function withExt(name, ext) {
	return ext == null ? name : name+'.'+ext
}

function getPageConfig(content) {
	let config = {}
	let m = content.match(/```\s*config\W([\d\D]*?)\W```/)
	if (m) {
		let [all, str_cfg] = m
		config = JSON.parse('{'+str_cfg+'}')
		content = content.substr(0, m.index) + content.substr(m.index+all.length)
	}
	return [content, config]
}

const markedConfig = getMarkedConfig(marked)

const beautifyConfig = {indent_with_tabs: true, wrap_line_length: 80}

dot.templateSettings.varname = "it, def"
dot.templateSettings.define = /\{\{##\s*(\S+)\s*(\:|=)\s*([\s\S]+?)\s*#\}\}/g
dot.templateSettings.strip = false

function makeDef(mdef) {
	let attrs = {plus:{/*js:[], css:[], */head:[]}}
	if (mdef) for (var i in attrs.plus) attrs.plus[i] = mdef.plus[i].slice()

	var def = new Proxy({}, {
		get: function(proxy, name){ return attrs[name] },
		has: function(name){ return name in attrs },
		set: function(proxy, name, val) {
			if (name[0] == "+") {
				var a = attrs.plus[name.substr(1)]
				if (a) a.push(val)
				else console.warn("Don't know how to add <"+name+">")
			} else {
				attrs[name] = val
			}
			return true
		}
	})

	def.include = function(name, it) {
		let content = fs.readFileSync('templates/'+name, 'utf-8')
		return dot.template(content, null, this)(it, this)
	}

	def.tileGroupsFor = function(page, groups=[]) {
		let group = {page, tiles:[]}
		groups.push(group)

		for (let name in page.children) {
			let child = page.children[name]
			if (child.type == 'tiles') {
				this.tileGroupsFor(child, groups)
			} else {
				group.tiles.push({page:child})
			}
		}

		if (group.tiles.length == 0) groups.splice(groups.indexOf(group), 1)
		return groups
	}

	return def
}


// Локальные глобальные переменные
let files = []
let langservers = new Set()
let groups = {}
let modifTimes = {}


// ПОИСК ФАЙЛОВ
// Всех файлов типа `index.ru-server.html` или `other.*-*.js`
// в папке `PAGES_DIR`.
exports.search = function() {
	console.log(`seaching files in '${PAGES_DIR}'...`)
	files.length = 0
	forEachFile(PAGES_DIR, (fname, fullpath, is_dir) => {
		if (fullpath.endsWith('~')) return //бекапы текстового редактора, пропускаем

		// index.ru-server.html, название.язык-сервер.формат
		let m = fullpath.match(/^([\w/]*)\/(.*?)(?:\.([a-z]{2})-(\w+))?(?:\.(\w+))?$/)
		if (!m) { console.warn(`${fullpath} has wrong name/path, skipping`); return }

		let [_, short_path, name, lang, server, ext] = m
		short_path = short_path.substr(PAGES_DIR.length+1) // отрезаем префикс `pages/` от пути
		lang = lang || '*'
		server = server || '*'
		let do_not_group = DO_NOT_GROUP.some( prefix => fullpath.startsWith(prefix) )

		files.push({
			lang, server, short_path, name, ext, do_not_group,
			filepath: fullpath,
			page: null
		})
	})
	console.log(`  done, ${files.length} found\n`)
}


// Находим все пары `язык-сервер`
exports.langservers = function() {
	langservers.clear()
	for (let {lang, server} of files) {
		if (lang != '*' && server != '*')
			langservers.add(lang+'-'+server)
	}
	console.log('all lang-server pairs:')
	for (let langserver of langservers) {
		console.log('  '+ langserver)
	}
	console.log('')
}


// КОПИРОВАНИЕ
// Всяких `index.*-srv.html` в `index.ru-srv.html`, `index.en-srv.html` и т.д.
exports.duplicate = function() {
	console.log('duplicating pages...')
	for (let i=0; i<files.length; i++) {
		let {lang, server, short_path, name, ext, filepath, do_not_group} = files[i]
		if (do_not_group) continue
		if (lang != '*' && server != '*') continue

		// убираем сам файл...
		files.splice(i--, 1)
		let count = 0

		// ...и добавлем все его копии
		for (let langserver of langservers) {
			let [l, s] = langserver.split('-')
			if (lang != '*' && lang != l) continue
			if (server != '*' && server != s) continue
			files.push({lang:l, server:s, short_path, name, ext, filepath})
			count++
		}
		console.log(`  ${filepath} x${count}`)
	}
	console.log(`  done, ${files.length} now\n`)
}


// ГРУППИРОВКА
// По языку-серверу.
// {
//   'ru-srv': {
//     blank: false,
//     name: 'somepage',
//     short_path: 'smth/somepage',
//     files: [...],
//     children: {
//       subpage1: { ... },
//       subpage2: { ... }
//     },
//     ...
//   },
//   ...
// }
exports.group = function() {
	for (let i in groups) delete groups[i]
	for (let file of files) {
		let {lang, server, short_path} = file

		// пустая страница, заполнится (если есть, чем) по мере обработки файлов
		function blankPage(name, short_path, parent) {
			return {
				blank: true,
				name, short_path, parent,
				lang, server,
				of_main_langserver: lang+'-'+server == MAIN_LANGSERVER,
				get web_path(){
					return pathutils.normalize(this.of_main_langserver || this.do_not_group
					                           ? `/${this.short_path}/`
					                           : `/${lang}-${server}/${this.short_path}/`)
				},
				files: [],
				children: {},
				do_not_group: false //тут это вычислять неудобно, поэтому в следующем цикле
			}
		}

		let langserv = lang+'-'+server
		if (!(langserv in groups)) groups[langserv] = blankPage(langserv, '', null)

		let cur_page = groups[langserv]
		let cur_path = ''
		let sections = short_path=='' ? [] : short_path.split('/')

		for (let section of sections) {
			cur_path = (cur_path=='' ? '' : cur_path+'/') + section
			if (!(section in cur_page.children)) cur_page.children[section] = blankPage(section, cur_path, cur_page)
			cur_page = cur_page.children[section]
		}

		cur_page.blank = false
		cur_page.files.push(file)
		file.page = cur_page
	}

	function forEachPage(func) {
		function iter(page, level, parent_res) {
			let res = func(page, level, parent_res)
			for (let i in page.children) iter(page.children[i], level+1, res)
		}
		for (let ls in groups) iter(groups[ls], 0)
	}

	// установка флаков `do_not_group`
	forEachPage((page, level, parent_do_not_group) => {
		return page.do_not_group = !!parent_do_not_group || page.files.some(f => f.do_not_group)
	})

	console.log('pages structure:')
	forEachPage((page, level) => {
		console.log('- ' + '  '.repeat(level) + page.name + '/')
		for (let i=0; i<page.files.length; i++) {
			let prefix = '- ' + '  '.repeat(level+1)
			if (i > 5 && page.files.length > 10) {console.log(prefix + '{and '+(page.files.length-i)+' more}'); return}
			let file = page.files[i]
			console.log(prefix + withExt(file.name, file.ext))
		}
	})
	console.log('')
}


// CLEANUP
exports.cleanup = function() {
	console.log('cleanup...')
	if (fs.existsSync(OUT_DIR)) {
		forEachFile(OUT_DIR, (fname, fpath, is_dir) => {
			for (let prefix of DO_NOT_CLEAN) if (fpath.startsWith(prefix)) return
			is_dir ? fs.rmdirSync(fpath) : fs.unlinkSync(fpath)
		}, true)
	}
	console.log('  done\n')
}


// WRITING WWW
exports.write = function() {
	let log = Logger(/^((?:.*?\/){1,3})(.*)(\..*)$/)
	log('processing files...')

	// Главный шаблон
	let main_def = makeDef()
	let main = dot.template(fs.readFileSync('templates/main.html', 'utf-8'), null, main_def)

	// Сортировка файлов по имени, так вывод красивее
	function cmp(a,b){ return a==b ? 0 : a<b ? -1 : 1 }
	files.sort((f1, f2) => cmp(f1.lang+'-'+f1.server+'-'+f1.filepath,
	                           f2.lang+'-'+f2.server+'-'+f2.filepath))

	// Изменился ли хоть один шаблон
	let templates_changed = false
	forEachFile('templates', function(fname, fullpath) {
		let mtime = fs.statSync(fullpath).mtime.getTime()
		if (mtime > modifTimes[fullpath]) templates_changed = true
		modifTimes[fullpath] = mtime
	})

	// PHASE 0
	// Проверка изменения исходника, наличия файла назначение, несколько доп. свойств для файлов
	for (let file of files) {
		let {name, ext, filepath, page} = file

		let out_ext = {md:'html', styl:'css'}[ext] || ext
		let outpath = pathutils.normalize(`${OUT_DIR}${page.web_path}${withExt(name, out_ext)}`)
		let out_exists = fs.existsSync(outpath)

		let mtime = fs.statSync(filepath).mtime.getTime()
		let src_not_modified = mtime <= modifTimes[filepath]
		modifTimes[filepath] = mtime

		file.outpath = outpath
		file.out_exists = out_exists
		file.src_not_modified = src_not_modified
		file.can_skip = src_not_modified && out_exists && !(ext=='md' && templates_changed)
	}

	// PHASE 1
	// Парсинг всех md, несколько доп. свойств для страниц и файлов из содержимого этих md
	for (let file of files) {
		let {filepath, ext, page, can_skip} = file
		if (can_skip) continue

		if (ext == 'md') {
			let content = fs.readFileSync(filepath, 'utf-8')
			let config
			[content, config] = getPageConfig(content)

			// парсинг маркдауна
			let tokens = marked.lexer(content)
			let toc = tokens.filter(t => t.type=='heading' && t.depth==2).map(t => t.text)
			let title = null
			for (let t of tokens) if (t.type=='heading' && t.depth==1) {title=t.text; break}
			content = marked.parser(tokens, markedConfig)

			page.title = config.title || title
			page.short_title = config.short_title || page.title
			page.type = config.type || 'text'
			page.toc = toc
			page.config = config
			file.content = content
		}
	}

	// PHASE 2
	// Чтение (если ещё не прочитано) и генерация всего
	for (let {server, lang, ext, filepath, do_not_group, page, out_exists, outpath, content, can_skip} of files) {
		if (can_skip) continue

		let langserver = lang+'-'+server
		let is_main = page.of_main_langserver
		let web_path = page.web_path
		let marker = (is_main?'m':' ') + (do_not_group?'s':' ')

		if (ext == 'md' || ext == 'styl') {
			if (content == null) content = fs.readFileSync(filepath, 'utf-8')

			let crlf_pos = content.indexOf("\r\n")
			if (crlf_pos != -1) console.warn(`WARN: ${outpath}: '\\r\\n' found at #${crlf_pos} char, `+
			                                 `after '${content.substr(crlf_pos-16,16)}'`)

			if (ext == 'styl') {
				content = stylus.render(content, {filename: filepath})
			}

			if (ext == 'md' && !do_not_group) {
				let {title, short_title, type, toc, config} = page, author = null, ads_enabled = true
				let root_page = groups[langserver]
				let pages_chain = []; for (let p=page; p!=null; p=p.parent) pages_chain.push(p)

				// подготовка параметров для шаблонов
				let def = makeDef(main_def)
				let it = {title, short_title, type, author, ads_enabled, lang, server, root_page, pages_chain, page, web_path, config, toc}
				for (let i in config) it[i] = config[i]

				// шаблонизация
				content = dot.template(content, null, def)(it, def)
				it.content = content
				content = main(it, def)
				//content = beautify(content, beautifyConfig)
			}

			if (out_exists) fs.unlinkSync(outpath) //на случай, если после прошлой генерации тут почему-то ссылка
			log(`  writing ${marker} ${outpath}`)
			write(outpath, content)
		} else {
			if (out_exists) fs.unlinkSync(outpath)
			log(`  linking ${marker} ${outpath}`)
			link(outpath, filepath)
		}
	}
	log('  done\n')


	;[
		['weapon', PAGES_DIR+'/json/weapons/all.json'],
		['cat', PAGES_DIR+'/json/cats/all.json'],
		['gem', PAGES_DIR+'/json/gems/all.json'],
		['acc', PAGES_DIR+'/json/accs/all.json'],
	].forEach(([item_type, json_file_path]) => {
		console.log(`generating ${item_type} pages...`)

		if (!fs.existsSync(json_file_path)) {
			console.log(`  no ${item_type} json: ${json_file_path}\n`)
			return
		}

		let mtime = fs.statSync(json_file_path).mtime.getTime()
		let json_not_modified = mtime <= modifTimes[json_file_path+'*']
		modifTimes[json_file_path+'*'] = mtime
		if (json_not_modified && !templates_changed) {
			console.log(`  no changes, skipping\n`)
			return
		}

		let def = makeDef(main_def)
		let items = JSON.parse(fs.readFileSync(json_file_path, 'utf-8'))
		for (let item of items) {
			let root_page = groups[MAIN_LANGSERVER]
			let web_path = `/idb/${item_type}s/${item.id}/`

			let it = {title:item.name, web_path, root_page, page:{}, pages_chain:[], type:'item', toc:[], content:'',
			          item_type, item}
			let html = main(it, def)
			//html = beautify(html, beautifyConfig)
			write(`${OUT_DIR}/${web_path}/index.html`, html)
		}

		console.log(`  done, ${items.length} total\n`)
	})
}


// GZIP
exports.gzip = function() {
	console.log('gzip\'ing...')
	let skipped = new Set()
	let processed = new Set()
	let sum = {before: 0, after: 0}
	forEachFile(OUT_DIR, (fname, fullpath) => {
		let ext = fname.match(/[^.]*$/)[0]
		if (GZIP.indexOf(ext) == -1) {skipped.add(ext); return}

		let data = fs.readFileSync(fullpath)
		let res = zlib.gzipSync(data, {level: 5})
		fs.writeFileSync(fullpath+'.gz', res)
		sum.before += data.length
		sum.after += res.length
		processed.add(ext)
	})
	console.log(`  done`)
	console.log(`    processed:  ${Array.from(processed)}`)
	console.log(`    skipped:    ${Array.from(skipped)}`)
	console.log(`    compressed: ${sum.before/1024|0} --> ${sum.after/1024|0} KiB`)
	console.log(``)
}


// Зафигачить всё и сразу
exports.doAll = function() {
	exports.search()
	exports.langservers()
	exports.duplicate()
	exports.group()
	//exports.cleanup()
	exports.write()
	//exports.gzip()
}


// Если скрипт запушен напрямую (не через require)
if (!module.parent) {
	exports.cleanup()
	exports.doAll()
	exports.gzip()
}
