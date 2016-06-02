#!/bin/env node

let fs = require("fs")


const attack = 13
const weapon_constant = 1

let data = JSON.parse(fs.readFileSync("summoner.json"))
console.log(Object.keys(data))


function known(obj, attrs) {
	attrs = attrs.split(' ')
	for (let i in obj) {
		if (attrs.indexOf(i) == -1) console.log('!!! unexpected attribute', i, 'in', obj)
	}
}

function check(obj) {
	let p = new Proxy(obj, {
		get: function(obj, name){ if (!(name in obj)) console.log(`!!! missing attribute`, name, 'in', obj); return obj[name] }
		//has: function(name){ return name in obj },
		//set: function(obj, name, val) { obj[name] = val; return true }
	})
	p._ = function(...names){ for (let name of names) if (name in obj) return obj[name]; return undefined }
	p.oneOf = function(def, ...names){ for (let name of names) if (name in obj) return obj[name]; return def }
	return p
}


// effects name for trees generation
let params_by_ext_tree_id_and_position = {}
for (let info of data.SkillTooltips) {
	for (let node of info.nodes) {
		// acquire: { value: 'Time Bomb Mastery', type: 'achievement' }
		// acquire: { value:"Rumblebees - Part 2", type:"book", location:[{type:"heroic", loc:"Bloodshade Harbor", image:"tooltip_party"}] }
		// nosubinfo: true
		known(node, 'name position chi m1 sub range area cast cooldown condition '+
		      'm2 '+ //some additional info
		      'acquire '+ //получаемая от вкачивания ачивка или какая-то другая непонятная фигня
		      'element '+ //earth, wind
		      'nosubinfo '+ //скрывает табличку с subinfo'й
		      'depElement '+ //как element, только не явный, а копируемый по айди
		      'tags icon')
		known(node.m1, 'value scale element type before after affter num depElement')
		node = check(node)
		node.m1 = check(node.m1)

		function typeableToString(obj) {
			if ('value' in obj)
				return obj.value
			if (obj.type == "damage") { //TODO: obj.dualScale
				let min = Math.round((attack - weapon_constant) * obj.scale)
				let max = Math.round((attack + weapon_constant) * obj.scale)
				return `${obj._('before') ? obj.before+' deals' : 'Deals'} ${min} ~ ${max} ${obj.oneOf('', 'element')} ${obj.oneOf('', 'ex')} damage ${obj.oneOf('', 'after', 'affter')}`.replace(/\s+/g, ' ').trim()
			}
			if (obj.type == "number")
				return `${obj.before} ${obj.num} ${obj.oneOf('', 'after', 'affter')}`.trim()
			if (obj.type == "percent")
				return `${obj.before} ${obj.num}% ${obj.oneOf('', 'after', 'affter')}`.trim()
			console.log('!!! unknown obj.type: '+obj.type)
			return ''
		}

		let ef = {}
		ef.cost = node.chi
		ef.damage = typeableToString(node.m1)
		;(node.sub==null ? [] : node.sub).concat(node.m2==null ? [] : node.m2).forEach((s,i) => {
			known(s, 'value type scale element ex before after num modId') //`modId: 1` - пареметр непонятного назначения
			s = check(s)
			ef['attribute'+(i==0?'':'_'+i)] = typeableToString(s)
		})
		if ('range' in node)  ef.range = node.range
		if ('area' in node)   ef.radius = node.area.value
		if ('cast' in node)   ef.cast = node.cast
		if ('cooldown' in node) ef.cooldown = node.cooldown
		if ('condition' in node) node.condition.forEach((c,i) => {
			known(c, 'value icon image type or')
			// `type: "mod"` - параметр непонятного назначения, используется вместе с `value: "bla-bla"`
			// `or: true` - при наличии этого к тексту скилла добавляется в конце " OR", такое не надо
			c = check(c)
			ef['condition'+(i==0?'':'_'+i)] = c.value
		})
		params_by_ext_tree_id_and_position[info._id+"|"+node.position] = {effects: ef, name: node.name}
	}
}


// trees (skills_data) generaton
let skills_data = {}
let last_tree_id = 0
let tree_name_by_ext_id = {}
let last_node_id = 0
let multiroot_numbers_by_ext_skill_id = {}
let multiroot_counts_by_ext_tree_id = {}
let multiroot_tree_ids_by_ext_tree_id = {}
for (let skill of data.SkillList) {
	if (skill.treeId == null) continue
	multiroot_counts_by_ext_tree_id[skill.treeId] = (multiroot_counts_by_ext_tree_id[skill.treeId] || 0) + 1
}
for (let id in multiroot_counts_by_ext_tree_id) {
	if (multiroot_counts_by_ext_tree_id[id] == 1)
		delete multiroot_counts_by_ext_tree_id[id]
	else
		multiroot_counts_by_ext_tree_id[id] = 0
}
for (let skill of data.SkillList) {
	if (!(skill.treeId in multiroot_counts_by_ext_tree_id)) continue
	if ('disableFlag' in skill) continue
	multiroot_numbers_by_ext_skill_id[skill._id] = (multiroot_counts_by_ext_tree_id[skill.treeId] ++)
}
for (let skill of data.SkillList) {
	if (!(skill.treeId in multiroot_counts_by_ext_tree_id)) continue
	if (!('disableFlag' in skill)) continue
	multiroot_numbers_by_ext_skill_id[skill._id] = (multiroot_counts_by_ext_tree_id[skill.treeId] ++)
}
function addTreeNode(tree_id, node_id, params) {
	let node = {}
	if (params.name) node.name = params.name
	if (params.max_lvl != null) node.max_lvl = params.max_lvl
	if (params.effects && Object.keys(params.effects).length > 0) node.effects = params.effects
	if (params.relations && params.relations.length > 0) node.relations = params.relations
	if (params.img) node.img = params.img
	skills_data[`tree_${tree_id}|${node_id}`] = node
}
for (let skill of data.SkillList) {
	if (skill.treeId == null) continue
	let tree = data.SkillTrees.find(t => t._id == skill.treeId)

	let tree_id = ++last_tree_id
	let multiroot_num = multiroot_numbers_by_ext_skill_id[skill._id]
	if (multiroot_num === undefined) {
		//
	} else if (multiroot_num === 0) {
		tree_id += ".0"
		multiroot_tree_ids_by_ext_tree_id[tree._id] = tree_id
	} else {
		continue
	}

	let node_id_by_position={}
	for (let node of tree.nodes) node_id_by_position[node.position] = ++last_node_id

	tree_name_by_ext_id[skill._id] = `tree_${tree_id}`

	let params = params_by_ext_tree_id_and_position[skill._id+"|"+0]
	addTreeNode(tree_id, "root", {
		name: params.name,
		effects: params.effects,
		relations: [node_id_by_position[11]],
		img: "http://local.bnsbase.com/img/sc/a/1.jpg" //TODO
	})

	for (let node of tree.nodes) {
		let node_id = node_id_by_position[node.position]

		let params = params_by_ext_tree_id_and_position[skill._id+"|"+node.position]
		addTreeNode(tree_id, node_id, {
			name: params.name,
			max_lvl: 1, //TODO
			effects: params.effects,
			relations: node.children && node.children.map(pos => node_id_by_position[pos]),
			img: null //TODO
		})
	}
}
/*
TODO: position: -1
TODO: some trees in params but not in by_ext_id
for (let ext_tree_id_and_position in params_by_ext_tree_id_and_position) {
	let [ext_tree_id, ext_position] = ext_tree_id_and_position.split("|")
	if (ext_tree_id in tree_name_by_ext_id) continue
	console.log(ext_tree_id, ext_position)
 }*/
for (let skill of data.SkillList) {
	if (skill.treeId == null) {
		let ext_tree_id = skill._id

		let params = params_by_ext_tree_id_and_position[ext_tree_id+"|"+0]
		let tree_id = ++last_tree_id
		tree_name_by_ext_id[ext_tree_id] = `tree_${tree_id}`

		addTreeNode(tree_id, "root", {
			name: params.name,
			effects: params.effects,
			img: "/img/sc/a/1.jpg" //TODO
		})

		skill.treeId = skill._id
	} else {
		let multiroot_num = multiroot_numbers_by_ext_skill_id[skill._id]
		if (multiroot_num > 0) {
			let root_tree_id = multiroot_tree_ids_by_ext_tree_id[skill.treeId]

			let params = params_by_ext_tree_id_and_position[skill._id+"|"+(skill.disableFlag||0)]
			let tree_id = root_tree_id.match(/\d+/)[0] + "." + multiroot_num
			skill.treeId += "_"+multiroot_num
			tree_name_by_ext_id[skill._id] = `tree_${tree_id}`

			addTreeNode(tree_id, "root", {
				name: params.name,
				effects: params.effects,
				img: "/img/sc/a/1.jpg" //TODO
			})
		}
	}
}


// skills_list generation
let skills_by_keys = {}
for (let skill of data.SkillList) {
	if (!(skill.hotkey in skills_by_keys)) skills_by_keys[skill.hotkey] = []
	known(skill, '_id hotkey name icon treeId minLevel disableFlag '+
	      'subEntry change') //TODO

	let tree = tree_name_by_ext_id[skill._id]
	if (!tree) {
		console.log("!!! unknown tree", skill.treeId, "/", skill._id, "in skill", skill)
		tree = -1
	}

	skills_by_keys[skill.hotkey].push({
		type: "skill",
		name: skill.name,
		obtain_lvl: skill.minLevel,
		tree
	})
}

let skills_list = {}
let last_skill_id = 0
for (let key in skills_by_keys) {
	skills_list["sl_"+ (++last_skill_id)] = {
		type: "separator",
		name: key
	}

	for (let skill of skills_by_keys[key]) {
		skills_list["sl_"+ (++last_skill_id)] = skill
	}
}


fs.writeFileSync("skillslist.js", "skills_list = " + JSON.stringify(skills_list, null, "\t") + "\n")
fs.writeFileSync("skillsdata.js", "skills_data = " + JSON.stringify(skills_data, null, "\t") + "\n")


/*
function numberWithCommas(e) {
	return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}
// t - attack
// a - weapon constant
// p - element coef, 100% (no change) by default
// n - additional damage
// min,max = Math.round((attack±wpc)*scale)
return e.dualScale
	? (
		c = " [" + e.dualScale[0] + ", " + e.dualScale[1] + "] ",
		l = numberWithCommas(Math.round((t - a) * e.dualScale[0] * p) + n),
		s = numberWithCommas(Math.round((t + a) * e.dualScale[1] * p) + n)
	)
	: (
		c = " [" + e.scale.toFixed(2) + "] ",
		l = numberWithCommas(Math.round(Math.round((t - a) * e.scale) * p + n)),
		s = numberWithCommas(Math.round(Math.round((Number(t) + Number(a)) * e.scale) * p + n))
	),

"" != o.trim() && (o = " " + o), //after
"Deals " != u && (u += " deals "),

"" != h && (d = React.createElement("img", {
	height: "20",
	width: "20",
	className: "element-img",
	src: "/img/skill_attack_" + h + ".png"
})),

e.ex
	? [
		React.createElement("span", null , u + " " + l + " ~ " + s),
		React.createElement("span", {className: "scale"}, c),
		React.createElement("span", null , e.ex + " " + h + " damage" + o),
		d
	]
: e.increasing
	? [
		React.createElement("span", null , "Damage dealt increases by " + l + " ~ " + s),
		React.createElement("span", {className: "scale"}, c),
		React.createElement("span", null , h + " damage" + o),
		d
	]
: [
	React.createElement("span", null , u + " " + l + " ~ " + s),
	React.createElement("span", {className: "scale"}, c),
	React.createElement("span", null , h + " damage" + o),
	d
]
*/
