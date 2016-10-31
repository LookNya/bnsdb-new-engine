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
		let isAnyOneVisible = false
		this.props.data.map((item, i) => {
			if (~item.name.toLowerCase().indexOf(this.state.searchFilter)) isAnyOneVisible = true
		})
		return  <div className="list-with-search">
							<SearchBar
								searchFilter={this.state.searchFilter}
								onSearchChange={this.onSearchChange.bind(this)}
							/>
							<div className="items-wrap">
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
							<div style={{backgroundImage: 'url('+ this.props.icon +')'}} className="icon"></div>
							<label>{this.props.name}</label>
						</div>
	}
}

export default ListWithSearch
