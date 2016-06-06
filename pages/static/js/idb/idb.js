Idb = {
	cardsPerPage: 24,
	init: function(){
		initEvents(Idb)
		Idb.el = $('.base')

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
			if(lvlFrom.value > input.getAttribute('max')) lvlFrom.value = input.getAttribute('max')
			if(lvlFrom.value < input.getAttribute('min')) lvlFrom.value = input.getAttribute('min')
			if(lvlFrom.value == '') lvlFrom.value = input.getAttribute('min')
			if(lvlTo == '' || lvlFrom == '') return
			if(lvlFrom >= lvlTo) $('.lvl-to').value = +lvlFrom + 1
			Idb.cat.lvlFilter(lvlTo, lvlFrom)
		},
		'.lvl-to': function(e){
			var input = e.target
			var lvlTo = input.value
			var lvlFrom = $('.lvl-from').value
			if(lvlTo.value > input.getAttribute('max')) lvlTo.value = input.getAttribute('max')
			if(lvlTo.value < input.getAttribute('min')) lvlTo.value = input.getAttribute('min')
			if(lvlTo.value == '') lvlTo.value = input.getAttribute('min')
			if(lvlTo == '' || lvlFrom == '') return
			if(lvlTo <= lvlFrom) $('.lvl-from').value = +lvlTo - 1
			Idb.cat.lvlFilter(lvlTo, lvlFrom)
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
			Idb.modesSwitchTo.catFilter(e.detail)
		},
		'paginator:base-pages:changed': function(e){
			Idb.cat.openPage(e.detail.page)
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

		$('.cat-header').classList.add('hidden')
		Idb.el.$('.body .top').classList.add('hidden')
		Idb.modesSwitchTo._prev = Idb.modesSwitchTo._curr
		Idb.modesSwitchTo._curr = {'name': 'initial', 'params': ''}
	},
	fullSearchResults: function(){
		$('.brick-select').classList.add('hidden')
		$('.full-search-results').classList.remove('hidden')
		$('.cat-sort').classList.add('hidden')
		Idb.el.$('.body .top').classList.remove('hidden')

		$('.cat-header').classList.add('hidden')
		$('.local-search').value = ''

		Idb.modesSwitchTo._prev = Idb.modesSwitchTo._curr
		Idb.modesSwitchTo._curr = {'name': 'fullSearchResults', 'params': ''}
	},
	catFilter: function(params){
		$('.brick-select').classList.remove('hidden')
		$('.full-search-results').classList.add('hidden')
		$('.cat-sort').classList.remove('hidden')
		Idb.el.$('.body .top').classList.remove('hidden')
		$('.cat-header').classList.remove('hidden')
		$('.local-search').value = ''
		$('.full-search').value = ''
		Idb.modesSwitchTo._prev = Idb.modesSwitchTo._curr
		Idb.modesSwitchTo._curr = {'name': 'catFilter', 'params': params}

		Idb.cat.init(params)
	},
	prev: function(){
		var prev = Idb.modesSwitchTo._prev
		Idb.modesSwitchTo[prev.name](prev.params)
	},
}
// ***********************************************
Idb.cat = {
	rawData: '',
	data: '',
	init: function(params){
		var cat = params.cat
		var scat = params.subcat || 'fm'

		var mapCat = {
			'weapons': 'Оружие'
		}
		var mapScat = {
			'fm': 'Форс-мастера',
			'asn': 'Ассасина',
			'sum': 'Призывателя',
			'kfm': 'Кунг-фу',
			'des': 'Дестроера',
			'bm': 'Мастера меча',
		}
		Idb.el.$('.cat-header').textContent = mapCat[cat] + ' для ' + mapScat[scat]
		Model.xhr('/json/'+ cat + '/' + scat + '.json', {}, Idb.cat.generate)
	},
	generate: function(data){
		var data = JSON.parse(data)
		Idb.cat.rawData = data
		Idb.cat.data = data
		Idb.el.$('.paginator').init( Math.ceil(data.length / Idb.cardsPerPage))
		Idb.cat.openPage(0)
	},
	openPage: function(index){
		var body = Idb.el.$('.body .bot')
		body.innerHTML = ''
		var from = index * Idb.cardsPerPage
		var to = from + Idb.cardsPerPage
		for(var i=from; i<to; i++){
			var item = Idb.cat.data[i]
			if(item){
				var card = new ItemCard(item)
				body.appendChild(card)
			}
		}
	},
	lvlFilter: function(lvlTo, lvlFrom){

	}
}
// ***********************************************
Model = {}
Model.xhr = function(href, params, onOk, onErr){
		function getXmlHttp(){
		var xmlhttp
		try {
			xmlhttp = new ActiveXObject("Msxml2.XMLHTTP")
		} catch (e) {
			try {
				xmlhttp = new ActiveXObject("Microsoft.XMLHTTP")
			} catch (E) {
				xmlhttp = false
			}
		}
		if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
			xmlhttp = new XMLHttpRequest()
		}
		return xmlhttp
	}
	var xmlhttp = getXmlHttp()
	xmlhttp.open('GET', href, true)
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4) {
			 if(xmlhttp.status == 200) {
				onOk(xmlhttp.responseText)
			}else{
				onErr && onErr(xmlhttp.responseText)
			}
		}
	}
	xmlhttp.send(null)
}
