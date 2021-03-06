SimplePaginator = function(el, num, step){
	var step = step || 10
	if(el.classList.contains('simple-paginator'))return
	el.classList.add('simple-paginator')
	el.max = 0
	el.currPage = 0

	function refreshPages(pagesEl, num, curr){

		var start = 0
		while(start + step < curr){
			start+=step
		}
		pagesEl.innerHTML = ''
		var count = 0
		for(var i=start; i<num; i++){
			count++
			var page = createEl('a')
			page.textContent = i
			page.dataset.page = i
			pagesEl.appendChild(page)
			if(i==curr) page.classList.add('active')
			if(count>step && i+1 != el.max) {
				var page = createEl('a')
				page.textContent = '…'
				page.dataset.page = '-1'
				pagesEl.appendChild(page)

				var page = createEl('a')
				page.textContent = num - 1
				page.dataset.page = num - 1
				pagesEl.appendChild(page)
				break
			}
		}
	}

	el.init = function(num){
		el.max = num
		el.currPage = 0
		el.innerHTML = ''

		var first = createEl('div')
		first.dataset.page = 'first'
		first.className = 'first'
		// first.textContent = '❰❰'
		first.textContent = 'Начало'
		el.appendChild(first)

		var prevOne = createEl('div')
		prevOne.dataset.page = 'prevOne'
		prevOne.className = 'prevOne'
		prevOne.textContent = '❰'
		// prevOne.textContent = '-10'
		el.appendChild(prevOne)

		var pages = createEl('div')
		pages.className = 'pages'
		el.appendChild(pages)
		refreshPages(pages, num, 0)

		var nextOne = createEl('div')
		nextOne.dataset.page = 'nextOne'
		nextOne.className = 'nextOne'
		nextOne.textContent = '❱'
		// nextOne.textContent = '+10'
		el.appendChild(nextOne)

		var last = createEl('div')
		last.dataset.page = 'last'
		last.className = 'last'
		// last.textContent = '❱❱'
		last.textContent = 'Конец'
		el.appendChild(last)
	}
	function switchToPage(index){
		el.currPage = index
		var pagesEl = el.$('.pages')
		refreshPages(pagesEl, el.max, index)
		throwEvent('paginator:' + (el.dataset.name ? el.dataset.name+':' : '') + 'changed', {page: +index})
	}
	el.openPage = function(index, silent){
		if(silent){
			//просто покрасить
			var pagesEl = this.$('.pages')
			refreshPages(pagesEl, this.max, index)
		} else {
			var pagesEl = this.$('.pages')
			pagesEl.$('[data-page="'+index+'"]').click()
		}
	}
	el.addEventListener('click', function(e){
		var t = e.target
		var el = this
		if(t.classList.contains('pages') || t.classList.contains('simple-paginator') ) return
		var index = t.dataset.page
		switch (index){
			case '-1':
				return
			break
			case 'first':
				index = 0
			break
			case 'prevOne':
				index = +el.currPage - 1
				if(index < 0) index = 0
			break
			case 'nextOne':
				index = +el.currPage + 1
				if(index > el.max-1) index = el.max-1
			break
			case 'last':
				index = el.max-1
			break
			default:
			break
		}
		switchToPage(index)
		el.currPage = index
	})
	if(num) el.init(num)
}
