import React, { Component } from 'react'
import '../styles/plugins/input-range-reset.css'
import '../styles/plugins/input-range-main.css'

class InputRange extends Component {
	render() {
		let value = this.props.value || 5
		let min = this.props.min || 0
		let max = this.props.max || 10
		let step = this.props.step || 1
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
								<div className="value-wrap">
									<div className="value" style={style}>{value}</div>
								</div>
								<input
									type="range"
									min={min} max={max}
									value={value}
									onChange={this.props.onChange}
									step={step}
								/>
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
