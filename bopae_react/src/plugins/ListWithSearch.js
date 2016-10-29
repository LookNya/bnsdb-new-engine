import React, { Component } from 'react'
import SearchBar from '../plugins/SearchBar'

class ListWithSearch extends Component {
	constructor() {
		super()
		this.state = {
			searchFilter: ''
		}
	}
	handleSearchChange(e) {
		this.setState({searchFilter: e.target.value})
	}
	handleSearchReset() {
		this.setState({searchFilter: ''})
	}
	onItemChanged(e){
		this.props.onItemChanged(e.target.key)
	}
	render() {
		return  <div className="list-with-search">
							<SearchBar
								searchFilter={this.state.searchFilter}
								handleSearchChange={this.handleSearchChange.bind(this)}
								handleSearchReset={this.handleSearchReset.bind(this)}
								/>
							{this.props.data.map((item, i) =>
								<ListItem
									key={i}
									name={item.name}
									icon={item.icon}
									onClick={this.onItemChanged.bind(this)}
									isSelected={this.props.selectedItem === i}
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
