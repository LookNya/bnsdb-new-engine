//реактовы нужды
import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'
//собственно модули
import BopaeCalc from './bopae-calc/BopaeCalc'
import BottomTabs from './bottom-tabs/BottomTabs'
import BopaeCircle from './bopae-calc/bopae-circle/BopaeCircle'
import BopaeCircle2 from './bopae-calc/bopae-circle/BopaeCircle2'
import BopaeCircle3 from './bopae-calc/bopae-circle/BopaeCircle3'
//глобальные штучки-дрючки
import './styles/reset.css'
import './styles/utils.css'
import './styles/main.css'
import './styles/page.css'
import './styles/mobile.css'
import bopaeDB from './bopae.json'
import { BopaeDBConv } from './bopae.js'

let bopaes = new BopaeDBConv('ru', bopaeDB.l10n).convert(bopaeDB.bopaes)
window.bopaes = bopaes

let testPieces = bopaes[0].pieces.slice()
testPieces[4] = null
testPieces[5] = null

class App extends PureComponent{
	constructor() {
		super()
		this.state = {
			selectedPage: 0,
			layout: ''
		}
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
		window.addEventListener('resize', this.updateLayout.bind(this))
	}
	clearEvents(){
		window.removeEventListener('resize', this.updateLayout.bind(this))
	}
	onPageChange = (page) => {
		this.setState({selectedPage: page})
	}

	updateLayout(){
		let layout = 'desktop',
			w = window,
			d = document,
			documentElement = d.documentElement,
			body = d.getElementsByTagName('body')[0],
			width = w.innerWidth || documentElement.clientWidth || body.clientWidth,
			height = w.innerHeight|| documentElement.clientHeight|| body.clientHeight
		if(width < 700){
			layout = 'mobile'
		} else if(width < 1200){
			layout = 'tablet'
		} else {
			layout = 'desktop'
		}
		d.body.scrollTop = 0
		this.setState({layout: layout, selectedPage: 0})
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
						<BopaeCalc bopaes={bopaes} selectedPage={this.state.selectedPage}/>
					</div>
				</main>
				<footer>
					<div className="main-wrap">
						asd
					</div>
				</footer>
				<BottomTabs
					selectedPage={this.state.selectedPage}
					onPageChange={this.onPageChange}
				/>
			</div>
		)
	}
}

ReactDOM.render(
	<App/>,
	document.getElementById('root')
)
