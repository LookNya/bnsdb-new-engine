(function(exports){
	exports.getMarkedConfig = function(marked) {
		var renderer = new marked.Renderer()
		renderer._code = renderer.code
		renderer.code = function(code, lang, escape) {
			if (lang == 'raw-html') return code
			return this._code(code, lang, escape)
		}
		return {
			renderer: renderer,
			sanitize: true
		}
	}
})(typeof exports == 'undefined' ? window : exports)
