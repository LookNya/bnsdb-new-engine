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


function Logger(regexp) {
	let newline_printed = true
	let prev_prefix = null, prev_suffix = null, count = 0, mids = []
	function reset() {
		prev_prefix = null
		prev_suffix = null
		count = 0
		mids.length = 0
	}
	function log(...args) {
		custom: {
			if (args.length != 1) break custom
			if (typeof args[0] != 'string') break custom

			let m = args[0].match(regexp)
			if (!m) break custom

			let [_, prefix, mid, suffix] = m
			if (prefix == prev_prefix && suffix == prev_suffix) {
				count++
				mids.push(mid)
				let msg = `\r${prefix}{ ${mids.join(', ')} }${suffix}`
				if (msg.length > process.stdout.columns) msg = msg.substr(0, process.stdout.columns-2)+'...'
				process.stdout.write(msg)
			} else {
				process.stdout.write((newline_printed ? '' : '\n')+args[0])
				reset()
				mids.push(mid)
			}
			prev_prefix = prefix
			prev_suffix = suffix
			newline_printed = false
			return
		}
		process.stdout.write('\n')
		console.log(...args)
		reset()
		newline_printed = true
	}
	log.done = function() {
		process.stdout.write('\n')
	}
	return log
}
exports.Logger = Logger
