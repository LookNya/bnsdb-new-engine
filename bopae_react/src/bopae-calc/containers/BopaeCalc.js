import { connect } from 'react-redux'
import { BopaeDBConv } from '../../bopae-calc/lib/bopae'
import BopaeCalc from '../components/BopaeCalc'


function mapStateToProps(state) {
	//TODO: reselect here
	return {
		layout: state.ui.layout,
		selectedPage: state.ui.selectedPage,
		bopaes: new BopaeDBConv(state.lang, state.bopaeCalc.db.l10n).convert(state.bopaeCalc.db.bopaes)
	}
}

function mapDispatchToProps(dispatch) {
	return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(BopaeCalc)
