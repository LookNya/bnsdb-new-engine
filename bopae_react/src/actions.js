export function changeLang(lang) {
	return {type: 'CHANGE_LANG', lang}
}

export function updateLayout(layout, screenHeight) {
	return {type: 'UPDATE_LAYOUT', layout, screenHeight}
}

export function selectPage(pageNum) {
	return {type: 'SELECT_PAGE', selectedPage: pageNum}
}
