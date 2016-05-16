
function generateEvTree(tree){
	var wrap = $('.' + tree.target)
	wrap.classList.add('evol-tree-wrap')

	var table = createEl('table')
	table.classList.add('evol-table')
	wrap.appendChild(table)
	var db = {}
	switch (tree.type) {
		case 'weapon':
			db = weaponsDB
			break
	}
	for(var i=0; i<tree.prototype.length; i++){
		var row = table.insertRow()

		var cell = row.insertCell()
		genItemCell(cell, tree.prototype[i][1])

		var cell = row.insertCell()
		genIngrCell(cell, tree.prototype[i][2])

		var cell = row.insertCell()
		genItemCell(cell, tree.prototype[i][3])

		if(tree.prototype.length-1 != i){
			var row = table.insertRow()
			row.classList.add('separator')
			var cell = row.insertCell()
			cell.setAttribute('colspan', 3)
			var div = createEl('div')
			div.classList.add('in-cell-relative-fix')
			cell.appendChild(div)

			var line = createEl('div')
			line.classList.add('line')
			div.appendChild(line)
		}
	}
	function genIngrCell(cell, iids){
		var str = '\
			<div class="in-cell-relative-fix ingrs">\
				<div class="horiz-line"></div>\
				<div class="items-wrap">\
					<div class="shadow"></div>\
					<div class="inner">\
		'
		iids.forEach(function(iid){
			var id = iid.item
			var count = iid.count || false
			var item = ingrDB[id]
			str += '\
				<div class="item">\
					<div class="icon" style="background-image: url('+ item.icon +')"></div>\
					'+ (count ? '<div class="count">'+count+'</div>' : '' )+'\
					<div class="descr">\
							<div class="name">'+ item.name +'</div>\
							<div class="obtaining">'+ item.obtaining +'</div>\
					</div>\
				</div>'
		})
		str += '\
					</div>\
				</div>\
			</div>'
		cell.innerHTML = str
	}
	function genItemCell(cell, iid){
			cell.classList.add('item-cell')
			var item = db[iid]
			cell.innerHTML = generateItemCard(item, {mode: 'mini'})
	}
}
