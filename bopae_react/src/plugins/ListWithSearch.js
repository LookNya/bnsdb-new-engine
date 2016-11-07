import React, { Component } from 'react'
import SearchBar from '../plugins/SearchBar'
import '../styles/plugins/list-with-search.css'

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

class ListWithSearch extends Component {
	constructor() {
		super()
		this.state = {
			searchFilter: ''
		}
	}
	onSearchChange(value) {
		this.setState({searchFilter: value})
	}
	onItemChange(item, e){
		this.props.onItemChange(item)
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
								onSearchChange={this.onSearchChange.bind(this)}
							/>
							<div className="items-wrap">
								{this.props.data.map((item, i) =>
									<ListItem
										key={i}
										bopae={item}
										selectedPieceNum={this.props.selectedPieceNum}
										onClick={this.onItemChange.bind(this, item)}
										isSelected={this.props.selectedItem === item}
										className={nameMatches(item) ? '' : 'hidden'}
									/>
								)}
								<div className={!isAnyOneVisible ? 'empty-label' : 'hidden'}>
									Нет подходящих элементов
								</div>
							</div>
						</div>
	}
}

class ListItem extends Component {
	render() {
		let selectedClass =this.props.isSelected ? 'selected' : ''
		let piece = this.props.bopae.pieces[this.props.selectedPieceNum] || null
		return <div onClick={this.props.onClick}
						className={this.props.className + ' ' + selectedClass + ' list-item'}>
							<table className="item-table">
								<tbody>
									<tr>
										<td className="icon-cell">
											<div className="icon">
												{[6,7,0,1,2,3,4,5].map( i => <BopaePiece key={i} num={i} piece={this.props.bopae.pieces[i]}/>)}
											</div>
										</td>
										<td>
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

class BopaePiece extends Component{
	render() {
		return <div
			className={"square piece piece-"+this.props.num}
			style={{backgroundImage: 'url('+this.props.piece.getIconPath()+')'}}
			></div>
	}
}

class PieceDetail extends Component{
	render() {
		let piece = this.props.piece
		return (
			<div className="piece-detail cf f_r">
				<div className="left f_l">
					<table>
						<tbody>
							{
								piece.forEachStat((statName, stat) =>
									<tr className={stat.isBase ? 'main-stat' : ''} key={statName}>
										<td> {statName} </td>
										<td> {stat.min} - {stat.max} </td>
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
