import React, { PureComponent } from 'react'
import './bopae-piece-editor.css'

import BopaeSets from '../../global/bopae-sets/BopaeSets'
import InputRange from '../../global/input-range/InputRange'

class BopaePieceEditor extends PureComponent {
	constructor() {
		super()
		this.state = {}
	}
	getPieceConfigFor(statName) {
		let piece = this.props.selectedBopae.pieces[this.props.selectedPieceNum]
		let piceMax = 0
		if(statName !== 'synth'){
			piceMax = piece.stats[statName].max
		} else {
			piceMax = piece.synthMax
		}
		return statName in this.props.pieceConfig ? this.props.pieceConfig[statName] : piceMax
	}
	onRangeChange(value, statName) {
		this.props.onPieceConfigChange(statName, value)
	}
	render() {
		if(this.props.selectedBopae && this.props.selectedPieceNum !== null){
			let piece = this.props.selectedBopae.pieces[this.props.selectedPieceNum]
			//если выбран кусок, показываем его редактор
			return (
				<div className="bopae-piece-editor">
					<h2>{this.props.selectedBopae.name}#{this.props.selectedPieceNum+1}</h2>
					<h3>Бонусы от сета</h3>
					<BopaeSets bopae={this.props.selectedBopae} piecesCount={this.props.selectedBopaePiecesCount}/>
					{
						piece.mapStats((statName, stat) =>
							{
								if(stat.isBase) return(
									<div className="lpair" key={this.props.selectedBopae.name+statName}>
										<label>{statName}</label>
										<label>{stat.min}—{stat.max}</label>
									</div>
								)
							}
						)
					}
					{
						piece.mapStats((statName, stat) =>
							{
								if(!stat.isBase)
									return <StatCustomizer
											key={statName}
											statName={statName}
											stat={stat}
											value={this.getPieceConfigFor(statName)}
											onRangeChange={this.onRangeChange.bind(this)}
										/>
							}
						)
					}
					<div className="stat-cust-wrap">
						<label>Заточка ({this.getPieceConfigFor('synth')})</label>
						<InputRange
							min={0}
							max={piece.synthMax}
							value={this.getPieceConfigFor('synth')}
							onChange={this.onRangeChange.bind(this)}
							codeName={'synth'}
						/>
					</div>

					<div className="bottom-controls">
						<button className="togglable">Использовать эту скрижаль везде</button>
						<button className="togglable">Использовать эту скрижаль на свободных кусках</button>
					</div>
				</div>
			)
		} else if(this.props.selectedBopae){
			//если выбрана бопая, показываем предложение замостить весь блин ею
			return (
				<div className="bopae-piece-editor">
					<h2>Равнины изобилия 45 #3</h2>
				</div>
			)
		} else {
			//если ничего не выбрано, показываем предложение выбрать
			return (
				<div className="bopae-piece-editor">
					<h2>Равнины изобилия 45 #3</h2>
				</div>
			)
		}
	}
}

class StatCustomizer extends PureComponent {
	render() {
		return (
			<div className="stat-cust-wrap">
				<label>{this.props.statName}</label>
					<InputRange
						min={this.props.stat.min}
						max={this.props.stat.max}
						value={this.props.value}
						onChange={this.props.onRangeChange.bind(this)}
						codeName={this.props.statName}
					/>
			</div>
		)
	}
}

export default BopaePieceEditor
