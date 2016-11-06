import React, { Component } from 'react'
import './styles/bopae-circle3.css'

const PART_WIDTH = 128
const HOVER_DELTA_PX = 16

function dir2rad(dir) {
	return (dir-2)/4*Math.PI
}

function centerOffset(num) {
	let w = PART_WIDTH
	return [[w/2,w], [0,w], [0,w/2], [0,0], [w/2,0], [w,0], [w,w/2], [w,w]][num]
}

class BopaePart extends Component {
	points(dir) {
		let w = PART_WIDTH, da = Math.PI/8, dw = 1.05
		let angle = dir2rad(dir)
		let [x0, y0] = centerOffset(dir)//[w*0-0.5, w*0-0.5]
		x0 -= 0.5; y0 -= 0.5
		let [x1, y1] = [x0+Math.cos(angle-da)*w*dw+0.5, y0+Math.sin(angle-da)*w*dw+0.5]
		let [x2, y2] = [x0+Math.cos(angle+da)*w*dw+0.5, y0+Math.sin(angle+da)*w*dw+0.5]
		return `${x0},${y0} ${x1},${y1} ${x2},${y2}`
	}
	render() {
		let angle = dir2rad(this.props.dir)
		let [hoverDX, hoverDY] = [Math.cos(angle)*HOVER_DELTA_PX+0.5|0, Math.sin(angle)*HOVER_DELTA_PX+0.5|0]
		let transform = `translate(${hoverDX}px, ${hoverDY}px)`
		let img_src = `${process.env.PUBLIC_URL}/img/${this.props.name}.png`
		let id = `bopae-pattern-3-${this.props.name}-${this.props.dir}`
		//transform={`translate(${HOVER_DELTA_PX} ${HOVER_DELTA_PX})`}
		let [x0, y0] = centerOffset(this.props.dir)
		let w = PART_WIDTH
		return (
			<svg className="bopae-piece" width={w} height={w} style={{left: w-x0, top: w-y0, transform}}>
				<pattern id={id} x={x0-w} y={y0-w} patternUnits="userSpaceOnUse" width="256" height="256">
					<image xlinkHref={img_src} width="256" height="256" />
				</pattern>
				<polygon points={this.points(this.props.dir)} fill={'url(#'+id+')'} onClick={this.props.onClick} />
			</svg>
		)
	}
}

class BopaeCircle2 extends Component {
	render() {
		let dirs = [0,1,2,3,4,5,6,7]
		return (
			<div className="bopae-circle3" style={{width: PART_WIDTH*2, height: PART_WIDTH*2}}>
				{dirs.map((dir) =>
					<BopaePart key={dir} dir={dir} name={this.props.name} onClick={(e) => this.props.onClick(e, dir)} />
				)}
			</div>
		)
	}
}

export default BopaeCircle2
