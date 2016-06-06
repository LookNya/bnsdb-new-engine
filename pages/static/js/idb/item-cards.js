function ItemCard(item, params){
	var gradeMap = [
		'white',
		'green',
		'blue',
		'purple',
		'orange',
	]
	var cardEl = createEl('div')
	cardEl.data = item
	cardEl.id = item.id
	var maxLvl = Object.keys(item.params).length
	var lvlSelector = genLevelSelector()
	var p = item.params[1] || {}
	console.log(p)
	cardEl.classList.add('item-card')
	cardEl.innerHTML = '\
		<div class="icon" style="background-image: url('+ (item.params[1] ? item.params[1].icon : '') +')"></div>\
		<div class="name '+ gradeMap[item.grade] +'">'+ item.name + '&nbsp; <span class="lvl"></span></div>\
		<br clear="all">' +
			lvlSelector
			+
			(item.obtaining ? '<div class="obtaining">'     + stat_namesDB.obt  + ': ' + item.obtaining + '</div>' : '') +
			'<div class="descr">'+
			(p['Сила атаки'] ? '<div class="atk f_l">'  + 'Сила атаки'      + ': <b>' + p['Сила атаки'] + '</b></div>' : '') +
			(p['HP'] ? '<div class="hp f_l">'  + 'Здоровье'      + ': <b>' + p['HP'] + '</b></div>' : '') +
			(p['Точность'] ?  '<div class="acc f_l">'   + 'Точность'  + ': <b>' + p['Точность']      + '</b></div>' : '') +
			(item.atp ?       '<div class="atp f_l">'       + stat_namesDB.atp  + ': <b>' + item.atp       + '</b></div>' : '') +
			(item.def ?       '<div class="def f_l">'       + stat_namesDB.def  + ': <b>' + item.def       + '</b></div>' : '') +
			(item.crit ?      '<div class="crit f_l">'      + stat_namesDB.crit  + ': <b>' + item.crit     + '</b></div>' : '') +
			(item.cdef ?      '<div class="cdef f_l">'      + stat_namesDB.cdef  + ': <b>' + item.cdef     + '</b></div>' : '') +
			(item.crithd ?    '<div class="crithd f_l">'    + stat_namesDB.crithd + ': <b>' + item.crithd  + '</b></div>' : '') +
			(p['Пробивание'] ?       '<div class="prc f_l">'       + 'Пробивание'   + ': <b>' + p['Пробивание']      + '</b></div>' : '') +
			(p['Блок'] ?        '<div class="bl f_l">'        + 'Блок'    + ': <b>' + p['Блок']       + '</b></div>' : '') +
			(p['Уклонение'] ? '<div class="ev f_l">'    + 'Уклонение'        + ': <b>' + p['Уклонение'] + '</b></div>' : '') +
		'</div>\
		<br clear="all">\
	'
	return cardEl

	function genLevelSelector(){
		var str = ''
		switch(maxLvl){
			case 5:
			str = '\
			<div class="round-select">\
				<table>\
					<tr>\
						<td>\
							1\
						</td>\
						<td>\
							5\
						</td>\
					</tr>\
				</table>\
			</div>'
			break
			case 10:
			str = '\
			<div class="round-select">\
				<table>\
					<tr>\
						<td>\
							1\
						</td>\
						<td>\
							5\
						</td>\
						<td>\
							10\
						</td>\
					</tr>\
				</table>\
			</div>'
			break
		}
		return str
	}
}


function generateItemCard(item, params){
	//params = {mode: full(default)\mini, level: 5(default)\10}
	//returns html
	var lang = 'en'
	if(!params) var params = {}
	if(params.mode == 'mini'){
		var html = ''
		if(params.type == 'weapon'){
			html += '\
			<div class="item-card mini">\
				<div class="icon" style="background-image: url('+ item.icon +')"></div>\
				<div class="name '+ (item.color || 'blue' ) +'">'+ item.name[lang] + '&nbsp;' + (params.level && item.color && item.color != 'blue' ? params.level : 5) +'</div>\
				<div class="descr">'+
					(item.atk ?       '<div class="atk">'       + stat_namesDB.atk[atk]  + ': ' + item.atk       + '</div>' : '') +
					(item.obtaining ? '<div class="obtaining">' + stat_namesDB.obt[lang] + ': ' + item.obtaining + '</div>' : '') +
				'</div>\
				<br clear="all">\
			</div>'
		}else if(params.type == 'accessory'){
			html += '\
			<div class="item-card mini accessory">\
				<div class="icon" style="background-image: url('+ item.icon +')"></div>\
				<div class="name '+ (item.color || 'blue' ) +'">'+ item.name[lang] + '&nbsp;' + (params.level && item.color && item.color != 'blue' ? params.level : 5) +'</div>\
				<div class="descr">'+
					(item.obtaining ? '<div class="obtaining">'     + stat_namesDB.obt[lang]  + ': ' + item.obtaining + '</div>' : '') +
					(item.acc ?       '<div class="acc f_l">'       + stat_namesDB.acc[lang]  + ': <b>' + item.acc       + '</b></div>' : '') +
					(item.atp ?       '<div class="atp f_l">'       + stat_namesDB.atp[lang]  + ': <b>' + item.atp       + '</b></div>' : '') +
					(item.atk ?       '<div class="atk f_l">'       + stat_namesDB.atk[lang]  + ': <b>' + item.atk       + '</b></div>' : '') +
					(item.def ?       '<div class="def f_l">'       + stat_namesDB.def[lang]  + ': <b>' + item.def       + '</b></div>' : '') +
					(item.crit ?      '<div class="crit f_l">'      + stat_namesDB.crit[lang]  + ': <b>' + item.crit     + '</b></div>' : '') +
					(item.cdef ?      '<div class="cdef f_l">'      + stat_namesDB.cdef[lang]  + ': <b>' + item.cdef     + '</b></div>' : '') +
					(item.crithd ?    '<div class="crithd f_l">'    + stat_namesDB.crithd[lang] + ': <b>' + item.crithd  + '</b></div>' : '') +
					(item.prc ?       '<div class="prc f_l">'       + stat_namesDB.prc[lang]   + ': <b>' + item.prc      + '</b></div>' : '') +
					(item.bl ?        '<div class="bl f_l">'        + stat_namesDB.bl[lang]    + ': <b>' + item.bl       + '</b></div>' : '') +
					(item.ev ?        '<div class="ev f_l">'        + stat_namesDB.ev[lang]    + ': <b>' + item.ev       + '</b></div>' : '') +
				'</div>\
				<br clear="all">\
			</div>'
		}
	} else {

	}
	return html
}
