import React, { PureComponent } from 'react'
import './bopae-sets.css'

class BopaeSets extends PureComponent {
	render() {
		let bopae = this.props.bopae
		let piecesCount = this.props.piecesCount
		let tbody = []
		let count = 0
		for(var group in bopae.bonuses){ //eslint-disable-line guard-for-in
			let stats = bopae.bonuses[group]
			count = 0
			for(var stat in stats){ //eslint-disable-line guard-for-in
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
						<td className="set-stat">
							<span className="dots-after">{stats[stat]}</span>
						</td>
						<td className="set-name">
							{stat.toLowerCase()}
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
