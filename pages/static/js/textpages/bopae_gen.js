
var planeDivs = document.getElementsByClassName('for_plane')
function fillPlanes(){
	var lang = 'en'
	for(var i=0; i< planeDivs.length; i++){
		genPlaneHTML(planeDivs[i])
	}

	function genPlaneHTML(elem){
		var plane_id = elem.dataset.itemId
		var plane_data = bopaeDB[plane_id]
		var result = ''
		result += ''+
				'<div class="plane_top">\
					<div class="pt_left f_l">\
						<div class="p-head-wrap">\
							<div class="p-info f_l">\
								<div class="plane_title"><h2 class="'+ plane_data.color +'">'+ plane_data.name[lang] +'</h2></div>\
								<div class="plane_drop p_descr">'+ plane_data.obtaining +'</div>' +
								(plane_data.setBonus[0] ? '<div class="plane_set_3 p_descr">'+ genSetData(plane_data.setBonus[0]) +'</div>' : '') +
								(plane_data.setBonus[1] ? '<div class="plane_set_3 p_descr">'+ genSetData(plane_data.setBonus[1]) +'</div>' : '') +
								(plane_data.setBonus[2] ? '<div class="plane_set_3 p_descr">'+ genSetData(plane_data.setBonus[2]) +'</div>' : '') +
							'</div>\
							<div class="p-icon f_l">\
								<div class="pt_right f_r"><img src="'+plane_data.icon+'"></img></div>\
							</div>\
						</div>\
					</div>\
				</div>'
		result += '<div class="plane_table">' + genTable(plane_data) +'</div>'
		elem.innerHTML = result
	}
	function genSetData(data){
		var str = ''
		var keys = Object.keys(data)
		for(var i=0; i<keys.length; i++){
			str+= stat_namesDB[keys[i]][lang]+' +'+ data[keys[i]]
			if(i<keys.length-1){
				str+=', '
			} else {
				str+=' '
			}
		}
		return str
	}
	function genTable(data){
		var str='<div>'+
					'<div>'+
						'<div>'+'<div class="p_num">8</div>'+genPieceData(data.pieces[7])+'</div>'+
						'<div>'+'<div class="p_num">7</div>'+genPieceData(data.pieces[6])+'</div>'+
						'<div>'+'<div class="p_num">6</div>'+genPieceData(data.pieces[5])+'</div>'+
					'</div>'+
				'</div>'+
				'<div>'+
					'<div>'+
						'<div>'+'<div class="p_num">1</div>'+genPieceData(data.pieces[0])+'</div>'+
						'<div>'+'<div class="tbnsblogo"><div>BnS Base</div></div></div>'+
						'<div>'+'<div class="p_num">5</div>'+genPieceData(data.pieces[4])+'</div>'+
					'</div>'+
				'</div>'+
				'<div>'+
					'<div>'+
						'<div>'+'<div class="p_num">2</div>'+genPieceData(data.pieces[1])+'</div>'+
						'<div>'+'<div class="p_num">3</div>'+genPieceData(data.pieces[2])+'</div>'+
						'<div>'+'<div class="p_num">4</div>'+genPieceData(data.pieces[3])+'</div>'+
					'</div>'+
				'</div>'
		/*
		var str='<div>'+
					'<div><div>'+'<div class="p_num">8</div>'+genPieceData(data['piece_8'])+'</div></div>'+
					'<div><div>'+'<div class="p_num">1</div>'+genPieceData(data['piece_1'])+'</div></div>'+
					'<div><div>'+'<div class="p_num">2</div>'+genPieceData(data['piece_2'])+'</div></div>'+
				'</div><div>'+
					'<div><div>'+'<div class="p_num">7</div>'+genPieceData(data['piece_7'])+'</div></div>'+
					'<div class="tbnsblogo">BnS Base</div>'+
					'<div><div>'+'<div class="p_num">3</div>'+genPieceData(data['piece_3'])+'</div></div>'+
				'</div><div>'+
					'<div><div>'+'<div class="p_num">6</div>'+genPieceData(data['piece_6'])+'</div></div>'+
					'<div><div>'+'<div class="p_num">5</div>'+genPieceData(data['piece_5'])+'</div></div>'+
					'<div><div>'+'<div class="p_num">4</div>'+genPieceData(data['piece_4'])+'</div></div>'+
				'</div>'
		*/
		return str
	}
	function genPieceData(data){
		var str = ''
		if(data.mainStatsNames){
			var statNames = data.mainStatsNames
			statNames.forEach(function(stat){
				var localStatName = stat_namesDB[stat][lang]
				str+='<div class="main_stat">'+localStatName+' '+ data.mainStatsNums[0]+'–'+data.mainStatsNums[2]+'</div>'
			})

		}
		if(data.addStatNames){
			var statNames = data.addStatNames
			statNames.forEach(function(stat){
				var localStatName = stat_namesDB[stat][lang]
				str+='<div>'+localStatName+' '+ data.addStatNums[0]+ ( data.addStatNums[1] ? '–'+data.addStatNums[1] : '' )+'</div>'
			})
		}
		return str
	}
}
