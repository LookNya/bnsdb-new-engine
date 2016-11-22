import React, { Component } from 'react'

import './bopae-list.css'

import ListWithSearch from '../../global/list-with-search/ListWithSearch'


class BopaeList extends Component {
	onListItemChange(bopae) {
		this.props.onBopaeChange(bopae)
	}
	render() {
		return  <div className="bopae-list">
							<ListWithSearch
								data={this.props.db}
								selectedPieceNum={this.props.selectedPieceNum}
								selectedBopae={this.props.selectedBopae}
								onItemChange={this.props.onBopaeChange}
							/>
						</div>
	}
}
export default BopaeList
