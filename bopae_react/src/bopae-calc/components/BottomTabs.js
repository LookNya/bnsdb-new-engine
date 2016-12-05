import React, { PureComponent } from 'react'
import './bottom-tabs.css'


class BottomTabs extends PureComponent {
	handleClick = (e) =>{
		this.props.onPageChange(+e.target.dataset.page)
	}
	render(){
		let classnames = 'tab f_l '
		return (
			<div className="bottom-tabs cf">
				<div className={this.props.selectedPage===0 ? classnames+'selected' : classnames} onClick={this.handleClick} data-page="0">Блин</div>
				<div className={this.props.selectedPage===1 ? classnames+'selected' : classnames} onClick={this.handleClick} data-page="1">Статы</div>
				<div className={this.props.selectedPage===2 ? classnames+'selected' : classnames} onClick={this.handleClick} data-page="2">Список</div>
				<div className={this.props.selectedPage===3 ? classnames+'selected' : classnames} onClick={this.handleClick} data-page="3">Кусок</div>
			</div>
		)
	}
}

export default BottomTabs
