//реактовы нужды
import React, { PureComponent } from 'react'
//собственно модули
import BopaeCalc from '../../bopae-calc/containers/BopaeCalc'
import BottomTabs from '../../bopae-calc/containers/BottomTabs'
//глобальные штучки-дрючки
import '../styles/reset.css'
import '../styles/utils.css'
import '../styles/main.css'
import '../styles/page.css'
import '../styles/mobile.css'


class App extends PureComponent{
	updateLayout() {
		let d = document
		let layout = 'desktop'
		let width = window.innerWidth || d.documentElement.clientWidth || d.body.clientWidth
		let height = window.innerHeight|| d.documentElement.clientHeight|| d.body.clientHeight

		if(width < 700){
			layout = 'mobile'
		} else if(width < 1200){
			layout = 'tablet'
		} else {
			layout = 'desktop'
		}

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
						<div className="logo">BnS Soulshield Calculator</div>
						<nav>
						</nav>
					</div>
				</header>
				<main>
					<div className="main-bg"></div>
					<div className="main-wrap">
						<BopaeCalc />
					</div>
				</main>
				<footer>
					<div className="main-wrap">
						asd
					</div>
				</footer>
				<BottomTabs />
			</div>
		)
	}
}

export default App
