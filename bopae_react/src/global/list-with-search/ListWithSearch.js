import React, { PureComponent } from 'react'
import SearchBar from './SearchBar.js'
import './list-with-search.css'

var rusify = (function() {
	var s = "qй wц eу rк tе yн uг iш oщ pз [х ]ъ "+
					 "aф sы dв fа gп hр jо kл lд ;ж 'э "+
						"zя xч cс vм bи nт mь ,б .ю /."
	var h = {}
	for (var i=0; i<s.length; i+=3) h[s[i]] = s[i+1]

	return function(str) {
		return str.toLowerCase().replace(/[A-z\[\];',\.\/]/g, function(l) {
			return l in h ? h[l] : l
		})
	}
})()

class ListWithSearch extends PureComponent {
	constructor() {
		super()
		this.state = {
			searchFilter: ''
		}
	}

	onSearchChange = (value) => {
		this.setState({searchFilter: value})
	}
	onItemChange = (bopae) => {
		this.props.onItemChange(bopae)
	}

	render() {
		let nameMatches = item => {
			var name = item.name.toLowerCase()
			return  ~name.indexOf( this.state.searchFilter.toLowerCase() ) ||
							~name.indexOf( rusify(this.state.searchFilter) )
		}
		let isAnyOneVisible = this.props.data.some(nameMatches)
		return  <div className="list-with-search">
							<SearchBar
								searchFilter={this.state.searchFilter}
								onSearchChange={this.onSearchChange}
							/>
							<div className="items-wrap">
								{this.props.data.map((bopae, i) =>
									<ListItem
										key={i}
										bopae={bopae}
										selectedPieceNum={this.props.selectedPieceNum}
										onClick={this.onItemChange}
										isSelected={this.props.selectedBopae === bopae}
										className={nameMatches(bopae) ? '' : 'hidden'}
									/>
								)}
								<div className={!isAnyOneVisible ? 'empty-label' : 'hidden'}>
									Нет подходящих элементов
								</div>
							</div>
						</div>
	}
}

class ListItem extends PureComponent {
	onClick = (e) => {
		this.props.onClick(this.props.bopae)
	}
	render() {
		let selectedClass = this.props.isSelected ? 'selected' : ''
		let piece = this.props.bopae.pieces[this.props.selectedPieceNum] || null
		return <div onClick={this.onClick}
						className={this.props.className + ' ' + selectedClass + ' list-item'}>
							<table className="item-table">
								<tbody>
									<tr>
										<td className="icon-cell">
											<BopaeIcon bopae={this.props.bopae} />
										</td>
										<td className="item-name">
											<label>{this.props.bopae.name}</label>
										</td>
										<td>
											{
												piece ? <PieceDetail num={this.props.selectedPieceNum} piece={piece}/> : ''
											}
										</td>
									</tr>
								</tbody>
							</table>
						</div>
	}
}

class BopaeIcon extends PureComponent {
	render() {
		return (
			<div className="icon">
				{[6,7,0,1,2,3,4,5].map( i => <BopaePiece key={i} piece={this.props.bopae.pieces[i]} /> )}
			</div>
		)
	}
}

class BopaePiece extends PureComponent {
	render() {
		return <div
			className={"square piece piece-"+this.props.piece.num}
			style={{backgroundImage: `url(${this.props.piece.getIconPath()})`}}
			></div>
	}
}

class PieceDetail extends PureComponent {
	render() {
		let piece = this.props.piece
		return (
			<div className="piece-detail cf f_r">
				<div className="left f_l">
					<table>
						<tbody>
							{
								piece.mapStats((statName, stat) =>
									<tr className={stat.isBase ? 'main-stat' : ''} key={statName}>
										<td> <span className="dots-after">{statName}</span> </td>
										<td> {stat.min}—{stat.max} </td>
									</tr>
								)
							}
						</tbody>
					</table>
				</div>
				<div className="right f_r">
					{
						this.props.num === null
							? null
							: <BopaePiece num={this.props.num} piece={piece} />
					}
				</div>
			</div>
		)
	}
}


export default ListWithSearch
