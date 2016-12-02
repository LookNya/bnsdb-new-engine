//реактовы нужды
import React from 'react'
import ReactDOM from 'react-dom'
//редуксовы нужды
import { createStore, combineReducers } from 'redux'


import { lang, ui } from  './app/reducers.js'
import bopaeCalc from './bopae-calc/reducers.js'

let store = createStore(combineReducers({lang, ui, bopaeCalc}))


import App from './app/App.js'

ReactDOM.render(
	<App store={store} />,
	document.getElementById('root')
)
