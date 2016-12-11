export function bopaeSelect(bopae) {
	return {type: 'BOPAE_SELECT', bopae}
}

export function pieceNumSelect(num) {
	return {type: 'PIECE_NUM_SELECT', num}
}

export function piecesChoice(bopae, nums) {
	return {type: 'PIECES_CHOICE', bopae, nums}
}

export function pieceConfigUpdate(bopae, num, statName, statValue) {
	return {type: 'PIECE_CONFIG_UPDATE', bopae, num, statName, statValue}
}
