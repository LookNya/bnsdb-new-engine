import React, { Component } from 'react'
import BopaeList from './bopae-list/BopaeList'
import BopaeCircle from './bopae-circle/BopaeCircle'
import BopaePieceEditor from './bopae-piece-editor/BopaePieceEditor'
//import './styles/bopae-calc.css'
import bopaeDB from '../bopae.json'
import { BopaeDBConv } from '../bopae.js'


class BopaeCalc extends Component {
	constructor() {
		super()
		this.state = {
			bopaes: new BopaeDBConv('ru', bopaeDB.l10n).convert(bopaeDB.bopaes),
			choosenPieceBopaeIds: Array(8).fill(null),
			selectedPieceNum: null,
			selectedBopaeId: null
		}
	}

	// Полезности
	countPiecesOf(bopae) {
		if (bopae === null) return 0
		let count = 0
		for (let i=0; i<8; i++) {
			if (this.state.choosenPieceBopaeIds[i] === bopae.id)
				count++
		}
		return count
	}
	getSelectedBopae() {
		if (this.state.selectedBopaeId === null) return null
		return this.state.bopaes[this.state.selectedBopaeId]
	}
	getChoosenPieces() {
		return this.state.choosenPieceBopaeIds.map((id, num) => id === null ? null : this.state.bopaes[id].pieces[num])
	}

	// Модификаторы состояния
	choosePiece(num, bopae) {
		let ids = this.state.choosenPieceBopaeIds.slice()
		ids[num] = bopae.id
		this.setState({choosenPieceBopaeIds: ids})
	}
	chooseAllPiecesOf(bopae) {
		this.setState({choosenPieceBopaeIds: Array(8).fill(bopae.id)})
	}

	// Евенты
	onPieceClick = (num) => {
		let bopaeId = this.state.choosenPieceBopaeIds[num]
		let newState = {selectedPieceNum: num}
		if (bopaeId !== null) newState.selectedBopaeId = bopaeId
		this.setState(newState)
	}
	onSelectedBopaeChange = (bopae) => {
		if (this.state.selectedBopaeId === bopae.id) {
			if (this.state.selectedPieceNum === null) {
				this.chooseAllPiecesOf(bopae)
			} else {
				this.choosePiece(this.state.selectedPieceNum, bopae)
			}
		} else {
			this.setState({selectedBopaeId: bopae.id})
		}
	}
	onPieceConfigChange = (statName, value) => {
		let num = this.state.selectedPieceNum
		let bopaeId = this.state.choosenPieceBopaeIds[num]
		let bopaes = this.state.bopaes.slice()
		bopaes[bopaeId] = bopaes[bopaeId].updatePieceConfig(num, statName, value)
		this.setState({bopaes})
	}

	// Рендер
	render() {
		return (
			<div className="bopae-calc">

				<section>
					<figure>
						<BopaeCircle pieces={this.getChoosenPieces()} selectedNum={this.state.selectedPieceNum} onClick={this.onPieceClick}/>
					</figure>
				</section>

				<section>

				</section>

				<section>
					<BopaeList
						db={this.state.bopaes}
						selectedPieceNum={this.state.selectedPieceNum}
						selectedBopae={this.getSelectedBopae()}
						onBopaeChange={this.onSelectedBopaeChange}
						/>
				</section>

				<section>
					<BopaePieceEditor
						selectedPieceNum={this.state.selectedPieceNum}
						selectedBopae={this.getSelectedBopae()}
						selectedBopaePiecesCount={this.countPiecesOf(this.getSelectedBopae())}
						onPieceConfigChange={this.onPieceConfigChange}
						/>
				</section>

			</div>
		)
	}
}

export default BopaeCalc