(function(exports){
	exports.getMarkedConfig = function(marked) {
		let renderer = new marked.Renderer()

		renderer._code = renderer.code
		renderer.code = function(code, lang, escape) {
			if (lang == 'raw-html') return code
			return this._code(code, lang, escape)
		}

		renderer.heading = function(text, level, raw) {
			return `<h${level}>${text}</h${level}>`
		}

		return {
			renderer: renderer,
			sanitize: true
		}
	}
})(typeof exports == 'undefined' ? window : exports)
