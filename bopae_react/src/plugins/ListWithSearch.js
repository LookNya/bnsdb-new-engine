import React, { Component } from 'react'
import SearchBar from '../plugins/SearchBar'

class ListWithSearch extends Component {
	constructor() {
		super()
		this.state = {
			searchFilter: ''
		}
	}
	handleSearchChange(value) {
		this.setState({searchFilter: value})
	}
	onItemChanged(item, e){
		this.props.onItemChanged(item)
	}
	render() {
		return  <div className="list-with-search">
							<SearchBar
								searchFilter={this.state.searchFilter}
								handleSearchChange={this.handleSearchChange.bind(this)}
							/>
							{this.props.data.map((item, i) =>
								<ListItem
									key={i}
									name={item.name}
									icon={item.icon}
									onClick={this.onItemChanged.bind(this, item)}
									isSelected={this.props.selectedItem === item}
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

export default ListWithSearch
