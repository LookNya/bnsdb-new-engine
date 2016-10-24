import React from 'react'
import ReactDOM from 'react-dom'
import BopaeList from './BopaeList'
import './styles/index.css'
import bopaeDB from './bopae.json'


ReactDOM.render(
	<BopaeList db={bopaeDB}/>,
	document.getElementById('root')
)
