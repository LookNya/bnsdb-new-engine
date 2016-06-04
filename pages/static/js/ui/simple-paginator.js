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

		var prevten = createEl('div')
		prevten.dataset.page = 'prevten'
		prevten.className = 'prevten'
		// prevten.textContent = '❰'
		prevten.textContent = '-10'
		el.appendChild(prevten)

		var pages = createEl('div')
		pages.className = 'pages'
		el.appendChild(pages)
		refreshPages(pages, num, 0)

		var nextTen = createEl('div')
		nextTen.dataset.page = 'nextTen'
		nextTen.className = 'nextTen'
		// nextTen.textContent = '❱'
		nextTen.textContent = '+10'
		el.appendChild(nextTen)

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
	el.addEventListener('click', function(e){
		var t = e.target
		if(t.classList.contains('pages') || t.classList.contains('simple-paginator') ) return
		var index = t.dataset.page
		switch (index){
			case '-1':
				return
			break
			case 'first':
				switchToPage(0)
			break
			case 'prevten':
				var index = +el.currPage - step
				index < 0 ? switchToPage(0) : switchToPage(index)
			break
			case 'nextTen':
				index = +el.currPage + step
				index > el.max-1 ? switchToPage(el.max-1) : switchToPage(index)
			break
			case 'last':
				switchToPage(el.max-1)
			break
			default:
				switchToPage(index)
			break
		}
	})
	if(num) el.init(num)
}
