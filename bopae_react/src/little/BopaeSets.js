import React, { Component } from 'react'
import '../styles/little/bopae-sets.css'

class BopaeSets extends Component {
	render() {
		let bopae = this.props.bopae
		let piecesCount = this.props.piecesCount
		let tbody = []
		let count = 0
		for(var group in bopae.bonuses){
			let stats = bopae.bonuses[group]
			count = 0
			for(var stat in stats){
				let statsLength = Object.keys(stats).length
				tbody.push(
					<tr className={piecesCount >= +group ? "enabled" : "disabled"} key={group+stat}>
						{
							count===0 ?
							<td rowSpan={statsLength}>
									<div className="set-icon" data-group={group}></div>
							</td>
							: null
						}
						<td className="set-name">
							{stat}
						</td>
						<td className="set-stat">
							{stats[stat]}
						</td>
					</tr>
				)
				count ++
				if(count === statsLength)tbody.push(<tr className="separator" key={group+stat+'sep'}></tr>)
			}
		}
		return (
			<div className="set-stats">
				<table>
					<tbody>
						{tbody}
					</tbody>
				</table>
			</div>
		)
	}
}

export default BopaeSets
