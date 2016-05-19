#!/bin/env node

let fs = require("fs")

let data = JSON.parse(fs.readFileSync("summoner.json"))
console.log(Object.keys(data))


// console.log(data.SkillTrees)
// console.log(data.SkillTrees[0].nodes)

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


// effects for trees generation
let effects_by_ext_tree_id_and_position = {}
for (let info of data.SkillTooltips) {
	for (let node of info.nodes) {
		// acquire: { value: 'Time Bomb Mastery', type: 'achievement' }
		// acquire: { value:"Rumblebees - Part 2", type:"book", location:[{type:"heroic", loc:"Bloodshade Harbor", image:"tooltip_party"}] }
		// nosubinfo: true
		known(node, 'position chi m1 sub range area cast cooldown condition '+
		     'acquire m2 nosubinfo depElement element tags name icon') //TODO
		known(node.m1, 'value scale element type before after affter num depElement') //TODO: depElement: '26101'
		node = check(node)
		node.m1 = check(node.m1)

		function typeableToString(obj) {
			if ('value' in obj)
				return obj.value
			if (obj.type == "damage")
				return `Deals ?? ~ ?? [${obj.scale}] ${obj.oneOf('', 'element')} ${obj.oneOf('', 'ex')} damage ${obj.oneOf('', 'after', 'affter')}`.replace(/\s+/g, ' ').trim()
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
		if (node.sub != null) node.sub.forEach((s,i) => {
			known(s, 'value type scale element ex before after num modId') //TODO: modId: 1
			s = check(s)
			ef['attribute'+(i==0?'':'_'+i)] = typeableToString(s)
		})
		if ('range' in node)  ef.range = node.range
		if ('area' in node)   ef.radius = node.area
		if ('cast' in node)   ef.cast = node.cast
		if ('cooldown' in node) ef.cooldown = node.cooldown
		if ('condition' in node) node.condition.forEach((c,i) => {
			known(c, 'value icon image type or') //TODO: type: "mod", or: true
			c = check(c)
			ef['condition'+(i==0?'':'_'+i)] = c.value
		})
		effects_by_ext_tree_id_and_position[info.id+"|"+node.position] = ef

		// ...
		/*
		"tags"
		"m2":[
			{
				"value":"Available while Soulburned"
			}
		]
		"m1":{
                  "type":"damage",
                  "scale":3.5,
                  "depElement":"26101"
               }
		"sub":[
                  {
                     "type":"damage",
                     "scale":1,
                     "ex":"additional",
                     "element":"earth",
                     "after":"to enemies inflicted by Ivy Poison"
                  }
               ]
		*/
	}
}


// trees (skills_data) generaton
let skills_data = {}
let last_tree_id = 0
let tree_name_by_ext_id = {}
for (let tree of data.SkillTrees) {
	let tree_id = ++last_tree_id

	let last_node_id=0, node_id_by_position={}
	for (let node of tree.nodes) node_id_by_position[node.position] = ++last_node_id

	function addTreeNode(node_id, params) {
		let node = {}
		if (params.name) node.name = params.name
		if (params.max_lvl != null) node.max_lvl = params.max_lvl
		if (params.effects && Object.keys(params.effects).length > 0) node.effects = params.effects
		if (params.children && params.children.length > 0) node.children = params.children
		if (params.img) node.img = params.img
		skills_data[`tree_${tree_id}|${node_id}`] = node
	}

	tree_name_by_ext_id[tree._id] = `tree_${tree_id}`

	addTreeNode("root", {
		name: "",
		max_lvl: -1,
		effects: effects_by_ext_tree_id_and_position[tree_id+"|"+0],
		children: [], //TODO
		img: null
	})

	for (let node of tree.nodes) {
		let node_id = node_id_by_position[node.position]

		addTreeNode(node_id, {
			name: "", //TODO
			max_lvl: -1, //TODO
			effects: effects_by_ext_tree_id_and_position[tree_id+"|"+node.position],
			relations: node.children && node.children.map(pos => node_id_by_position[pos]),
			img: null //TODO
		})
	}
}


// skills_list generation
let skills_by_keys = {}
for (let skill of data.SkillList) {
	if (!(skill.hotkey in skills_by_keys)) skills_by_keys[skill.hotkey] = []

	skills_by_keys[skill.hotkey].push({
		type: "skill",
		name: skill.name,
		obtain_lvl: skill.minLevel,
		tree: tree_name_by_ext_id[skill.treeId]
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
