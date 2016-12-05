//реактовы нужды
import React from 'react'
import ReactDOM from 'react-dom'
//редуксовы нужды
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import { lang, ui } from  './app/reducers.js'
import bopaeCalc from './bopae-calc/reducers.js'

import App from './app/containers/App'


let store = createStore(combineReducers({lang, ui, bopaeCalc}))

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)
