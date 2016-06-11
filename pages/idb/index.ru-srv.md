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
<link rel="stylesheet" href="/static/css/idb/item-cards.css" type="text/css" />
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
				<input value="1" min="1" max="49" class="lvl-from" type="tel">
				<label>и до </label>
				<input value="50" min="1" max="50" class="lvl-to" type="tel">
			</div>
			<br clear="all">
		</div>
		<div class="bot">
			<div class="brick-select">
				<table class="options">
					<tr>
						<td>
							<div class="option" data-cat="weapons">
								<label>Оружие</label>
								<div class="variants">
									<div class="variant" data-subcat="fm">Форс-мастер</div>
									<div class="variant" data-subcat="asn">Ассасин</div>
									<div class="variant" data-subcat="sum">Призыватель</div>
									<div class="variant" data-subcat="kfm">Кунг-фу</div>
									<div class="variant" data-subcat="des">Дестроер</div>
									<div class="variant" data-subcat="bm">Мастера меча</div>
									<div class="variant" data-subcat="lsm">Лин мастер меча</div>
								</div>
							</div>
						</td>
						<td>
							<div class="option">
								<label>Бижутерия</label>
								<div class="variants">
									<div class="variant">Секира</div>
									<div class="variant">Меч</div>
									<div class="variant">Посох</div>
								</div>
							</div>
						</td>
						<td>
							<div class="option" data-cat="cats">
								<label>Предметы для морфа</label>
								<div class="variants">
									<div class="variant" data-subcat="all">Все</div>
								</div>
							</div>
						</td>
						<td>
							<div class="option" data-cat="fave">
								<label>Избранное <span class="fcounter"></span></label>
								<div class="variants">
									<div class="variant" data-subcat="all">Все</div>
								</div>
							</div>
						</td>
					</tr>
				</table>
				<div class="back"></div>
			</div>
			<div class="full-search-results hidden">
				<label class="title">Результаты поиска по запросу</label>
				<label class="what"></label>
				<div class="close">&times;</div>
			</div>
			<div class="cat-sort hidden">

			</div>
		</div>
	</div>
	<div class="body">
		<div class="top hidden">
			<h2 class="cat-header hidden">Оружие для ассассина</h2>
			<div class="f_l counter">
				<label class="title">Предметов всего: </label>
				<label class="count"></label>
				<input placeholder="Поиск внутри категории" class="local-search">
			</div>
			<div class="f_r">
				<div class="paginator" data-name="base-pages"></div>
			</div>
			<br clear="all">
		</div>
		<div class="bot"></div>
	</div>
</div>
<script src="/static/js/idb/idb.js"></script>
<script src="/static/js/ui/brick-select.js"></script>
<script src="/static/js/ui/simple-paginator.js"></script>
<script>
	Idb.init()
	initBrickSelects()
</script>
<script src="/static/js/idb/item-cards.js"></script>
<link rel="stylesheet" href="/static/css/ui/round-select.css" type="text/css" />
<link rel="stylesheet" href="/static/css/ui/simple-paginator.css" type="text/css" />
```
