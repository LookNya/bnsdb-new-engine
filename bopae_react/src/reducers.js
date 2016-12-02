import { combineReducers } from 'redux'
import bopaeCalc from './bopae-calc/reducers.js'


function lang(state='ru', action) { //navigator.language || navigator.userLanguage
	switch(action.type) {
	case 'CHANGE_LANG':
		return {...state, lang: action.lang}
	default:
		return state
	}
}

const uiInitialState = {
	layout: 'desktop',
	selectedPage: 0,
	screenHeight: 0
}

function ui(state=uiInitialState, action) {
	switch(action.type) {
	case 'UPDATE_LAYOUT':
		return {
			...state.ui,
			layout: action.layout,
			screenHeight: action.screenHeight
		}
	case 'SELECT_PAGE':
		return {
			...state.ui,
			selectedPage: action.selectedPage
		}
	default:
		return state
	}
}

export default combineReducers({lang, ui, bopaeCalc})
