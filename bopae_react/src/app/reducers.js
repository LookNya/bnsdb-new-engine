export function lang(state='ru', action) { //navigator.language || navigator.userLanguage
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

export function ui(state=uiInitialState, action) {
	switch(action.type) {
	case 'UPDATE_LAYOUT':
		return {
			...state,
			layout: action.layout,
			screenHeight: action.screenHeight
		}
	case 'SELECT_PAGE':
		return {
			...state,
			selectedPage: action.selectedPage
		}
	default:
		return state
	}
}
