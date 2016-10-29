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
import bopaeDB from './bopae.json'


ReactDOM.render(
	<div>
		<BopaeChooser db={bopaeDB}/>
		{bopaeDB.map(item =>
			<BopaeCircle key={item.name} name={item.name} onClick={(e, dir) => alert(`clicked on ${item.name} #${dir}`)}/>
		)}
		<BopaeCircle2 name={bopaeDB[0].name} onClick={(e, dir) => alert('clicked on #'+dir)}/>
	</div>,
	document.getElementById('root')
)
