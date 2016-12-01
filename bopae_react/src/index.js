//реактовы нужды
import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'
//собственно модули
import BopaeCalc from './bopae-calc/BopaeCalc'
import BottomTabs from './bottom-tabs/BottomTabs'
//глобальные штучки-дрючки
import './styles/reset.css'
import './styles/utils.css'
import './styles/main.css'
import './styles/page.css'
import './styles/mobile.css'
import bopaeDB from './bopae.json'
import { BopaeDBConv } from './bopae.js'



// redux stuff
import { createStore, combineReducers } from 'redux'
import { connect } from 'react-redux'

// initial data
const langInitialState = 'ru' //navigator.language || navigator.userLanguage
const uiInitialState = {
	layout: 'desktop',
	selectedPage: 0,
	screenHeight: 0
}
const bopaeCalcInitialState = {
	db: bopaeDB
}

// reducers
let reducers = {
	lang: function(state=langInitialState, action) {
		switch(action.type) {
		case 'CHANGE_LANG':
			return {...state, lang: action.lang}
		default:
			return state
		}
	},
	ui: function(state=uiInitialState, action) {
		switch(action.type) {
		case 'UPDATE_LAYOUT':
			return {
				...state.ui,
				layout: action.layout,
				screenHeight: action.screenHeight
			}
		case 'SELECT_PAGE':
			return {
				...state.ui,
				selectedPage: action.selectedPage
			}
		default:
			return state
		}
	},
	bopaeCalc: function(state=bopaeCalcInitialState, action) {
		return state
	}
}

// actions
function changeLang(lang) {
	return {type: 'CHANGE_LANG', lang}
}

function updateLayout(layout, screenHeight) {
	return {type: 'UPDATE_LAYOUT', layout, screenHeight}
}
function selectPage(pageNum) {
	return {type: 'SELECT_PAGE', selectedPage: pageNum}
}

// store
let store = createStore(combineReducers(reducers))



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

		if (layout != 'mobile')
			store.dispatch(selectPage(0))

		store.dispatch(updateLayout(layout, height))
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
	onPageChange = (page) => {
		store.dispatch(selectPage(page))
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
					onPageChange={this.onPageChange}
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

const App2 = connect(mapStateToProps)(App)

ReactDOM.render(
	<App2 store={store} />,
	document.getElementById('root')
)
