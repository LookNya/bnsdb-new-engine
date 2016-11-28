import React, { PureComponent } from 'react'
import BopaeList from './bopae-list/BopaeList'
import BopaeResult from './bopae-result/BopaeResult'
import BopaeCircle from './bopae-circle/BopaeCircle'
import BopaePieceEditor from './bopae-piece-editor/BopaePieceEditor'

import './bopae-calc.css'

class BopaeCalc extends PureComponent {
	constructor() {
		super()
		this.bopaeCalcWrap = null
		this.state = {
			choosenPieces: Array(8).fill(null),
			piecesConfig: {},
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
		if (this.state.selectedBopae === null) return {}
		let piecesConfig = this.state.piecesConfig[this.state.selectedBopae.name]
		if (!piecesConfig) return {}
		let pieceConfig = piecesConfig[num]
		if (!pieceConfig) return {}
		return pieceConfig
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
		let bopaeConfig = this.state.piecesConfig[bopae.name] || {}
		let pieceConfig = bopaeConfig[num] || {}
		this.setState({
			piecesConfig: {
				...this.state.piecesConfig,
				[bopae.name]: {...bopaeConfig, [num]: {...pieceConfig, [statName]: statValue}}
			}
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
		var page = this.props.selectedPage
		return (
			<div className="bopae-calc" ref={(elem) => {this.bopaeCalcWrap = elem}} style={{transform: 'translateX(-' + 100*this.props.selectedPage + '%)'}}>

				<section className={page === 0 ? 'visible' : ''}>
					<figure>
						<BopaeCircle pieces={this.state.choosenPieces} selectedNum={this.state.selectedNum} onClick={this.onPieceClick}/>
					</figure>
				</section>

				<section className={page === 1 ? 'visible' : ''}>
					<BopaeResult/>
				</section>

				<section className={page === 2 ? 'visible' : ''}>
					<BopaeList
						db={this.props.bopaes}
						selectedPieceNum={this.state.selectedNum}
						onBopaeChange={this.onSelectedBopaeChange}
						selectedBopae={this.state.selectedBopae}
						/>
				</section>

				<section className={page === 3 ? 'visible' : ''}>
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
