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
		return <div onClick={this.props.onClick}
						className={this.props.className + ' ' + selectedClass + ' list-item'}>
							<table className="item-table">
								<tbody>
									<tr>
										<td className="icon-cell">
											<div className="icon">
												{[7,8,1,2,3,4,5,6].map( i => <BopaePiece key={i} num={i} bopae={this.props.bopae}/>)}
											</div>
										</td>
										<td>
											<label>{this.props.bopae.name}</label>
										</td>
										<td>
											<PieceDetail num={1} bopae={this.props.bopae}/>//TODO прокинуть номер куска
										</td>
									</tr>
								</tbody>
							</table>
						</div>
	}
}
class BopaePiece extends Component{
	render() {
		let piece = this.props.bopae.pieces[this.props.num-1]
		return <div
			className={"square piece piece-"+this.props.num}
			style={{backgroundImage: 'url('+piece.getIconPath()+')'}}
			></div>
	}
}
class PieceDetail extends Component{
	render() {
		let piece = this.props.bopae.pieces[this.props.num]
		return (
			<div className="piece-detail cf f_r">
				<div className="left f_l">
					<table>
						<tbody>
							{
								Object.keys(piece.stats).forEach(statName =>
									<tr className={piece.stats[statName].isBase === true ? 'main-stat' : ''} key={statName}>
										<td> {statName} </td>
										<td> {piece.stats[statName].min} - {piece.stats[statName].max} </td>
									</tr>
								)
							}
						</tbody>
					</table>
				</div>
				<div className="right f_r">
					<BopaePiece num={this.props.num} bopae={this.props.bopae} />
				</div>
			</div>
		)
	}
}


export default ListWithSearch
