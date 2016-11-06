import React, { Component } from 'react'
import './styles/bopae-circle.css'
import bgImg from './img/bopae_circle_bg.png'

const PART_WIDTH = 128
const HOVER_DELTA_PX = 16

function num2rad(num) {
	return (num-2)/4*Math.PI
}

function num2deg(num) {
	return (num-2)/4*180
}

function centerOffset(num) {
	let w = PART_WIDTH
	return [[w/2,w], [0,w], [0,w/2], [0,0], [w/2,0], [w,0], [w,w/2], [w,w]][num]
}

class BopaePartMask extends Component {
	render() {
		let [x0, y0] = centerOffset(this.props.num)
		let transform = `translate(${x0}, ${y0}) rotate(${num2deg(this.props.num)} 0 0)`
		return (
			<svg className="bopae-part-mask" style={{width: PART_WIDTH, height: PART_WIDTH}}>
				<polygon points="0,0 124,-51 124,51" transform={transform} />
			</svg>
		)
	}
}

class BopaePart extends Component {
	render() {
		let w = PART_WIDTH, angle = num2rad(this.props.num)
		let [x0, y0] = centerOffset(this.props.num)
		let [hoverDX, hoverDY] = [Math.cos(angle)*HOVER_DELTA_PX, Math.sin(angle)*HOVER_DELTA_PX]
		let transform = `translate(${hoverDX}px,${hoverDY}px)`
		let className = `bopae-part${this.props.selected ? ' selected' : ''}`
		return (
			<div className={className} style={{left: w-x0, top: w-y0, width: w, height: w}} onClick={this.props.onClick}>
				<BopaePartMask num={this.props.num} />
				<img style={{transform}} alt={'bopae-'+this.props.num} src={this.props.icon} />
			</div>
		)
	}
}

class BopaeCircle extends Component {
	render() {
		return (
			<div className="bopae-circle" style={{width: PART_WIDTH*2, height: PART_WIDTH*2}}>
				<img alt="background" className="bopae-bg-image" src={bgImg} />
				{this.props.pieces.map((piece, num) =>
					<BopaePart
						key={num}
						num={num}
						icon={piece && piece.getIconPath()}
						selected={this.props.selectedNum === num}
						onClick={(e) => this.props.onClick(num)}
					/>
				)}
			</div>
		)
	}
}

export default BopaeCircle
