import React, { PureComponent } from 'react'
import BopaeList from './bopae-list/BopaeList'
import BopaeResult from './bopae-result/BopaeResult'
import BopaeCircle from './bopae-circle/BopaeCircle'
import BopaePieceEditor from './bopae-piece-editor/BopaePieceEditor'
import { BopaesConfig, BopaePieceConfig } from '../bopae.js'

import './bopae-calc.css'

class BopaeCalc extends PureComponent {
	constructor() {
		super()
		this.bopaeCalcWrap = null
		this.state = {
			choosenPieces: Array(8).fill(null),
			piecesConfig: new BopaesConfig(),
			selectedNum: null,
			selectedBopae: null,
		}
	}

	// Полезности
	countPiecesOf(bopae) {
		if (bopae === null) return 0
		let count = 0
		for (let i=0; i<8; i++) {
			if (this.state.choosenPieces[i] === bopae.pieces[i])
				count++
		}
		return count
	}
	findBopaeWith(piece) {
		return this.props.bopaes.find(bopae => bopae.pieces[piece.num] === piece)
	}
	getPieceConfig(num) {
		if (this.state.selectedBopae === null) return BopaePieceConfig.default
		return this.state.piecesConfig.getPieceConfig(this.state.selectedBopae, num)
	}

	// Модификаторы состояния
	choosePiece(num, bopae) {
		let pieces = this.state.choosenPieces.slice()
		pieces[num] = bopae.pieces[num]
		this.setState({choosenPieces: pieces})
	}
	chooseAllPiecesOf(bopae) {
		let pieces = bopae.pieces.slice()
		this.setState({choosenPieces: pieces})
	}
	updatePieceConfig(bopae, num, statName, statValue) {
		this.setState({
			piecesConfig: this.state.piecesConfig.updatePieceConfig(bopae, num, statName, statValue)
		})
	}

	// Евенты
	onPieceClick = (num) => {
		let piece = this.state.choosenPieces[num]
		let bopae = piece && this.findBopaeWith(piece)
		let newState = {selectedNum: num}
		if (bopae) newState.selectedBopae = bopae
		this.setState(newState)
	}
	onSelectedBopaeChange = (bopae) => {
		if (this.state.selectedBopae === bopae) {
			if (this.state.selectedNum === null) {
				this.chooseAllPiecesOf(bopae)
			} else {
				this.choosePiece(this.state.selectedNum, bopae)
			}
		} else {
			this.setState({selectedBopae: bopae})
		}
	}
	onPieceConfigChange = (statName, value) => {
		this.updatePieceConfig(this.state.selectedBopae, this.state.selectedNum, statName, value)
	}

	// Рендер
	render() {
		return (
			<div className="bopae-calc" ref={(elem) => {this.bopaeCalcWrap = elem}} style={{transform: 'translateX(-' + 100*this.props.selectedPage + '%)'}}>

				<section>
					<figure>
						<BopaeCircle 
							pieces={this.state.choosenPieces} 
							selectedNum={this.state.selectedNum} 
							onClick={this.onPieceClick}
							/>
					</figure>
				</section>

				<section>
					<BopaeResult/>
				</section>

				<section>
					<BopaeList
						db={this.props.bopaes}
						selectedPieceNum={this.state.selectedNum}
						onBopaeChange={this.onSelectedBopaeChange}
						selectedBopae={this.state.selectedBopae}
						/>
				</section>

				<section>
					<BopaePieceEditor
						selectedPieceNum={this.state.selectedNum}
						selectedBopae={this.state.selectedBopae}
						selectedBopaePiecesCount={this.countPiecesOf(this.state.selectedBopae)}
						pieceConfig={this.getPieceConfig(this.state.selectedNum)}
						onPieceConfigChange={this.onPieceConfigChange}
						/>
				</section>

			</div>
		)
	}
}

export default BopaeCalc
