import React, { Component } from 'react'

import './styles/bopae-list/piece.css'

import ListWithSearch from './plugins/ListWithSearch'


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
