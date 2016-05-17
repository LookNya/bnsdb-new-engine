# Морф кольца

```raw-html
<script src="/static/js/evolution_tree.js"></script>
<script src="/static/js/item_cards.js"></script>

<script src="/static/js/idb/ringsDB.js"></script>
<script src="/static/js/idb/ingrDB.js"></script>
<link rel="stylesheet" href="/static/css/evolution-tree.css" type="text/css" />
<link rel="stylesheet" href="/static/css/item-cards.css" type="text/css" />
<div class="evol-tree-wrap"></div>
<script>
var tree = {
	target: 'evol-tree-wrap',
	type: 'ring',
	prototype:[
{1:0, 2:[{item: 1}], 3:1}, {1:1, 2:[{item: 2, count: 2}], 3:2},
{1:3, 2:[{item: 1}], 3:4}, {1:4, 2:[{item: 2, count: 2}], 3:5},
{1:6, 2:[{item: 1}], 3:7}, {1:7, 2:[{item: 2, count: 2}], 3:8},
{1:9, 2:[{item: 1}], 3:10}, {1:10, 2:[{item: 2, count: 2}], 3:11},
{1:12, 2:[{item: 1}], 3:13}, {1:13, 2:[{item: 2, count: 2}], 3:14},
{1:15, 2:[{item: 1}], 3:16}, {1:16, 2:[{item: 2, count: 2}], 3:17},
{1:18, 2:[{item: 1}], 3:19}, {1:19, 2:[{item: 2, count: 2}], 3:20}
	]
}
generateEvTree(tree)
</script>
```
