#!/usr/bin/node
"use strict"

const fs = require('fs')
const zlib = require('zlib')
const pathutils = require('path').posix
const dot = require('dot')
const beautify = require('js-beautify').html
const marked = require('marked')
const stylus = require('stylus')
const {mkdir, cp, rmr, write, link, forEachFile} = require('./utils.js')
const {getMarkedConfig} = require('./marked_config.js')


const OUT_DIR = 'www'
const PAGES_DIR = 'pages'
const MAIN_LANGSERVER = 'ru-srv'
const COPY_AS_IS = ['CNAME', 'static', 'img', 'robots.txt', '404.html', 'sitemap.xml'].map(name => PAGES_DIR+'/'+name)
const DO_NOT_CLEAN = ['.git'].map(name => OUT_DIR+'/'+name)
const GZIP = ['html', 'css', 'js', 'xml', 'txt']


function withExt(name, ext) {
	return ext == null ? name : name+'.'+ext
}

function getPageConfig(content, ext) {
	let config = {}
	if (ext == 'md' || ext == 'html') {
		let m = content.match(/```config\n([\d\D]*?)\n```/)
		if (m) {
			let [all, str_cfg] = m
			config = JSON.parse('{'+str_cfg+'}')
			content = content.substr(0, m.index) + content.substr(m.index+all.length)
		}
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

	def.include = function(name) {
		return fs.readFileSync('templates/'+name, 'utf-8')
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

		let [_, path, name, lang, server, ext] = m
		path = path.substr(PAGES_DIR.length+1) // отрезаем префикс `pages/` от пути
		lang = lang || '*'
		server = server || '*'
		let copy_as_is = COPY_AS_IS.some( prefix => fullpath.startsWith(prefix) )

		files.push({
			lang, server, path, name, ext, copy_as_is,
			filepath: fullpath
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
		let {lang, server, path, name, ext, filepath, copy_as_is} = files[i]
		if (copy_as_is) continue
		if (lang != '*' && server != '*') continue

		// убираем сам файл...
		files.splice(i--, 1)
		let count = 0

		// ...и добавлем все его копии
		for (let langserver of langservers) {
			let [l, s] = langserver.split('-')
			if (lang != '*' && lang != l) continue
			if (server != '*' && server != s) continue
			files.push({lang:l, server:s, path, name, ext, filepath})
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
//     path: 'smth/somepage',
//     files: [...],
//     children: {
//       subpage1: { ... },
//       subpage2: { ... }
//     }
//   },
//   ...
// }
exports.group = function() {
	for (let i in groups) delete groups[i]
	for (let file of files) {
		let {lang, server, path, copy_as_is} = file

		// пустая страница, заполнится (если есть, чем) по мере обработки файлов
		function blankPage(name, path) {
			return {
				blank: true,
				name, path,
				get pagepath(){ return lang+'-'+server == MAIN_LANGSERVER ? `/${this.path}/` : `/${lang}-${server}/${this.path}/` },
				files: [],
				children: {}
			}
		}

		let langserv = copy_as_is ? '*as-is*' : lang+'-'+server
		if (!(langserv in groups)) groups[langserv] = blankPage(langserv, '')

		let cur_page = groups[langserv]
		let cur_path = ''
		let sections = path=='' ? [] : path.split('/')

		for (let section of sections) {
			cur_path = (cur_path=='' ? '' : cur_path+'/') + section
			if (!(section in cur_page.children)) cur_page.children[section] = blankPage(section, cur_path)
			cur_page = cur_page.children[section]
		}

		cur_page.blank = false
		cur_page.path = file.path
		cur_page.files.push(file)
	}

	console.log('pages structure:')
	function iter(page, level) {
		console.log('- ' + '  '.repeat(level) + page.name + '/')
		for (let file of page.files) {
			console.log('- ' + '  '.repeat(level+1) + withExt(file.name, file.ext))
		}
		for (let i in page.children) {
			iter(page.children[i], level+1)
		}
	}
	for (let ls in groups) iter(groups[ls], 0)
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
	console.log('processing files...')

	let main_def = makeDef()
	let main = dot.template(fs.readFileSync('templates/main.html', 'utf-8'), null, main_def)

	function cmp(a,b){ return a==b ? 0 : a<b ? -1 : 1 }
	files.sort((f1, f2) => cmp(f1.lang+'-'+f1.server+'-'+f1.filepath,
	                           f2.lang+'-'+f2.server+'-'+f2.filepath))

	for (let {server, path, lang, name, ext, filepath, copy_as_is} of files) {
		let sections = path.split('/')
		let langserver = lang+'-'+server
		let is_main = langserver == MAIN_LANGSERVER
		let pagepath = is_main || copy_as_is ? `/${path}/` : `/${langserver}/${path}/`
		let outpath = pathutils.normalize(`${OUT_DIR}${pagepath}${withExt(name, ext=='md'?'html':ext=='styl'?'css':ext)}`)
		let marker = is_main ? 'm' : copy_as_is ? 'c' : ' '
		let exists = fs.existsSync(outpath)

		let mtime = fs.statSync(filepath).mtime.getTime()
		if (mtime <= modifTimes[filepath] && exists) continue
		modifTimes[filepath] = mtime

		if (ext == 'md' || ext == 'html' || ext == 'styl') {
			let content = fs.readFileSync(filepath, 'utf-8'), config
			[content, config] = getPageConfig(content, ext)

			let toc = [], title = null, author = null, adv = false
			if (ext == 'md') {
				let tokens = marked.lexer(content)
				toc = tokens.filter(t => t.type=='heading' && t.depth==2).map(t => t.text)
				for (let t of tokens) if (t.type=='heading' && t.depth==1) {title=t.text; break}
				content = marked.parser(tokens, markedConfig)
			}
			if (ext == 'styl') content = stylus.render(content)

			if (!copy_as_is && (ext == 'md' || ext == 'html')) {
				let def = makeDef(main_def)
				let menu = groups[langserver].children

				let params = {title, author, adv, menu, lang, server, path, pagepath, config, toc}
				for (let i in config) params[i] = config[i]

				content = dot.template(content, null, def)(params)
				params.content = content
				let html = main(params)
				content = beautify(html, beautifyConfig)
			}

			console.log(`  writing ${marker} ${outpath}`)
			write(outpath, content)
		} else {
			if (exists) fs.unlinkSync(outpath)
			console.log(`  linking ${marker} ${outpath}`)
			link(outpath, filepath)
		}
	}
	console.log('  done\n')
}


// GZIP
exports.gzip = function() {
	console.log('gzip\'ing...')
	let skipped = new Set()
	let sum = {before: 0, after: 0}
	forEachFile(OUT_DIR, (fname, fullpath) => {
		let ext = fname.match(/[^.]*$/)[0]
		if (GZIP.indexOf(ext) == -1) {skipped.add(ext); return}

		let data = fs.readFileSync(fullpath)
		let res = zlib.gzipSync(data, {level: 5})
		fs.writeFileSync(fullpath+'.gz', res)
		sum.before += data.length
		sum.after += res.length
	})
	console.log(`  done, ${sum.before|0} --> ${sum.after|0} B, skipped: ${Array.from(skipped)}\n`)
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
