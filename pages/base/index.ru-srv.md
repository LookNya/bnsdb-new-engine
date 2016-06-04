```config
 "type": "app",
 "title": "База предметов"
```
```raw-html
<style>
h1{
	padding-top: 40px;
	padding-left: 22px;
	float: left;
	font-size: 40px;
}
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
				<label>Поиск по всем предметам: </label>
				<input>
				<div class="butt">Искать</div>
			</div>
			<div class="filter f_r">
				<label>Показать предметы уровнем от </label>
				<input value = "0">
				<label>и до </label>
				<input value = "50">
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
			</div>
		</div>
	</div>
	<div class="body"></div>
</div>
<script src="/static/js/idb/idb.js"></script>
<script>
Idb.start()
</script>

```
