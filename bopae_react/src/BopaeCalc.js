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
			selectedNum: null
		}
	}
	onPieceClick = (num) => {
		this.setState({selectedNum: num})
	}
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
					<BopaeList db={this.props.bopaes} selectedPieceNum={this.state.selectedNum}/>
				</section>

				<section>
					<BopaePieceEditor selectedPieceNum={this.state.selectedNum}/>
				</section>

			</div>
		)
	}
}

export default BopaeCalc
