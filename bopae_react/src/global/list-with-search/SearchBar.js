import React, { PureComponent } from 'react'
import './search-bar.css'

class SearchBar extends PureComponent {
	render() {
		return  <div className="search-bar-wrap">
							<input type="text"
								placeholder="Search…"
								value={this.props.searchFilter}
								onChange={e => this.props.onSearchChange(e.target.value)}
							/>
							<button onClick={() => this.props.onSearchChange('')}>
								&times;
							</button>
						</div>
	}
}
export default SearchBar
