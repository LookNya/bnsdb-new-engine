#!/bin/env node
const fs = require('fs')
const Canvas = require('canvas')
const Image = Canvas.Image

if (process.argv.length < 3) {
	const path = require('path')
	console.log(`Usage: ${path.basename(process.argv[1])} <prefix_of_8_images>`)
	console.log(`   or: ${path.basename(process.argv[1])} <complete_image>.png`)
	process.exit(2)
}

let name = process.argv[2]
let w = 128
let offsets = [[w/2,w], [0,w], [0,w/2], [0,0], [w/2,0], [w,0], [w,w/2], [w,w]]

let canvas = new Canvas(w*2, w*2)
let rc = canvas.getContext('2d')

rc.globalCompositeOperation = 'screen'
if (name.endsWith('.png')) {
	name = name.slice(0, -4)
	let img = new Image()
	img.src = fs.readFileSync(`./img_orig/${name}.png`)
	rc.drawImage(img, 0, 0)
} else {
	offsets.forEach(([dx,dy],i) => {
		let img = new Image()
		img.src = fs.readFileSync(`./img_orig/${name}${i+1}.png`)
		rc.drawImage(img, w-dx, w-dy)
	})

	// alpha correction
	rc.globalCompositeOperation = 'lighten'//'destination-atop'
	rc.beginPath()
	for (var i=0; i<8; i++) {
		let a = (i+0.5)/8 * 2*Math.PI, r = 133
		rc.lineTo(w+Math.cos(a)*r, w+Math.sin(a)*r)
	}
	rc.fill()
}

/*let data = rc.getImageData(0, 0, w*2, w*2)
let pix = data.data
for (let i=0; i<w*2; i++) {
	for (let j=0; j<w*2; j++) {
		let o = (i + j*w*2)*4
		pix[o+3] = 255
	}
}
rc.putImageData(data, 0, 0)*/

//rc.globalCompositeOperation = 'copy'
//rc.fillStyle = 'rgba(255,255,255,0)'
//rc.fillRect(0, 0, w, w)


offsets.forEach(([dx,dy],i) => {
	let partCanvas = new Canvas(w, w)
	let rc = partCanvas.getContext('2d')

	rc.globalCompositeOperation = 'copy'
	rc.fillStyle = 'rgba(255,255,255,0)'
	rc.fillRect(0, 0, w, w)

	let da = Math.PI/8, a = (i-2)/8 * 2*Math.PI, dp = 0.5
	rc.beginPath()
	rc.moveTo(dx-Math.cos(a)*0.5   -dp, dy-Math.sin(a)*0.5   -dp)
	rc.lineTo(dx+Math.cos(a+da)*w*2-dp, dy+Math.sin(a+da)*w*2-dp)
	rc.lineTo(dx+Math.cos(a-da)*w*2-dp, dy+Math.sin(a-da)*w*2-dp)
	rc.clip()

	rc.globalCompositeOperation = 'source-over'
	rc.drawImage(canvas, dx-w, dy-w)

	partCanvas.pngStream().pipe(fs.createWriteStream(`./public/img/${name}${i}.png`))
})


canvas.pngStream().pipe(fs.createWriteStream(`./public/img/${name}.png`))

/*
name=mangja
convert -size 256x256 xc:none out.png
composite -geometry +64+0		$name"1.png" out.png out.png
composite -geometry +128+0	 $name"2.png" out.png out.png
composite -geometry +128+64	$name"3.png" out.png out.png
composite -geometry +128+128 $name"4.png" out.png out.png
composite -geometry +64+128	$name"5.png" out.png out.png
composite -geometry +0+128	 $name"6.png" out.png out.png
composite -geometry +0+64		$name"7.png" out.png out.png
composite -geometry +0+0		 $name"8.png" out.png out.png
xdg-open out.png
*/

