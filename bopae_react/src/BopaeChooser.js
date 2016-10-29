import React, { Component } from 'react'
import './styles/bopae-list.css'

import ListWithSearch from './plugins/ListWithSearch'


class BopaeChooser extends Component {
	constructor() {
		super()
		this.state = {
			selectedListItem: null,
		}
	}
	onListItemChange(item) {
		this.setState({selectedListItem: item})
	}
	render() {
		return  <div className="bopae-list">
							<ListWithSearch
								data={this.props.db}
								selectedItem={this.state.selectedListItem}
								onItemChange={this.onListItemChange.bind(this)}
							/>
						</div>
	}
}
export default BopaeChooser
