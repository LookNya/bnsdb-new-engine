import React, { Component } from 'react'
import BopaeList from './BopaeList'
import BopaeCircle from './BopaeCircle'
import BopaePieceEditor from './BopaePieceEditor'
//import './styles/bopae-calc.css'

class BopaeCalc extends Component {
	constructor() {
		super()
		this.state = {
			choosenPieces: Array(8).fill(null),
			selectedNum: null,
			selectedBopae: null
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

	// Евенты
	onPieceClick = (num) => {
		this.setState({selectedNum: num})
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

	// Рендер
	render() {
		return (
			<div className="bopae-calc">

				<section>
					<figure>
						<BopaeCircle pieces={this.state.choosenPieces} selectedNum={this.state.selectedNum} onClick={this.onPieceClick}/>
					</figure>
				</section>

				<section>

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
						/>
				</section>

			</div>
		)
	}
}

export default BopaeCalc
