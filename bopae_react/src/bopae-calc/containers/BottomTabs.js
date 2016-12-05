import { connect } from 'react-redux'
import { selectPage } from '../../app/actions'
import BottomTabs from '../components/BottomTabs'


function mapStateToProps(state) {
	return {
		selectedPage: state.ui.selectedPage
	}
}

function mapDispatchToProps(dispatch) {
	return {
		onPageChange: (page) => dispatch(selectPage(page)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(BottomTabs)
