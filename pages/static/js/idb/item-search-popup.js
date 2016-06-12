function ItemSearchPp(data, params){
	var buff = []
	for(var i=0; i<data.length; i++){
		buff.push(data[i])
	}
	var data = buff
	var el = createEl('div')
	var items = []
	el.className = 'item-search-popup'
	el.innerHTML = '\
		<div class="search">\
			<input placeholder="Поиск предмета">\
		</div>\
		<div class="items"></div>'
	var fData = JSON.parse(localStorage.getItem(['idb-faved-items']) || '[]')
	var faved = []
	fData.forEach(function(item){
		var name = item.name
		var id = item.id
		data.forEach(function(el){
			if(el.id == id && el.name == name){
				 faved.push(el)
				 data.remove(el)
			 }
		})
	})
	if(faved.length != 0){
		el.$('.items').innerHTML += '<div class="separator">Избранное</div>'
		faved.forEach(function(item){
			var card = new ItemCard(item, ['tiny'])
			el.$('.items').appendChild(card)
			item.card = card
			items.push(item)
		})
		var div = createEl('div')
		div.className = 'separator'
		div.textContent = 'Остальные предметы'
		el.$('.items').appendChild(div)
	}
	data.forEach(function(item){
		var card = new ItemCard(item, ['tiny'])
		el.$('.items').appendChild(card)
		item.card = card
		items.push(item)
	})
	el.addEventListener('click', function(e){
		var card = e.target.$up('.item-card')
		if(card) throwEvent('item-search-popup:item-selected', {item: card.item})
	})
	el.items = items
	el.$('input').addEventListener('keyup', function(e){
		var value = this.value.toLowerCase()
		value = Utils.rusify(value)
		items.forEach(function(item){
			if(~item.name.toLowerCase().indexOf(value)){
				item.card.classList.remove('hidden')
			} else {
				item.card.classList.add('hidden')
			}
		})
	})
	return el
}
