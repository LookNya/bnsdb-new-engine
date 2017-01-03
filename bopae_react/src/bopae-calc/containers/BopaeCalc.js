import { connect } from 'react-redux'
import BopaeCalc from '../components/BopaeCalc'
import { getBopaes, getCurrentL10n } from '../selectors'
import { bopaeSelect, pieceNumSelect, piecesChoice, pieceConfigUpdate } from '../actions'


function mapStateToProps(state) {
	return {
		layout:        state.ui.layout,
		selectedPage:  state.ui.selectedPage,
		l10n:          getCurrentL10n(state),
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
		onPiecesChoice: (bopae, nums) => dispatch(piecesChoice(bopae, nums)),
		onPieceConfigChange: (bopae, num, stat, val) => dispatch(pieceConfigUpdate(bopae, num, stat, val)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(BopaeCalc)
