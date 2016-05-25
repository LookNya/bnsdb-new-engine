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
