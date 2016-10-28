import React from 'react'
import ReactDOM from 'react-dom'
import BopaeList from './BopaeList'
import BopaeCircle from './BopaeCircle'
import BopaeCircle2 from './BopaeCircle2'
import './styles/index.css'
import bopaeDB from './bopae.json'


ReactDOM.render(
	<div>
		<BopaeList db={bopaeDB}/>
		<BopaeCircle name={bopaeDB[0].name} onClick={(e, dir) => alert('clicked on #'+dir)}/>
		<BopaeCircle2 name={bopaeDB[0].name} onClick={(e, dir) => alert('clicked on #'+dir)}/>
	</div>,
	document.getElementById('root')
)
