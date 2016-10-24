import React, { Component } from 'react'
import './styles/bopae-list.css'

class BopaeList extends Component {
	constructor() {
		super()
		this.state = { selectedItem: null }
	}

	clickHandler(i) {
		this.setState({selectedItem: i})
	}

	render() {
		return  <div className="bopae-list">
							{this.props.db.map((item, i) =>
								<ListItem
									key={i}
									name={item.name}
									icon={item.icon}
									onClick={this.clickHandler.bind(this, i)}
									isSelected={this.state.selectedItem === i}
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
		return <div style={style} onClick={this.props.onClick}>
							<img src={this.props.icon} alt="icon"></img>
							{this.props.name}
						</div>
	}
}

export default BopaeList
