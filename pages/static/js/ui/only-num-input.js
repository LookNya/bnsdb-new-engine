OnlyNumInput = function(input){
	input.addEventListener('keyup', function(e){
		var el = e.target
		var val = el.value
		if(val == '') return
		var max = el.getAttribute('max')
		var min = el.getAttribute('min')
		val = parseInt(val) || 0
		el.value = val
		if(min && val < min) el.value = min
		if(max && val > max) el.value = max
	})
}
