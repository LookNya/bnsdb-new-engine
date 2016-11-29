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
		return this.props.pieceConfig.get(piece, statName)
	}

	onRangeChange = (value, statName) => {
		this.props.onPieceConfigChange(statName, value)
	}

	render() {
		if(this.props.selectedBopae && this.props.selectedPieceNum !== null){
			let piece = this.props.selectedBopae.pieces[this.props.selectedPieceNum]
			//если выбран кусок, показываем его редактор
			return (
				<div className="bopae-piece-editor margin-left">
					<h2>{this.props.selectedBopae.name}#{this.props.selectedPieceNum+1}</h2>
					<h3>Бонусы от сета</h3>
					<BopaeSets bopae={this.props.selectedBopae} piecesCount={this.props.selectedBopaePiecesCount}/>
					<table>
						<tbody>
							<tr className="stat-cust-wrap title">
								<td colSpan={2}>
									Основные статы
								</td>
							</tr>
							{
								piece.mapStats((statName, stat) =>
									stat.isBase &&
										<StatCustomizer
											key={statName}
											statName={statName}
											stat={stat}
											value={this.getPieceConfigFor(statName)}
											onRangeChange={this.onRangeChange}
										/>
								)
							}
							<tr className="stat-cust-wrap title">
								<td colSpan={2}>
									Дополнительные статы <span>выберите два</span> {/*TODO менять подсказку в зависимости от количества выбранного*/}
								</td>
							</tr>
							{
								piece.mapStats((statName, stat) =>
									!stat.isBase &&
										<StatCustomizer
											key={statName}
											statName={statName}
											stat={stat}
											value={this.getPieceConfigFor(statName)}
											isActive={this.props.pieceConfig.isActive(statName)}
											onRangeChange={this.onRangeChange}
										/>
								)
							}
							<tr className="stat-cust-wrap">
								<td>
									<label>Заточка{this.props.pieceConfig.isActive('synth') ? '(a)' : ''}</label>
								</td>
								<td>
									<InputRange
										min={0}
										max={piece.synthMax}
										value={this.getPieceConfigFor('synth')}
										onChange={this.onRangeChange}
										codeName={'synth'}
									/>
								</td>
							</tr>
						</tbody>
					</table>

					<div className="bottom-controls">
						<button className="togglable">Использовать эту скрижаль везде</button>
						<button className="togglable">Использовать эту скрижаль на свободных кусках</button>
					</div>
				</div>
			)
		} else if(this.props.selectedBopae){
			//если выбрана бопая, показываем предложение замостить весь блин ею
			return (
				<div className="bopae-piece-editor margin-left">
					<h2>Равнины изобилия 45 #3</h2>
				</div>
			)
		} else {
			//если ничего не выбрано, показываем предложение выбрать
			return (
				<div className="bopae-piece-editor margin-left">
					<h2>Равнины изобилия 45 #3</h2>
				</div>
			)
		}
	}
}

class StatCustomizer extends PureComponent {
	render() {
		if(this.props.stat.isBase){
			return (
				<tr className="stat-cust-wrap">
					<td>
						<label>{this.props.statName}</label>
					</td>
					<td>
						{this.props.stat.min}—{this.props.stat.max}
					</td>
				</tr>
			)
		} else {
			return (
				<tr className="stat-cust-wrap">
					<td>
						<label>{this.props.statName}{this.props.isActive ? '(a)' : ''}</label>
					</td>
					<td>
						<InputRange
							min={this.props.stat.min}
							max={this.props.stat.max}
							value={this.props.value}
							onChange={this.props.onRangeChange.bind(this)}
							codeName={this.props.statName}
						/>
					</td>
				</tr>
			)
		}
	}
}

export default BopaePieceEditor
