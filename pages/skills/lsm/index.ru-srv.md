```config
 "type": "app",
 "title": "Мастер клинков линов"
```

```raw-html
<link rel="stylesheet" href="/static/css/calc.css">
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
<script src = "/static/js/calc/db/skillslist_l.js"></script>
<script src = "/static/js/calc/db/skillsdata_l.js"></script>
<script src="/static/js/calc/utils.js"></script>
<script src="/static/js/calc/ui.js"></script>
<p class="mobile_calc">Эта страница отображается только в полной версии сайта.</p>
	<div class="calc_content" id='content'>
		<div>
```
# Умения мастера клинка линов
```raw-html
<div class="calc_mode_selector">отобразить как <span class="selected_calc_mode" id="calcmodeCalc">калькулятор умений </span>или <span id="calcmodeBuild">только билд</span></div>
			<br clear="all" />
		</div>

<div id="calc_body" class="view_calc">
			<div id="buildView">
				<div id="buildViewContent">
					<div id="buildViewBackBut">Вернуться к калькулятору</div>
					<div id="buildViewHTML"></div>
				</div>
			</div>
			<div class="skills_list_block">
				<div class="ic_background"></div>
				<div class="items_search">
					<div class="search_form_wrap">
						<div class="f_l search_title">Поиск умения</div>
						<div class="f_l">
							<input id="search_input" class="f_l" value="">
						</div>
						<div class="f_l selector_title">Сортировка</div>
						<div class="selector f_l" style="width: 100%;">
							<div id="skills_order_standard_but" class="class_but f_l selected_but">Стандартная</div>
							<div id="skills_order_levels_but" class="class_but f_l">По уровням</div>
						</div>
					</div>
				</div>
				<div class="f_l" id="skills_list_wrap"></div>
			</div>
			<div class="tree_info_wrap">
				<div id="reset_all_but">Сбросить весь билд</div>
				<div id="reset_tree_but">Сбросить дерево</div>
				<div id="counter"></div>
				<div id="pas"><div id="pasImg"></div></div>
				
				<div class="f_l" id="skills_tree_wrap"></div>
				<div class="f_l" id="skills_info_wrap">
					<img id="subskill_icon_img">
					<div id="subskill_name_box"></div>
					<span class="ef_title"></span><div class="effect_group effect_group_cost"></div>
					<span class="ef_title">Урон </span><div class="effect_group effect_group_damage"></div>
					<span class="ef_title">Эффекты </span><div class="effect_group effect_group_attribute"></div>
					<table>
						<tbody><tr>
							<td><span class="ef_title">Дистанция </span></td>
							<td><span class="ef_title">Радиус </span></td>
							<td><span class="ef_title">Перезарядка </span></td>
							<td><span class="ef_title">Время каста </span></td>
							<td><span class="ef_title">Условия применения </span></td>
						</tr>
						<tr>
							<td><div class="effect_group effect_group_range"></div></td>
							<td><div class="effect_group effect_group_radius"></div></td>
							<td><div class="effect_group effect_group_cooldown"></div></td>
							<td><div class="effect_group effect_group_cast"></div></td>
							<td><div class="effect_group effect_group_condition"></div></td>
						</tr>
					</tbody></table>
					<div id="subskill_note"></div>
				</div>
			</div>
			<br clear="all">
		</div>
		<div class="classes_links">
			А также умения классов
			<a href="/skills/bm">Мастер клинка</a>,
			<a href="/skills/lsm">Мастер клинка линов</a>,
			<a href="/skills/sum">Мастер призыва</a>,
			<a href="/skills/des">Мастер секиры</a>,
			<a href="/skills/kfm">Кунг-фу мастер</a>,
			<a href="/skills/fm">Мастер стихий</a></br>
			<p style="color: grey;padding-top: 5px;">Калькулятор находится в стадии тестирования. Обо всех найденных неточностях сообщайте в комментарии.</p>
		</div>
		<br clear="all" />
		<div id="tutorPopup" class="hidden">
			<div id="tutorContent"></div>
			<div id="tutorGoBut">Да</div>
			<div id="tutorCancelBut">Закрыть</div>
		</div>
	
	
<script>
document.addEventListener('scroll', pas)
function pas(){
	if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight && !pasImg.classList.contains('jumping')) {
        pasImg.classList.add('jumping')
		jumpTimeout = setTimeout(function(){pasImg.classList.remove('jumping')},700)
    }
}
</script>

<script src="/static/js/calc/engine.js"></script>

```