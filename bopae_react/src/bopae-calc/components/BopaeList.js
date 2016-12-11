import React, { PureComponent } from 'react'

import './bopae-list.css'

import ListWithSearch from '../../global/list-with-search/ListWithSearch'


class BopaeList extends PureComponent {
	render() {
		return  <div className="bopae-list">
							<ListWithSearch
								data={this.props.db}
								selectedBopae={this.props.selectedBopae}
								selectedPieceNum={this.props.selectedPieceNum}
								onItemChange={this.props.onBopaeChange}
							/>
						</div>
	}
}
export default BopaeList
