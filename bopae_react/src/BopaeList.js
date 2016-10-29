import React, { Component } from 'react'
import './styles/bopae-list.css'

import SearchBar from './SearchBar'


class BopaeList extends Component {
	constructor() {
		super()
		this.state = {
			selectedItem: null,
			searchFilter: ''
		}
	}

	clickHandler(i) {
		this.setState({selectedItem: i})
	}
	handleSearchChange(e) {
		this.setState({searchFilter: e.target.value})
	}
	handleSearchReset() {
		this.setState({searchFilter: ''})
	}
	render() {
		return  <div className="bopae-list">
							<SearchBar
								searchFilter={this.state.searchFilter}
								handleSearchChange={this.handleSearchChange.bind(this)}
								handleSearchReset={this.handleSearchReset.bind(this)}
								/>
							{this.props.db.map((item, i) =>
								<ListItem
									key={i}
									name={item.name}
									icon={item.icon}
									onClick={this.clickHandler.bind(this, i)}
									isSelected={this.state.selectedItem === i}
									className={
										~item.name.toLowerCase().indexOf(this.state.searchFilter) ? '' : 'hidden'
									}
								/>
							)}
						</div>
	}
}

class ListItem extends Component {
	render() {
		let style = {
				background: (this.props.isSelected ? 'whitesmoke' : 'white')
		}
		return <div style={style} onClick={this.props.onClick} className={this.props.className}>
							<img src={this.props.icon} alt="icon"></img>
							{this.props.name}
						</div>
	}
}

export default BopaeList
