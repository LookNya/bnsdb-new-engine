Idb = {
	init: function(){
		initEvents(Idb)

		new OnlyNumInput($('.lvl-from'))
		new OnlyNumInput($('.lvl-to'))
		Idb.modesSwitchTo.initial()
	}
}
Idb.events = {
	'change':{
		'.lvl-from': function(e){
			var input = e.target
			var lvlFrom = input.value
			var lvlTo = $('.lvl-to').value
			if(lvlTo == '' || lvlFrom == '') return
			if(lvlFrom >= lvlTo) $('.lvl-to').value = +lvlFrom + 1
		},
		'.lvl-to': function(e){
			var input = e.target
			var lvlTo = input.value
			var lvlFrom = $('.lvl-from').value
			if(lvlTo == '' || lvlFrom == '') return
			if(lvlTo <= lvlFrom) $('.lvl-from').value = +lvlTo - 1
		}
	},
	'keydown':{
		'.full-search': function(e){
			var code = e.keyCode
			if(code == 13) {
				var butt = $('.full-search-butt')
				butt.click()
				butt.style.background = '#4987cb'
				setTimeout(function(){
					butt.style.background = ''
				},200)
			}
		}
	},
	'click': {
		'.full-search-butt': function(){
			var req = $('.full-search').value
			if(req == '') {
				Idb.modesSwitchTo.prev()
				return
			}
			Idb.modesSwitchTo.fullSearchResults()
			$('.full-search-results .what').textContent = req

		},
		'.full-search-results .close': function(){
			Idb.modesSwitchTo.prev()
		}
	}
}
Idb.modesSwitchTo = {
	_prev: {},
	_curr: {},
	initial: function(){
		$('.brick-select').classList.remove('hidden')
		$('.full-search-results').classList.add('hidden')
		$('.cat-sort').classList.add('hidden')
		$('.full-search').value = ''
		
		Idb.modesSwitchTo._prev = Idb.modesSwitchTo._curr
		Idb.modesSwitchTo._curr = {'name': 'initial', 'params': ''}
	},
	fullSearchResults: function(){
		$('.brick-select').classList.add('hidden')
		$('.full-search-results').classList.remove('hidden')
		$('.cat-sort').classList.add('hidden')

		Idb.modesSwitchTo._prev = Idb.modesSwitchTo._curr
		Idb.modesSwitchTo._curr = {'name': 'fullSearchResults', 'params': ''}
	},
	prev: function(){
		var prev = Idb.modesSwitchTo._prev
		Idb.modesSwitchTo[prev.name](prev.params)
	}
}
