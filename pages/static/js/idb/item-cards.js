function ItemCard(item, params, fullList){
	var gradeMap = [
		'',
		'white',
		'green',
		'blue',
		'purple',
		'orange',
	]
	var cardEl = createEl('div')
	cardEl.item = item
	cardEl.dataset.id = item.id
	cardEl.params = params
	cardEl.showLvl = showLvl
	cardEl.classList.add('item-card')
	if(~params.indexOf('tiny')){
		genTinyCard()
		return cardEl
	}

	var maxLvl = Object.keys(item.params).length
	var p = item.params[1] || {}
	var lvlSelector = genLevelSelector()
	var break_item, breaker = false, breaking = false
	if(item.break_items && fullList){
		var breaker = findItemByid(fullList, item.break_items[0].id)
		if(breaker)	{
			breaker = {
				name: breaker.name,
				color: gradeMap[breaker.grade]
			}
		} else{
			breaker = false
		}
	}
	if(item.breaking_items && fullList){
		var breaking = findItemByid(fullList, item.break_items[0].id)
		if(breaking)	{
			breaking = {
				name: breaking.name,
				color: gradeMap[breaking.grade]
			}
		} else{
			breaking = false
		}
	}
	cardEl.innerHTML = '\
		<div class="icon">\
			<div class="fave">&#10084;</div>\
		</div>\
		<h2 class="name '+ gradeMap[item.grade] +'">'+ item.name + '&nbsp;<span class="lvl"></span></h2>\
		<br clear="all">' +
		'<div class="descr"></div>' +
		'<div class="bonuses">'+genBonuses(item)+'</div>' +
		(item.player_min_lvl ? '<div class="min-lvl">Требуемый уровень персонажа: ' + item.player_min_lvl + '</div>' : '') +
		(breaker ? '<div class="break">Прорыв: <span class="'+breaker.color+'">'+ breaker.name +'</span></div>' : '') +
		(breaking ? '<div class="break">Прорывает: <span class="'+breaking.color+'">'+ breaking.name +'</span></div>' : '') +
		(item.obtaining ? '<div class="obtaining">'     + stat_namesDB.obt  + ': ' + item.obtaining + '</div>' : '') +
		lvlSelector


	cardEl.addEventListener('click', onCardClick)
	var tds = cardEl.$$('.round-select td')
	if(tds.length > 0) {
		tds[tds.length-1].click()
	} else {
		cardEl.showLvl(1)
	}
	function genLevelSelector(){
		var str = ''
		var p = item.params
		if(maxLvl != 1){
			str = '\
			<div class="round-select">\
				<table>\
					<tr>'
			for(var i=0; i<13; i++){
				if(p[i]) str+='<td>'+ i +'</td>'
			}
			str += '\
					</tr>\
				</table>\
			</div>'
		}
		return str
	}
	function onCardClick(e){
		var t = e.target
		var select = t.$up('.round-select')
		t = t.$up('td')
		if(select && t){
			select.$$('td').classList.remove('active')
			t.classList.add('active')
			var lvl = t.textContent
			cardEl.showLvl(lvl)
		}
	}
	function showLvl(lvl){
		var item = cardEl.item
		var bonuses = cardEl.$('.bonuses')
		var descr = cardEl.$('.descr')
		var lvlEl = cardEl.$('.name .lvl')
		var icon = cardEl.$('.icon')
		var p = item.params[lvl] || item.params[Object.keys(item.params)[0]]
		icon.style.backgroundImage = 'url("'+ p.icon +'")'
		if(Object.keys(item.params).length > 1){
			lvlEl.textContent = lvl
			bonuses.innerHTML = genBonuses(item, lvl)
		}
		descr.innerHTML = genDescr(p)
		cardEl.throwEvent('item-card:lvl-changed', {lvl: lvl})
		cardEl.lvl = lvl
	}
	function genDescr(p){
		var str = ''+
			(p['Сила атаки'] ? '<div class="atk">'  + 'Сила атаки'   + ': <b>' + p['Сила атаки'] + '</b></div>' : '') +
			(p['HP']         ? '<div class="hp">'   + 'Здоровье'     + ': <b>' + p['HP']         + '</b></div>' : '') +
			(p['Точность']   ? '<div class="acc">'  + 'Точность'     + ': <b>' + p['Точность']   + '</b></div>' : '') +
			(item.atp ?       '<div class="atp">'       + stat_namesDB.atp  + ': <b>' + item.atp       + '</b></div>' : '') +
			(item.def ?       '<div class="def">'       + stat_namesDB.def  + ': <b>' + item.def       + '</b></div>' : '') +
			(p['Крит. атака'] ?      '<div class="crit">'      + 'Крит. атака'  + ': <b>' + p['Крит. атака']     + '</b></div>' : '') +
			(item.cdef ?      '<div class="cdef">'      + stat_namesDB.cdef  + ': <b>' + item.cdef     + '</b></div>' : '') +
			(item.crithd ?    '<div class="crithd">'    + stat_namesDB.crithd + ': <b>' + item.crithd  + '</b></div>' : '') +
			(p['Пробивание'] ?       '<div class="prc">'       + 'Пробивание'   + ': <b>' + p['Пробивание']      + '</b></div>' : '') +
			(p['Блок'] ?        '<div class="bl">'        + 'Блок'    + ': <b>' + p['Блок']       + '</b></div>' : '') +
			(p['Уклонение'] ? '<div class="ev">'    + 'Уклонение'        + ': <b>' + p['Уклонение'] + '</b></div>' : '') +
			(!~params.indexOf('tiny') ? '<br clear="all">' : '')
		return str
	}
	function genBonuses(item, lvl){
		var lvl = lvl || 1
		var p = item.params[lvl] || item.params[Object.keys(item.params)[0]]
		var str = '<p>'+ p.bonuses.join('</p><p>') +'</p>'
		return str
	}
	function findItemByid(array, id){
		var item
		array.forEach(function(el){
			if(el.id == id )item = el
		})
		return item
	}
	//параметры
	//лайки
	if(~params.indexOf('favable')){
		cardEl.classList.add('favable')
		var fData = JSON.parse(localStorage.getItem(['idb-faved-items']) || '[]')
		var faved = false
		fData.forEach(function(el){
			if(el && el.id == item.id &&
				el.name == item.name) faved = true
		})
		if(faved) cardEl.classList.add('faved')
		cardEl.addEventListener('click', function(e){
			var cardEl = this
			if(e.target.$up('.fave')){
				if(cardEl.classList.contains('faved')){
					cardEl.classList.remove('faved')
					throwEvent('item-card:de-faved', {item: cardEl.item})
				} else{
					cardEl.classList.add('faved')
					throwEvent('item-card:faved', {item: cardEl.item})
				}
			}
		})
	}
	// END лайки
	// черная
	if(~params.indexOf('dark'))	cardEl.classList.add('dark')
	// END черная
	// END очень маленькая
	function genTinyCard(){
		cardEl.classList.add('tiny')
		cardEl.innerHTML = '\
			<div class="icon-wrap"><div class="icon"></div></div>\
			<div class="stats-wrap">\
				<div class="name '+ gradeMap[item.grade] +'">'+item.name+'</div>\
				<div class="stats"></div>\
			</div>'
		var p = item.params[Object.keys(item.params).last]
		cardEl.$('.icon').style.backgroundImage = 'url('+p.icon+')'
		cardEl.$('.stats').innerHTML = genDescr(p)
	}
	// END очень маленькая
	// END параметры
	this.el = cardEl
	return cardEl
}
