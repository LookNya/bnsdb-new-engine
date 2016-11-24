import React, { PureComponent } from 'react'
import './input-range.css'

class InputRange extends PureComponent {
	constructor(){
		super()
		this.trackElem = null
		this.thumbElem = null
	}

	handleChange(e){
		let trackRect = this.trackElem.getBoundingClientRect()
		let thumbRect = this.thumbElem.getBoundingClientRect()
		let clickX = e.clientX - trackRect.left

		// относительная позиция на полске, 0 - слева, 1 - справа
		//let pos = (clickX - thumbRect.width/2*0) / (trackRect.width - thumbRect.width)
		let pos = clickX / trackRect.width

		let newValue = this.props.min + (this.props.max - this.props.min) * pos
		if(newValue < this.props.min) newValue = this.props.min
		if(newValue > this.props.max) newValue = this.props.max
		newValue = parseInt(newValue)
		this.props.onChange(newValue, this.props.codeName)
	}

	setupEvents(){
		window.addEventListener('mousemove', this.onMouseMove)
		window.addEventListener('mouseup', this.onMouseUp)
	}
	clearEvents(){
		window.removeEventListener('mousemove', this.onMouseMove)
		window.removeEventListener('mouseup', this.onMouseUp)
	}

	onMinClick = (e) => {
		this.props.onChange(this.props.min)
	}
	onMaxClick = (e) => {
		this.props.onChange(this.props.max)
	}
	onMouseDown = (e) => {
		e.preventDefault()
		this.setupEvents()
		this.handleChange(e)
	}
	onMouseUp = (e) => {
		e.preventDefault()
		this.clearEvents()
	}
	onMouseMove = (e) => {
		e.preventDefault()
		this.handleChange(e)
	}

	render() {
		let min = this.props.min === null ? 0 : this.props.min
		let max = this.props.max === null ? 10 : this.props.max
		let value = this.props.value === null ? min : this.props.value

		let style = {
			left: (value - min)/(max - min)*100 +'%'
		}
		if(value === min) {
			style.borderTopLeftRadius = '4px'
			style.borderBottomLeftRadius = '4px'
		}
		if(value === max) {
			style.borderTopRightRadius = '4px'
			style.borderBottomRightRadius = '4px'
		}
		return  (
			<div className="input-range">
				<table>
					<tbody>
						<tr>
							<td className="min" onClick={this.onMinClick}>{min}</td>
							<td>
								<div className="input-field"
									onMouseDown={this.onMouseDown}
									>
									<div className="track" ref={(el) => this.trackElem = el}></div>
									<div className="thumb-fix">
										<div className="thumb"
											ref={(el) => this.thumbElem = el}
											style={style}
											data-range-value={value}
										></div>
									</div>
								</div>
							</td>
							<td className="max" onClick={this.onMaxClick}>{max}</td>
						</tr>
					</tbody>
				</table>
			</div>
		)
	}
}
export default InputRange
