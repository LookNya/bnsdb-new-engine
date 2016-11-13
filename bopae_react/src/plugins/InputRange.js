import React, { Component } from 'react'
import '../styles/plugins/input-range-reset.css'
import '../styles/plugins/input-range-main.css'

class InputRange extends Component {
	constructor() {
		super()
		this.state = {
			dragged: false,
		}
	}
	handleChange(e){
		var target = e.target
		if(e.target.classList.contains('thumb')) target=target.parentElement
		var clickX = e.pageX - target.getBoundingClientRect().left
		var clientWidth = target.clientWidth
		var thumbW = 10//ширина ползунка
		var delta = clickX/((clientWidth-thumbW)/100)/100
		var newValue
		if(this.props.min === 0){
			newValue = delta * 100
		} else {
			newValue = this.props.min + this.props.min*delta
		}
		this.props.onChange( parseInt(newValue) )
	}
	onMouseDown(e){
		this.setState({dragged:true})
	}
	onMouseUp(e){
		if(this.state.dragged){
			this.setState({dragged:false})
			this.handleChange(e)
		}
	}
	onMouseMove(e){
		if(this.state.dragged)
			this.handleChange(e)
	}
	onMouseLeave(e){
		this.setState({dragged:false})
	}
	render() {
		let value = this.props.value || 5
		let min = this.props.min || 0
		let max = this.props.max || 10
		let style = {
			left: ((value/(this.props.max - this.props.min)/100)*10000) +'%'
		}
		return  (
			<div className="input-range">
				<table>
					<tbody>
						<tr>
							<td className="min">{min}</td>
							<td>
								<div className="input-field"
									onMouseDown={this.onMouseDown.bind(this)}
									onMouseMove={this.onMouseMove.bind(this)}
									onMouseUp={this.onMouseUp.bind(this)}
									onMouseLeave={this.onMouseLeave.bind(this)}
									>
									<div className="track"></div>
									<div className="thumb" data-value={value} style={style}></div>
								</div>
							</td>
							<td className="max">{max}</td>
						</tr>
					</tbody>
				</table>
			</div>
		)
	}
}
export default InputRange
