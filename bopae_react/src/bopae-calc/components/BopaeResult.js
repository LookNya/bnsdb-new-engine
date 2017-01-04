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

	getStatGain(statName) {
		let num = this.props.selectedPieceNum
		if (num === null) return 0
		let piece = this.props.choosenPieces[num]
		if (piece === null) return 0
		let config = this.props.piecesConfig.getPieceConfig(piece.bopae, num)
		return config.getWithSynth(piece, statName)
	}

	mapStatsSum(func) {
		let res = []
		let sum = this.props.piecesConfig.getStatsSum()
		for (let statName in this.props.l10nStats) { //eslint-disable-line guard-for-in
			let l10nName = this.props.l10nStats[statName]
			let value = sum[l10nName] || 0
			let gain = this.getStatGain(l10nName)
			res.push(func(statName, l10nName, value, gain))
		}
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
						{this.mapStatsSum((name, l10nName, value, gain) =>
							<tr key={name} className="stat-values">
								<td>{l10nName}</td>
								<td>{value} {gain!==0 && <span className={gain<0 ? "minus" : "plus"}>{gain}</span>}</td>
							</tr>
						)}
					</tbody>
				</table>
			</div>
		)
	}
}

export default BopaeResult
