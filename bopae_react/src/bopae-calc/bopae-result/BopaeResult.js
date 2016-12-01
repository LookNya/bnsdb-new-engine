import React, { PureComponent } from 'react'
import BopaeSets from '../../global/bopae-sets/BopaeSets'
import './bopae-result.css'

class BopaeResult extends PureComponent {
	// <BopaeSets bopae={this.props.selectedBopae} piecesCount={this.props.selectedBopaePiecesCount}/>
	render(){
		return (
			<div className="bopae-result margin-left">
				<h2>Суммарно</h2>
				<h3>Бонусы сетов</h3>
				<div className="tip">Нет активных сетов</div>
				<table>
					<tr className="stat-names">
						<td>Здоровье</td>
						<td className="separator"></td>
						<td>Защита</td>
					</tr>
					<tr className="stat-values">
						<td>100 <span className="minus">120</span></td>
						<td className="separator"></td>
						<td>100 <span className="plus">120</span></td>
					</tr>
				</table>
			</div>
		)
	}
}

export default BopaeResult
