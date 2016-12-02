//реактовы нужды
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
//собственно модули
import BopaeCalc from './bopae-calc/BopaeCalc'
import BottomTabs from './bottom-tabs/BottomTabs'

import { BopaeDBConv } from './bopae.js'
import { updateLayout, selectPage } from './actions.js'


class App extends PureComponent{
	updateLayout() {
		let layout = 'desktop'
		let d = document
		let width = window.innerWidth || d.documentElement.clientWidth || d.body.clientWidth
		let height = window.innerHeight|| d.documentElement.clientHeight|| d.body.clientHeight

		if(width < 700){
			layout = 'mobile'
		} else if(width < 1200){
			layout = 'tablet'
		} else {
			layout = 'desktop'
		}

		//if (layout !== 'mobile')
		//	store.dispatch(selectPage(0))

		//store.dispatch(updateLayout(layout, height))
		this.props.onLayoutUpdate(layout, height)
	}

	componentWillMount() {
		this.updateLayout()
	}
	componentDidMount() {
		this.setupEvents()
	}
	componentWillUnmount() {
		this.clearEvents()
	}

	// Евенты
	setupEvents(){
		window.addEventListener('resize', this.onResize)
	}
	clearEvents(){
		window.removeEventListener('resize', this.onResize)
	}
	onResize = (e) => {
		this.updateLayout()
	}

	render(){
		return(
			<div className="app">
				<header>
					<div className="main-wrap center-content">
						<div className="logo">BnS Character Calculator</div>
						<nav>
						</nav>
					</div>
				</header>
				<main>
					<div className="main-bg"></div>
					<div className="main-wrap">
						<BopaeCalc 
							bopaes={this.props.bopaes}
							selectedPage={this.props.selectedPage}
							layout={this.props.layout}
						/>
					</div>
				</main>
				<footer>
					<div className="main-wrap">
						asd
					</div>
				</footer>
				<BottomTabs
					selectedPage={this.props.selectedPage}
					onPageChange={this.props.onPageChange}
				/>
			</div>
		)
	}
}

function mapStateToProps(state) {
	//TODO: reselect here
	return {
		layout: state.ui.layout,
		selectedPage: state.ui.selectedPage,
		bopaes: new BopaeDBConv(state.lang, state.bopaeCalc.db.l10n).convert(state.bopaeCalc.db.bopaes)
	}
}

function mapDispatchToProps(dispatch) {
	return {
		onLayoutUpdate: (layout, height) => dispatch(updateLayout(layout, height)),
		onPageChange: (page) => dispatch(selectPage(page)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
