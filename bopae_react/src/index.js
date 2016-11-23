//реактовы нужды
import React from 'react'
import ReactDOM from 'react-dom'
//собственно модули
import BopaeCalc from './bopae-calc/BopaeCalc'
import BopaeCircle from './bopae-calc/bopae-circle/BopaeCircle'
import BopaeCircle2 from './bopae-calc/bopae-circle/BopaeCircle2'
import BopaeCircle3 from './bopae-calc/bopae-circle/BopaeCircle3'
//глобальные штучки-дрючки
import './styles/reset.css'
import './styles/utils.css'
import './styles/main.css'
import './styles/page.css'
import bopaeDB from './bopae.json'
import BopaeDBUtils from './global/dbutils.js'

let bopaes = BopaeDBUtils.convert(bopaeDB, 'ru')
window.bopaes = bopaes

let testPieces = bopaes[0].pieces.slice()
testPieces[4] = null
testPieces[5] = null

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
				<BopaeCalc/>
			</div>
			<BopaeCircle pieces={testPieces}/>
			<BopaeCircle2 name={bopaes[0].icon} />
			<BopaeCircle3 pieces={testPieces} />
		</main>
		<footer>
			<div className="main-wrap">
				asd
			</div>
		</footer>
	</div>,
	document.getElementById('root')
)
