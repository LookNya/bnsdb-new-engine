```config
 "type": "app",
 "title": "База предметов"
```
```raw-html
<style>
#hypercomments_widget {
	padding: 0px!important;
	margin-left: 17px;
}
</style>
<link rel="stylesheet" href="/static/css/idb/idb.css" type="text/css" />
<link rel="stylesheet" href="/static/css/ui/brick-select.css" type="text/css" />

<div class="base">
	<h1>
		База предметов
	</h1>
	<br clear="all">
	<div class="head">
		<div class="top">
			<div class="search f_l">
				<label>Поиск по всей базе: </label>
				<input class="full-search"><div class="butt full-search-butt">Искать</div>
			</div>
			<div class="filter f_r">
				<label>Показать предметы уровнем от </label>
				<input value="1" min="1" max="49" class="lvl-from">
				<label>и до </label>
				<input value="50" min="1" max="49" class="lvl-to">
			</div>
			<br clear="all">
		</div>
		<div class="bot">
			<div class="brick-select">
				<table class="options">
					<tr>
						<td>
							<div class="option">
								<label>Оружие</label>
								<div class="variants">
									<div>Секира</div>
									<div>Меч</div>
									<div>Посох</div>
								</div>
							</div>
						</td>
						<td>
							<div class="option">
								<label>Бижутерия</label>
								<div class="variants">
									<div>Секира</div>
									<div>Меч</div>
									<div>Посох</div>
								</div>
							</div>
						</td>
						<td>
							<div class="option">
								<label>Ингридиенты</label>
								<div class="variants">
									<div>Секира</div>
									<div>Меч</div>
									<div>Посох</div>
								</div>
							</div>
						</td>
					</tr>
				</table>
				<div class="back"></div>
			</div>
			<div class="full-search-results">
				<label class="title">Результаты поиска по запросу</label>
				<label class="what"></label>
				<div class="close">&times;</div>
			</div>
			<div class="cat-sort">

			</div>
		</div>
	</div>
	<div class="body"></div>
</div>
<script src="/static/js/idb/idb.js"></script>
<script src="/static/js/ui/brick-select.js"></script>
<script src="/static/js/ui/only-num-input.js"></script>
<script>
	Idb.init()
	initBrickSelects()
</script>

```
