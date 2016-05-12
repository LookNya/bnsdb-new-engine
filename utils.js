"use strict"
const fs = require('fs')
const path = require('path')

exports.mkdir = function(dirname) {
	let parts = dirname.split(path.sep)
	let curname = ''
	for (let i=0; i<parts.length; i++) {
		curname = path.join(curname, parts[i])
		if (!fs.existsSync(curname)) fs.mkdirSync(curname)
	}
}

exports.cp = function(src, dest) {
	fs.writeFileSync(dest, fs.readFileSync(src))
}

exports.rmr = function(dirpath) {
	if (fs.existsSync(dirpath)) exports.forEachFile(dirpath, (fname, fpath) => fs.unlinkSync(fpath))
}

exports.write = function(filepath, data) {
	exports.mkdir(path.dirname(filepath))
	fs.writeFileSync(filepath, data)
}

exports.forEachFile = function(dirpath, func) {
	function iter(dirpath) {
		let files = fs.readdirSync(dirpath)
		for (let fname of files) {
			let filepath = dirpath+'/'+fname
			if (fs.statSync(filepath).isDirectory()) {
				iter(filepath)
			} else {
				func(fname, filepath)
			}
		}
	}
	iter(dirpath)
}
