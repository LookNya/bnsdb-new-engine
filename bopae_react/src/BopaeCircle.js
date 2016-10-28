import React, { Component } from 'react'
import './styles/bopae-circle.css'

const PART_WIDTH = 128
const HOVER_DELTA_PX = 16

class BopaePart extends Component {
	dir2angle(dir) {
		return (dir-3)/4*Math.PI
	}
	centerOffset(dir) {
		let w = PART_WIDTH
		return [null, [w/2,w], [0,w], [0,w/2], [0,0], [w/2,0], [w,0], [w,w/2], [w,w]][dir]
	}
	points(dir) {
		let w = PART_WIDTH, da = Math.PI/8, dw = 1.05
		let angle = this.dir2angle(dir)
		let [x0, y0] = this.centerOffset(dir)
		let [x1, y1] = [x0+Math.cos(angle-da)*w*dw+0.5|0, y0+Math.sin(angle-da)*w*dw+0.5|0]
		let [x2, y2] = [x0+Math.cos(angle+da)*w*dw+0.5|0, y0+Math.sin(angle+da)*w*dw+0.5|0]
		return `${x0},${y0} ${x1},${y1} ${x2},${y2}`
	}
	render() {
		let w = PART_WIDTH, angle = this.dir2angle(this.props.dir)
		let [x0, y0] = this.centerOffset(this.props.dir)
		let [hoverDX, hoverDY] = [Math.cos(angle)*HOVER_DELTA_PX, Math.sin(angle)*HOVER_DELTA_PX]
		let transform = `translate(${hoverDX}px,${hoverDY}px)`
		return (
			<svg className="bopae-part" style={{left: w-x0, top: w-y0, width: w, height: w, transform}} onClick={this.props.onClick}>
				<polygon points={this.points(this.props.dir)} />
				<image href={process.env.PUBLIC_URL +'/img/'+ this.props.name + this.props.dir +'.png'} />
			</svg>
		)
	}
}

class BopaeCircle extends Component {
	render() {
		return (
			<div className="bopae-circle" style={{width: PART_WIDTH*2, height: PART_WIDTH*2}}>
				{Array(8).fill(0).map((x,i) =>
					<BopaePart key={i} dir={i+1} name={this.props.name} onClick={(e) => this.props.onClick(e, i+1)} />
				)}
			</div>
		)
	}
}

export default BopaeCircle
