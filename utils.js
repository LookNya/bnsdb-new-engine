"use strict"
const fs = require('fs')
const path = require('path')

exports.mkdir = function(dirname) {
	let parts = dirname.split('/')
	let curname = ''
	for (let i=0; i<parts.length; i++) {
		curname = path.posix.join(curname, parts[i])
		if (!fs.existsSync(curname)) fs.mkdirSync(curname)
	}
}

exports.cp = function(src, dest) {
	fs.writeFileSync(dest, fs.readFileSync(src))
}

/*exports.rmr = function(dirpath) {
	if (fs.existsSync(dirpath)) exports.forEachFile(dirpath, (fname, fpath, is_dir) => fs[is_dir?'rmdirSync':'unlinkSync'](fpath), true)
}*/

exports.write = function(filepath, data) {
	exports.mkdir(path.dirname(filepath))
	fs.writeFileSync(filepath, data)
}

exports.link = function(filepath, srcpath) {
	exports.mkdir(path.dirname(filepath))
	fs.linkSync(srcpath, filepath)
}

exports.forEachFile = function(dirpath, func, with_dirs_after=false) {
	function iter(dirpath) {
		let files = fs.readdirSync(dirpath)
		for (let fname of files) {
			let filepath = dirpath+'/'+fname
			if (fs.statSync(filepath).isDirectory()) {
				iter(filepath)
				if (with_dirs_after) func(fname, filepath, true)
			} else {
				func(fname, filepath, false)
			}
		}
	}
	iter(dirpath)
}
