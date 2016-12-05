import { connect } from 'react-redux'
import { updateLayout } from '../actions'
import App from '../components/App'

function mapStateToProps(state) {
	return {
		layout: state.ui.layout,
		selectedPage: state.ui.selectedPage,
	}
}

function mapDispatchToProps(dispatch) {
	return {
		onLayoutUpdate: (layout, height) => dispatch(updateLayout(layout, height)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
