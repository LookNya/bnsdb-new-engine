import React, { Component } from 'react'
import './styles/bopae-circle3.css'
import bgImg from './img/bopae_circle_bg.png'

const PART_WIDTH = 128
const HOVER_DELTA_PX = 16

function num2rad(num) {
	return (num-2)/4*Math.PI
}

function centerOffset(num) {
	let w = PART_WIDTH
	return [[w/2,w], [0,w], [0,w/2], [0,0], [w/2,0], [w,0], [w,w/2], [w,w]][num]
}

class BopaePart extends Component {
	points(num) {
		let w = PART_WIDTH, da = Math.PI/8, dw = 1.05
		let angle = num2rad(num)
		let [x0, y0] = centerOffset(num)
		x0 -= 0.5; y0 -= 0.5
		let [x1, y1] = [x0+Math.cos(angle-da)*w*dw+0.5, y0+Math.sin(angle-da)*w*dw+0.5]
		let [x2, y2] = [x0+Math.cos(angle+da)*w*dw+0.5, y0+Math.sin(angle+da)*w*dw+0.5]
		return `${x0},${y0} ${x1},${y1} ${x2},${y2}`
	}
	render() {
		let w = PART_WIDTH
		let angle = num2rad(this.props.num)
		let [x0, y0] = centerOffset(this.props.num)
		let [hoverDX, hoverDY] = [Math.cos(angle)*HOVER_DELTA_PX+0.5|0, Math.sin(angle)*HOVER_DELTA_PX+0.5|0]
		let transform = `translate(${hoverDX}px, ${hoverDY}px)`
		let id = `bopae-pattern-${Math.random()}-${this.props.num}`
		return (
			<svg className={"bopae-piece"+(this.props.icon ? "" : " empty")} width={w} height={w} style={{left: w-x0, top: w-y0, transform}}>
				<pattern id={id} x={x0-w} y={y0-w} patternUnits="userSpaceOnUse" width="256" height="256">
					<image xlinkHref={this.props.icon || bgImg} width="256" height="256" />
				</pattern>
				<polygon points={this.points(this.props.num)} fill={'url(#'+id+')'} onClick={this.props.onClick} />
			</svg>
		)
	}
}

class BopaeCircle2 extends Component {
	render() {
		return (
			<div className="bopae-circle3" style={{width: PART_WIDTH*2, height: PART_WIDTH*2}}>
				<img alt="background" className="bopae-bg-image" src={bgImg} />
				{this.props.pieces.map((piece, num) =>
					<BopaePart key={num} num={num} icon={piece && piece.getFullIconPath()} onClick={(e) => this.props.onClick(num)} />
				)}
			</div>
		)
	}
}

export default BopaeCircle2
