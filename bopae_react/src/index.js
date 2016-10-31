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


ReactDOM.render(
	<div className="app">
		<header>
			<div className="main-wrap">
				<div className="logo">The asd</div>
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
					<BopaeCircle2 name={bopaeDB[0].name} onClick={(e, dir) => alert('clicked on #'+dir)}/>
				</section>

				{bopaeDB.map(item =>
					<BopaeCircle key={item.name} name={item.name} onClick={(e, dir) => alert(`clicked on ${item.name} #${dir}`)}/>
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
