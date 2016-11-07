import React, { Component } from 'react'
import './styles/bopae-piece-editor.css'

import BopaeSets from './little/BopaeSets'

class BopaePieceEditor extends Component {
	render() {
		return (
			<div className="bopae-piece-editor">
				<h2>Равнины изобилия 45 #3</h2>
				<BopaeSets />
				{[1,3,4].map(i => <StatCustomuzer/>)}
				<div className="bottom-controls">
					<button className="togglable">Использовать эту скрижаль везде</button>
					<button className="togglable">Использовать эту скрижаль на свободных кусках</button>
				</div>
			</div>
		)
	}
}

class StatCustomuzer extends Component {
	render() {
		return (
			<div className="stat-cust-wrap">
				<label>statname</label>
				<button className="togglable selected">200</button>
				<button className="togglable">800</button>
			</div>
		)
	}
}

export default BopaePieceEditor
