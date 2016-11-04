//реактовы нужды
import React from 'react'
import ReactDOM from 'react-dom'
//собственно модули
import BopaeChooser from './BopaeChooser'
import BopaeCircle from './BopaeCircle'
import BopaeCircle2 from './BopaeCircle2'
//глобальные штучки-дрючки
import './styles/global/reset.css'
import './styles/global/utils.css'
import './styles/global/main.css'
import './styles/global/page.css'
import bopaeDB from './bopae.json'

bopaeDB.forEach(item => item.name = item.name.ru)

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
					<BopaeChooser db={bopaeDB}/>
				</section>
				<section>
					<figure>
						<BopaeCircle2 name={bopaeDB[0].icon} onClick={(e, dir) => alert('clicked on #'+dir)}/>
					</figure>
				</section>

				{bopaeDB.map(item =>
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
