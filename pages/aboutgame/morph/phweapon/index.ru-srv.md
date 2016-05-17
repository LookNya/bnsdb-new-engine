# Морф оружия Пути Хона

```raw-html
<script src="/static/js/evolution_tree.js"></script>
<script src="/static/js/item_cards.js"></script>

<script src="/static/js/idb/weaponsDB.js"></script>
<script src="/static/js/idb/ingrDB.js"></script>
<link rel="stylesheet" href="/static/css/evolution-tree.css" type="text/css" />
<link rel="stylesheet" href="/static/css/item-cards.css" type="text/css" />
<div class="evol-tree-wrap"></div>
<script>
var tree = {
	target: 'evol-tree-wrap',
	type: 'weapon',
	prototype:[
{1:0, 2:[{item: 1}], 3:1}, {1:0, 2:[{item: 2, count: 2}], 3:2},
{1:3, 2:[{item: 1}], 3:4}, {1:3, 2:[{item: 2, count: 2}], 3:5},
{1:6, 2:[{item: 1}], 3:7}, {1:6, 2:[{item: 2, count: 2}], 3:8},
{1:9, 2:[{item: 1}], 3:10}, {1:9, 2:[{item: 2, count: 2}], 3:11},
{1:12, 2:[{item: 1}], 3:13}, {1:12, 2:[{item: 2, count: 2}], 3:14},
{1:15, 2:[{item: 1}], 3:16}, {1:15, 2:[{item: 2, count: 2}], 3:17},
{1:18, 2:[{item: 1}], 3:19}, {1:18, 2:[{item: 2, count: 2}], 3:20},
{1:21, 2:[{item: 1}], 3:22}, {1:21, 2:[{item: 2, count: 2}], 3:23},
{1:24, 2:[{item: 1}], 3:25}, {1:24, 2:[{item: 2, count: 2}], 3:26},
/*
{1:27, 2:[{item: 1}], 3:28}, {1:27, 2:[{item: 2, count: 2}], 3:29},
{1:30, 2:[{item: 1}], 3:31}, {1:30, 2:[{item: 2, count: 2}], 3:32},
{1:33, 2:[{item: 1}], 3:34}, {1:33, 2:[{item: 2, count: 2}], 3:35},
{1:36, 2:[{item: 1}], 3:37}, {1:36, 2:[{item: 2, count: 2}], 3:38}, */
	]
}
generateEvTree(tree)
</script>
```
