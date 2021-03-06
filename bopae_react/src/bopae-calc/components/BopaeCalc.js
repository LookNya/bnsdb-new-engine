import React, { PureComponent } from 'react'

import BopaeList from './BopaeList'
import BopaeResult from './BopaeResult'
import BopaeCircle from './BopaeCircle'
import BopaePieceEditor from './BopaePieceEditor'
import { BopaePieceConfig } from '../lib/bopae.js'

import './bopae-calc.css'


class BopaeCalc extends PureComponent {
	// Полезности
	countPiecesOf(bopae) {
		if (bopae === null) return 0
		let count = 0
		for (let i=0; i<8; i++) {
			if (this.props.choosenPieces[i] === bopae.pieces[i])
				count++
		}
		return count
	}
	findBopaeWith(piece) {
		return this.props.bopaes.find(bopae => bopae.pieces[piece.num] === piece)
	}
	getPieceConfig(num) {
		if (this.props.selectedBopae === null) return BopaePieceConfig.default
		return this.props.piecesConfig.getPieceConfig(this.props.selectedBopae, num)
	}

	// Евенты
	onPieceClick = (num) => {
		let piece = this.props.choosenPieces[num]
		let bopae = (piece && this.findBopaeWith(piece)) || null
		this.props.onBopaeSelect(bopae)
		this.props.onPieceNumSelect(num)
	}
	onSelectedBopaeChange = (bopae) => {
		this.props.onBopaeSelect(bopae)
		if (this.props.selectedNum !== null)
			this.props.onPiecesChoice(bopae, [this.props.selectedNum])
	}
	onBopaeForCurPieceClear = (num) => {
		this.props.onPiecesChoice(null, [num])
	}
	onCurBopaeForEmptyChoice = () => {
		let nums = []
		for (let i=0; i<8; i++)
			if (this.props.choosenPieces[i] === null)
				nums.push(i)
		this.props.onPiecesChoice(this.props.selectedBopae, nums)
	}
	onCurBopaeForAllChoice = () => {
		this.props.onPiecesChoice(this.props.selectedBopae, [0, 1, 2, 3, 4, 5, 6, 7])
	}
	onPieceConfigChange = (statName, value) => {
		this.props.onPieceConfigChange(this.props.selectedBopae, this.props.selectedNum, statName, value)
	}

	// Рендер
	render() {
		return (
			<div className="bopae-calc" style={{transform: 'translateX(-' + 100*this.props.selectedPage + '%)'}}>

				<section>
					<figure>
						<BopaeCircle
							pieces={this.props.choosenPieces}
							selectedNum={this.props.selectedNum}
							onClick={this.onPieceClick}
							onContextMenu={this.onBopaeForCurPieceClear}
						/>
					</figure>
				</section>

				<section>
					<BopaeResult
						l10nStats={this.props.l10n.stats}
						bopaes={this.props.bopaes}
						choosenPieces={this.props.choosenPieces}
						piecesConfig={this.props.piecesConfig}
						selectedPieceNum={this.props.selectedNum} />
				</section>

				<section>
					<BopaeList
						db={this.props.bopaes}
						selectedBopae={this.props.selectedBopae}
						selectedPieceNum={this.props.selectedNum}
						onBopaeChange={this.onSelectedBopaeChange}
					/>
				</section>

				<section>
					<BopaePieceEditor
						l10nStats={this.props.l10n.stats}
						selectedPieceNum={this.props.selectedNum}
						selectedBopae={this.props.selectedBopae}
						selectedBopaePiecesCount={this.countPiecesOf(this.props.selectedBopae)}
						pieceConfig={this.getPieceConfig(this.props.selectedNum)}
						onPieceConfigChange={this.onPieceConfigChange}
						onCurBopaeForEmptyChoice={this.onCurBopaeForEmptyChoice}
						onCurBopaeForAllChoice={this.onCurBopaeForAllChoice}
					/>
				</section>

			</div>
		)
	}
}

export default BopaeCalc
