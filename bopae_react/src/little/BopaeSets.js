import React, { Component } from 'react'
import '../styles/little/bopae-sets.css'

class BopaeSets extends Component {
	render() {
		return (
			<div className="set-stats">
				<h3>Бонусы от сета</h3>
				<table>
					<tbody>
						<tr className="enabled">
							<td rowSpan="2">
								<div className="set-icon" data-set-name="3"></div>
							</td>
							<td className="set-name">
								бла
							</td>
							<td className="set-stat">
								180
							</td>
						</tr>
						<tr className="enabled">
							<td className="set-name">
								бла
							</td>
							<td className="set-stat">
								180
							</td>
						</tr>
						<tr className="separator"></tr>
						<tr className="disabled">
							<td rowSpan="2">
								<div className="set-icon" data-set-name="3"></div>
							</td>
							<td className="set-name">
								бла
							</td>
							<td className="set-stat">
								180
							</td>
						</tr>
						<tr className="disabled">
							<td className="set-name">
								бла
							</td>
							<td className="set-stat">
								180
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		)
	}
}

export default BopaeSets
