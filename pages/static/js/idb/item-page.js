Ipa = {
	el: $('.container .body'),
	init: function(){
		//не должно быть так
		Model.xhr('/json/weapons/sum.json', {}, Ipa.handleRawData)

	},
	handleRawData: function(data){
		Ipa.rawData = JSON.parse(data)
		//не должно быть так
		Ipa.el.appendChild(new ItemCard(Ipa.rawData[7], ['favable', 'dark'], Ipa.rawData))
	},
}


// ***********************************************
Model = {}
Model.xhr = function(href, params, onOk, onErr){
		function getXmlHttp(){
		var xmlhttp
		try {
			xmlhttp = new ActiveXObject("Msxml2.XMLHTTP")
		} catch (e) {
			try {
				xmlhttp = new ActiveXObject("Microsoft.XMLHTTP")
			} catch (E) {
				xmlhttp = false
			}
		}
		if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
			xmlhttp = new XMLHttpRequest()
		}
		return xmlhttp
	}
	var xmlhttp = getXmlHttp()
	xmlhttp.open('GET', href, true)
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4) {
			 if(xmlhttp.status == 200) {
				onOk(xmlhttp.responseText)
			}else{
				onErr && onErr(xmlhttp.responseText)
			}
		}
	}
	xmlhttp.send(null)
}
Utils = {}
Utils.rusify = (function() {
	var s = "qй wц eу rк tе yн uг iш oщ pз [х ]ъ "+
					 "aф sы dв fа gп hр jо kл lд ;ж 'э "+
						"zя xч cс vм bи nт mь ,б .ю /.";
	var h = {};
	for (var i=0; i<s.length; i+=3) h[s[i]] = s[i+1];

	return function(str) {
		return str.toLowerCase().replace(/[A-z\[\];',\.\/]/g, function(l) {
			return l in h ? h[l] : l;
		})
	}
})();
