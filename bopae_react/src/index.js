//реактовы нужды
import React from 'react'
import ReactDOM from 'react-dom'
//редуксовы нужды
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'


import { lang, ui } from  './app/reducers.js'
import bopaeCalc from './bopae-calc/reducers.js'

let store = createStore(combineReducers({lang, ui, bopaeCalc}))


import App from './app/components/App.js'

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)
