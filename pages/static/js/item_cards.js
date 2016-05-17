function generateItemCard(item, params){
	//params = {mode: full(default)\mini, level: 5(default)\10}
	//returns html
	if(!params) var params = {}
	if(params.mode == 'mini'){
		var html = '\
		<div class="item-card mini">\
			<div class="icon" style="background-image: url('+ item.icon +')"></div>\
			<div class="name '+ (item.color || 'blue' ) +'">'+ item.name.ru + '&nbsp;' + (params.level && item.color && item.color != 'blue' ? params.level : 5) +'</div>\
			<div class="descr">'+
				(item.atk ? '<div class="atk">Урон: '+ item.atk +'</div>' : '') +
				'<div class="obtaining">Подбор: '+ item.obtaining +'</div>\
			</div>\
			<br clear="all">\
		</div>\
		'
	} else {

	}
	return html
}
