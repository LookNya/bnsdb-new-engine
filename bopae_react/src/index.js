//реактовы нужды
import React from 'react'
import ReactDOM from 'react-dom'
//собственно модули
import BopaeList from './BopaeList'
import BopaeCircle from './BopaeCircle'
import BopaeCircle2 from './BopaeCircle2'
//глобальные штучки-дрючки
import './styles/global/reset.css'
import './styles/global/utils.css'
import './styles/global/main.css'
import './styles/global/page.css'
import bopaeDB from './bopae.json'
import BopaeDBUtils from './dbutils.js'

let bopaes = BopaeDBUtils.convert(bopaeDB, 'ru')
window.qwe = bopaes
console.log(bopaes)
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
				<section>
					<BopaeList db={bopaes}/>
				</section>
				<section>
					<figure>
						<BopaeCircle2 name={bopaes[0].icon} onClick={(e, dir) => alert('clicked on #'+dir)}/>
					</figure>
				</section>

				{bopaes.map(item =>
					<BopaeCircle key={item.name} name={item.icon} onClick={(e, dir) => alert(`clicked on ${item.name} #${dir}`)}/>
				)}
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
