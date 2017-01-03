import React, { PureComponent } from 'react'
import BopaeSets from './BopaeSets'
import './bopae-result.css'

class BopaeResult extends PureComponent {
	mapBopaeCounts(func) {
		let res = []
		let counts = new Map()
		for (let piece of this.props.choosenPieces) {
			if (piece === null) continue
			let newVal = counts.has(piece.bopae) ? counts.get(piece.bopae)+1 : 1
			counts.set(piece.bopae, newVal)
		}
		for (let [bopae, count] of counts) {
			if (count < 3) continue
			if (count < 5) count = 5
			if (count < 8) count = 8
			res.push(func(bopae, count))
		}
		return res
	}

	mapStatsSum(func) {
		//TODO: double claculation, use selector
		//TODO: move to BopaesConfig
		let res = []
		let sum = {}
		for (let bopaeName in this.props.piecesConfig.bopaesConfig) { //eslint-disable-line guard-for-in
			let piecesConfig = this.props.piecesConfig.bopaesConfig[bopaeName]
			for (let num in piecesConfig) { //eslint-disable-line guard-for-in
				let pieceConfig = piecesConfig[num]
				for (let statName of pieceConfig.activeStats) {
					let statValue = pieceConfig.stats[statName]
					if (!(statName in sum)) sum[statName] = 0
					sum[statName] += statValue
				}
			}
		}
		for (let statName in sum) //eslint-disable-line guard-for-in
			res.push(func(statName, sum[statName]))
		return res
	}

	render() {
		return (
			<div className="bopae-result margin-left">
				<h2>Суммарно</h2>
				<h3>Бонусы сетов</h3>
				{this.mapBopaeCounts((bopae, count) =>
					<div key={bopae.name}>
						{bopae.name}:
						<BopaeSets bopae={bopae} piecesCount={count}/>
					</div>
				)}
				<div className="tip">Нет активных сетов</div>
				<table>
					<tbody>
					<tr className="stat-names">
						{this.mapStatsSum((name, value) => <td key={name}>{name}</td>)}
					</tr>
					<tr className="stat-values">
						{this.mapStatsSum((name, value) => <td key={name}>{value} <span className="minus">120</span></td>)}
					</tr>
					</tbody>
				</table>
			</div>
		)
	}
}

export default BopaeResult
