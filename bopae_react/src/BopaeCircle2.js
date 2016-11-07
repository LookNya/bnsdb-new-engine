import React, { Component } from 'react'
import './styles/bopae-circle2.css'

const PART_WIDTH = 128
const HOVER_DELTA_PX = 16

function dir2rad(dir) {
	return (dir-3)/4*Math.PI
}

class BopaePart extends Component {
	points(dir) {
		let w = PART_WIDTH, da = Math.PI/8, dw = 1.05
		let angle = dir2rad(dir)
		let [x0, y0] = [w-0.5, w-0.5]
		let [x1, y1] = [x0+Math.cos(angle-da)*w*dw+0.5, y0+Math.sin(angle-da)*w*dw+0.5]
		let [x2, y2] = [x0+Math.cos(angle+da)*w*dw+0.5, y0+Math.sin(angle+da)*w*dw+0.5]
		return `${x0},${y0} ${x1},${y1} ${x2},${y2}`
	}
	render() {
		let angle = dir2rad(this.props.dir)
		let [hoverDX, hoverDY] = [Math.cos(angle)*HOVER_DELTA_PX+0.5|0, Math.sin(angle)*HOVER_DELTA_PX+0.5|0]
		let transform = `translate(${hoverDX}px, ${hoverDY}px)`
		let img_src = `${process.env.PUBLIC_URL}/img/bopae/${this.props.name}.png`
		let id = `bopae-pattern-${this.props.name}-${this.props.dir}`
		return (
			<g transform={`translate(${HOVER_DELTA_PX} ${HOVER_DELTA_PX})`}>
				<pattern id={id} patternUnits="userSpaceOnUse" width="256" height="256">
					<image xlinkHref={img_src} width="256" height="256" />
				</pattern>
				<polygon points={this.points(this.props.dir)} fill={'url(#'+id+')'} stroke={'url(#'+id+')'} style={{transform}} onClick={this.props.onClick} />
			</g>
		)
	}
}

class BopaeCircle2 extends Component {
	render() {
		let w = PART_WIDTH*2 + HOVER_DELTA_PX*2
		let dirs = [1,2,3,4,5,6,7,8]
		return (
			<svg className="bopae-circle2" width={w} height={w}>
				{dirs.map((dir) =>
					<BopaePart key={dir} dir={dir} name={this.props.name} onClick={(e) => this.props.onClick(e, dir)} />
				)}
			</svg>
		)
	}
}

export default BopaeCircle2
