import React from 'react'
import './styles/bopae-list.css'

var BopaeList = React.createClass({
	getInitialState: function() {
			return {
					selectedItem: null
			}
	},
	clickHandler: function(i) {
			this.setState({selectedItem: i})
	},
	render: function() {
		var items = this.props.db.map(function(item, i){
				var is_selected = this.state.selectedItem === i
				return <ListItem
								key={i}
								name={item.name}
								icon={item.icon}
								onClick={this.clickHandler.bind(this, i)}
								isSelected={is_selected}
								/>
			}.bind(this)
		)

		return  <div className="bopae-list">
							{items}
						</div>
	}
})
var ListItem = React.createClass({
	render: function() {
		var style = {
				background: 'white'
		}
		if (this.props.isSelected) {
				style['background'] = 'whitesmoke';
		}
		return <div style={style} onClick={this.props.onClick}>
							<img src={this.props.icon} alt="icon"></img>
							{this.props.name}
						</div>
	}
})
export default BopaeList
