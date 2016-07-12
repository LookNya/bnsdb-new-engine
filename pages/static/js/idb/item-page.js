Ipa = {
	el: $('.container .body'),
	init: function(){
		//не должно быть так
		Model.xhr('/json/'+ cat +'/'+scat+'.json', {}, Ipa.handleRawData)//заменить на генерацию карточки

		initEvents(Ipa)
		var hash = location.hash.split('#')
		if(hash && hash[1]){
			Ipa.switchTo.comp()
		}
	},
	handleRawData: function(data){
		Ipa.rawData = JSON.parse(data)
		//не должно быть так
		Ipa.el.$('.left').insertBefore(
			new ItemCard(CURR_ITEM, ['favable', 'dark'], Ipa.rawData),
			Ipa.el.$('.left .butt'))
	},
	load: function(callback){
		Model.xhr('/json/'+ cat +'/'+scat+'.json', {},
			function(data){
				Ipa.data = JSON.parse(data)
				if(callback) callback()
			}.bind(callback)
		)
	},
	showSearch: function(data){
		if(!Ipa.data){
			Ipa.load(search)
		} else {
			search()
		}
		function search(){
			var data = Ipa.data
			if(Ipa.itemSearchPp){
				Ipa.itemSearchPp.classList.remove('hidden')
			} else {
				Ipa.itemSearchPp = new ItemSearchPp(data)
				Ipa.el.$('.right .for-card').appendChild(Ipa.itemSearchPp)
			}
		}
	},
}
// ***********************************************
Ipa.switchTo = {
	'default': function(){
		location.hash = ''
		var leftButt = Ipa.el.$('.left .butt')
		leftButt.classList.add('call-comparison')
		leftButt.classList.add('blue')
		leftButt.classList.remove('transparent')
		leftButt.classList.remove('cancel-comparison')
		leftButt.textContent = 'Сравнить с другим предметом'

		Ipa.el.$('.mid').innerHTML = ''
		Ipa.el.$('.mid').classList.add('hidden')

		var card = Ipa.el.$('.right .item-card.dark')
		if(card) card.remove()

		Ipa.el.$$('.right .item-search-popup').classList.add('hidden')
		Ipa.el.$$('.right .change-item').classList.add('hidden')
	},
	'search': function(){
		location.hash = ''
		Ipa.comparison.stop()
		var leftButt = Ipa.el.$('.left .butt')
		leftButt.classList.remove('call-comparison')
		leftButt.classList.remove('blue')
		leftButt.classList.add('transparent')
		leftButt.classList.add('cancel-comparison')
		leftButt.textContent = 'Отмена сравнения'
		Ipa.el.$('.mid').classList.remove('hidden')
		Ipa.showSearch()

		var card = Ipa.el.$('.right .item-card.dark')
		if(card) card.remove()

		Ipa.el.$('.right .change-item').classList.add('hidden')
	},
	'comp': function(){
		if(Ipa.itemSearchPp)Ipa.itemSearchPp.classList.add('hidden')
		var leftButt = Ipa.el.$('.left .butt')
		leftButt.classList.remove('call-comparison')
		leftButt.classList.remove('blue')
		leftButt.classList.add('transparent')
		leftButt.classList.add('cancel-comparison')
		leftButt.textContent = 'Отмена сравнения'
		Ipa.el.$('.mid').classList.remove('hidden')
		if(!Ipa.data) {
			Ipa.load(comp)
		}else{
			comp()
		}
		function comp(){
			var data = Ipa.data
			var item
			var id = location.hash.split('#')[1]
			data.forEach(function(el){
				if(el.id == id) item = el
			})
			if(!item) {
				Ipa.switchTo.default()
				return
			}
			Ipa.el.$('.right .for-card').appendChild(new ItemCard(item, ['dark', 'favable'], data))
			Ipa.el.$('.right .change-item').classList.remove('hidden')
			Ipa.comparison.start()
			Ipa.comparison.render()
		}
	}
}
// ***********************************************
Ipa.comparison = {
	start: function(){
		initEvents(Ipa.comparison)
		Ipa.comparison.started = true
	},
	stop: function(){
		if(!Ipa.comparison.started)return
		var l = $('.left .item-card.dark')
		var r = $('.left .item-card.dark')
		if(l) l.removeEventListener('item-card:lvl-changed', Ipa.comparison.events['item-card:lvl-changed'])
		if(r) r.removeEventListener('item-card:lvl-changed', Ipa.comparison.events['item-card:lvl-changed'])
		Ipa.el.$('.mid').innerHTML = ''
	},
	render: function(){
		var gradeMap = [
			'',
			'white',
			'green',
			'blue',
			'purple',
			'orange',
		]
		Ipa.el.$('.mid').innerHTML = ''
		var le = Ipa.el.$('.left .item-card.dark') // элемент
		var re = Ipa.el.$('.right .item-card.dark')
		var li = le.item // предмет
		var ri = re.item
		var lp = li.params[le.lvl] //параметры уровня
		var rp = ri.params[re.lvl]

		var leftDiv = createEl('div')
		leftDiv.classList.add('for-left')
		leftDiv.innerHTML = '\
			<div class="name '+gradeMap[li.grade]+'">'+ li.name +'</div>\
			<div class="what">Преимущества</div>\
			<div class="stats"></div>'

		var rightDiv = createEl('div')
		rightDiv.classList.add('for-right')
		rightDiv.innerHTML = '\
			<div class="name '+gradeMap[ri.grade]+'">'+ ri.name +'</div>\
			<div class="what">Преимущества</div>\
			<div class="stats"></div>'

		Ipa.el.$('.mid').appendChild(leftDiv)
		Ipa.el.$('.mid').appendChild(rightDiv)

		var lok = Object.keys(lp)
		lok.forEach(function(stat){
			if(stat == 'bonuses') return
			if(stat == 'icon') return
			var lval = lp[stat]
			var rval = rp[stat] || 0
			if(lval < rval) return
			var div = createEl('div')
			div.className = 'stat'
			div.innerHTML = '\
				<div class="title">'+stat+'</div>\
				<div class="s-block">\
					<span>'+lval+'</span>\
					<span>vs</span>\
					<span>'+rval+'</span>\
				</div>'
			leftDiv.$('.stats').appendChild(div)
		})

		var rok = Object.keys(rp)
		rok.forEach(function(stat){
			if(stat == 'bonuses') return
			if(stat == 'icon') return
			var lval = lp[stat] || 0
			var rval = rp[stat]
			if(lval >= rval) return
			var div = createEl('div')
			div.className = 'stat'
			div.innerHTML = '\
				<div class="s-block">\
					<span>'+lval+'</span>\
					<span>vs</span>\
					<span>'+rval+'</span>\
				</div>\
				<div class="title">'+stat+'</div>'
			rightDiv.$('.stats').appendChild(div)
		})
	},
	events:{
		'item-card:lvl-changed':{
			'.left .item-card.dark': function(){
				Ipa.comparison.render()
			},
			'.right .item-card.dark': function(){
				Ipa.comparison.render()
			},
		}
	}
}
// ***********************************************
Ipa.events = {
	'click':{
		'.container .left .butt': function(e){
			var el = e.target
			if(el.classList.contains('call-comparison')){
				Ipa.switchTo.search()
			} else {
				Ipa.switchTo.default()
			}
		},
		'.container .right .butt': function(){
			Ipa.switchTo.search()
		}
	},
	'custom':{
		'item-search-popup:item-selected': function(e){
			var item = e.detail.item
			location.hash = item.id
			Ipa.switchTo.comp()
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
		},
		'item-card:de-faved': function(e){
			var item = e.detail.item
			var fData = JSON.parse(localStorage.getItem(['idb-faved-items'])|| '[]')
			fData.forEach(function(el){
				delete fData[0].card
				if(el && el.id == item.id &&
					el.name == item.name) fData.remove(el)
			})
			localStorage.setItem(['idb-faved-items'], JSON.stringify(fData))
		},
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
