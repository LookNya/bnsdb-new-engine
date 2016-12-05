import { connect } from 'react-redux'
import BopaeCalc from '../components/BopaeCalc'
import { getBopaes } from '../selectors'


function mapStateToProps(state) {
	//TODO: reselect here
	return {
		layout: state.ui.layout,
		selectedPage: state.ui.selectedPage,
		bopaes: getBopaes(state)
	}
}

function mapDispatchToProps(dispatch) {
	return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(BopaeCalc)
