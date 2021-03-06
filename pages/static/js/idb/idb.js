Idb = {
	cardsPerPage: 24,
	init: function(){
		initEvents(Idb)
		Idb.el = $('.base')
		Idb.modesSwitchTo.initial()
		new SimplePaginator(Idb.el.$('.paginator'), 0)

		var fData = JSON.parse(localStorage.getItem(['idb-faved-items'])|| '[]')
		fData.length !=0 ? Idb.el.$('.brick-select .fcounter').textContent = fData.length : Idb.el.$('.brick-select .fcounter').textContent = ''
	}
}
Idb.events = {
	'change':{
		'.lvl-from': function(e){
			var input = e.target
			input.value = parseInt(input.value || input.getAttribute('min'))
			if(input.value > +input.getAttribute('max')) input.value = +input.getAttribute('max')
			if(input.value < +input.getAttribute('min')) input.value = +input.getAttribute('min')
			var lvlFrom = $('.lvl-from').value
			var lvlTo = input.value
			if(lvlFrom >= lvlTo) $('.lvl-to').value = +lvlFrom + 1
			Idb.cat.filter()
		},
		'.lvl-to': function(e){
			var input = e.target
			input.value = parseInt(input.value || input.getAttribute('min'))
			if(input.value > +input.getAttribute('max')) input.value = +input.getAttribute('max')
			if(input.value < +input.getAttribute('min')) input.value = +input.getAttribute('min')
			var lvlFrom = $('.lvl-from').value
			var lvlTo = input.value
			if(lvlTo <= lvlFrom) $('.lvl-from').value = +lvlTo - 1
			Idb.cat.filter()
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
		},
	},
	'keyup': {
		'.local-search': function(e){
			Idb.cat.filter()
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
			if(e.detail.subcat){
				Idb.modesSwitchTo.catFilter(e.detail)
			} else{
				var cat = e.detail.cat
				if(cat) Idb.el.$('.brick-select [data-cat="'+ cat +'"] .variant').click()
			}

		},
		'paginator:base-pages:changed': function(e){
			var scrolled = document.body.scrollTop
			if(scrolled > 360) {
				document.body.scrollTop = 275
			}
			Idb.cat.openPage(e.detail.page)
		},
		'scroll': function(e){
			var scrolled = document.body.scrollTop
			var selector = Idb.el.$('.paginator')
			var rect = selector.getBoundingClientRect()
			if(scrolled > 360) {
				selector.classList.add('fixed')
				selector.style.left = rect.left + 'px'
			} else {
				selector.classList.remove('fixed')
			}
		},
		'item-card:faved': function(e){
			var item = e.detail.item
			var fData = JSON.parse(localStorage.getItem(['idb-faved-items'])|| '[]')
			var used = false
			fData.forEach(function(el){
				if(el && el.id == item.id &&
					el.name == item.name) used = true
			})
			if(used) return
			fData.unshift(item)
			localStorage.setItem(['idb-faved-items'], JSON.stringify(fData))
			Idb.el.$('.brick-select .fcounter').textContent = fData.length
		},
		'item-card:de-faved': function(e){
			var item = e.detail.item
			var fData = JSON.parse(localStorage.getItem(['idb-faved-items'])|| '[]')
			fData.forEach(function(el){
				if(el && el.id == item.id &&
					el.name == item.name) fData.remove(el)
			})
			localStorage.setItem(['idb-faved-items'], JSON.stringify(fData))
			fData.length !=0 ? Idb.el.$('.brick-select .fcounter').textContent = fData.length : Idb.el.$('.brick-select .fcounter').textContent = ''
		},
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
			'weapons': 'Оружие',
			'accessories': 'Бижутерия',
			'cats': 'Предметы'
		}
		var mapScat = {
			'fm': 'Форс-мастера',
			'asn': 'Ассасина',
			'sum': 'Призывателя',
			'kfm': 'Кунг-фу',
			'des': 'Дестроера',
			'bm': 'Мастера меча',
			'lsm': 'Лин мастер меча',

			'ring': 'Кольца',
			'earring': 'Серьги',
			'necklace': 'Ожерелья',
			'bracelet': 'Браслеты',
			'belt': 'Пояса',

			'all': 'морфа',
		}
		if(cat == 'weapons') Idb.el.$('.cat-header').textContent = mapCat[cat] + ' для ' + mapScat[scat]
		if(cat == 'accessories') Idb.el.$('.cat-header').textContent = mapScat[scat]
		if(cat == 'fave') Idb.el.$('.cat-header').textContent = 'Избранное'
		if(cat == 'cats') Idb.el.$('.cat-header').textContent = 'Предметы для морфа'

		if(cat!='fave'){
			Idb.el.$('.body .bot').classList.remove('cat-fav')
			Model.xhr('/json/'+ cat + '/' + scat + '.json', {}, Idb.cat.generate)
		} else{
			Idb.el.$('.body .bot').classList.add('cat-fav')
			var data = localStorage.getItem(['idb-faved-items'])|| '[]'
			Idb.cat.generate(data)
		}
	},
	generate: function(data){
		var data = JSON.parse(data)
		Idb.cat.rawData = data
		Idb.cat.filter()
	},
	openPage: function(index){
		var body = Idb.el.$('.body .bot')
		body.innerHTML = ''
		var from = index * Idb.cardsPerPage
		var to = from + Idb.cardsPerPage
		var pageData = []
		for(var i=from; i<to; i++){
			var item = Idb.cat.data[i]
			if(item) pageData.push(item)
		}
		var changed = true
		while(changed){
			if(pageData.length == 0) break
			changed = false
			if(!pageData) break//не фильтровать, если нечего
			if(!pageData[0].params) break//не фильтровать предметы морфа
			for(var i=1; i<pageData.length; i++){
				if(pageData[i-1].player_min_lvl != pageData[i].palyer_min_lvl) continue //сравнение только внутри уровня
				var po = Object.keys(pageData[i-1].params)//список всех парамсов
				var co = Object.keys(pageData[i].params)
				var pp = pageData[i-1].params[po[po.length-1]]//последний парамс из списка
				var cp = pageData[i].params[co[co.length-1]]

				var prevl = (pp.bonuses || []).length//примерно строк в бонусах
				var curl = (cp.bonuses || []).length
				var pok = Object.keys(pp).length -1//сколоко всего записей в парамсах
				var cok = Object.keys(cp).length -1
				if(pp.bonuses) pok--
				if(cp.bonuses) cok--
				prevl += parseInt(pok/2)//сколько примерно строк добавили статы
				curl += parseInt(cok/2)
				if(pageData[i-1].break_items)prevl += 3
				if(pageData[i].break_items)curl += 3
				if(po.length>1)prevl++
				if(co.length>1)curl++
				prevl += pageData[i-1].grade
				curl += pageData[i].grade
				if(prevl < curl){
					var buff = pageData[i-1]
					pageData[i-1] = pageData[i]
					pageData[i] = buff
					changed = true
					break
				}
			}
		}
		for(var i=0; i<pageData.length; i++){
			var card = new ItemCard(pageData[i], ['favable'], Idb.cat.data)
			body.appendChild(card)
		}
		Idb.el.$('.paginator').init( Math.ceil(Idb.cat.data.length / Idb.cardsPerPage))
		Idb.el.$('.paginator').openPage(index, true)
	},
	filter: function(){
		var lvlTo = +$('.lvl-to').value
		var lvlFrom = +$('.lvl-from').value
		Idb.cat.data = []
		var localSearch = Idb.el.$('.local-search').value.toLowerCase()
		if(!Idb.cat.rawData) return
		Idb.cat.rawData.forEach(function(item){
			var lvlOk = true
			var minLvl = item.player_min_lvl
			if(minLvl && (minLvl < lvlFrom || minLvl > lvlTo) ) lvlOk = false
			var name = item.name.toLowerCase()
			if( lvlOk &&
				 (localSearch == '' ||
				~name.indexOf(localSearch) ||
				~name.indexOf(Utils.rusify(localSearch))
				 )
				) Idb.cat.data.push(item)
		})
		Idb.el.$('.count').textContent = Idb.cat.data.length
		Idb.cat.openPage(0)
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
Utils = {}
Utils.rusify = (function() {
	var s = "qй wц eу rк tе yн uг iш oщ pз [х ]ъ "+
					 "aф sы dв fа gп hр jо kл lд ;ж 'э "+
						"zя xч cс vм bи nт mь ,б .ю /.";
	var h = {};
	for (var i=0; i<s.length; i+=3) h[s[i]] = s[i+1];

	return function(str) {
		return str.toLowerCase().replace(/[A-z\[\];',\.\/]/g, function(l) {
			return l in h ? h[l] : l;
		})
	}
})();
