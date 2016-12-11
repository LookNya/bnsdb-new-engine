import bopaeDB from './lib/bopae.json'
import { BopaesConfig } from './lib/bopae.js'


const initialState = {
	db: bopaeDB,
	choosenPieces: Array(8).fill(null),
	piecesConfig: new BopaesConfig(),
	selectedNum: null,
	selectedBopae: null,
}

export default function reducer(state=initialState, action) {
	switch(action.type) {

	case 'BOPAE_SELECT':
		return {...state, selectedBopae: action.bopae}

	case 'PIECE_NUM_SELECT':
		return {...state, selectedNum: action.num}

	case 'PIECES_CHOICE':
		let choosenPieces = state.choosenPieces.slice()
		for (let num of action.nums)
			choosenPieces[num] = action.bopae && action.bopae.pieces[num]
		return {...state, choosenPieces}

	case 'PIECE_CONFIG_UPDATE':
		let {bopae, num, statName, statValue} = action
		return {...state, piecesConfig: state.piecesConfig.updatePieceConfig(bopae, num, statName, statValue)}

	default:
		return state
	}
}
