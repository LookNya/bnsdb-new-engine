//реактовы нужды
import React from 'react'
import ReactDOM from 'react-dom'
//редуксовы нужды
import { createStore } from 'redux'
//глобальные штучки-дрючки
import './styles/reset.css'
import './styles/utils.css'
import './styles/main.css'
import './styles/page.css'
import './styles/mobile.css'

import App from './App.js'
import rootReducer from './reducers.js'

let store = createStore(rootReducer)

ReactDOM.render(
	<App store={store} />,
	document.getElementById('root')
)
