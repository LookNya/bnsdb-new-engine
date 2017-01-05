import React, { PureComponent } from 'react'
import BopaeSets from './BopaeSets'
import './bopae-result.css'

class BopaeResult extends PureComponent {
	getBopaeCounts() {
		let counts = new Map()
		for (let piece of this.props.choosenPieces) {
			if (piece === null) continue
			let newVal = counts.has(piece.bopae) ? counts.get(piece.bopae)+1 : 1
			counts.set(piece.bopae, newVal)
		}
		return counts
	}

	getSumAndGain() {
		let sum = {}
		let gain = {}
		function add(name, val, toGain) {
			sum[name] = (name in sum ? sum[name] : 0) + val
			if (toGain)
				gain[name] = (name in gain ? gain[name] : 0) + val
		}

		for (let num=0; num<8; num++) {
			let piece = this.props.choosenPieces[num]
			if (piece === null) continue
			let pieceConfig = this.props.piecesConfig.getPieceConfig(piece.bopae, num)
			let isSelected = this.props.selectedPieceNum === num
			// base
			for (let statName in piece.stats)
				if (piece.stats[statName].isBase)
					add(statName, piece.stats[statName].max, isSelected)
			// config
			for (let statName of pieceConfig.activeStats)
				add(statName, pieceConfig.stats[statName], isSelected)
			// synth
			add(pieceConfig.synthStat, pieceConfig.get(piece, 'synth'), isSelected)
		}

		// bonuses
		for (let [bopae, count] of this.getBopaeCounts()) {
			if (count < 3) continue
			if (count < 5) count = 5
			if (count < 8) count = 8
			let bonus = bopae.bonuses[count]
			for (let statName in bonus) //eslint-disable-line guard-for-in
				add(statName, bonus[statName], false)
		}
		return [sum, gain]
	}

	mapBopaeCounts(func, ifEmpty) {
		let res = []
		for (let [bopae, count] of this.getBopaeCounts())
			res.push(func(bopae, count))
		return res.length===0 && ifEmpty ? ifEmpty : res
	}

	generateStatTable() {
		let res = []
		let [sums, gains] = this.getSumAndGain()
		let l10nStats = this.props.l10nStats
		let statNames = Object.keys(l10nStats)
		for (let i=0; i<statNames.length; i+=2) {
			let statName_0 = statNames[i]
			let statName_1 = statNames[i+1]

			let l10nName_0 = l10nStats[statName_0]
			let l10nName_1 = l10nStats[statName_1]

			let value_0 = sums[l10nName_0] || 0
			let value_1 = sums[l10nName_1] || 0

			let gain_0 = gains[l10nName_0] || 0
			let gain_1 = gains[l10nName_1] || 0

			res.push(this.generateStatNamesRow([statName_0, statName_1], [l10nName_0, l10nName_1], [value_0, value_1], [gain_0, gain_1]))
			res.push(this.generateStatValuesRow([statName_0, statName_1], [l10nName_0, l10nName_1], [value_0, value_1], [gain_0, gain_1]))
		}
		return res
	}
	generateStatNamesRow(names, l10nNames, values, gains, i){
		return(
			<tr key={names.join('')+'names'} className="stat-names">
				<td>{l10nNames[0]}</td>
				<td className="separator"></td>
				<td className={l10nNames[1] ? "": "hidden"}>{l10nNames[1]}</td>
			</tr>
		)
	}
	generateStatValuesRow(names, l10nNames, values, gains, i){
		return(
			<tr key={names.join('')+'values'} className="stat-values">
				<td>{values[0]} {gains[0]!==0 && <span className={gains[0]<0 ? "minus" : "plus"}>{gains[0]}</span>}</td>
				<td className="separator"></td>
				<td className={l10nNames[1] ? "": "hidden"}>{values[1]} {gains[1]!==0 && <span className={gains[1]<0 ? "minus" : "plus"}>{gains[1]}</span>}</td>
			</tr>
		)
	}

	render() {
		return (
			<div className="bopae-result margin-left">
				<h2>Суммарно</h2>
				<h3>Бонусы сетов</h3>
				{this.mapBopaeCounts((bopae, count) =>
					<div key={bopae.name} className="set-descr-item">
						<h4>{bopae.name}</h4>
						<BopaeSets bopae={bopae} piecesCount={count}/>
					</div>,
					<div className="tip">Нет активных сетов</div>
				)}
				<table className="stats-table">
					<tbody>
						{
							this.generateStatTable()
						}
					</tbody>
				</table>
			</div>
		)
	}
}

export default BopaeResult
