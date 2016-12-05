import { connect } from 'react-redux'
import BopaeCalc from '../components/BopaeCalc'
import { getBopaes } from '../selectors'
import { bopaeSelect, pieceNumSelect, pieceChoice, allPiecesChoice, pieceConfigUpdate } from '../actions'


function mapStateToProps(state) {
	return {
		layout:        state.ui.layout,
		selectedPage:  state.ui.selectedPage,
		bopaes:        getBopaes(state),
		choosenPieces: state.bopaeCalc.choosenPieces,
		piecesConfig:  state.bopaeCalc.piecesConfig,
		selectedNum:   state.bopaeCalc.selectedNum,
		selectedBopae: state.bopaeCalc.selectedBopae,
	}
}

function mapDispatchToProps(dispatch) {
	return {
		onBopaeSelect: (bopae) => dispatch(bopaeSelect(bopae)),
		onPieceNumSelect: (num) => dispatch(pieceNumSelect(num)),
		onPieceChoice: (bopae, num) => dispatch(pieceChoice(bopae, num)),
		onAllPiecesChoice: (bopae) => dispatch(allPiecesChoice(bopae)),
		onPieceConfigChange: (bopae, num, stat, val) => dispatch(pieceConfigUpdate(bopae, num, stat, val)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(BopaeCalc)
