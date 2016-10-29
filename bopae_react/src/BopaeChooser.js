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
	onListItemChange(item_id) {
		this.setState({selectedListItem: item_id})
	}
	render() {
		return  <div className="bopae-list">
							<ListWithSearch
								data={this.props.db}
								selectedItem={this.state.selectedListItem}
								onItemChanged={this.onListItemChange}
							/>
						</div>
	}
}
export default BopaeChooser
