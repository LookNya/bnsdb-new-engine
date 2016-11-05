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

bopaeDB.forEach(
	item => {
		item.name = item.name.ru

		item.getPieceIcon = function(pieceNum){
			return process.env.PUBLIC_URL +'/img/'+ this.icon + pieceNum +'.png'
		}

		item.getStatNamesForPiece = function(pieceNum){
			var pieceStatsNames = []
			var allStatNames = Object.keys(this.pieces)
			allStatNames.forEach(statName =>{
				var pieceStats = (''+this.pieces[statName]).trim().split(/\s+/)[pieceNum-1]
				var re = new RegExp(/\d/g)
				if(pieceStats!='0-0' && re.test(pieceStats) && statName!='synth') pieceStatsNames.push(statName)
			})
			return pieceStatsNames
		}

		item.getStatValuesForPiece = function(pieceNum, statName){
			if(!this.pieces[statName]) return null
			var pieceStats = this.pieces[statName].trim().split(/\s+/)[pieceNum-1]
			var pieceStats = pieceStats.split('-')
			return {min: pieceStats[0], max: pieceStats[1]}
		}
	}
)
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
					<BopaeList db={bopaeDB}/>
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
