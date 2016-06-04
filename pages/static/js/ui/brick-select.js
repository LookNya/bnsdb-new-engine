function initBrickSelects(){
	var selects = $$('.brick-select')
	selects.forEach(function(select){
		if(select.classList.contains('initiated')) return
		select.classList.add('initiated')
		var table = select.$('table')
		table.addEventListener('mouseover', function(e){
			var table = e.target.$up('.options')
			if(!table) return
			var back = table.$up('.brick-select').$('.back')

			var variants = table.$$('.variants')
			var height = 0
			variants.forEach(function(el){
				var elh = el.offsetHeight
				if(elh > height) height = elh
			})
			back.style.height = height + 7 + 'px'

		})
		table.addEventListener('mouseout', function(e){
			var table = e.target.$up('.options')
			if(!table) return
			var back = table.$up('.brick-select').$('.back')
			back.style.height = 0
		})
		table.addEventListener('click', function(e){
			var target = e.target
			var table = this
			var data = {}
			var opt = target.$up('.option')
			if(opt) {
				table.$$('.option').classList.remove('active')
				opt.classList.add('active')
				data.cat = opt.dataset.cat
			}
			var variant = target.$up('.variant')
			if(variant) {
				table.$$('.variant').classList.remove('active')
				variant.classList.add('active')
				data.subcat = variant.dataset.subcat
			}
			throwEvent('brick-select:changed', data)
		})
	})
}
