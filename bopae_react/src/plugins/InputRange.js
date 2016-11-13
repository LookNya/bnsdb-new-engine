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
	componentDidMount(){
		window.addEventListener('mousemove', this.onMouseMove.bind(this))
		window.addEventListener('mouseup', this.onMouseUp.bind(this))
	}
	handleChange(e){
		var target = this.state.target
		var clickX = e.pageX - target.getBoundingClientRect().left
		var elWidth = target.offsetWidth
		var thumbW = 10//ширина ползунка
		var delta = clickX/((elWidth-thumbW)/100)/100
		var newValue
		if(this.props.min === 0){
			newValue = delta * 100
		} else {
			newValue = this.props.min + this.props.min*delta
		}
		newValue = parseInt(newValue)
		if(newValue < this.props.min) newValue = this.props.min
		if(newValue > this.props.max) newValue = this.props.max
		this.props.onChange(newValue)
	}
	onMouseDown(e){
		e.preventDefault()
		var target = e.target
		if(e.target.classList.contains('thumb')) target=target.parentElement
		this.setState({dragged:true})
		this.setState({target:target})
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
	render() {
		let value = this.props.value === null ? 5 :  this.props.value
		let min = this.props.min === null ? 0 : this.props.min
		let max = this.props.max === null ? 10 : this.props.max
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
