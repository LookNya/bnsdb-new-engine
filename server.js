#!/usr/bin/node
"use strict"

const fs = require('fs')
const http = require('http')
const URL = require('url')
const path = require('path')
const nstatic = require('node-static')
// const querystring = require('querystring') // parse
const dot = require('dot')
const {mkdir, cp, write} = require('./utils.js')

const PORT = 9002

function stamp() {
	let t = val => (val>10 ? '' : '0')+val
	let date = new Date()
	let [Y,M,D] = [date.getFullYear(), date.getMonth()+1, date.getDate()]
	let [h,m,s] = [date.getHours(), date.getMinutes(), date.getSeconds()]
	return `${Y}-${t(M)}-${t(D)}_${t(h)}-${t(m)}-${t(s)}`
}


cp('node_modules/marked/lib/marked.js', 'edit/www/js/marked.js')
cp('node_modules/dot/doT.js', 'edit/www/js/doT.js')
cp('marked_config.js', 'edit/www/js/marked_config.js')

let wwwEdit = new nstatic.Server('./edit/www')
let www = new nstatic.Server('./www', {cache: false, headers: {'Cache-Control': 'no-cache'}})

let index = dot.template(fs.readFileSync('edit/index.html', 'utf-8'))


http.createServer((req, res) => {
	//var url = URL.parse(req.url)
	//console.log(url, req.url, req.method)
	var url = decodeURI(req.url)
	var parts = url.split('/')
	console.log(url, req.url, URL.parse(req.url).query)

	// /edit/ru-srv/some/page/
	var m = url.match(/^\/edit\/([a-z]{2})-(\w+)\/([\w/]*[\w])\/$/)
	if (m) {
		let [_, lang, server, path] = m

		if (req.method == 'GET') {
			let text = '# '+path+'\n\n...'
			let is_new = true
			try {
				text = fs.readFileSync(`pages/${path}/index.${lang}-${server}.md`)
				is_new = false
			} catch (ex) {
				if (ex.code != 'ENOENT') throw ex
			}
			res.writeHead(200, { 'Content-Type': 'text/html' })
			res.end(index({
				is_new: is_new,
				lang: lang,
				server: server,
				path: path,
				current_text: text
			}))
			return
		}
		
		if (req.method == 'POST') {
			let data = ''
			req.on('data', (chunk) => {
				data += chunk
				if (data.length > 1e6) req.connection.destroy()
			})
			req.on('end', () => {
				try {
					console.log(data)
					write(`pages_backups/${path}/index_${stamp()}.${lang}-${server}.md`, data)
					write(`pages/${path}/index.${lang}-${server}.md`, data)
					res.writeHead(200, { 'Content-Type': 'text/plain' })
					res.end('OK')
				} catch (e) {
					console.error(e.stack)
					res.writeHead(500, { 'Content-Type': 'text/plain' })
					res.end(e.toString())
				}
			})
			return
		}
	}
	
	wwwEdit.serve(req, res, (error, result) => {
		if (error && error.status == 404) {
			www.serve(req, res, (error, result) => {
				res.writeHead(404, { 'Content-Type': 'text/plain' })
				res.end('404')
			})
		}
	})
}).listen(PORT, '0.0.0.0', () => {
	console.log(`Server running at ${PORT}`)
})


if (process.argv.indexOf('--regen-on-input') != -1) {
	console.log('Press Ctrl+C or Q to exit, R to remove ./www')
	var gen = require('./gen.js')

	process.stdin.setRawMode(true)
	process.stdin.on('data', buf => {
		if (buf[0] == 3 || buf[0] == 113) process.exit(0)
		let stt = Date.now()
		if (buf[0] == 114) gen.cleanup()
		gen.doAll()
		console.log('Done generating, '+ (Date.now()-stt) +'ms')
	})
}
