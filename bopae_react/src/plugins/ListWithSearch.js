import React, { Component } from 'react'
import SearchBar from '../plugins/SearchBar'
import '../styles/plugins/list-with-search.css'

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
		return  <div className="list-with-search">
							<SearchBar
								searchFilter={this.state.searchFilter}
								onSearchChange={this.onSearchChange.bind(this)}
							/>
							{this.props.data.map((item, i) =>
								<ListItem
									key={i}
									name={item.name}
									icon={item.icon}
									onClick={this.onItemChange.bind(this, item)}
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
		let selectedClass =this.props.isSelected ? 'selected' : ''
		return <div onClick={this.props.onClick}
						className={this.props.className + ' ' + selectedClass + ' list-item'}>
							<img src={this.props.icon} alt="icon"></img>
							<label>{this.props.name}</label>
						</div>
	}
}

export default ListWithSearch
