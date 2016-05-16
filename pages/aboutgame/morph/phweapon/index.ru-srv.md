# Морф оружия Пути Хона

```raw-html
<script src="/static/js/evolution_tree.js"></script>
<script src="/static/js/item_cards.js"></script>

<script src="/static/js/idb/weaponsDB.js"></script>
<link rel="stylesheet" href="/static/css/evolution-tree.css" type="text/css" />
<link rel="stylesheet" href="/static/css/item-cards.css" type="text/css" />
<div class="evol-tree-wrap"></div>
<script>
var tree = {
	target: 'evol-tree-wrap',
	type: 'weapon',
	prototype:[
		{1:1, 2:[{item: 1}], 3:2},
		{1:3, 2:[{item: 2, count: 2}, {item: 3, count: 5}], 3:4},
	]
}
generateEvTree(tree)
</script>
```
