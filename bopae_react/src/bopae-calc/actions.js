export function pieceChoice(bopae, num) {
	return {type: 'PIECE_CHOICE', bopae, num}
}

export function allPiecesChoice(bopae) {
	return {type: 'ALL_PIECES_CHOICE', bopae}
}

export function pieceConfigUpdate(bopae, num, statName, statValue) {
	return {type: 'PIECE_CONFIG_UPDATE', bopae, num, statName, statValue}
}
