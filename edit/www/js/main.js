"use strict"

var markedConfig = getMarkedConfig(marked)

function updatePreview() {
	preview_box.innerHTML = marked(main_area.value, markedConfig)
}
var update_timeout = -1
main_area.onkeyup = (e) => {
	clearTimeout(update_timeout)
	update_timeout = setTimeout(updatePreview, 200)
}

send_btn.onclick = (e) => {
	let xhr = new XMLHttpRequest()
	xhr.open('POST', './', true)
	xhr.onload = (e) => alert(xhr.responseText)
	xhr.onerror = (e) => { alert('error'); console.error(e) }
	xhr.send(main_area.value)
}
