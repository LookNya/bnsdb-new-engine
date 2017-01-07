import React, { PureComponent } from 'react'
import './bopae-piece-editor.css'

import BopaeSets from './BopaeSets'
import InputRange from '../../global/input-range/InputRange'
import formatNum from '../../utils/beautiful-long-numbers.js'

class BopaePieceEditor extends PureComponent {
	getPieceConfigFor(statName) {
		let piece = this.props.selectedBopae.pieces[this.props.selectedPieceNum]
		return this.props.pieceConfig.get(piece, statName)
	}

	onRangeChange = (value, statName) => {
		this.props.onPieceConfigChange(statName, value)
	}
	onSynthStatChange = (statName) => {
		this.props.onPieceConfigChange('synthStat', statName)
	}
	onCurBopaeForEmptyChoice = () => {
		this.props.onCurBopaeForEmptyChoice()
	}
	onCurBopaeForAllChoice = () => {
		this.props.onCurBopaeForAllChoice()
	}

	render() {
		if(this.props.selectedBopae && this.props.selectedPieceNum !== null){
			let piece = this.props.selectedBopae.pieces[this.props.selectedPieceNum]
			//если выбран кусок, показываем его редактор
			return (
				<div className="bopae-piece-editor margin-left flexed">
					<div className="head-wrap">
						<h2>{this.props.selectedBopae.name}#{this.props.selectedPieceNum+1}</h2>
						<h3>Бонусы от сета</h3>
						<BopaeSets bopae={this.props.selectedBopae} piecesCount={this.props.selectedBopaePiecesCount}/>
					</div>
					<div className="stats-wrap webkit-scroll-fix">
						<table>
							<tbody>
								<tr className="stat-cust-wrap title">
									<td colSpan={3}>
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
									<td colSpan={3}>
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
								<StatCustomizer
									statName="synth"
									stat={piece.synth}
									l10nStats={this.props.l10nStats}
									synthStat={this.props.pieceConfig.synthStat}
									value={this.getPieceConfigFor('synth')}
									isActive={this.props.pieceConfig.isActive('synth')}
									onRangeChange={this.onRangeChange}
									onSynthStatChange={this.onSynthStatChange}
								/>
							</tbody>
						</table>
					</div>
					<div className="controls-wrap">
						<button className="togglable" onClick={this.onCurBopaeForEmptyChoice}>
							Использовать эту скрижаль на свободных кусках
						</button>
						<button className="togglable" onClick={this.onCurBopaeForAllChoice}>
							Использовать эту скрижаль везде
						</button>
					</div>
				</div>
			)
		} else if(this.props.selectedBopae){
			//если выбрана бопая, показываем предложение замостить весь блин ею
			return (
				<div className="bopae-piece-editor margin-left one-label">
					<div className="tips-wrap">
						<button className="togglable huge" onClick={this.onCurBopaeForAllChoice}>
							Заполнить всю триграмму кусочками {this.props.selectedBopae.name}
						</button>
						</div>
				</div>
			)
		} else {
			//если ничего не выбрано, показываем предложение выбрать
			return (
				<div className="bopae-piece-editor margin-left one-label">
					<div className="tips-wrap">
						<p>Выберите нужный кусочек скрижали чтобы преступить к редактированию.</p>
						<p>Выберите скрижаль из списка, чтобы заполнить ее кусочками весь калькулятор.</p>
						<p></p>
					</div>
				</div>
			)
		}
	}
}

class StatCustomizer extends PureComponent {
	onSynthStatChange = (e) => {
		this.props.onSynthStatChange(e.target.value)
	}

	render() {
		let className = 'stat-cust-wrap '
		if(!this.props.isActive && !this.props.stat.isBase) className += 'inactive'

		if(this.props.stat.isBase){
			return (
				<tr className={className}>
					<td>
						<label>{this.props.statName}</label>
					</td>
					<td colSpan={2}>
						{formatNum(this.props.stat.min)} &ndash; {formatNum(this.props.stat.max)}
					</td>
				</tr>
			)
		} else if(this.props.statName!=='synth'){
			return (
				<tr className={className}>
					<td>
						<label>{this.props.statName}</label>
					</td>
					<td colSpan={2}>
						<InputRange
							min={this.props.stat.min}
							max={this.props.stat.max}
							value={this.props.value}
							onChange={this.props.onRangeChange}
							codeName={this.props.statName}
						/>
					</td>
				</tr>
			)
		} else {
			return (
				<tr className="stat-cust-wrap synth">
					<td>
						<label>{this.props.statName}</label>
					</td>
					<td className="select-cell">
						<select value={this.props.synthStat} onChange={this.onSynthStatChange}>
							{Object.keys(this.props.l10nStats).map(name =>
								<option key={name} value={this.props.l10nStats[name]}>{this.props.l10nStats[name]}</option>
							)}
						</select>
					</td>
					<td>
						<InputRange
							min={this.props.stat.min}
							max={this.props.stat.max}
							value={this.props.value}
							onChange={this.props.onRangeChange}
							codeName={this.props.statName}
						/>
					</td>
				</tr>
			)
		}
	}
}

export default BopaePieceEditor
