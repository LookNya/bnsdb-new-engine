Idb = {
	init: function(){
		initEvents(Idb)
		Idb.el = $('.base')

		new OnlyNumInput($('.lvl-from'))
		new OnlyNumInput($('.lvl-to'))

		Idb.modesSwitchTo.initial()

		new SimplePaginator(Idb.el.$('.paginator'), 0)
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
	},
	'custom': {
		'brick-select:changed': function(e){
			Idb.modesSwitchTo.catFilter()
			console.log(e.detail)

			Idb.el.$('.paginator').init(100)
		},
		'paginator:base-pages:changed': function(e){
			console.log(e.detail)
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

		Idb.el.$('.body .top').classList.add('hidden')
		Idb.modesSwitchTo._prev = Idb.modesSwitchTo._curr
		Idb.modesSwitchTo._curr = {'name': 'initial', 'params': ''}
	},
	fullSearchResults: function(){
		$('.brick-select').classList.add('hidden')
		$('.full-search-results').classList.remove('hidden')
		$('.cat-sort').classList.add('hidden')
		Idb.el.$('.body .top').classList.remove('hidden')

		Idb.modesSwitchTo._prev = Idb.modesSwitchTo._curr
		Idb.modesSwitchTo._curr = {'name': 'fullSearchResults', 'params': ''}
	},
	catFilter: function(){
		$('.brick-select').classList.remove('hidden')
		$('.full-search-results').classList.add('hidden')
		$('.cat-sort').classList.remove('hidden')
		Idb.el.$('.body .top').classList.remove('hidden')

		Idb.modesSwitchTo._prev = Idb.modesSwitchTo._curr
		Idb.modesSwitchTo._curr = {'name': 'fullSearchResults', 'params': ''}
	},
	prev: function(){
		var prev = Idb.modesSwitchTo._prev
		Idb.modesSwitchTo[prev.name](prev.params)
	}
}
