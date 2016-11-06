//реактовы нужды
import React from 'react'
import ReactDOM from 'react-dom'
//собственно модули
import BopaeCalc from './BopaeCalc'
//глобальные штучки-дрючки
import './styles/global/reset.css'
import './styles/global/utils.css'
import './styles/global/main.css'
import './styles/global/page.css'
import bopaeDB from './bopae.json'
import BopaeDBUtils from './dbutils.js'

let bopaes = BopaeDBUtils.convert(bopaeDB, 'ru')
window.bopaes = bopaes

ReactDOM.render(
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
				<BopaeCalc bopaes={bopaes} />
			</div>
		</main>
		<footer>
			<div className="main-wrap">
				asd
			</div>
		</footer>
	</div>,
	document.getElementById('root')
)
