import React, { Component } from 'react'
import './styles/search-bar.css'

class SearchBar extends Component {
	handleSubmit(){
		this.setState({searchFilter: ''})
	}
	render() {
		return  <div className="search-bar-wrap">
							<input type="text"
								placeholder="Hello!"
								value={this.props.searchFilter}
								onChange={this.props.handleSearchChange}
							/>
							<button onClick={this.props.handleSearchReset}>
								&times;
							</button>
						</div>
	}
}
export default SearchBar
