import React, { Component } from 'react'
import './styles/bopae-circle.css'

const PART_WIDTH = 128
const HOVER_DELTA_PX = 16

function dir2rad(dir) {
	return (dir-3)/4*Math.PI
}

function dir2deg(dir) {
	return (dir-3)/4*180
}

function centerOffset(dir) {
	let w = PART_WIDTH
	return [[w/2,w], [0,w], [0,w/2], [0,0], [w/2,0], [w,0], [w,w/2], [w,w]][dir-1]
}

class BopaePartMask extends Component {
	render() {
		let [x0, y0] = centerOffset(this.props.dir)
		let transform = `translate(${x0}, ${y0}) rotate(${dir2deg(this.props.dir)} 0 0)`
		return (
			<svg className="bopae-part-mask" style={{width: PART_WIDTH, height: PART_WIDTH}}>
				<polygon points="0,0 124,-51 124,51" transform={transform} />
			</svg>
		)
	}
}

class BopaePart extends Component {
	render() {
		let w = PART_WIDTH, angle = dir2rad(this.props.dir)
		let [x0, y0] = centerOffset(this.props.dir)
		let [hoverDX, hoverDY] = [Math.cos(angle)*HOVER_DELTA_PX, Math.sin(angle)*HOVER_DELTA_PX]
		let transform = `translate(${hoverDX}px,${hoverDY}px)`
		return (
			<div className="bopae-part" style={{left: w-x0, top: w-y0, width: w, height: w}} onClick={this.props.onClick}>
				<BopaePartMask dir={this.props.dir} />
				<img style={{transform}} alt={'bopae-'+this.props.dir} src={process.env.PUBLIC_URL +'/img/'+ this.props.name + this.props.dir +'.png'} />
			</div>
		)
	}
}

class BopaeCircle extends Component {
	render() {
		return (
			<div className="bopae-circle" style={{width: PART_WIDTH*2, height: PART_WIDTH*2}}>
				{[1,2,3,4,5,6,7,8].map((dir) =>
					<BopaePart key={dir} dir={dir} name={this.props.name} onClick={(e) => this.props.onClick(e, dir)} />
				)}
			</div>
		)
	}
}

export default BopaeCircle
