skills_data = {
	"tree_1|root": {
		"name": "Приговор",
		"effects": {
			"cost": 10,
			"damage": "Deals 12 ~ 14 earth damage",
			"range": "From User",
			"radius": "3 м",
			"cast": "Instant",
			"cooldown": "Instant"
		},
		"relations": [
			1
		],
		"img": "/img/sc/d/1.png"
	},
	"tree_1|1": {
		"name": "Приговор",
		"max_lvl": 1,
		"effects": {
			"cost": 10,
			"damage": "Deals 16 ~ 18 earth damage",
			"range": "From User",
			"radius": "3 м",
			"cast": "Instant",
			"cooldown": "Instant"
		},
		"relations": [
			2
		]
	},
	"tree_1|2": {
		"name": "Приговор",
		"max_lvl": 1,
		"effects": {
			"cost": 10,
			"damage": "Deals 16 ~ 18 earth damage",
			"range": "From User",
			"radius": "5 м",
			"cast": "Instant",
			"cooldown": "Instant"
		},
		"relations": [
			3
		]
	},
	"tree_1|3": {
		"name": "Приговор",
		"max_lvl": 1,
		"effects": {
			"cost": 10,
			"damage": "Deals 16 ~ 18 earth damage",
			"attribute": "При получении урона во время использования шанс крит. атаки следующим приемом +100%",
			"attribute_1": "При срабатывании эффекта крит. атаки длится 3 с.",
			"range": "From User",
			"radius": "5 м",
			"cast": "Instant",
			"cooldown": "Instant"
		},
		"relations": [
			4,
			5
		]
	},
	"tree_1|4": {
		"name": "Приговор",
		"max_lvl": 1,
		"effects": {
			"cost": 10,
			"damage": "Deals 16 ~ 18 earth damage",
			"attribute": "За каждого раненого врага дополнительно восстанавливает 5 Ци",
			"attribute_1": "При получении урона во время использования шанс крит. атаки следующим приемом +100%",
			"attribute_2": "При срабатывании эффекта крит. атаки длится 3 с.",
			"range": "From User",
			"radius": "5 м",
			"cast": "Instant",
			"cooldown": "Instant"
		},
		"relations": [
			6
		]
	},
	"tree_1|5": {
		"name": "Приговор",
		"max_lvl": 1,
		"effects": {
			"cost": 10,
			"damage": "Deals 16 ~ 18 earth damage",
			"attribute": "При крит. атаке дополнительно восстанавливает 10 Ци",
			"attribute_1": "При получении урона во время использования шанс крит. атаки следующим приемом +100%",
			"attribute_2": "При срабатывании эффекта крит. атаки длится 3 с.",
			"range": "From User",
			"radius": "5 м",
			"cast": "Instant",
			"cooldown": "Instant"
		},
		"relations": [
			7
		]
	},
	"tree_1|6": {
		"name": "Приговор",
		"max_lvl": 1,
		"effects": {
			"cost": 10,
			"damage": "Deals 16 ~ 18 earth damage",
			"attribute": "За каждого раненого врага дополнительно восстанавливает 5 Ци",
			"attribute_1": "При получении урона во время использования шанс крит. атаки следующим приемом +100%",
			"attribute_2": "При срабатывании эффекта крит. атаки длится 3 с.",
			"attribute_3": "Восстанавливает Ци, даже если был проведен Блок, Контратака или Отбивание",
			"range": "From User",
			"radius": "5 м",
			"cast": "Instant",
			"cooldown": "Instant"
		}
	},
	"tree_1|7": {
		"name": "Приговор",
		"max_lvl": 1,
		"effects": {
			"cost": 10,
			"damage": "Deals 18 ~ 21 earth damage",
			"attribute": "При крит. атаке дополнительно восстанавливает 10 Ци",
			"attribute_1": "При получении урона во время использования шанс крит. атаки следующим приемом +100%",
			"attribute_2": "При срабатывании эффекта крит. атаки длится 3 с.",
			"range": "From User",
			"radius": "5 м",
			"cast": "Instant",
			"cooldown": "Instant"
		}
	},
	"tree_2|root": {
		"name": "Ярость",
		"effects": {
			"cost": 0,
			"damage": "Deals 48 ~ 56 earth damage",
			"range": "4 м",
			"radius": "Цель",
			"cast": "Instant",
			"cooldown": "0.4 sec",
			"condition": "Если враг в состоянии Захвата, Пленения"
		},
		"relations": [
			8
		],
		"img": "/img/sc/d/5.png"
	},
	"tree_2|8": {
		"name": "Ярость",
		"max_lvl": 1,
		"effects": {
			"cost": 0,
			"damage": "Deals 58 ~ 67 earth damage",
			"range": "4 м",
			"radius": "Цель",
			"cast": "Instant",
			"cooldown": "0.4 sec",
			"condition": "Если враг в состоянии Захвата, Пленения"
		},
		"relations": [
			9,
			10
		]
	},
	"tree_2|9": {
		"name": "Ярость",
		"max_lvl": 1,
		"effects": {
			"cost": 0,
			"damage": "Deals 58 ~ 67 earth damage",
			"attribute": "При успехе приема Повергание на 4 с. доступен прием Ярость",
			"range": "4 м",
			"radius": "Цель",
			"cast": "Instant",
			"cooldown": "0.4 sec",
			"condition": "Если враг в состоянии Захвата, Пленения",
			"condition_1": "После использования приема Гнев",
			"condition_2": "При успехе приема Повергание"
		},
		"relations": [
			11
		]
	},
	"tree_2|10": {
		"name": "Ярость",
		"max_lvl": 1,
		"effects": {
			"cost": 0,
			"damage": "Deals 58 ~ 67 shadow damage",
			"attribute": "При 5 срабатываниях Силы воли доступно в течение 3 с.",
			"range": "4 м",
			"radius": "Цель",
			"cast": "Instant",
			"cooldown": "0.4 sec",
			"condition": "Если враг в состоянии Захвата, Пленения"
		},
		"relations": [
			12
		]
	},
	"tree_2|11": {
		"name": "Ярость",
		"max_lvl": 1,
		"effects": {
			"cost": 0,
			"damage": "Deals 58 ~ 67 earth damage",
			"attribute": "При крит. атаке Ци +10",
			"attribute_1": "При успехе приема Повергание на 4 с. доступен прием Ярость",
			"range": "4 м",
			"radius": "Цель",
			"cast": "Instant",
			"cooldown": "0.4 sec",
			"condition": "Если враг в состоянии Захвата, Пленения",
			"condition_1": "После использования приема Гнев",
			"condition_2": "При успехе приема Повергание"
		}
	},
	"tree_2|12": {
		"name": "Ярость",
		"max_lvl": 1,
		"effects": {
			"cost": 0,
			"damage": "Deals 66 ~ 77 shadow damage",
			"attribute": "Ускоряет действие боевого приема при повторном использовании",
			"attribute_1": "Макс. ускорение при Захвате, Пленении",
			"attribute_2": "При 5 срабатываниях Силы воли доступно в течение 3 с.",
			"range": "4 м",
			"radius": "Цель",
			"cast": "Instant",
			"cooldown": "0.4 sec",
			"condition": "Если враг в состоянии Захвата, Пленения"
		}
	},
	"tree_3.0|root": {
		"name": "Разрушение",
		"effects": {
			"cost": -30,
			"damage": "Deals 36 ~ 42 earth damage",
			"attribute": "Ускоряет действие боевого приема при повторном использовании",
			"attribute_1": "Можно использовать в состоянии Захвата",
			"attribute_2": "Накладывает эффект Кровотечение (1 шт.) на 10 с.",
			"range": "From User",
			"radius": "2 x 4 м",
			"cast": "Instant",
			"cooldown": "Instant"
		},
		"relations": [
			13
		],
		"img": "/img/sc/d/11.png"
	},
	"tree_3.0|13": {
		"name": "Разрушение",
		"max_lvl": 1,
		"effects": {
			"cost": -30,
			"damage": "Deals 36 ~ 42 earth damage",
			"attribute": "Ускоряет действие боевого приема при повторном использовании",
			"attribute_1": "Можно использовать в состоянии Захвата",
			"attribute_2": "Накладывает эффект Кровотечение (1 шт.) на 10 с.",
			"attribute_3": "Deals 6 ~ 7 earth additional damage to Knockdown, Grappled enemies",
			"range": "From User",
			"radius": "2 x 4 м",
			"cast": "Instant",
			"cooldown": "Instant"
		},
		"relations": [
			14,
			15,
			16
		]
	},
	"tree_3.0|14": {
		"name": "Разрушение",
		"max_lvl": 1,
		"effects": {
			"cost": -30,
			"damage": "Deals 36 ~ 42 earth damage",
			"attribute": "Ускоряет действие боевого приема при повторном использовании",
			"attribute_1": "Можно использовать в состоянии Захвата",
			"attribute_2": "Накладывает эффект Кровотечение (1 шт.) на 10 с.",
			"attribute_3": "Deals 6 ~ 7 earth additional damage to Knockdown, Grappled enemies",
			"range": "From User",
			"radius": "2 x 8 м",
			"cast": "Instant",
			"cooldown": "Instant"
		},
		"relations": [
			19
		]
	},
	"tree_3.0|15": {
		"name": "Разрушение",
		"max_lvl": 1,
		"effects": {
			"cost": -30,
			"damage": "Deals 48 ~ 56 earth damage",
			"attribute": "Ускоряет использование приема на 0,3 с.",
			"attribute_1": "Ускоряет действие боевого приема при повторном использовании",
			"attribute_2": "Можно использовать в состоянии Захвата",
			"attribute_3": "Накладывает эффект Кровотечение (1 шт.) на 10 с.",
			"attribute_4": "Deals 6 ~ 7 earth additional damage to Knockdown, Grappled enemies",
			"range": "3 м",
			"radius": "Цель",
			"cast": "Instant",
			"cooldown": "Instant"
		},
		"relations": [
			17
		]
	},
	"tree_3.0|16": {
		"name": "Истребление",
		"max_lvl": 1,
		"effects": {
			"cost": -30,
			"damage": "Deals 48 ~ 56 shadow damage",
			"attribute": "Накладывает эффект Кровотечение (1 шт.) на 10 с.",
			"attribute_1": "Deals 28 ~ 32 shadow damage on hit with Repulse",
			"range": "From User",
			"radius": "2 x 8 м",
			"cast": "Instant",
			"cooldown": "Instant"
		},
		"relations": [
			18
		],
		"img": "/img/sc/d/13.png"
	},
	"tree_3.0|17": {
		"name": "Разрушение",
		"max_lvl": 1,
		"effects": {
			"cost": -30,
			"damage": "Deals 48 ~ 56 earth damage",
			"attribute": "Расходует 20 Ци при повторном использовании",
			"attribute_1": "Ускоряет использование приема на 0,3 с.",
			"attribute_2": "Ускоряет действие боевого приема при повторном использовании",
			"attribute_3": "Можно использовать в состоянии Захвата",
			"attribute_4": "Накладывает эффект Кровотечение (1 шт.) на 10 с.",
			"attribute_5": "Deals 6 ~ 7 earth additional damage to Knockdown, Grappled enemies",
			"range": "3 м",
			"radius": "Цель",
			"cast": "Instant",
			"cooldown": "Instant"
		},
		"relations": [
			20,
			21
		]
	},
	"tree_3.0|18": {
		"name": "Истребление",
		"max_lvl": 1,
		"effects": {
			"cost": -20,
			"damage": "Deals 48 ~ 56 shadow damage",
			"attribute": "Накладывает эффект Кровотечение (1 шт.) на 10 с.",
			"attribute_1": "Deals 28 ~ 32 shadow damage on hit with Repulse",
			"range": "From User",
			"radius": "2 x 8 м",
			"cast": "Instant",
			"cooldown": "Instant"
		},
		"relations": [
			22
		],
		"img": "/img/sc/d/13.png"
	},
	"tree_3.0|19": {
		"name": "Разрушение",
		"max_lvl": 1,
		"effects": {
			"cost": -30,
			"damage": "Deals 42 ~ 49 earth damage",
			"attribute": "Ускоряет действие боевого приема при повторном использовании",
			"attribute_1": "Можно использовать в состоянии Захвата",
			"attribute_2": "Накладывает эффект Кровотечение (1 шт.) на 10 с.",
			"attribute_3": "Deals 6 ~ 7 earth additional damage to Knockdown, Grappled enemies",
			"range": "From User",
			"radius": "2 x 4 м",
			"cast": "Instant",
			"cooldown": "Instant"
		},
		"relations": [
			23
		]
	},
	"tree_3.0|20": {
		"name": "Разрушение",
		"max_lvl": 1,
		"effects": {
			"cost": -20,
			"damage": "Deals 48 ~ 56 earth damage",
			"attribute": "Макс. ускоряет действие боевого приема",
			"attribute_1": "Можно использовать в состоянии Захвата",
			"attribute_2": "Накладывает эффект Кровотечение (1 шт.) на 10 с.",
			"attribute_3": "Deals 6 ~ 7 earth additional damage to Knockdown, Grappled enemies",
			"range": "3 м",
			"radius": "Цель",
			"cast": "Instant",
			"cooldown": "Instant"
		},
		"relations": [
			24
		]
	},
	"tree_3.0|21": {
		"name": "Разрушение",
		"max_lvl": 1,
		"effects": {
			"cost": -30,
			"damage": "Deals 60 ~ 70 earth damage",
			"attribute": "Расходует 20 Ци при повторном использовании",
			"attribute_1": "Поглощает 10% НР от нанесенного урона",
			"attribute_2": "Макс. ускоряет действие боевого приема",
			"attribute_3": "Можно использовать в состоянии Захвата",
			"attribute_4": "Накладывает эффект Кровотечение (1 шт.) на 10 с.",
			"attribute_5": "При крит. атаке Ци +10",
			"range": "3 м",
			"radius": "Цель",
			"cast": "Instant",
			"cooldown": "Instant"
		},
		"relations": [
			25
		]
	},
	"tree_3.0|22": {
		"name": "Истребление",
		"max_lvl": 1,
		"effects": {
			"cost": -20,
			"damage": "Deals 54 ~ 63 shadow damage",
			"attribute": "При крит. атаке Ци +10",
			"attribute_1": "Накладывает эффект Кровотечение (1 шт.) на 10 с.",
			"attribute_2": "Deals 28 ~ 32 shadow damage on hit with Repulse",
			"range": "From User",
			"radius": "2 x 8 м",
			"cast": "Instant",
			"cooldown": "Instant"
		},
		"relations": [
			26
		],
		"img": "/img/sc/d/13.png"
	},
	"tree_3.0|23": {
		"name": "Разрушение",
		"max_lvl": 1,
		"effects": {
			"cost": -30,
			"damage": "Deals 42 ~ 49 earth damage",
			"attribute": "Ускоряет использование приема на 0,3 с.",
			"attribute_1": "Ускоряет действие боевого приема при повторном использовании",
			"attribute_2": "Можно использовать в состоянии Захвата",
			"attribute_3": "Накладывает эффект Кровотечение (1 шт.) на 10 с.",
			"attribute_4": "Deals 6 ~ 7 earth additional damage to Knockdown, Grappled enemies",
			"range": "From User",
			"radius": "2 x 8 м",
			"cast": "Instant",
			"cooldown": "Instant"
		}
	},
	"tree_3.0|24": {
		"name": "Разрушение",
		"max_lvl": 1,
		"effects": {
			"cost": -20,
			"damage": "Deals 48 ~ 56 earth damage",
			"attribute": "Прерывает Отбивание и Защиту",
			"attribute_1": "Макс. ускоряет действие боевого приема",
			"attribute_2": "Можно использовать в состоянии Захвата",
			"attribute_3": "Накладывает эффект Кровотечение (1 шт.) на 10 с.",
			"attribute_4": "Deals 18 ~ 21 earth additional damage to Knockdown, Grappled enemies",
			"range": "3 м",
			"radius": "Цель",
			"cast": "Instant",
			"cooldown": "Instant"
		}
	},
	"tree_3.0|25": {
		"name": "Раскол земли",
		"max_lvl": 1,
		"effects": {
			"cost": 20,
			"damage": "Deals 60 ~ 70 earth damage",
			"attribute": "Накладывает эффект Кровотечение (1 шт.) на 10 с.",
			"attribute_1": "Ци +120 за 8 с.",
			"attribute_2": "Deals 240 ~ 280 earth damage over 8 sec",
			"range": "1m",
			"radius": "2 x 8 м",
			"cast": "Instant",
			"cooldown": "24 sec",
			"condition": "При крит. атаке приемом Разрушение"
		},
		"img": "/img/sc/d/12.png"
	},
	"tree_3.0|26": {
		"name": "Громовой удар",
		"max_lvl": 1,
		"effects": {
			"cost": 30,
			"damage": "Deals 132 ~ 154 shadow damage",
			"attribute": "При крит. атаке дополнительно восстанавливает 120 Ци за 4 с.",
			"attribute_1": "Накладывает эффект Кровотечение (1 шт.) на 10 с.",
			"attribute_2": "Переводит 50% нанесенного урона в НР",
			"range": "From User",
			"radius": "2 x 8 м",
			"cast": "Instant",
			"cooldown": "Instant",
			"condition": "При крит. атаке приемом Отражение атаки"
		},
		"img": "/img/sc/d/14.png"
	},
	"tree_6|root": {
		"name": "Захват",
		"effects": {
			"cost": -10,
			"damage": "Grabs enemies for 4 sec",
			"attribute": "В состоянии Захвата блокирует атаки спереди",
			"attribute_1": "Невозможно применить эффект блокирования в битве с гигантским врагом",
			"attribute_2": "Прерывает Отбивание и Защиту",
			"range": "3 м",
			"radius": "Цель",
			"cast": "Instant",
			"cooldown": "18 sec",
			"condition": "Если враг в состоянии Ослабления, Оглушения, Опрокидывания, Обморока",
			"condition_1": "Когда враг блокирует или контратакует"
		},
		"relations": [
			27
		],
		"img": "/img/sc/d/16.png"
	},
	"tree_6|27": {
		"name": "Захват",
		"max_lvl": 1,
		"effects": {
			"cost": -10,
			"damage": "Grabs enemies for 6 sec",
			"attribute": "В состоянии Захвата блокирует атаки спереди",
			"attribute_1": "Невозможно применить эффект блокирования в битве с гигантским врагом",
			"attribute_2": "Прерывает Отбивание и Защиту",
			"range": "3 м",
			"radius": "Цель",
			"cast": "Instant",
			"cooldown": "18 sec",
			"condition": "Если враг в состоянии Ослабления, Оглушения, Опрокидывания, Обморока",
			"condition_1": "Когда враг блокирует или контратакует"
		},
		"relations": [
			28,
			29
		]
	},
	"tree_6|28": {
		"name": "Захват",
		"max_lvl": 1,
		"effects": {
			"cost": -10,
			"damage": "Grabs enemies for 6 sec",
			"attribute": "Если атакованный враг в состоянии Захвата, Защита -10% на 6 с.",
			"attribute_1": "Эффект Снижение Защиты суммируется до 5 раз",
			"attribute_2": "В состоянии Захвата блокирует атаки спереди",
			"attribute_3": "Невозможно применить эффект блокирования в битве с гигантским врагом",
			"attribute_4": "Прерывает Отбивание и Защиту",
			"range": "3 м",
			"radius": "Цель",
			"cast": "Instant",
			"cooldown": "18 sec",
			"condition": "Если враг в состоянии Ослабления, Оглушения, Опрокидывания, Обморока",
			"condition_1": "Когда враг блокирует или контратакует"
		},
		"relations": [
			32
		]
	},
	"tree_6|29": {
		"name": "Захват",
		"max_lvl": 1,
		"effects": {
			"cost": -10,
			"damage": "Grabs enemies for 6 sec",
			"attribute": "В состоянии Захвата блокирует атаки спереди",
			"attribute_1": "Невозможно применить эффект блокирования в битве с гигантским врагом",
			"attribute_2": "При атаке врага в состоянии Захвата Ци +20",
			"attribute_3": "Прерывает Отбивание и Защиту",
			"range": "3 м",
			"radius": "Цель",
			"cast": "Instant",
			"cooldown": "18 sec",
			"condition": "Если враг в состоянии Ослабления, Оглушения, Опрокидывания, Обморока",
			"condition_1": "Когда враг блокирует или контратакует"
		},
		"relations": [
			30,
			31
		]
	},
	"tree_6|30": {
		"name": "Захват",
		"max_lvl": 1,
		"effects": {
			"cost": -10,
			"damage": "Grabs enemies for 6 sec",
			"attribute": "В состоянии Захвата блокирует атаки спереди",
			"attribute_1": "Невозможно применить эффект блокирования в битве с гигантским врагом",
			"attribute_2": "При атаке врага в состоянии Захвата Ци +20",
			"attribute_3": "При атаке врага в состоянии Захвата в течение 3 с. крит. атака +5%",
			"attribute_4": "Эффект Усиление крит. атаки суммируется до 10 раз",
			"attribute_5": "При крит. атаке сбрасывает эффект Усиление крит. атаки",
			"attribute_6": "Прерывает Отбивание и Защиту",
			"range": "3 м",
			"radius": "Цель",
			"cast": "Instant",
			"cooldown": "18 sec",
			"condition": "Если враг в состоянии Ослабления, Оглушения, Опрокидывания, Обморока",
			"condition_1": "Когда враг блокирует или контратакует"
		},
		"relations": [
			34
		]
	},
	"tree_6|31": {
		"name": "Захват",
		"max_lvl": 1,
		"effects": {
			"cost": -10,
			"damage": "Grabs enemies for 6 sec",
			"attribute": "В состоянии Захвата блокирует атаки спереди",
			"attribute_1": "Невозможно применить эффект блокирования в битве с гигантским врагом",
			"attribute_2": "При атаке врага в состоянии Захвата Ци +20",
			"attribute_3": "Получаемый урон -10%",
			"attribute_4": "Прерывает Отбивание и Защиту",
			"range": "3 м",
			"radius": "Цель",
			"cast": "Instant",
			"cooldown": "18 sec",
			"condition": "Если враг в состоянии Ослабления, Оглушения, Опрокидывания, Обморока",
			"condition_1": "Когда враг блокирует или контратакует"
		},
		"relations": [
			35,
			36
		]
	},
	"tree_6|32": {
		"name": "Захват",
		"max_lvl": 1,
		"effects": {
			"cost": -10,
			"damage": "Grabs enemies for 6 sec",
			"attribute": "Если атакованный враг в состоянии Захвата, Защита -10% на 6 с.",
			"attribute_1": "Эффект Снижение Защиты суммируется до 5 раз",
			"attribute_2": "Если атакованный враг в состоянии Захвата, отнимает у врага 10% Ци",
			"attribute_3": "В состоянии Захвата блокирует атаки спереди",
			"attribute_4": "Невозможно применить эффект блокирования в битве с гигантским врагом",
			"attribute_5": "Прерывает Отбивание и Защиту",
			"range": "3 м",
			"radius": "Цель",
			"cast": "Instant",
			"cooldown": "18 sec",
			"condition": "Если враг в состоянии Ослабления, Оглушения, Опрокидывания, Обморока",
			"condition_1": "Когда враг блокирует или контратакует"
		},
		"relations": [
			33
		]
	},
	"tree_6|33": {
		"name": "Захват",
		"max_lvl": 1,
		"effects": {
			"cost": -10,
			"damage": "Grabs enemies for 6 sec",
			"attribute": "Если атакованный враг в состоянии Захвата, Защита -10% на 6 с.",
			"attribute_1": "Эффект Снижение Защиты суммируется до 5 раз",
			"attribute_2": "Если атакованный враг в состоянии Захвата, отнимает у врага 10% Ци",
			"attribute_3": "В состоянии Захвата блокирует атаки спереди",
			"attribute_4": "Невозможно применить эффект блокирования в битве с гигантским врагом",
			"attribute_5": "Прерывает Отбивание и Защиту",
			"attribute_6": "Перемещает к врагу",
			"range": "16 м",
			"radius": "Цель",
			"cast": "Instant",
			"cooldown": "18 sec",
			"condition": "Если враг в состоянии Ослабления, Оглушения, Опрокидывания, Обморока",
			"condition_1": "Когда враг блокирует или контратакует"
		}
	},
	"tree_6|34": {
		"name": "Захват",
		"max_lvl": 1,
		"effects": {
			"cost": -10,
			"damage": "Grabs enemies for 6 sec",
			"attribute": "В состоянии Захвата блокирует атаки спереди",
			"attribute_1": "Невозможно применить эффект блокирования в битве с гигантским врагом",
			"attribute_2": "При атаке врага в состоянии Захвата Ци +20",
			"attribute_3": "При атаке врага в состоянии Захвата в течение 3 с. крит. атака +5%",
			"attribute_4": "Эффект Усиление крит. атаки суммируется до 10 раз",
			"attribute_5": "При крит. атаке сбрасывает эффект Усиление крит. атаки",
			"attribute_6": "При крит. атаке врага в состоянии Захвата Ци +150% за 5 с.",
			"attribute_7": "Прерывает Отбивание и Защиту",
			"range": "3 м",
			"radius": "Цель",
			"cast": "Instant",
			"cooldown": "18 sec",
			"condition": "Если враг в состоянии Ослабления, Оглушения, Опрокидывания, Обморока",
			"condition_1": "Когда враг блокирует или контратакует"
		}
	},
	"tree_6|35": {
		"name": "Захват",
		"max_lvl": 1,
		"effects": {
			"cost": -10,
			"damage": "Grabs enemies for 6 sec",
			"attribute": "В состоянии Захвата блокирует атаки спереди",
			"attribute_1": "Ци +60 за 6 с.",
			"attribute_2": "Невозможно применить эффект блокирования в битве с гигантским врагом",
			"attribute_3": "При атаке врага в состоянии Захвата Ци +20",
			"attribute_4": "При Блоке HP +3%",
			"attribute_5": "Получаемый урон -10%",
			"attribute_6": "Прерывает Отбивание и Защиту",
			"range": "3 м",
			"radius": "Цель",
			"cast": "Instant",
			"cooldown": "18 sec",
			"condition": "Если враг в состоянии Ослабления, Оглушения, Опрокидывания, Обморока",
			"condition_1": "Когда враг блокирует или контратакует"
		}
	},
	"tree_6|36": {
		"name": "Захват",
		"max_lvl": 1,
		"effects": {
			"cost": -10,
			"damage": "Grabs enemies for 6 sec",
			"attribute": "За 6 с. +12% HP",
			"attribute_1": "В состоянии Захвата блокирует атаки спереди",
			"attribute_2": "Невозможно применить эффект блокирования в битве с гигантским врагом",
			"attribute_3": "При атаке врага в состоянии Захвата Ци +20",
			"attribute_4": "Получаемый урон -10%",
			"attribute_5": "Прерывает Отбивание и Защиту",
			"range": "3 м",
			"radius": "Цель",
			"cast": "Instant",
			"cooldown": "18 sec",
			"condition": "Если враг в состоянии Ослабления, Оглушения, Опрокидывания, Обморока",
			"condition_1": "Когда враг блокирует или контратакует"
		}
	},
	"tree_7|root": {
		"name": "Удар коленом",
		"effects": {
			"cost": 0,
			"damage": "Deals 18 ~ 21 damage",
			"attribute": "Dazes enemies for 2 sec",
			"range": "3 м",
			"radius": "Цель",
			"cast": "Instant",
			"cooldown": "18 sec",
			"condition": "При крит. атаке"
		},
		"relations": [
			37
		],
		"img": "/img/sc/d/20.png"
	},
	"tree_7|37": {
		"name": "Удар коленом",
		"max_lvl": 1,
		"effects": {
			"cost": 0,
			"damage": "Deals 18 ~ 21 damage",
			"attribute": "При крит. атаке Ци +30",
			"attribute_1": "Dazes enemies for 2 sec",
			"range": "3 м",
			"radius": "Цель",
			"cast": "Instant",
			"cooldown": "18 sec",
			"condition": "При крит. атаке"
		},
		"relations": [
			38,
			39,
			40
		]
	},
	"tree_7|38": {
		"name": "Удар коленом",
		"max_lvl": 1,
		"effects": {
			"cost": 0,
			"damage": "Deals 18 ~ 21 damage",
			"attribute": "Прерывает Отбивание и Защиту",
			"attribute_1": "При крит. атаке Ци +30",
			"attribute_2": "Скорость врагов -30% на 8 с.",
			"attribute_3": "Dazes enemies for 3 sec",
			"range": "3 м",
			"radius": "Цель",
			"cast": "Instant",
			"cooldown": "30 sec",
			"condition": "При крит. атаке",
			"condition_1": "Во время использования приема Ураган"
		},
		"relations": [
			41
		]
	},
	"tree_7|39": {
		"name": "Удар коленом",
		"max_lvl": 1,
		"effects": {
			"cost": 0,
			"damage": "Deals 18 ~ 21 damage",
			"attribute": "При крит. атаке Ци +30",
			"attribute_1": "Отменяет запрет на использование боевых приемов быстрого перемещения",
			"attribute_2": "Dazes enemies for 2 sec",
			"attribute_3": "Перемещает к врагу",
			"range": "8 м",
			"radius": "Цель",
			"cast": "Instant",
			"cooldown": "24 sec",
			"condition": "При успехе приема Повергание",
			"condition_1": "При успехе приема Удар головой",
			"condition_2": "При сопротивлении приему Циклон"
		},
		"relations": [
			42
		]
	},
	"tree_7|40": {
		"name": "Удар коленом",
		"max_lvl": 1,
		"effects": {
			"cost": 0,
			"damage": "Deals 18 ~ 21 damage",
			"attribute": "При крит. атаке Ци +30",
			"attribute_1": "Отменяет запрет на использование боевых приемов быстрого перемещения",
			"attribute_2": "Прерывает Отбивание и Защиту",
			"attribute_3": "При отмене Защиты запрещает врагам использовать боевые приемы Защиты на 6 с.",
			"attribute_4": "Нельзя использовать против врагов в состоянии Опрокидывания",
			"attribute_5": "Dazes enemies for 2 sec on breaking Defense",
			"attribute_6": "Перемещает к врагу",
			"range": "16 м",
			"radius": "Цель",
			"cast": "Instant",
			"cooldown": "30 sec",
			"condition": "Когда враг блокирует или контратакует"
		},
		"relations": [
			43
		]
	},
	"tree_7|41": {
		"name": "Удар коленом",
		"max_lvl": 1,
		"effects": {
			"cost": 0,
			"damage": "Deals 18 ~ 21 damage",
			"attribute": "При крит. атаке Ци +30",
			"attribute_1": "Скорость врагов -30% на 8 с.",
			"attribute_2": "При промахе дополнительно использует прием 1 раз",
			"attribute_3": "Dazes enemies for 3 sec",
			"range": "3 м",
			"radius": "Цель",
			"cast": "Instant",
			"cooldown": "30 sec",
			"condition": "При крит. атаке",
			"condition_1": "Во время использования приема Ураган"
		}
	},
	"tree_7|42": {
		"name": "Удар коленом",
		"max_lvl": 1,
		"effects": {
			"cost": 0,
			"damage": "Deals 18 ~ 21 damage",
			"attribute": "При крит. атаке Ци +30",
			"attribute_1": "Отменяет запрет на использование боевых приемов быстрого перемещения",
			"attribute_2": "Dazes enemies for 2 sec",
			"attribute_3": "Перемещает к врагу",
			"range": "16 м",
			"radius": "Цель",
			"cast": "Instant",
			"cooldown": "24 sec",
			"condition": "При успехе приема Повергание",
			"condition_1": "При успехе приема Удар головой",
			"condition_2": "При сопротивлении приему Циклон"
		}
	},
	"tree_7|43": {
		"name": "Удар коленом",
		"max_lvl": 1,
		"effects": {
			"cost": 0,
			"damage": "Deals 18 ~ 21 damage",
			"attribute": "При крит. атаке Ци +30",
			"attribute_1": "Отменяет запрет на использование боевых приемов быстрого перемещения",
			"attribute_2": "Прерывает Отбивание и Защиту",
			"attribute_3": "При отмене Защиты запрещает врагам использовать боевые приемы Защиты на 6 с.",
			"attribute_4": "Нельзя использовать против врагов в состоянии Опрокидывания",
			"attribute_5": "Dazes enemies for 2 sec on breaking Defense",
			"attribute_6": "Перемещает к врагу",
			"range": "16 м",
			"radius": "Цель",
			"cast": "Instant",
			"cooldown": "18 sec",
			"condition": "Когда враг блокирует или контратакует"
		}
	},
	"tree_8|root": {
		"name": "Ураган",
		"effects": {
			"cost": -20,
			"damage": "Deals 36 ~ 42 wind damage",
			"attribute": "Сопротивление негативным эффектам Оглушение, Ослабление и Отталкивание",
			"attribute_1": "При использовании приема мгновенно 1 раз отменяет Паралич",
			"attribute_2": "Боевой прием атаки и защиты",
			"range": "From User",
			"radius": "3 м",
			"cast": "Instant",
			"cooldown": "Instant"
		},
		"relations": [
			44
		],
		"img": "/img/sc/d/21.png"
	},
	"tree_8|44": {
		"name": "Ураган",
		"max_lvl": 1,
		"effects": {
			"cost": -20,
			"damage": "Deals 36 ~ 42 wind damage",
			"attribute": "Increases Movement Speed by 60%",
			"attribute_1": "Сопротивление негативным эффектам Оглушение, Ослабление и Отталкивание",
			"attribute_2": "При использовании приема мгновенно 1 раз отменяет Паралич",
			"attribute_3": "Боевой прием атаки и защиты",
			"range": "From User",
			"radius": "3 м",
			"cast": "Instant",
			"cooldown": "Instant"
		},
		"relations": [
			45,
			46,
			47
		]
	},
	"tree_8|45": {
		"name": "Ураган",
		"max_lvl": 1,
		"effects": {
			"cost": -20,
			"damage": "Deals 32 ~ 38 wind damage",
			"attribute": "Increases Movement Speed by 60%",
			"attribute_1": "Сопротивление негативным эффектам Оглушение, Ослабление и Отталкивание",
			"attribute_2": "При использовании приема мгновенно 1 раз отменяет Паралич",
			"attribute_3": "Прерывает Отбивание и Защиту",
			"attribute_4": "Боевой прием атаки и защиты",
			"range": "From User",
			"radius": "3 м",
			"cast": "Instant",
			"cooldown": "Instant"
		},
		"relations": [
			48
		]
	},
	"tree_8|46": {
		"name": "Ураган",
		"max_lvl": 1,
		"effects": {
			"cost": -20,
			"damage": "Deals 36 ~ 42 wind damage",
			"attribute": "Increases Defense by 400%",
			"attribute_1": "Increases Movement Speed by 60%",
			"attribute_2": "Сопротивление негативным эффектам Оглушение, Ослабление и Отталкивание",
			"attribute_3": "При использовании приема мгновенно 1 раз отменяет Паралич",
			"attribute_4": "Боевой прием атаки и защиты",
			"range": "From User",
			"radius": "3 м",
			"cast": "Instant",
			"cooldown": "Instant"
		},
		"relations": [
			49
		]
	},
	"tree_8|47": {
		"name": "Ураган",
		"max_lvl": 1,
		"effects": {
			"cost": -20,
			"damage": "Deals 36 ~ 42 wind damage",
			"attribute": "Increases Movement Speed by 60%",
			"attribute_1": "При успешном Отбивании скорость +30% на 3 с.",
			"attribute_2": "При успешном Отбивании сопротивление эффекту снижения скорости на 3 с.",
			"attribute_3": "При успешном Отбивании Ци +30%",
			"attribute_4": "Сопротивление негативным эффектам Оглушение, Ослабление и Отталкивание",
			"attribute_5": "При использовании приема мгновенно 1 раз отменяет Паралич",
			"attribute_6": "После использования приема отбивает 1 атаку в течение 0,5 с.",
			"attribute_7": "Боевой прием атаки и защиты",
			"range": "From User",
			"radius": "3 м",
			"cast": "Instant",
			"cooldown": "Instant"
		},
		"relations": [
			52
		]
	},
	"tree_8|48": {
		"name": "Ураган",
		"max_lvl": 1,
		"effects": {
			"cost": -20,
			"damage": "Deals 32 ~ 38 wind damage",
			"attribute": "Increases Movement Speed by 60%",
			"attribute_1": "Increases Defense by 400%",
			"attribute_2": "Сопротивление негативным эффектам Оглушение, Ослабление и Отталкивание",
			"attribute_3": "При использовании приема мгновенно 1 раз отменяет Паралич",
			"attribute_4": "Прерывает Отбивание и Защиту",
			"attribute_5": "Боевой прием атаки и защиты",
			"range": "From User",
			"radius": "3 м",
			"cast": "Instant",
			"cooldown": "Instant"
		},
		"relations": [
			50
		]
	},
	"tree_8|49": {
		"name": "Ураган",
		"max_lvl": 1,
		"effects": {
			"cost": -20,
			"damage": "Deals 36 ~ 42 wind damage",
			"attribute": "User takes 25% reduced damage from 1 attack",
			"attribute_1": "Increases Defense by 400%",
			"attribute_2": "Increases Movement Speed by 60%",
			"attribute_3": "Сопротивление негативным эффектам Оглушение, Ослабление и Отталкивание",
			"attribute_4": "При использовании приема мгновенно 1 раз отменяет Паралич",
			"attribute_5": "Боевой прием атаки и защиты",
			"range": "From User",
			"radius": "3 м",
			"cast": "Instant",
			"cooldown": "Instant"
		},
		"relations": [
			51
		]
	},
	"tree_8|50": {
		"name": "Ураган",
		"max_lvl": 1,
		"effects": {
			"cost": -20,
			"damage": "Deals 32 ~ 38 wind damage",
			"attribute": "Increases Movement Speed by 80%",
			"attribute_1": "Increases Defense by 400%",
			"attribute_2": "Сопротивление негативным эффектам Оглушение, Ослабление и Отталкивание",
			"attribute_3": "Отменяет Паралич",
			"attribute_4": "Прерывает Отбивание и Защиту",
			"attribute_5": "При получении урона во время использования дополнительно восстанавливает 5 Ци",
			"attribute_6": "Боевой прием атаки и защиты",
			"range": "From User",
			"radius": "5 м",
			"cast": "Instant",
			"cooldown": "Instant"
		}
	},
	"tree_8|51": {
		"name": "Ураган",
		"max_lvl": 1,
		"effects": {
			"cost": -20,
			"damage": "Deals 36 ~ 42 wind damage",
			"attribute": "User takes 40% reduced damage from 1 attack",
			"attribute_1": "Increases Defense by 500%",
			"attribute_2": "Increases Movement Speed by 60%",
			"attribute_3": "Сопротивление негативным эффектам Оглушение, Ослабление и Отталкивание",
			"attribute_4": "При использовании приема мгновенно 1 раз отменяет Паралич",
			"attribute_5": "Боевой прием атаки и защиты",
			"range": "From User",
			"radius": "3 м",
			"cast": "Instant",
			"cooldown": "Instant"
		}
	},
	"tree_8|52": {
		"name": "Ураган",
		"max_lvl": 1,
		"effects": {
			"cost": -20,
			"damage": "Deals 36 ~ 42 wind damage",
			"attribute": "При успешном Отбивании время перезарядки приема Сокрушение -9 с.",
			"attribute_1": "При успешном Отбивании снимает эффект запрета на использование боевых приемов быстрого перемещения",
			"attribute_2": "Increases Movement Speed by 60%",
			"attribute_3": "При успешном Отбивании скорость +30% на 3 с.",
			"attribute_4": "При успешном Отбивании сопротивление эффекту снижения скорости на 3 с.",
			"attribute_5": "При успешном Отбивании Ци +30%",
			"attribute_6": "Сопротивление негативным эффектам Оглушение, Ослабление и Отталкивание",
			"attribute_7": "При использовании приема мгновенно 1 раз отменяет Паралич",
			"attribute_8": "В течение 0,5 с. после использования приема отбивает атаки врага",
			"attribute_9": "Боевой прием атаки и защиты",
			"range": "From User",
			"radius": "3 м",
			"cast": "Instant",
			"cooldown": "Instant"
		}
	},
	"tree_9|root": {
		"name": "Водоворот",
		"effects": {
			"cost": 30,
			"damage": "Выводит из состояния Опрокидывания и Обморока",
			"attribute": "Сопротивление урону и негативным эффектам",
			"attribute_1": "Сопротивление урону и негативным эффектам for 0.5 sec after use",
			"attribute_2": "Сопротивление прерывается после применения другого приема",
			"attribute_3": "Deals 12 ~ 14 damage",
			"range": "From User",
			"radius": "3 м",
			"cast": "Instant",
			"cooldown": "36 sec",
			"condition": "В состоянии Опрокидывания или Обморока"
		},
		"relations": [
			53
		],
		"img": "/img/sc/d/23.png"
	},
	"tree_9|53": {
		"name": "Водоворот",
		"max_lvl": 1,
		"effects": {
			"cost": 30,
			"damage": "Выводит из состояния Оглушения, Ослабления, Опрокидывания, Обморока",
			"attribute": "Сопротивление урону и негативным эффектам",
			"attribute_1": "Сопротивление урону и негативным эффектам for 0.5 sec after use",
			"attribute_2": "Сопротивление прерывается после применения другого приема",
			"attribute_3": "Deals 12 ~ 14 damage",
			"range": "From User",
			"radius": "3 м",
			"cast": "Instant",
			"cooldown": "36 sec",
			"condition": "В состоянии Оглушения, Ослабления, Опрокидывания или Обморока"
		},
		"relations": [
			54,
			55,
			56
		]
	},
	"tree_9|54": {
		"name": "Водоворот",
		"max_lvl": 1,
		"effects": {
			"cost": 30,
			"damage": "Выводит из состояния Оглушения, Ослабления, Опрокидывания, Обморока",
			"attribute": "Сопротивление урону и негативным эффектам",
			"attribute_1": "Сопротивление урону и негативным эффектам for 0.5 sec after use",
			"attribute_2": "Сопротивление прерывается после применения другого приема",
			"attribute_3": "Вырывается из Подавления, Захвата, Пленения",
			"attribute_4": "Deals 12 ~ 14 damage",
			"range": "From User",
			"radius": "3 м",
			"cast": "Instant",
			"cooldown": "36 sec",
			"condition": "В состоянии Оглушения, Ослабления, Опрокидывания или Обморока",
			"condition_1": "В состоянии Подавления, Захвата или Пленения"
		},
		"relations": [
			57
		]
	},
	"tree_9|55": {
		"name": "Водоворот",
		"max_lvl": 1,
		"effects": {
			"cost": 30,
			"damage": "Выводит из состояния Оглушения, Ослабления, Опрокидывания, Обморока",
			"attribute": "Сопротивление урону и негативным эффектам",
			"attribute_1": "Сопротивление урону и негативным эффектам for 0.5 sec after use",
			"attribute_2": "Сопротивление прерывается после применения другого приема",
			"attribute_3": "Отталкивает врагов на 11 м и Опрокидывает на 2 с.",
			"attribute_4": "Deals 12 ~ 14 damage",
			"range": "From User",
			"radius": "3 м",
			"cast": "Instant",
			"cooldown": "36 sec",
			"condition": "В состоянии Оглушения, Ослабления, Опрокидывания или Обморока"
		},
		"relations": [
			58
		]
	},
	"tree_9|56": {
		"name": "Водоворот",
		"max_lvl": 1,
		"effects": {
			"cost": 30,
			"damage": "Выводит из состояния Оглушения, Ослабления, Опрокидывания, Обморока",
			"attribute": "Сопротивление урону и негативным эффектам",
			"attribute_1": "Сопротивление урону и негативным эффектам for 0.5 sec after use",
			"attribute_2": "Сопротивление прерывается после применения другого приема",
			"attribute_3": "Ослабляет врага на 2 с.",
			"attribute_4": "Deals 12 ~ 14 damage",
			"range": "From User",
			"radius": "3 м",
			"cast": "Instant",
			"cooldown": "36 sec",
			"condition": "В состоянии Оглушения, Ослабления, Опрокидывания или Обморока"
		},
		"relations": [
			59
		]
	},
	"tree_9|57": {
		"name": "Водоворот",
		"max_lvl": 1,
		"effects": {
			"cost": 30,
			"damage": "Выводит из состояния Оглушения, Ослабления, Опрокидывания, Обморока",
			"attribute": "Сопротивление урону и негативным эффектам",
			"attribute_1": "Сопротивление урону и негативным эффектам for 0.5 sec after use",
			"attribute_2": "Сопротивление прерывается после применения другого приема",
			"attribute_3": "При выходе из состояния Подавления, Захвата и Пленения НР +5%",
			"attribute_4": "Вырывается из Подавления, Захвата, Пленения",
			"attribute_5": "Deals 12 ~ 14 damage",
			"range": "From User",
			"radius": "3 м",
			"cast": "Instant",
			"cooldown": "36 sec",
			"condition": "В состоянии Оглушения, Ослабления, Опрокидывания или Обморока",
			"condition_1": "В состоянии Подавления, Захвата или Пленения"
		},
		"relations": [
			60
		]
	},
	"tree_9|58": {
		"name": "Водоворот",
		"max_lvl": 1,
		"effects": {
			"cost": 30,
			"damage": "Выводит из состояния Оглушения, Ослабления, Опрокидывания, Обморока",
			"attribute": "Сопротивление урону и негативным эффектам",
			"attribute_1": "Сопротивление урону и негативным эффектам for 0.5 sec after use",
			"attribute_2": "Сопротивление прерывается после применения другого приема",
			"attribute_3": "Запрет на использование боевых приемов быстрого перемещения на 6 с.",
			"attribute_4": "Скорость врагов -30% на 6 с.",
			"attribute_5": "Отталкивает врагов на 11 м и Опрокидывает на 2 с.",
			"attribute_6": "Deals 12 ~ 14 damage",
			"range": "From User",
			"radius": "3 м",
			"cast": "Instant",
			"cooldown": "36 sec",
			"condition": "В состоянии Оглушения, Ослабления, Опрокидывания или Обморока"
		},
		"relations": [
			61
		]
	},
	"tree_9|59": {
		"name": "Водоворот",
		"max_lvl": 1,
		"effects": {
			"cost": 50,
			"damage": "Выводит из состояния Оглушения, Ослабления, Опрокидывания, Обморока",
			"attribute": "Сопротивление урону и негативным эффектам",
			"attribute_1": "Сопротивление урону и негативным эффектам for 0.5 sec after use",
			"attribute_2": "Сопротивление прерывается после применения другого приема",
			"attribute_3": "Ослабляет врага на 2 с.",
			"attribute_4": "Deals 12 ~ 14 damage",
			"range": "From User",
			"radius": "3 м",
			"cast": "Instant",
			"cooldown": "36 sec",
			"condition": "В состоянии Оглушения, Ослабления, Опрокидывания или Обморока"
		},
		"relations": [
			62
		]
	},
	"tree_9|60": {
		"name": "Водоворот",
		"max_lvl": 1,
		"effects": {
			"cost": 30,
			"damage": "Выводит из состояния Оглушения, Ослабления, Опрокидывания, Обморока",
			"attribute": "Сопротивление урону и негативным эффектам",
			"attribute_1": "Сопротивление урону и негативным эффектам for 1 sec after use",
			"attribute_2": "При выходе из состояния Подавления, Захвата и Пленения НР +5%",
			"attribute_3": "Вырывается из Подавления, Захвата, Пленения",
			"attribute_4": "Deals 12 ~ 14 damage",
			"range": "From User",
			"radius": "3 м",
			"cast": "Instant",
			"cooldown": "36 sec",
			"condition": "В состоянии Оглушения, Ослабления, Опрокидывания или Обморока",
			"condition_1": "В состоянии Подавления, Захвата или Пленения"
		}
	},
	"tree_9|61": {
		"name": "Водоворот",
		"max_lvl": 1,
		"effects": {
			"cost": 30,
			"damage": "Выводит из состояния Оглушения, Ослабления, Опрокидывания, Обморока",
			"attribute": "Сопротивление урону и негативным эффектам",
			"attribute_1": "Сопротивление урону и негативным эффектам for 0.5 sec after use",
			"attribute_2": "Сопротивление прерывается после применения другого приема",
			"attribute_3": "Запрет на использование боевых приемов быстрого перемещения на 6 с.",
			"attribute_4": "Скорость врагов -30% на 6 с.",
			"attribute_5": "В течение 5 с. Защитный барьер в размере 10% от HP",
			"attribute_6": "Отталкивает врагов на 11 м и Опрокидывает на 2 с.",
			"attribute_7": "Deals 12 ~ 14 damage",
			"range": "From User",
			"radius": "3 м",
			"cast": "Instant",
			"cooldown": "36 sec",
			"condition": "В состоянии Оглушения, Ослабления, Опрокидывания или Обморока"
		}
	},
	"tree_9|62": {
		"name": "Водоворот",
		"max_lvl": 1,
		"effects": {
			"cost": 50,
			"damage": "Выводит из состояния Оглушения, Ослабления, Опрокидывания, Обморока",
			"attribute": "Сопротивление урону и негативным эффектам",
			"attribute_1": "Сопротивление урону и негативным эффектам for 0.5 sec after use",
			"attribute_2": "Сопротивление прерывается после применения другого приема",
			"attribute_3": "Отнимает у врага 50% Ци",
			"attribute_4": "Ослабляет врага на 2 с.",
			"attribute_5": "Deals 12 ~ 14 damage",
			"range": "From User",
			"radius": "3 м",
			"cast": "Instant",
			"cooldown": "36 sec",
			"condition": "В состоянии Оглушения, Ослабления, Опрокидывания или Обморока"
		}
	},
	"tree_10|root": {
		"name": "Землетрясение",
		"effects": {
			"cost": 10,
			"damage": "Deals 4 ~ 4 earth damage",
			"attribute": "Extends the duration of Stun, Daze, Knockdown up to 2 sec",
			"attribute_1": "Stuns enemies for 2 sec",
			"attribute_2": "Перемещает к врагу",
			"range": "16 м",
			"radius": "3 м",
			"cast": "Instant",
			"cooldown": "18 sec"
		},
		"relations": [
			63
		],
		"img": "/img/sc/d/24.png"
	},
	"tree_10|63": {
		"name": "Землетрясение",
		"max_lvl": 1,
		"effects": {
			"cost": 10,
			"damage": "Deals 4 ~ 4 earth damage",
			"attribute": "При использовании в Затяжном прыжке или в состоянии Парения прерывает Отбивание и Защиту",
			"attribute_1": "Extends the duration of Stun, Daze, Knockdown up to 2 sec",
			"attribute_2": "Stuns enemies for 2 sec",
			"attribute_3": "Перемещает к врагу",
			"range": "16 м",
			"radius": "3 м",
			"cast": "Instant",
			"cooldown": "18 sec"
		},
		"relations": [
			64,
			65,
			66
		]
	},
	"tree_10|64": {
		"name": "Землетрясение",
		"max_lvl": 1,
		"effects": {
			"cost": 10,
			"damage": "Deals 4 ~ 4 earth damage",
			"attribute": "При использовании в Затяжном прыжке или в состоянии Парения прерывает Отбивание и Защиту",
			"attribute_1": "Extends the duration of Stun, Daze, Knockdown up to 3 sec",
			"attribute_2": "Stuns enemies for 3 sec",
			"attribute_3": "Перемещает к врагу",
			"range": "16 м",
			"radius": "3 м",
			"cast": "Instant",
			"cooldown": "18 sec"
		},
		"relations": [
			69
		]
	},
	"tree_10|65": {
		"name": "Землетрясение",
		"max_lvl": 1,
		"effects": {
			"cost": 10,
			"damage": "Deals 18 ~ 21 earth damage",
			"attribute": "Прерывает Отбивание",
			"attribute_1": "При использовании в Затяжном прыжке или в состоянии Парения прерывает Отбивание и Защиту",
			"attribute_2": "Pulls and Dazes enemies for 2 sec",
			"attribute_3": "Перемещает к врагу",
			"range": "16 м",
			"radius": "3 м",
			"cast": "Instant",
			"cooldown": "18 sec"
		},
		"relations": [
			67
		]
	},
	"tree_10|66": {
		"name": "Землетрясение",
		"max_lvl": 1,
		"effects": {
			"cost": 10,
			"damage": "Deals 18 ~ 21 earth damage",
			"attribute": "При использовании в Затяжном прыжке или в состоянии Парения прерывает Отбивание и Защиту",
			"attribute_1": "Сопротивление урону и негативным эффектам",
			"attribute_2": "Перемещает к врагу",
			"range": "16 м",
			"radius": "3 м",
			"cast": "Instant",
			"cooldown": "18 sec"
		},
		"relations": [
			68
		]
	},
	"tree_10|67": {
		"name": "Землетрясение",
		"max_lvl": 1,
		"effects": {
			"cost": 10,
			"damage": "Deals 18 ~ 21 earth damage",
			"attribute": "Прерывает Отбивание",
			"attribute_1": "При использовании в Затяжном прыжке или в состоянии Парения прерывает Отбивание и Защиту",
			"attribute_2": "Pulls and Dazes enemies for 2 sec",
			"attribute_3": "Перемещает к врагу",
			"range": "16 м",
			"radius": "8 м",
			"cast": "Instant",
			"cooldown": "18 sec"
		},
		"relations": [
			71
		]
	},
	"tree_10|68": {
		"name": "Землетрясение",
		"max_lvl": 1,
		"effects": {
			"cost": 20,
			"damage": "Deals 18 ~ 21 earth damage",
			"attribute": "За каждого раненого врага 50% нанесенного урона Переводит в НР",
			"attribute_1": "За каждого раненого врага Ци +20",
			"attribute_2": "При использовании в Затяжном прыжке или в состоянии Парения прерывает Отбивание и Защиту",
			"attribute_3": "Сопротивление урону и негативным эффектам",
			"attribute_4": "Перемещает к врагу",
			"range": "16 м",
			"radius": "3 м",
			"cast": "Instant",
			"cooldown": "18 sec"
		},
		"relations": [
			72
		]
	},
	"tree_10|69": {
		"name": "Землетрясение",
		"max_lvl": 1,
		"effects": {
			"cost": 10,
			"damage": "Deals 4 ~ 4 earth damage",
			"attribute": "Скорость врагов -40% на 8 с.",
			"attribute_1": "При использовании в Затяжном прыжке или в состоянии Парения прерывает Отбивание и Защиту",
			"attribute_2": "Extends the duration of Stun, Daze, Knockdown up to 3 sec",
			"attribute_3": "Stuns enemies for 3 sec",
			"attribute_4": "Перемещает к врагу",
			"range": "16 м",
			"radius": "3 м",
			"cast": "Instant",
			"cooldown": "18 sec"
		},
		"relations": [
			70
		]
	},
	"tree_10|70": {
		"name": "Землетрясение",
		"max_lvl": 1,
		"effects": {
			"cost": 10,
			"damage": "Deals 4 ~ 4 earth damage",
			"attribute": "Скорость врагов -40% на 8 с.",
			"attribute_1": "При использовании в Затяжном прыжке или в состоянии Парения прерывает Отбивание и Защиту",
			"attribute_2": "Extends the duration of Stun, Daze, Knockdown up to 3 sec",
			"attribute_3": "Stuns enemies for 3 sec",
			"attribute_4": "Перемещает к врагу",
			"range": "16 м",
			"radius": "9 м",
			"cast": "Instant",
			"cooldown": "18 sec"
		}
	},
	"tree_10|71": {
		"name": "Землетрясение",
		"max_lvl": 1,
		"effects": {
			"cost": 10,
			"damage": "Deals 18 ~ 21 earth damage",
			"attribute": "При крит. атаке используется подряд несколько раз (макс. 2)",
			"attribute_1": "Прерывает Отбивание",
			"attribute_2": "При использовании в Затяжном прыжке или в состоянии Парения прерывает Отбивание и Защиту",
			"attribute_3": "Pulls and Dazes enemies for 2 sec",
			"attribute_4": "Перемещает к врагу",
			"range": "16 м",
			"radius": "8 м",
			"cast": "Instant",
			"cooldown": "18 sec"
		}
	},
	"tree_10|72": {
		"name": "Землетрясение",
		"max_lvl": 1,
		"effects": {
			"cost": 20,
			"damage": "Deals 18 ~ 21 earth damage",
			"attribute": "При сопротивлении время перезарядки приема Стальной щит -15 с.",
			"attribute_1": "За каждого раненого врага 50% нанесенного урона Переводит в НР",
			"attribute_2": "За каждого раненого врага Ци +20",
			"attribute_3": "При использовании в Затяжном прыжке или в состоянии Парения прерывает Отбивание и Защиту",
			"attribute_4": "Сопротивление урону и негативным эффектам",
			"attribute_5": "Перемещает к врагу",
			"range": "16 м",
			"radius": "3 м",
			"cast": "Instant",
			"cooldown": "18 sec"
		}
	},
	"tree_11|root": {
		"name": "Сокрушение",
		"effects": {
			"cost": 10,
			"damage": "Deals 2 ~ 3 earth damage",
			"attribute": "Extends the duration of Stun, Daze, Knockdown up to 2 sec",
			"attribute_1": "Оглушает врага на 2 с.",
			"attribute_2": "Перемещает к врагу",
			"range": "8 м",
			"radius": "Цель",
			"cast": "Instant",
			"cooldown": "30 sec"
		},
		"relations": [
			73
		],
		"img": "/img/sc/d/29.png"
	},
	"tree_11|73": {
		"name": "Сокрушение",
		"max_lvl": 1,
		"effects": {
			"cost": 10,
			"damage": "Deals 2 ~ 3 earth damage",
			"attribute": "Скорость Рывка увеличивается",
			"attribute_1": "Extends the duration of Stun, Daze, Knockdown up to 2 sec",
			"attribute_2": "Оглушает врага на 2 с.",
			"attribute_3": "Перемещает к врагу",
			"range": "16 м",
			"radius": "Цель",
			"cast": "Instant",
			"cooldown": "30 sec"
		},
		"relations": [
			74,
			75
		]
	},
	"tree_11|74": {
		"name": "Сокрушение",
		"max_lvl": 1,
		"effects": {
			"cost": 30,
			"damage": "Deals 2 ~ 3 earth damage",
			"attribute": "Скорость Рывка увеличивается",
			"attribute_1": "Extends the duration of Stun, Daze, Knockdown up to 2 sec",
			"attribute_2": "Оглушает врага на 2 с.",
			"attribute_3": "Перемещает к врагу",
			"range": "16 м",
			"radius": "Цель",
			"cast": "Instant",
			"cooldown": "30 sec"
		},
		"relations": [
			77,
			78
		]
	},
	"tree_11|75": {
		"name": "Сокрушение",
		"max_lvl": 1,
		"effects": {
			"cost": 10,
			"damage": "Deals 30 ~ 35 earth damage",
			"attribute": "Скорость Рывка увеличивается",
			"attribute_1": "Extends the duration of Stun, Daze, Knockdown up to 3 sec",
			"attribute_2": "Перемещает к врагу",
			"range": "16 м",
			"radius": "Цель",
			"cast": "Instant",
			"cooldown": "9 sec"
		},
		"relations": [
			76
		]
	},
	"tree_11|76": {
		"name": "Сокрушение",
		"max_lvl": 1,
		"effects": {
			"cost": 10,
			"damage": "Deals 30 ~ 35 earth damage",
			"attribute": "При успешной атаке против врага в состоянии Оглушения, Ослабления, Захвата или Пленения Ци +60 за б с.",
			"attribute_1": "Скорость Рывка увеличивается",
			"attribute_2": "Extends the duration of Stun, Daze, Knockdown up to 3 sec",
			"attribute_3": "Перемещает к врагу",
			"range": "16 м",
			"radius": "Цель",
			"cast": "Instant",
			"cooldown": "9 sec"
		},
		"relations": [
			79
		]
	},
	"tree_11|77": {
		"name": "Сокрушение",
		"max_lvl": 1,
		"effects": {
			"cost": 30,
			"damage": "Deals 2 ~ 3 earth damage",
			"attribute": "Скорость Рывка увеличивается",
			"attribute_1": "Скорость врагов -30% на 6 с.",
			"attribute_2": "Extends the duration of Stun, Daze, Knockdown up to 2 sec",
			"attribute_3": "Оглушает врага на 2 с.",
			"attribute_4": "Перемещает к врагу",
			"range": "16 м",
			"radius": "Цель",
			"cast": "Instant",
			"cooldown": "24 sec"
		},
		"relations": [
			80
		]
	},
	"tree_11|78": {
		"name": "Сокрушение",
		"max_lvl": 1,
		"effects": {
			"cost": 30,
			"damage": "Deals 2 ~ 3 earth damage",
			"attribute": "Сопротивление урону и негативным эффектам",
			"attribute_1": "Скорость Рывка увеличивается",
			"attribute_2": "Extends the duration of Stun, Daze, Knockdown up to 2 sec",
			"attribute_3": "Оглушает врага на 2 с.",
			"attribute_4": "Перемещает к врагу",
			"range": "16 м",
			"radius": "Цель",
			"cast": "Instant",
			"cooldown": "30 sec"
		},
		"relations": [
			81
		]
	},
	"tree_11|79": {
		"name": "Сокрушение",
		"max_lvl": 1,
		"effects": {
			"cost": 10,
			"damage": "Deals 30 ~ 35 earth damage",
			"attribute": "При крит. атаке используется подряд несколько раз (макс. 2)",
			"attribute_1": "При успешной атаке против врага в состоянии Оглушения, Ослабления, Захвата или Пленения Ци +60 за б с.",
			"attribute_2": "Скорость Рывка увеличивается",
			"attribute_3": "Extends the duration of Stun, Daze, Knockdown up to 3 sec",
			"attribute_4": "Перемещает к врагу",
			"range": "16 м",
			"radius": "Цель",
			"cast": "Instant",
			"cooldown": "9 sec"
		},
		"relations": [
			82
		]
	},
	"tree_11|80": {
		"name": "Сокрушение",
		"max_lvl": 1,
		"effects": {
			"cost": 30,
			"damage": "Deals 2 ~ 3 earth damage",
			"attribute": "Отбивает атаки при быстром перемещении",
			"attribute_1": "При успешном Отбивании Ци +50",
			"attribute_2": "Скорость Рывка увеличивается",
			"attribute_3": "Скорость врагов -30% на 6 с.",
			"attribute_4": "Extends the duration of Stun, Daze, Knockdown up to 2 sec",
			"attribute_5": "Оглушает врага на 2 с.",
			"attribute_6": "Перемещает к врагу",
			"range": "16 м",
			"radius": "Цель",
			"cast": "Instant",
			"cooldown": "24 sec"
		}
	},
	"tree_11|81": {
		"name": "Сокрушение",
		"max_lvl": 1,
		"effects": {
			"cost": 30,
			"damage": "Deals 2 ~ 3 earth damage",
			"attribute": "После использования сопротивление урону и негативным эффектам на 1 с.",
			"attribute_1": "Сопротивление урону и негативным эффектам",
			"attribute_2": "Скорость Рывка увеличивается",
			"attribute_3": "Extends the duration of Stun, Daze, Knockdown up to 2 sec",
			"attribute_4": "Оглушает врага на 2 с.",
			"attribute_5": "Перемещает к врагу",
			"range": "16 м",
			"radius": "Цель",
			"cast": "Instant",
			"cooldown": "30 sec"
		}
	},
	"tree_11|82": {
		"name": "Сокрушение",
		"max_lvl": 1,
		"effects": {
			"cost": 10,
			"damage": "Deals 30 ~ 35 earth damage",
			"attribute": "При крит. атаке используется подряд несколько раз (макс. 2)",
			"attribute_1": "При успешной атаке против врага в состоянии Оглушения, Ослабления, Захвата или Пленения Ци +60 за б с.",
			"attribute_2": "Скорость Рывка увеличивается",
			"attribute_3": "Extends the duration of Stun, Daze, Knockdown up to 3 sec",
			"attribute_4": "При крит. атаке используется подряд несколько раз (макс. 2)",
			"attribute_5": "Перемещает к врагу",
			"range": "16 м",
			"radius": "Цель",
			"cast": "Instant",
			"cooldown": "18 sec"
		}
	},
	"tree_12|root": {
		"name": "Обвал",
		"effects": {
			"cost": -20,
			"damage": "Deals 24 ~ 28 earth damage",
			"attribute": "Deals 72 ~ 84 earth damage over 8 sec",
			"range": "1m",
			"radius": "3 м",
			"cast": "Instant",
			"cooldown": "45 sec"
		},
		"relations": [
			83
		],
		"img": "/img/sc/d/33.png"
	},
	"tree_12|83": {
		"name": "Обвал",
		"max_lvl": 1,
		"effects": {
			"cost": -20,
			"damage": "Deals 42 ~ 49 earth damage",
			"attribute": "Deals 84 ~ 98 earth damage over 8 sec",
			"range": "1m",
			"radius": "3 м",
			"cast": "Instant",
			"cooldown": "45 sec"
		},
		"relations": [
			84,
			85,
			86,
			87
		]
	},
	"tree_12|84": {
		"name": "Обвал",
		"max_lvl": 1,
		"effects": {
			"cost": -20,
			"damage": "Deals 42 ~ 49 earth damage",
			"attribute": "За каждого раненого врага Ци +10",
			"attribute_1": "Deals 84 ~ 98 earth damage over 8 sec",
			"range": "1m",
			"radius": "3 м",
			"cast": "Instant",
			"cooldown": "45 sec"
		},
		"relations": [
			88
		]
	},
	"tree_12|85": {
		"name": "Обвал",
		"max_lvl": 1,
		"effects": {
			"cost": -20,
			"damage": "Deals 42 ~ 49 earth damage",
			"attribute": "Если враг поражен, Скорость -40% на 5 с.",
			"attribute_1": "В 2 раза увеличивает эффект от поглощающих HP приемов в области действия",
			"attribute_2": "Deals 84 ~ 98 earth damage over 8 sec",
			"range": "1m",
			"radius": "3 м",
			"cast": "Instant",
			"cooldown": "45 sec"
		},
		"relations": [
			89
		]
	},
	"tree_12|86": {
		"name": "Обвал",
		"max_lvl": 1,
		"effects": {
			"cost": -20,
			"damage": "Deals 42 ~ 49 earth damage",
			"attribute": "First hit deals 54 ~ 63 earth additional damage to Knockdown, Grappled enemies",
			"attribute_1": "Deals 84 ~ 98 earth damage over 8 sec",
			"range": "1m",
			"radius": "3 м",
			"cast": "Instant",
			"cooldown": "45 sec"
		},
		"relations": [
			90
		]
	},
	"tree_12|87": {
		"name": "Обвал",
		"max_lvl": 1,
		"effects": {
			"cost": -20,
			"damage": "Deals 42 ~ 49 earth damage",
			"attribute": "Избавление от состояний Оглушение, Ослабление, Опрокидывание и Обморок (члены группы)",
			"range": "1m",
			"radius": "8 м",
			"cast": "Instant",
			"cooldown": "45 sec"
		},
		"relations": [
			91
		],
		"img": "/img/sc/d/34.png"
	},
	"tree_12|88": {
		"name": "Обвал",
		"max_lvl": 1,
		"effects": {
			"cost": -20,
			"damage": "Deals 42 ~ 49 earth damage",
			"attribute": "За каждого раненого врага Ци +10",
			"attribute_1": "Deals 84 ~ 98 earth damage over 8 sec",
			"range": "1m",
			"radius": "5 м",
			"cast": "Instant",
			"cooldown": "45 sec"
		},
		"relations": [
			92
		]
	},
	"tree_12|89": {
		"name": "Обвал",
		"max_lvl": 1,
		"effects": {
			"cost": -20,
			"damage": "Deals 42 ~ 49 earth damage",
			"attribute": "Если враг поражен, Скорость -40% на 5 с.",
			"attribute_1": "Increases Defense by 200% while within the area",
			"attribute_2": "В 2 раза увеличивает эффект от поглощающих HP приемов в области действия",
			"attribute_3": "Deals 84 ~ 98 earth damage over 8 sec",
			"range": "1m",
			"radius": "3 м",
			"cast": "Instant",
			"cooldown": "45 sec"
		},
		"relations": [
			93
		]
	},
	"tree_12|90": {
		"name": "Обвал",
		"max_lvl": 1,
		"effects": {
			"cost": -20,
			"damage": "Deals 42 ~ 49 earth damage",
			"attribute": "Other skills deals 6 ~ 7 earth additional damage while within the area",
			"attribute_1": "First hit deals 54 ~ 63 earth additional damage to Knockdown, Grappled enemies",
			"attribute_2": "Deals 84 ~ 98 earth damage over 8 sec",
			"range": "1m",
			"radius": "3 м",
			"cast": "Instant",
			"cooldown": "45 sec"
		},
		"relations": [
			94
		]
	},
	"tree_12|91": {
		"name": "Обвал",
		"max_lvl": 1,
		"effects": {
			"cost": -20,
			"damage": "Deals 42 ~ 49 earth damage",
			"attribute": "НР +5%",
			"attribute_1": "Избавление от состояний Оглушение, Ослабление, Опрокидывание и Обморок (члены группы)",
			"range": "1m",
			"radius": "8 м",
			"cast": "Instant",
			"cooldown": "45 sec"
		},
		"relations": [
			95
		],
		"img": "/img/sc/d/34.png"
	},
	"tree_12|92": {
		"name": "Обвал",
		"max_lvl": 1,
		"effects": {
			"cost": -50,
			"damage": "Deals 42 ~ 49 earth damage",
			"attribute": "За каждого раненого врага Ци +10",
			"attribute_1": "Deals 96 ~ 112 earth damage over 8 sec",
			"attribute_2": "Damage dealt increases by 24 ~ 28 damage starting from the second hit",
			"range": "1m",
			"radius": "5 м",
			"cast": "Instant",
			"cooldown": "45 sec"
		}
	},
	"tree_12|93": {
		"name": "Обвал",
		"max_lvl": 1,
		"effects": {
			"cost": -20,
			"damage": "Deals 42 ~ 49 earth damage",
			"attribute": "Если враг поражен, Скорость -40% на 5 с.",
			"attribute_1": "Сопротивление негативным эффектам Оглушение, Ослабление, Опрокидывание и Отталкивание",
			"attribute_2": "Increases Defense by 400% while within the area",
			"attribute_3": "В 2 раза увеличивает эффект от поглощающих HP приемов в области действия",
			"attribute_4": "Deals 84 ~ 98 earth damage over 8 sec",
			"range": "1m",
			"radius": "3 м",
			"cast": "Instant",
			"cooldown": "45 sec"
		}
	},
	"tree_12|94": {
		"name": "Обвал",
		"max_lvl": 1,
		"effects": {
			"cost": -20,
			"damage": "Deals 42 ~ 49 earth damage",
			"attribute": "В радиусе действия приемов Разрушение и Ярость 1-й ветви урон от этих приемов +20%",
			"attribute_1": "Other skills deals 6 ~ 7 earth additional damage while within the area",
			"attribute_2": "First hit deals 54 ~ 63 earth additional damage to Knockdown, Grappled enemies",
			"attribute_3": "Deals 84 ~ 98 earth damage over 8 sec",
			"range": "1m",
			"radius": "3 м",
			"cast": "Instant",
			"cooldown": "45 sec"
		}
	},
	"tree_12|95": {
		"name": "Обвал",
		"max_lvl": 1,
		"effects": {
			"cost": -20,
			"damage": "Deals 42 ~ 49 earth damage",
			"attribute": "НР +5%",
			"attribute_1": "Избавление от состояний Оглушение, Ослабление, Опрокидывание и Обморок (члены группы)",
			"attribute_2": "В течение 4 с. получаемый урон -50% (члены группы)",
			"attribute_3": "Защита +300% (члены группы)",
			"range": "1m",
			"radius": "8 м",
			"cast": "Instant",
			"cooldown": "45 sec"
		},
		"img": "/img/sc/d/34.png"
	},
	"tree_13.0|root": {
		"name": "Ампутация",
		"effects": {
			"cost": -20,
			"damage": "Deals 23 ~ 27 wind damage",
			"attribute": "Опрокидывает врага на 2 с.",
			"range": "From User",
			"radius": "3 м",
			"cast": "Instant",
			"cooldown": "30 sec"
		},
		"relations": [
			96
		],
		"img": "/img/sc/d/35.png"
	},
	"tree_13.0|96": {
		"name": "Ампутация",
		"max_lvl": 1,
		"effects": {
			"cost": -20,
			"damage": "Deals 23 ~ 27 wind damage",
			"attribute": "Скорость врагов -30% на 6 с.",
			"attribute_1": "Опрокидывает врага на 2 с.",
			"range": "From User",
			"radius": "5 м",
			"cast": "Instant",
			"cooldown": "30 sec"
		},
		"relations": [
			97
		]
	},
	"tree_13.0|97": {
		"name": "Ампутация",
		"max_lvl": 1,
		"effects": {
			"cost": -20,
			"damage": "Deals 23 ~ 27 wind damage",
			"attribute": "Скорость врагов -30% на 6 с.",
			"attribute_1": "Запрет на использование боевых приемов быстрого перемещения на 6 с.",
			"attribute_2": "Опрокидывает врага на 2 с.",
			"range": "From User",
			"radius": "5 м",
			"cast": "Instant",
			"cooldown": "30 sec"
		},
		"relations": [
			98
		]
	},
	"tree_13.0|98": {
		"name": "Ампутация",
		"max_lvl": 1,
		"effects": {
			"cost": -20,
			"damage": "Deals 23 ~ 27 wind damage",
			"attribute": "Скорость врагов -30% на 6 с.",
			"attribute_1": "Запрет на использование боевых приемов быстрого перемещения на 6 с.",
			"attribute_2": "Прерывает Отбивание и Защиту",
			"attribute_3": "Опрокидывает врага на 2 с.",
			"range": "From User",
			"radius": "5 м",
			"cast": "Instant",
			"cooldown": "30 sec"
		},
		"relations": [
			99
		]
	},
	"tree_13.0|99": {
		"name": "Подбрасывание",
		"max_lvl": 1,
		"effects": {
			"cost": -10,
			"damage": "Deals 54 ~ 63 damage",
			"attribute": "Защита -20% на 5 с.",
			"attribute_1": "Подбрасывает в воздух",
			"range": "3 м",
			"radius": "Цель",
			"cast": "Instant",
			"cooldown": "18 sec",
			"condition": "Если враг в состоянии Опрокидывания"
		},
		"relations": [
			100
		],
		"img": "/img/sc/d/36.png"
	},
	"tree_13.0|100": {
		"name": "Ампутация",
		"max_lvl": 1,
		"effects": {
			"cost": -20,
			"damage": "Deals 23 ~ 27 wind damage",
			"attribute": "Скорость врагов -30% на 6 с.",
			"attribute_1": "Запрет на использование боевых приемов быстрого перемещения на 6 с.",
			"attribute_2": "Прерывает Отбивание и Защиту",
			"attribute_3": "Опрокидывает врага на 2 с.",
			"range": "From User",
			"radius": "6 x 9 м",
			"cast": "Instant",
			"cooldown": "30 sec"
		}
	},
	"tree_15|root": {
		"name": "Удар ногой",
		"effects": {
			"cost": -10,
			"damage": "Deals 19 ~ 22 damage",
			"attribute": "Knockdown enemies for 2 sec",
			"range": "3 м",
			"radius": "Цель",
			"cast": "Instant",
			"cooldown": "9 sec"
		},
		"relations": [
			101
		],
		"img": "/img/sc/d/38.png"
	},
	"tree_15|101": {
		"name": "Удар ногой",
		"max_lvl": 1,
		"effects": {
			"cost": -10,
			"damage": "Deals 19 ~ 22 damage",
			"attribute": "При успехе приема максимально ускоряет действие приема Разрушение",
			"attribute_1": "Knockdown enemies for 2 sec",
			"range": "3 м",
			"radius": "Цель",
			"cast": "Instant",
			"cooldown": "9 sec"
		},
		"relations": [
			102,
			103,
			104
		]
	},
	"tree_15|102": {
		"name": "Удар ногой",
		"max_lvl": 1,
		"effects": {
			"cost": -10,
			"damage": "Deals 19 ~ 22 damage",
			"attribute": "При успехе приема максимально ускоряет действие приема Разрушение",
			"attribute_1": "Knockdown enemies for 3 sec",
			"range": "3 м",
			"radius": "Цель",
			"cast": "Instant",
			"cooldown": "9 sec"
		},
		"relations": [
			105
		]
	},
	"tree_15|103": {
		"name": "Удар ногой",
		"max_lvl": 1,
		"effects": {
			"cost": -10,
			"damage": "Deals 19 ~ 22 damage",
			"attribute": "В течение 6 с. Агрессия +50%",
			"attribute_1": "В течение 6 с. Защита +100%",
			"attribute_2": "При успехе приема максимально ускоряет действие приема Разрушение",
			"range": "3 м",
			"radius": "Цель",
			"cast": "Instant",
			"cooldown": "36 sec"
		},
		"relations": [
			106
		]
	},
	"tree_15|104": {
		"name": "Притягивание",
		"max_lvl": 1,
		"effects": {
			"cost": -10,
			"damage": "Deals 19 ~ 22 wind damage",
			"attribute": "Прерывает Отбивание",
			"attribute_1": "Pulls and Dazes enemies for 2 sec",
			"range": "16 м",
			"radius": "Цель",
			"cast": "0.2 sec",
			"cooldown": "30 sec"
		},
		"relations": [
			107,
			108
		],
		"img": "/img/sc/d/39.png"
	},
	"tree_15|105": {
		"name": "Удар ногой",
		"max_lvl": 1,
		"effects": {
			"cost": -10,
			"damage": "Deals 19 ~ 22 damage",
			"attribute": "Прерывает Отбивание и Защиту",
			"attribute_1": "При отмене Защиты врага боевые приемы Защиты недоступны на 5 с.",
			"attribute_2": "При успехе приема максимально ускоряет действие приема Разрушение",
			"attribute_3": "Knockdown enemies for 3 sec",
			"range": "3 м",
			"radius": "Цель",
			"cast": "Instant",
			"cooldown": "18 sec"
		}
	},
	"tree_15|106": {
		"name": "Удар ногой",
		"max_lvl": 1,
		"effects": {
			"cost": -10,
			"damage": "Deals 19 ~ 22 damage",
			"attribute": "Если враг в состоянии Оглушения и Ослабления, провоцирует на 3 с.",
			"attribute_1": "В течение 6 с. Агрессия +50%",
			"attribute_2": "В течение 6 с. Защита +100%",
			"attribute_3": "При успехе приема максимально ускоряет действие приема Разрушение",
			"range": "3 м",
			"radius": "Цель",
			"cast": "Instant",
			"cooldown": "36 sec"
		}
	},
	"tree_15|107": {
		"name": "Притягивание",
		"max_lvl": 1,
		"effects": {
			"cost": -10,
			"damage": "Deals 19 ~ 22 wind damage",
			"attribute": "Прерывает Отбивание",
			"attribute_1": "Pulls and Dazes enemies for 3 sec",
			"range": "16 м",
			"radius": "Цель",
			"cast": "0.2 sec",
			"cooldown": "30 sec"
		},
		"img": "/img/sc/d/39.png"
	},
	"tree_15|108": {
		"name": "Притягивание",
		"max_lvl": 1,
		"effects": {
			"cost": -10,
			"damage": "Deals 19 ~ 22 wind damage",
			"attribute": "Прерывает Отбивание",
			"attribute_1": "Pulls and Dazes enemies for 2 sec",
			"range": "From User",
			"radius": "8 м",
			"cast": "0.2 sec",
			"cooldown": "30 sec"
		},
		"img": "/img/sc/d/39.png"
	},
	"tree_16|root": {
		"name": "Повергание",
		"effects": {
			"cost": -10,
			"damage": "Deals 18 ~ 21 damage",
			"attribute": "Heals the user 50% of the damage dealt",
			"attribute_1": "Опрокидывает врага на 3 с.",
			"range": "3 м",
			"radius": "3 м",
			"cast": "0.8 sec",
			"cooldown": "Instant",
			"condition": "В состоянии Захвата"
		},
		"relations": [
			109
		],
		"img": "/img/sc/d/40.png"
	},
	"tree_16|109": {
		"name": "Повергание",
		"max_lvl": 1,
		"effects": {
			"cost": 0,
			"damage": "Deals 18 ~ 21 earth damage",
			"attribute": "Heals the user 50% of the damage dealt",
			"attribute_1": "Опрокидывает врага на 3 с.",
			"range": "3 м",
			"radius": "3 м",
			"cast": "0.8 sec",
			"cooldown": "Instant",
			"condition": "В состоянии Захвата"
		},
		"relations": [
			110,
			111
		]
	},
	"tree_16|110": {
		"name": "Повергание",
		"max_lvl": 1,
		"effects": {
			"cost": 0,
			"damage": "Deals 18 ~ 21 earth damage",
			"attribute": "Сопротивление урону и негативным эффектам",
			"attribute_1": "Heals the user 50% of the damage dealt",
			"attribute_2": "Опрокидывает врага на 3 с.",
			"range": "3 м",
			"radius": "3 м",
			"cast": "0.8 sec",
			"cooldown": "Instant",
			"condition": "В состоянии Захвата"
		},
		"relations": [
			112
		]
	},
	"tree_16|111": {
		"name": "Повергание",
		"max_lvl": 1,
		"effects": {
			"cost": 0,
			"damage": "Deals 18 ~ 21 earth damage",
			"attribute": "Если враг в зоне действия, ослабляет на 1 с.",
			"attribute_1": "Если враг в состоянии Захвата, опрокидывает на 3 с.",
			"attribute_2": "Если враг в состоянии Захвата, эффект Травма на 12 с.",
			"range": "3 м",
			"radius": "3 м",
			"cast": "0.8 sec",
			"cooldown": "Instant",
			"condition": "В состоянии Захвата"
		},
		"relations": [
			113
		]
	},
	"tree_16|112": {
		"name": "Повергание",
		"max_lvl": 1,
		"effects": {
			"cost": 0,
			"damage": "Deals 18 ~ 21 earth damage",
			"attribute": "Сопротивление урону и негативным эффектам",
			"attribute_1": "Heals the user 100% of the damage dealt",
			"attribute_2": "Опрокидывает врага на 3 с.",
			"range": "3 м",
			"radius": "3 м",
			"cast": "0.8 sec",
			"cooldown": "Instant",
			"condition": "В состоянии Захвата"
		},
		"relations": [
			114
		]
	},
	"tree_16|113": {
		"name": "Повергание",
		"max_lvl": 1,
		"effects": {
			"cost": 0,
			"damage": "Deals 18 ~ 21 earth damage",
			"attribute": "Если враг в зоне действия, ослабляет на 1 с.",
			"attribute_1": "Если враг в состоянии Захвата, опрокидывает на 3 с.",
			"attribute_2": "Если враг в состоянии Захвата, эффект Травма на 12 с.",
			"attribute_3": "Generates 120 Focus over 4 sec",
			"range": "3 м",
			"radius": "3 м",
			"cast": "0.3 sec",
			"cooldown": "Instant",
			"condition": "В состоянии Захвата"
		},
		"relations": [
			115
		]
	},
	"tree_16|114": {
		"name": "Повергание",
		"max_lvl": 1,
		"effects": {
			"cost": 0,
			"damage": "Deals 18 ~ 21 earth damage",
			"attribute": "Сопротивление урону и негативным эффектам",
			"attribute_1": "Heals the user 100% of the damage dealt",
			"attribute_2": "Опрокидывает врага на 3 с.",
			"attribute_3": "При сопротивлении Ци +20",
			"attribute_4": "При сопротивлении HP +3%",
			"range": "3 м",
			"radius": "3 м",
			"cast": "0.8 sec",
			"cooldown": "Instant",
			"condition": "В состоянии Захвата"
		}
	},
	"tree_16|115": {
		"name": "Повергание",
		"max_lvl": 1,
		"effects": {
			"cost": 0,
			"damage": "Deals 18 ~ 21 earth damage",
			"attribute": "Если враг в зоне действия, ослабляет на 1 с.",
			"attribute_1": "Если враг в состоянии Захвата, опрокидывает на 3 с.",
			"attribute_2": "Если враг в состоянии Захвата, эффект Травма на 12 с.",
			"attribute_3": "Generates 180 Focus over 4 sec",
			"range": "3 м",
			"radius": "9 м",
			"cast": "0.3 sec",
			"cooldown": "Instant",
			"condition": "В состоянии Захвата"
		}
	},
	"tree_17|root": {
		"name": "Удар головой",
		"effects": {
			"cost": 0,
			"damage": "Deals 60 ~ 70 damage",
			"range": "3 м",
			"radius": "Цель",
			"cast": "0.8 sec",
			"cooldown": "Instant",
			"condition": "В состоянии Захвата"
		},
		"relations": [
			116
		],
		"img": "/img/sc/d/41.png"
	},
	"tree_17|116": {
		"name": "Удар головой",
		"max_lvl": 1,
		"effects": {
			"cost": 0,
			"damage": "Deals 60 ~ 70 damage",
			"attribute": "Защита -50% на 4 с.",
			"range": "3 м",
			"radius": "Цель",
			"cast": "0.8 sec",
			"cooldown": "Instant",
			"condition": "В состоянии Захвата"
		},
		"relations": [
			117,
			118
		]
	},
	"tree_17|117": {
		"name": "Удар головой",
		"max_lvl": 1,
		"effects": {
			"cost": 0,
			"damage": "Deals 60 ~ 70 damage",
			"attribute": "Защита -50% на 4 с.",
			"attribute_1": "Восстановление HP -20% на 10 с.",
			"range": "3 м",
			"radius": "Цель",
			"cast": "0.8 sec",
			"cooldown": "Instant",
			"condition": "В состоянии Захвата"
		},
		"relations": [
			119
		]
	},
	"tree_17|118": {
		"name": "Удар головой",
		"max_lvl": 1,
		"effects": {
			"cost": 0,
			"damage": "Deals 60 ~ 70 damage",
			"attribute": "В течение 10 с. при каждом получении урона -20% Ци. суммируется макс. до 5 раз",
			"attribute_1": "Защита -50% на 4 с.",
			"range": "3 м",
			"radius": "Цель",
			"cast": "0.8 sec",
			"cooldown": "Instant",
			"condition": "В состоянии Захвата"
		},
		"relations": [
			120
		]
	},
	"tree_17|119": {
		"name": "Удар головой",
		"max_lvl": 1,
		"effects": {
			"cost": 0,
			"damage": "Deals 60 ~ 70 damage",
			"attribute": "Защита -50% на 4 с.",
			"attribute_1": "Восстановление HP -20% на 10 с.",
			"attribute_2": "Шанс крит. атаки следующим приемом +100%",
			"range": "3 м",
			"radius": "Цель",
			"cast": "0.8 sec",
			"cooldown": "Instant",
			"condition": "В состоянии Захвата"
		},
		"relations": [
			121
		]
	},
	"tree_17|120": {
		"name": "Удар головой",
		"max_lvl": 1,
		"effects": {
			"cost": 0,
			"damage": "Deals 60 ~ 70 damage",
			"attribute": "В течение 10 с. при каждом получении урона -20% Ци. суммируется макс. до 5 раз",
			"attribute_1": "Защита -50% на 4 с.",
			"attribute_2": "Скорость врага -40% на 6 с.",
			"range": "3 м",
			"radius": "Цель",
			"cast": "0.8 sec",
			"cooldown": "Instant",
			"condition": "В состоянии Захвата"
		},
		"relations": [
			122
		]
	},
	"tree_17|121": {
		"name": "Удар головой",
		"max_lvl": 1,
		"effects": {
			"cost": 0,
			"damage": "Deals 60 ~ 70 damage",
			"attribute": "Защита -50% на 4 с.",
			"attribute_1": "Восстановление HP -20% на 10 с.",
			"attribute_2": "Шанс крит. атаки следующим приемом +100%",
			"attribute_3": "Если враг убит, сбрасывает перезарядку приема Захват",
			"range": "3 м",
			"radius": "Цель",
			"cast": "0.8 sec",
			"cooldown": "Instant",
			"condition": "В состоянии Захвата"
		}
	},
	"tree_17|122": {
		"name": "Удар головой",
		"max_lvl": 1,
		"effects": {
			"cost": 0,
			"damage": "Deals 60 ~ 70 damage",
			"attribute": "В течение 10 с. при каждом получении урона -20% Ци. суммируется макс. до 5 раз",
			"attribute_1": "Запрещает использовать боевые приемы Защиты на 5 с.",
			"attribute_2": "Защита -50% на 4 с.",
			"attribute_3": "Скорость врага -40% на 6 с.",
			"range": "3 м",
			"radius": "Цель",
			"cast": "0.8 sec",
			"cooldown": "Instant",
			"condition": "В состоянии Захвата"
		}
	},
	"tree_18|root": {
		"name": "Тычок",
		"effects": {
			"cost": -20,
			"damage": "Deals 54 ~ 63 earth damage",
			"attribute": "Deals 30 ~ 35 earth additional damage to Stunned, Dazed, Grabbed, Phantom Gripped enemies",
			"range": "3 м",
			"radius": "Цель",
			"cast": "Instant",
			"cooldown": "45 sec"
		},
		"relations": [
			123
		],
		"img": "/img/sc/d/42.png"
	},
	"tree_18|123": {
		"name": "Тычок",
		"max_lvl": 1,
		"effects": {
			"cost": -20,
			"damage": "Deals 54 ~ 63 earth damage",
			"attribute": "Deals 78 ~ 91 earth additional damage to Stunned, Dazed, Grabbed, Phantom Gripped enemies",
			"range": "3 м",
			"radius": "Цель",
			"cast": "Instant",
			"cooldown": "45 sec"
		},
		"relations": [
			124,
			125,
			126
		]
	},
	"tree_18|124": {
		"name": "Тычок",
		"max_lvl": 1,
		"effects": {
			"cost": -20,
			"damage": "Deals 54 ~ 63 earth damage",
			"attribute": "Deals 78 ~ 91 earth additional damage to Stunned, Dazed, Grabbed, Phantom Gripped enemies",
			"attribute_1": "Перемещает к врагу",
			"range": "8 м",
			"radius": "Цель",
			"cast": "Instant",
			"cooldown": "45 sec"
		},
		"relations": [
			129
		]
	},
	"tree_18|125": {
		"name": "Тычок",
		"max_lvl": 1,
		"effects": {
			"cost": -20,
			"damage": "100% Переводит нанесенного урона в HP",
			"attribute": "При успешной атаке против врага в состоянии Оглушения, Ослабления, Захвата или Пленения 150% Переводит нанесенного урона в HP",
			"range": "3 м",
			"radius": "Цель",
			"cast": "Instant",
			"cooldown": "18 sec"
		},
		"relations": [
			127
		]
	},
	"tree_18|126": {
		"name": "Удар палача",
		"max_lvl": 1,
		"effects": {
			"cost": -50,
			"damage": "Deals 108 ~ 126 shadow damage",
			"attribute": "При успехе последнего атакующего приема восстанавливает 50% Ци",
			"attribute_1": "Если последняя атака в серии становится крит. атакой, то сбрасывается время перезарядки умения Циклон",
			"attribute_2": "Во время использования приема Отталкивание дает сопротивление негативным эффектам",
			"attribute_3": "Прерывает Отбивание",
			"range": "From User",
			"radius": "4 м",
			"cast": "0.6 sec",
			"cooldown": "24 sec"
		},
		"relations": [
			128
		],
		"img": "/img/sc/d/43.png"
	},
	"tree_18|127": {
		"name": "Тычок",
		"max_lvl": 1,
		"effects": {
			"cost": -20,
			"damage": "100% Переводит нанесенного урона в HP",
			"attribute": "При успешной атаке против врага в состоянии Оглушения, Ослабления, Захвата или Пленения 150% Переводит нанесенного урона в HP",
			"attribute_1": "Ци +100 за 5 с.",
			"range": "3 м",
			"radius": "Цель",
			"cast": "Instant",
			"cooldown": "24 sec"
		},
		"relations": [
			132
		]
	},
	"tree_18|128": {
		"name": "Удар палача",
		"max_lvl": 1,
		"effects": {
			"cost": -50,
			"damage": "Deals 150 ~ 175 shadow damage",
			"attribute": "При успехе последнего атакующего приема восстанавливает 50% Ци",
			"attribute_1": "Если последняя атака в серии становится крит. атакой, то сбрасывается время перезарядки умения Циклон",
			"attribute_2": "Во время использования приема Отталкивание дает сопротивление негативным эффектам",
			"attribute_3": "Прерывает Отбивание",
			"range": "From User",
			"radius": "4 м",
			"cast": "0.6 sec",
			"cooldown": "24 sec"
		},
		"relations": [
			130
		],
		"img": "/img/sc/d/43.png"
	},
	"tree_18|129": {
		"name": "Тычок",
		"max_lvl": 1,
		"effects": {
			"cost": -20,
			"damage": "Deals 144 ~ 168 earth damage",
			"attribute": "Deals 78 ~ 91 earth additional damage to Stunned, Dazed, Grabbed, Phantom Gripped enemies",
			"attribute_1": "Перемещает к врагу",
			"range": "8 м",
			"radius": "Цель",
			"cast": "Instant",
			"cooldown": "45 sec"
		},
		"relations": [
			131
		]
	},
	"tree_18|130": {
		"name": "Удар палача",
		"max_lvl": 1,
		"effects": {
			"cost": -50,
			"damage": "Deals 150 ~ 175 shadow damage",
			"attribute": "При успехе последнего атакующего приема восстанавливает 50% Ци",
			"attribute_1": "Если последняя атака в серии становится крит. атакой, то сбрасывается время перезарядки умения Циклон",
			"attribute_2": "Доступно до 4 раз",
			"attribute_3": "Во время использования приема Отталкивание дает сопротивление негативным эффектам",
			"attribute_4": "Обновляет продолжительность эффекта Сила воли с последней атаки в серии, если эффект Сила воли имеет 5 ур.",
			"attribute_5": "Прерывает Отбивание",
			"attribute_6": "Deals 600 ~ 700 shadow damage on hit with all 4 times",
			"range": "From User",
			"radius": "4 м",
			"cast": "0.6 sec",
			"cooldown": "24 sec"
		},
		"relations": [
			133
		],
		"img": "/img/sc/d/43.png"
	},
	"tree_18|131": {
		"name": "Тычок",
		"max_lvl": 1,
		"effects": {
			"cost": -20,
			"damage": "Deals 144 ~ 168 earth damage",
			"attribute": "При убийстве приемом, сбрасывает перезарядку",
			"attribute_1": "Если враг в состоянии Оглушения, Ослабления, Захвата и Пленения, при крит. атаке используется подряд несколько раз (макс. 2)",
			"attribute_2": "Deals 78 ~ 91 earth additional damage to Stunned, Dazed, Grabbed, Phantom Gripped enemies",
			"attribute_3": "Перемещает к врагу",
			"range": "8 м",
			"radius": "Цель",
			"cast": "Instant",
			"cooldown": "45 sec"
		}
	},
	"tree_18|132": {
		"name": "Тычок",
		"max_lvl": 1,
		"effects": {
			"cost": -20,
			"damage": "100% Переводит нанесенного урона в HP",
			"attribute": "При успешной атаке против врага в состоянии Оглушения, Ослабления, Захвата или Пленения 150% Переводит нанесенного урона в HP",
			"attribute_1": "При попадании по врагу на 5 с. HP +2%",
			"attribute_2": "Ци +100 за 5 с.",
			"range": "3 м",
			"radius": "Цель",
			"cast": "Instant",
			"cooldown": "24 sec"
		}
	},
	"tree_18|133": {
		"name": "Удар палача",
		"max_lvl": 1,
		"effects": {
			"cost": -50,
			"damage": "Deals 150 ~ 175 shadow damage",
			"attribute": "При успехе последнего атакующего приема восстанавливает 50% Ци",
			"attribute_1": "При крит. атаке полностью восстанавливает Ци",
			"attribute_2": "Если последняя атака в серии становится крит. атакой, то сбрасывается время перезарядки умения Циклон",
			"attribute_3": "Доступно до 4 раз",
			"attribute_4": "Во время использования приема Отталкивание дает сопротивление негативным эффектам",
			"attribute_5": "Обновляет продолжительность эффекта Сила воли с последней атаки в серии, если эффект Сила воли имеет 5 ур.",
			"attribute_6": "Прерывает Отбивание",
			"attribute_7": "Deals 600 ~ 700 shadow damage on hit with all 4 times",
			"range": "From User",
			"radius": "4 м",
			"cast": "0.6 sec",
			"cooldown": "24 sec"
		},
		"img": "/img/sc/d/43.png"
	},
	"tree_19|root": {
		"name": "Бросок",
		"effects": {
			"cost": -10,
			"damage": "Deals 54 ~ 63 damage",
			"attribute": "Опрокидывает врага на 3 с.",
			"attribute_1": "Slows enemies by 40% for 6 sec",
			"attribute_2": "Бросает врана макс. на 15 м",
			"range": "16 м",
			"radius": "3 м",
			"cast": "2 sec",
			"cooldown": "Instant",
			"condition": "В состоянии Захвата"
		},
		"relations": [
			134
		],
		"img": "/img/sc/d/44.png"
	},
	"tree_19|134": {
		"name": "Бросок",
		"max_lvl": 1,
		"effects": {
			"cost": -10,
			"damage": "Deals 54 ~ 63 damage",
			"attribute": "Опрокидывает врага на 3 с.",
			"attribute_1": "Slows enemies by 30% for 6 sec",
			"attribute_2": "Запрет на использование боевых приемов быстрого перемещения на 6 с.",
			"attribute_3": "Бросает врана макс. на 15 м",
			"range": "16 м",
			"radius": "3 м",
			"cast": "2 sec",
			"cooldown": "Instant",
			"condition": "В состоянии Захвата"
		},
		"relations": [
			135
		]
	},
	"tree_19|135": {
		"name": "Бросок",
		"max_lvl": 1,
		"effects": {
			"cost": -10,
			"damage": "Deals 54 ~ 63 damage",
			"attribute": "Вводит брошенного врага в состояние Обморока на 30 с.",
			"attribute_1": "Если враги в зоне действия, опрокидывает на 3 с.",
			"attribute_2": "Slows enemies by 30% for 6 sec",
			"attribute_3": "Запрет на использование боевых приемов быстрого перемещения на 6 с.",
			"attribute_4": "Бросает врана макс. на 15 м",
			"range": "16 м",
			"radius": "3 м",
			"cast": "2 sec",
			"cooldown": "Instant",
			"condition": "В состоянии Захвата"
		},
		"relations": [
			136
		]
	},
	"tree_19|136": {
		"name": "Бросок",
		"max_lvl": 1,
		"effects": {
			"cost": -10,
			"damage": "Deals 54 ~ 63 damage",
			"attribute": "Вводит брошенного врага в состояние Обморока на 30 с.",
			"attribute_1": "Если враги в зоне действия, опрокидывает на 3 с.",
			"attribute_2": "Slows enemies by 30% for 6 sec",
			"attribute_3": "Запрет на использование боевых приемов быстрого перемещения на 6 с.",
			"attribute_4": "Выполняет бросок к цели",
			"range": "8 ~ 16m",
			"radius": "3 м",
			"cast": "2 sec",
			"cooldown": "Instant",
			"condition": "В состоянии Захвата"
		},
		"relations": [
			137
		]
	},
	"tree_19|137": {
		"name": "Бросок",
		"max_lvl": 1,
		"effects": {
			"cost": -10,
			"damage": "Deals 54 ~ 63 damage",
			"attribute": "Вводит брошенного врага в состояние Обморока на 30 с.",
			"attribute_1": "Если враги в зоне действия, опрокидывает на 3 с.",
			"attribute_2": "Slows enemies by 30% for 6 sec",
			"attribute_3": "Запрет на использование боевых приемов быстрого перемещения на 6 с.",
			"attribute_4": "Выполняет бросок к цели",
			"range": "8 ~ 16m",
			"radius": "9 м",
			"cast": "2 sec",
			"cooldown": "Instant",
			"condition": "В состоянии Захвата"
		}
	},
	"tree_20|root": {
		"name": "Мясорубка",
		"effects": {
			"cost": -20,
			"damage": "Deals 30 ~ 35 earth damage over 2 hits",
			"attribute": "Сопротивление урону и негативным эффектам",
			"range": "From User",
			"radius": "2 x 4 м",
			"cast": "Instant",
			"cooldown": "24 sec"
		},
		"relations": [
			138
		],
		"img": "/img/sc/d/45.png"
	},
	"tree_20|138": {
		"name": "Мясорубка",
		"max_lvl": 1,
		"effects": {
			"cost": -10,
			"damage": "Deals 30 ~ 35 earth damage over 2 hits",
			"attribute": "Сопротивление урону и негативным эффектам",
			"range": "From User",
			"radius": "2 x 4 м",
			"cast": "Instant",
			"cooldown": "24 sec"
		},
		"relations": [
			139
		]
	},
	"tree_20|139": {
		"name": "Мясорубка",
		"max_lvl": 1,
		"effects": {
			"cost": -10,
			"damage": "Deals 30 ~ 35 earth damage over 2 hits",
			"attribute": "Heals the user 2% of their Health on resist up to 3 times",
			"attribute_1": "Сопротивление урону и негативным эффектам",
			"range": "From User",
			"radius": "2 x 4 м",
			"cast": "Instant",
			"cooldown": "24 sec"
		},
		"relations": [
			140
		]
	},
	"tree_20|140": {
		"name": "Мясорубка",
		"max_lvl": 1,
		"effects": {
			"cost": -10,
			"damage": "Deals 30 ~ 35 earth damage over 2 hits",
			"attribute": "При сопротивлении Ци +30",
			"attribute_1": "Heals the user 2% of their Health on resist up to 3 times",
			"attribute_2": "Сопротивление урону и негативным эффектам",
			"range": "From User",
			"radius": "2 x 4 м",
			"cast": "Instant",
			"cooldown": "24 sec"
		},
		"relations": [
			141
		]
	},
	"tree_20|141": {
		"name": "Мясорубка",
		"max_lvl": 1,
		"effects": {
			"cost": -10,
			"damage": "Deals 30 ~ 35 earth damage over 2 hits",
			"attribute": "При сопротивлении Ци +30",
			"attribute_1": "Heals the user 5% of their Health on resist up to 3 times",
			"attribute_2": "Сопротивление урону и негативным эффектам",
			"range": "From User",
			"radius": "2 x 4 м",
			"cast": "Instant",
			"cooldown": "24 sec"
		}
	},
	"tree_21|root": {
		"name": "Расчленение",
		"effects": {
			"cost": -20,
			"damage": "Deals 60 ~ 70 earth damage",
			"attribute": "Подбрасывает в воздух",
			"attribute_1": "Перемещает к врагу",
			"range": "16 м",
			"radius": "Цель",
			"cast": "Instant",
			"cooldown": "18 sec",
			"condition": "При сопротивлении под действием Гнева",
			"condition_1": "При сопротивлении под действием Мясорубки",
			"condition_2": "При сопротивлении под действием Отступления"
		},
		"relations": [
			142
		],
		"img": "/img/sc/d/46.png"
	},
	"tree_21|142": {
		"name": "Расчленение",
		"max_lvl": 1,
		"effects": {
			"cost": -10,
			"damage": "Deals 60 ~ 70 earth damage",
			"attribute": "Подбрасывает в воздух",
			"attribute_1": "Перемещает к врагу",
			"range": "16 м",
			"radius": "Цель",
			"cast": "Instant",
			"cooldown": "18 sec",
			"condition": "При сопротивлении под действием Гнева",
			"condition_1": "При сопротивлении под действием Мясорубки",
			"condition_2": "При сопротивлении под действием Отступления"
		},
		"relations": [
			143,
			144
		]
	},
	"tree_21|143": {
		"name": "Расчленение",
		"max_lvl": 1,
		"effects": {
			"cost": -10,
			"damage": "Deals 60 ~ 70 earth damage",
			"attribute": "Игнорирует фронтальную защиту врага",
			"attribute_1": "Подбрасывает в воздух",
			"attribute_2": "Перемещает к врагу",
			"range": "16 м",
			"radius": "Цель",
			"cast": "Instant",
			"cooldown": "18 sec",
			"condition": "При сопротивлении под действием Гнева",
			"condition_1": "При сопротивлении под действием Мясорубки",
			"condition_2": "При сопротивлении под действием Отступления"
		},
		"relations": [
			146
		]
	},
	"tree_21|144": {
		"name": "Расчленение",
		"max_lvl": 1,
		"effects": {
			"cost": -10,
			"damage": "Deals 108 ~ 126 earth damage",
			"attribute": "Перемещает к врагу",
			"range": "16 м",
			"radius": "Цель",
			"cast": "Instant",
			"cooldown": "18 sec",
			"condition": "При сопротивлении под действием Гнева",
			"condition_1": "При сопротивлении под действием Мясорубки",
			"condition_2": "При сопротивлении под действием Отступления"
		},
		"relations": [
			145
		]
	},
	"tree_21|145": {
		"name": "Расчленение",
		"max_lvl": 1,
		"effects": {
			"cost": -10,
			"damage": "Deals 108 ~ 126 earth damage",
			"attribute": "При крит. атаке Ци +30",
			"attribute_1": "Перемещает к врагу",
			"range": "16 м",
			"radius": "Цель",
			"cast": "Instant",
			"cooldown": "18 sec",
			"condition": "При сопротивлении под действием Гнева",
			"condition_1": "При сопротивлении под действием Мясорубки",
			"condition_2": "При сопротивлении под действием Отступления"
		},
		"relations": [
			147
		]
	},
	"tree_21|146": {
		"name": "Расчленение",
		"max_lvl": 1,
		"effects": {
			"cost": -10,
			"damage": "Deals 60 ~ 70 earth damage",
			"attribute": "Игнорирует фронтальную защиту врага",
			"attribute_1": "Прерывает Отбивание и Защиту",
			"attribute_2": "Подбрасывает в воздух",
			"attribute_3": "Перемещает к врагу",
			"range": "16 м",
			"radius": "Цель",
			"cast": "Instant",
			"cooldown": "18 sec",
			"condition": "При сопротивлении под действием Гнева",
			"condition_1": "При сопротивлении под действием Мясорубки",
			"condition_2": "При сопротивлении под действием Отступления"
		}
	},
	"tree_21|147": {
		"name": "Расчленение",
		"max_lvl": 1,
		"effects": {
			"cost": -10,
			"damage": "Deals 108 ~ 126 earth damage",
			"attribute": "При крит. атаке Ци +120 за 5 с.",
			"attribute_1": "Перемещает к врагу",
			"range": "16 м",
			"radius": "Цель",
			"cast": "Instant",
			"cooldown": "18 sec",
			"condition": "При сопротивлении под действием Гнева",
			"condition_1": "При сопротивлении под действием Мясорубки",
			"condition_2": "При сопротивлении под действием Отступления"
		}
	},
	"tree_22|root": {
		"name": "Стальной щит",
		"effects": {
			"cost": 0,
			"damage": "Blocks frontal attacks for 4 sec",
			"attribute": "Heals the user 20% of their Health over 4 sec",
			"range": "From User",
			"radius": "Цель",
			"cast": "Instant",
			"cooldown": "45 sec"
		},
		"relations": [
			148
		],
		"img": "/img/sc/d/47.png"
	},
	"tree_22|148": {
		"name": "Стальной щит",
		"max_lvl": 1,
		"effects": {
			"cost": 0,
			"damage": "Blocks frontal attacks for 4 sec",
			"attribute": "При успешном Блоке Ци +20",
			"attribute_1": "Heals the user 20% of their Health over 4 sec",
			"range": "From User",
			"radius": "Цель",
			"cast": "Instant",
			"cooldown": "45 sec"
		},
		"relations": [
			149,
			150,
			151,
			152
		]
	},
	"tree_22|149": {
		"name": "Стальной щит",
		"max_lvl": 1,
		"effects": {
			"cost": 0,
			"damage": "Blocks frontal attacks for 4 sec",
			"attribute": "Stuns enemies for 2 sec",
			"attribute_1": "При успешном Блоке Ци +20",
			"attribute_2": "Heals the user 20% of their Health over 4 sec",
			"attribute_3": "Прерывает Отбивание",
			"attribute_4": "Deals 6 ~ 7 damage",
			"range": "From User",
			"radius": "2 x 4 м",
			"cast": "Instant",
			"cooldown": "45 sec"
		},
		"relations": [
			156
		],
		"img": "/img/sc/d/48.png"
	},
	"tree_22|150": {
		"name": "Стальной щит",
		"max_lvl": 1,
		"effects": {
			"cost": 0,
			"damage": "Blocks frontal attacks for 4 sec",
			"attribute": "При успешном Блоке HP +1% несколько раз (макс. 5)",
			"attribute_1": "При успешном Блоке Ци +20",
			"attribute_2": "Heals the user 20% of their Health over 4 sec",
			"range": "From User",
			"radius": "Цель",
			"cast": "Instant",
			"cooldown": "45 sec"
		},
		"relations": [
			153
		]
	},
	"tree_22|151": {
		"name": "Стальной щит",
		"max_lvl": 1,
		"effects": {
			"cost": 0,
			"damage": "Blocks frontal attacks for 4 sec",
			"attribute": "При успешном Блоке Ци +20",
			"attribute_1": "Heals the user 10% of their Health over 4 sec",
			"range": "From User",
			"radius": "Цель",
			"cast": "Instant",
			"cooldown": "24 sec"
		},
		"relations": [
			154
		]
	},
	"tree_22|152": {
		"name": "Стальной щит",
		"max_lvl": 1,
		"effects": {
			"cost": 0,
			"damage": "Blocks frontal attacks for 4 sec",
			"attribute": "У членов группы в зоне действия несколько раз (3) снижает получаемый урон на 25%",
			"attribute_1": "При успешном Блоке Ци +20",
			"attribute_2": "Heals the user 20% of their Health over 4 sec",
			"range": "From User",
			"radius": "8 м",
			"cast": "Instant",
			"cooldown": "30 sec"
		},
		"relations": [
			155
		]
	},
	"tree_22|153": {
		"name": "Стальной щит",
		"max_lvl": 1,
		"effects": {
			"cost": 0,
			"damage": "Blocks frontal attacks for 4 sec",
			"attribute": "При успешном Блоке несколько раз подряд (3) сбрасывает перезарядку приема Отступление",
			"attribute_1": "При успешном Блоке HP +1% несколько раз (макс. 5)",
			"attribute_2": "При успешном Блоке Ци +20",
			"attribute_3": "Heals the user 20% of their Health over 4 sec",
			"range": "From User",
			"radius": "Цель",
			"cast": "Instant",
			"cooldown": "45 sec"
		},
		"relations": [
			157
		]
	},
	"tree_22|154": {
		"name": "Стальной щит",
		"max_lvl": 1,
		"effects": {
			"cost": 0,
			"damage": "Blocks frontal attacks for 4 sec",
			"attribute": "При успехе приема Клин время перезарядки приема Стальной щит -1 с.",
			"attribute_1": "При успешном Блоке Ци +20",
			"attribute_2": "Heals the user 10% of their Health over 4 sec",
			"range": "From User",
			"radius": "Цель",
			"cast": "Instant",
			"cooldown": "24 sec"
		},
		"relations": [
			158
		]
	},
	"tree_22|155": {
		"name": "Стальной щит",
		"max_lvl": 1,
		"effects": {
			"cost": 0,
			"damage": "Blocks frontal attacks for 4 sec",
			"attribute": "У членов группы в зоне действия в течение 4 с. Скорость +30%",
			"attribute_1": "У членов группы в зоне действия несколько раз (3) снижает получаемый урон на 25%",
			"attribute_2": "При успешном Блоке Ци +20",
			"attribute_3": "Heals the user 20% of their Health over 4 sec",
			"range": "From User",
			"radius": "8 м",
			"cast": "Instant",
			"cooldown": "30 sec"
		},
		"relations": [
			159
		]
	},
	"tree_22|156": {
		"name": "Стальной щит",
		"max_lvl": 1,
		"effects": {
			"cost": 0,
			"damage": "Blocks frontal attacks for 4 sec",
			"attribute": "Stuns enemies for 3 sec",
			"attribute_1": "При успешном Блоке Ци +20",
			"attribute_2": "Heals the user 20% of their Health over 4 sec",
			"attribute_3": "Прерывает Отбивание",
			"attribute_4": "Deals 6 ~ 7 damage",
			"range": "From User",
			"radius": "2 x 4 м",
			"cast": "Instant",
			"cooldown": "45 sec"
		},
		"relations": [
			160
		],
		"img": "/img/sc/d/48.png"
	},
	"tree_22|157": {
		"name": "Стальной щит",
		"max_lvl": 1,
		"effects": {
			"cost": 0,
			"damage": "Blocks frontal attacks for 4 sec",
			"attribute": "Игнорирует отмену защитных боевых приемов",
			"attribute_1": "При успешном Блоке несколько раз подряд (3) сбрасывает перезарядку приема Отступление",
			"attribute_2": "При успешном Блоке HP +1% несколько раз (макс. 5)",
			"attribute_3": "При успешном Блоке Ци +20",
			"attribute_4": "Heals the user 25% of their Health over 4 sec",
			"range": "From User",
			"radius": "Цель",
			"cast": "Instant",
			"cooldown": "45 sec"
		}
	},
	"tree_22|158": {
		"name": "Стальной щит",
		"max_lvl": 1,
		"effects": {
			"cost": 0,
			"damage": "Blocks frontal attacks for 4 sec",
			"attribute": "Игнорирует отмену защитных боевых приемов",
			"attribute_1": "Защита +400%",
			"attribute_2": "Урон -40%",
			"attribute_3": "При успешном Блоке время перезарядки приема Стальной щит -1 с.",
			"attribute_4": "При успехе приема Клин время перезарядки приема Стальной щит -1 с.",
			"attribute_5": "При успешном Блоке Ци +20",
			"attribute_6": "Heals the user 10% of their Health over 4 sec",
			"range": "From User",
			"radius": "Цель",
			"cast": "Instant",
			"cooldown": "24 sec"
		}
	},
	"tree_22|159": {
		"name": "Стальной щит",
		"max_lvl": 1,
		"effects": {
			"cost": 0,
			"damage": "Blocks frontal attacks for 8 sec",
			"attribute": "Игнорирует отмену защитных боевых приемов",
			"attribute_1": "У членов группы в зоне действия в течение 4 с. Скорость +30%",
			"attribute_2": "У членов группы в зоне действия получаемый урон -50%",
			"attribute_3": "При успешном Блоке Ци +20",
			"attribute_4": "Heals the user 20% of their Health over 8 sec",
			"range": "From User",
			"radius": "8 м",
			"cast": "Instant",
			"cooldown": "30 sec"
		}
	},
	"tree_22|160": {
		"name": "Стальной щит",
		"max_lvl": 1,
		"effects": {
			"cost": 0,
			"damage": "Blocks frontal attacks for 4 sec",
			"attribute": "После Отталкивания врагов на 12 м опрокидывает на 5 с.",
			"attribute_1": "Если враг сопротивляется Отталкиванию, опрокидывает на 3 с.",
			"attribute_2": "Если против врага успешно применен эффект Отталкивания, опрокидывает на 3 с.",
			"attribute_3": "При успешном Блоке Ци +20",
			"attribute_4": "Heals the user 20% of their Health over 4 sec",
			"attribute_5": "Прерывает Отбивание",
			"attribute_6": "Deals 6 ~ 7 damage",
			"range": "From User",
			"radius": "4 x 10 м",
			"cast": "Instant",
			"cooldown": "1 min"
		},
		"img": "/img/sc/d/48.png"
	},
	"tree_23|root": {
		"name": "Циклон",
		"effects": {
			"cost": -10,
			"damage": "Deals 144 ~ 168 shadow damage",
			"attribute": "Во время использования приема Скорость -30%",
			"attribute_1": "Прерывает Отбивание и Защиту",
			"attribute_2": "При использовании приема мгновенно 1 раз отменяет Паралич",
			"attribute_3": "Deals 36 ~ 42 shadow damage on consecutive use",
			"attribute_4": "При успехе приема накладывает эффект Сила воли, эффект суммируется до 5 раз",
			"attribute_5": "При макс. эффекте Сила воли, Ци +20 за каждого раненного врага",
			"attribute_6": "При макс. эффекте Сила воли (5), Скорость +20%",
			"attribute_7": "Во время использования приема Отталкивание дает сопротивление негативным эффектам",
			"attribute_8": "Не сбрасывает перезарядку приема",
			"range": "From User",
			"radius": "5 м",
			"cast": "Instant",
			"cooldown": "30 sec"
		},
		"relations": [
			161
		],
		"img": "/img/sc/d/49.png"
	},
	"tree_23|161": {
		"name": "Циклон",
		"max_lvl": 1,
		"effects": {
			"cost": -10,
			"damage": "Deals 144 ~ 168 shadow damage",
			"attribute": "Прерывает Отбивание и Защиту",
			"attribute_1": "При использовании приема мгновенно 1 раз отменяет Паралич",
			"attribute_2": "Deals 36 ~ 42 shadow damage on consecutive use",
			"attribute_3": "При успехе приема накладывает эффект Сила воли, эффект суммируется до 5 раз",
			"attribute_4": "При макс. эффекте Сила воли, Ци +20 за каждого раненного врага",
			"attribute_5": "При макс. эффекте Сила воли (5), Скорость +20%",
			"attribute_6": "Во время использования приема Отталкивание дает сопротивление негативным эффектам",
			"attribute_7": "Не сбрасывает перезарядку приема",
			"range": "From User",
			"radius": "5 м",
			"cast": "Instant",
			"cooldown": "30 sec"
		},
		"relations": [
			162,
			163,
			164
		]
	},
	"tree_23|162": {
		"name": "Циклон",
		"max_lvl": 1,
		"effects": {
			"cost": -10,
			"damage": "Deals 144 ~ 168 shadow damage",
			"attribute": "Прерывает Отбивание и Защиту",
			"attribute_1": "При использовании приема мгновенно 1 раз отменяет Паралич",
			"attribute_2": "Deals 36 ~ 42 shadow damage on consecutive use",
			"attribute_3": "При успехе приема накладывает эффект Сила воли, эффект суммируется до 5 раз",
			"attribute_4": "При макс. эффекте Сила воли, Ци +20 за каждого раненного врага",
			"attribute_5": "При макс. эффекте Сила воли (5), Скорость +20%",
			"attribute_6": "Во время использования приема Отталкивание дает сопротивление негативным эффектам",
			"attribute_7": "При крит. атаке Ци +10",
			"attribute_8": "Не сбрасывает перезарядку приема",
			"range": "From User",
			"radius": "5 м",
			"cast": "Instant",
			"cooldown": "30 sec"
		}
	},
	"tree_23|163": {
		"name": "Циклон",
		"max_lvl": 1,
		"effects": {
			"cost": -20,
			"damage": "Deals 144 ~ 168 shadow damage",
			"attribute": "Во время использования приема Скорость -30%",
			"attribute_1": "Прерывает Отбивание и Защиту",
			"attribute_2": "При использовании приема мгновенно 1 раз отменяет Паралич",
			"attribute_3": "Во время использования дает сопротивление Оглушению, Ослаблению, Опрокидыванию, Отталкиванию, Притягиванию, Пленению и Подбрасыванию в воздух",
			"attribute_4": "При успешном сопротивлении на 3 с. сопротивление эффектам снижения скорости",
			"attribute_5": "Расходует 10 Ци в случае непрерывного использования",
			"attribute_6": "Сопротивление урону и негативным эффектам на 1 с.",
			"attribute_7": "Damage dealt increases by 12 ~ 14 damage on consecutive use up to 2 times",
			"attribute_8": "Не сбрасывает перезарядку приема",
			"range": "From User",
			"radius": "5 м",
			"cast": "Instant",
			"cooldown": "1 min"
		},
		"relations": [
			165
		]
	},
	"tree_23|164": {
		"name": "Циклон",
		"max_lvl": 1,
		"effects": {
			"cost": -20,
			"damage": "Deals 144 ~ 168 shadow damage",
			"attribute": "Во время использования приема Скорость -30%",
			"attribute_1": "Прерывает Отбивание и Защиту",
			"attribute_2": "При использовании приема мгновенно 1 раз отменяет Паралич",
			"attribute_3": "Во время использования дает сопротивление Оглушению, Ослаблению, Опрокидыванию, Отталкиванию, Притягиванию, Пленению и Подбрасыванию в воздух",
			"attribute_4": "При успешном сопротивлении на 3 с. сопротивление эффектам снижения скорости",
			"attribute_5": "Сопротивление урону и негативным эффектам на 1 с.",
			"attribute_6": "При успехе атаки отменяет запрет на использование боевых приемов быстрого перемещения",
			"attribute_7": "При успехе атаки отталкивает врагов на 11 м",
			"attribute_8": "Не сбрасывает перезарядку приема",
			"range": "From User",
			"radius": "5 м",
			"cast": "Instant",
			"cooldown": "45 sec"
		}
	},
	"tree_23|165": {
		"name": "Циклон",
		"max_lvl": 1,
		"effects": {
			"cost": -20,
			"damage": "Deals 144 ~ 168 shadow damage",
			"attribute": "Прерывает Отбивание и Защиту",
			"attribute_1": "При использовании приема мгновенно 1 раз отменяет Паралич",
			"attribute_2": "Во время использования дает сопротивление Оглушению, Ослаблению, Опрокидыванию, Отталкиванию, Притягиванию, Пленению и Подбрасыванию в воздух",
			"attribute_3": "При успешном сопротивлении на 3 с. сопротивление эффектам снижения скорости",
			"attribute_4": "Расходует 10 Ци в случае непрерывного использования",
			"attribute_5": "Сопротивление урону и негативным эффектам на 1 с.",
			"attribute_6": "Damage dealt increases by 12 ~ 14 damage on consecutive use up to 2 times",
			"attribute_7": "При успехе атаки несколько раз (5) оглушает на 2 с.",
			"attribute_8": "Не сбрасывает перезарядку приема",
			"range": "From User",
			"radius": "5 м",
			"cast": "Instant",
			"cooldown": "1 min"
		}
	},
	"tree_24|root": {
		"name": "Гнев",
		"effects": {
			"cost": 0,
			"damage": "Fury for 4 sec",
			"attribute": "Сопротивление урону и негативным эффектам",
			"attribute_1": "Generates 120 Focus while Fury is active",
			"attribute_2": "Во время действия приема Гнев Защита -100%",
			"attribute_3": "Отменяет запрет на использование боевых приемов быстрого перемещения",
			"attribute_4": "Не сбрасывает перезарядку приема",
			"range": "From User",
			"radius": "3 м",
			"cast": "Instant",
			"cooldown": "45 sec"
		},
		"relations": [
			166
		],
		"img": "/img/sc/d/50.png"
	},
	"tree_24|166": {
		"name": "Гнев",
		"max_lvl": 1,
		"effects": {
			"cost": 0,
			"damage": "Fury for 4 sec",
			"attribute": "Сопротивление урону и негативным эффектам",
			"attribute_1": "Generates 120 Focus while Fury is active",
			"attribute_2": "Во время действия приема Гнев Защита -100%",
			"attribute_3": "Во время использования приема Гнев дает сопротивление Оглушению, Ослаблению, Отталкиванию, негативным эффектам и Притягиванию",
			"attribute_4": "Отменяет запрет на использование боевых приемов быстрого перемещения",
			"attribute_5": "Не сбрасывает перезарядку приема",
			"range": "From User",
			"radius": "3 м",
			"cast": "Instant",
			"cooldown": "45 sec"
		},
		"relations": [
			167,
			168
		]
	},
	"tree_24|167": {
		"name": "Гнев",
		"max_lvl": 1,
		"effects": {
			"cost": 0,
			"damage": "Fury for 4 sec",
			"attribute": "Сопротивление урону и негативным эффектам",
			"attribute_1": "Generates 120 Focus while Fury is active",
			"attribute_2": "Во время действия приема Гнев Защита -100%",
			"attribute_3": "Во время использования приема Гнев дает сопротивление Оглушению, Ослаблению, Отталкиванию, негативным эффектам и Притягиванию",
			"attribute_4": "Во время действия приема Гнев шанс крит. атаки +100%",
			"attribute_5": "Отменяет запрет на использование боевых приемов быстрого перемещения",
			"attribute_6": "Не сбрасывает перезарядку приема",
			"range": "From User",
			"radius": "3 м",
			"cast": "Instant",
			"cooldown": "45 sec"
		},
		"relations": [
			169
		]
	},
	"tree_24|168": {
		"name": "Стальная кожа",
		"max_lvl": 1,
		"effects": {
			"cost": 0,
			"damage": "Persistence for 5 sec",
			"attribute": "Сопротивление урону и негативным эффектам",
			"attribute_1": "Generates 150 Focus while Persistence is active",
			"attribute_2": "Во время действия приема Стальная кожа Защита +400%",
			"attribute_3": "Во время использования приема Стальная кожа дает сопротивление Оглушению, Ослаблению, Отталкиванию, негативным эффектам и Притягиванию",
			"attribute_4": "Во время использования приема Стальная кожа, иммунитет к Параличу и эффектам снижения скорости",
			"attribute_5": "Не сбрасывает перезарядку приема",
			"range": "From User",
			"radius": "3 м",
			"cast": "Instant",
			"cooldown": "1 min"
		},
		"relations": [
			170
		],
		"img": "/img/sc/d/51.png"
	},
	"tree_24|169": {
		"name": "Гнев",
		"max_lvl": 1,
		"effects": {
			"cost": 0,
			"damage": "Fury for 4 sec",
			"attribute": "Сопротивление урону и негативным эффектам",
			"attribute_1": "Generates 120 Focus while Fury is active",
			"attribute_2": "Во время действия приема Гнев Защита -100%",
			"attribute_3": "Во время использования приема Гнев дает сопротивление Оглушению, Ослаблению, Отталкиванию, негативным эффектам и Притягиванию",
			"attribute_4": "Во время действия приема Гнев шанс крит. атаки +100%",
			"attribute_5": "Во время действия приема Гнев сила крит. атаки +30%",
			"attribute_6": "Отменяет запрет на использование боевых приемов быстрого перемещения",
			"attribute_7": "Не сбрасывает перезарядку приема",
			"range": "From User",
			"radius": "3 м",
			"cast": "Instant",
			"cooldown": "45 sec"
		},
		"relations": [
			171
		]
	},
	"tree_24|170": {
		"name": "Стальная кожа",
		"max_lvl": 1,
		"effects": {
			"cost": 0,
			"damage": "Persistence for 5 sec",
			"attribute": "Сопротивление урону и негативным эффектам",
			"attribute_1": "Generates 150 Focus while Persistence is active",
			"attribute_2": "При получении урона во время использования приема Стальная кожа Ци +100",
			"attribute_3": "Во время действия приема Стальная кожа Защита +400%",
			"attribute_4": "Во время использования приема Стальная кожа дает сопротивление Оглушению, Ослаблению, Отталкиванию, негативным эффектам и Притягиванию",
			"attribute_5": "Во время использования приема Стальная кожа, иммунитет к Параличу и эффектам снижения скорости",
			"attribute_6": "Не сбрасывает перезарядку приема",
			"range": "From User",
			"radius": "3 м",
			"cast": "Instant",
			"cooldown": "1 min"
		},
		"relations": [
			172,
			173
		],
		"img": "/img/sc/d/51.png"
	},
	"tree_24|171": {
		"name": "Гнев",
		"max_lvl": 1,
		"effects": {
			"cost": 0,
			"damage": "Fury for 6 sec",
			"attribute": "Сопротивление урону и негативным эффектам",
			"attribute_1": "Generates 180 Focus while Fury is active",
			"attribute_2": "Во время действия приема Гнев Защита -100%",
			"attribute_3": "Во время использования приема Гнев дает сопротивление Оглушению, Ослаблению, Отталкиванию, негативным эффектам и Притягиванию",
			"attribute_4": "Во время действия приема Гнев шанс крит. атаки +100%",
			"attribute_5": "Во время действия приема Гнев сила крит. атаки +30%",
			"attribute_6": "Отменяет запрет на использование боевых приемов быстрого перемещения",
			"attribute_7": "Не сбрасывает перезарядку приема",
			"range": "From User",
			"radius": "3 м",
			"cast": "Instant",
			"cooldown": "45 sec"
		},
		"relations": [
			174
		]
	},
	"tree_24|172": {
		"name": "Стальная кожа",
		"max_lvl": 1,
		"effects": {
			"cost": 0,
			"damage": "Persistence for 5 sec",
			"attribute": "Сопротивление урону и негативным эффектам",
			"attribute_1": "Generates 150 Focus while Persistence is active",
			"attribute_2": "При получении урона во время использования приема Стальная кожа Ци +100",
			"attribute_3": "Во время действия приема Стальная кожа Защита +400%",
			"attribute_4": "Во время использования приема Стальная кожа дает сопротивление Оглушению, Ослаблению, Отталкиванию, негативным эффектам и Притягиванию",
			"attribute_5": "Во время использования приема Стальная кожа, иммунитет к Параличу и эффектам снижения скорости",
			"attribute_6": "Выводит из состояния Опрокидывания, Оглушения, Ослабления и Обморока",
			"attribute_7": "Не сбрасывает перезарядку приема",
			"range": "From User",
			"radius": "3 м",
			"cast": "Instant",
			"cooldown": "1 min"
		},
		"relations": [
			175
		],
		"img": "/img/sc/d/51.png"
	},
	"tree_24|173": {
		"name": "Стальная кожа",
		"max_lvl": 1,
		"effects": {
			"cost": 0,
			"damage": "Persistence for 5 sec",
			"attribute": "Сопротивление урону и негативным эффектам несколько раз (5) на 5 с.",
			"attribute_1": "Generates 150 Focus while Persistence is active",
			"attribute_2": "Во время использования приема Стальная кожа, иммунитет к Параличу и эффектам снижения скорости",
			"attribute_3": "Выводит из состояния Опрокидывания, Оглушения, Ослабления и Обморока",
			"attribute_4": "Не сбрасывает перезарядку приема",
			"range": "From User",
			"radius": "3 м",
			"cast": "Instant",
			"cooldown": "1 min"
		},
		"relations": [
			176
		],
		"img": "/img/sc/d/51.png"
	},
	"tree_24|174": {
		"name": "Гнев",
		"max_lvl": 1,
		"effects": {
			"cost": 0,
			"damage": "Fury for 6 sec",
			"attribute": "Сопротивление урону и негативным эффектам",
			"attribute_1": "Generates 180 Focus while Fury is active",
			"attribute_2": "Во время действия приема Гнев Защита -100%",
			"attribute_3": "Во время использования приема Гнев дает сопротивление Оглушению, Ослаблению, Отталкиванию, негативным эффектам и Притягиванию",
			"attribute_4": "Во время действия приема Гнев шанс крит. атаки +100%",
			"attribute_5": "Во время действия приема Гнев сила крит. атаки +30%",
			"attribute_6": "Сбрасывает перезарядку приема Тычок",
			"attribute_7": "Отменяет запрет на использование боевых приемов быстрого перемещения",
			"attribute_8": "Не сбрасывает перезарядку приема",
			"range": "From User",
			"radius": "3 м",
			"cast": "Instant",
			"cooldown": "45 sec"
		}
	},
	"tree_24|175": {
		"name": "Стальная кожа",
		"max_lvl": 1,
		"effects": {
			"cost": 0,
			"damage": "Persistence for 5 sec",
			"attribute": "Сопротивление урону и негативным эффектам",
			"attribute_1": "Generates 150 Focus while Persistence is active",
			"attribute_2": "При получении урона во время использования приема Стальная кожа Ци +100",
			"attribute_3": "Во время действия приема Стальная кожа Защита +400%",
			"attribute_4": "Во время использования приема Стальная кожа дает сопротивление Оглушению, Ослаблению, Отталкиванию, негативным эффектам и Притягиванию",
			"attribute_5": "Во время использования приема Стальная кожа, иммунитет к Параличу и эффектам снижения скорости",
			"attribute_6": "Выводит из состояния Опрокидывания, Оглушения, Ослабления и Обморока",
			"attribute_7": "Сбрасывает перезарядку приема Стальной щит",
			"attribute_8": "Не сбрасывает перезарядку приема",
			"range": "From User",
			"radius": "3 м",
			"cast": "Instant",
			"cooldown": "1 min"
		},
		"img": "/img/sc/d/51.png"
	},
	"tree_24|176": {
		"name": "Стальная кожа",
		"max_lvl": 1,
		"effects": {
			"cost": 0,
			"damage": "Persistence for 5 sec",
			"attribute": "Сопротивление урону и негативным эффектам несколько раз (5) на 5 с.",
			"attribute_1": "Generates 150 Focus while Persistence is active",
			"attribute_2": "Во время использования приема Стальная кожа, иммунитет к Параличу и эффектам снижения скорости",
			"attribute_3": "Выводит из состояния Опрокидывания, Оглушения, Ослабления и Обморока",
			"attribute_4": "Сбрасывает перезарядку приема Тычок",
			"attribute_5": "Не сбрасывает перезарядку приема",
			"range": "From User",
			"radius": "3 м",
			"cast": "Instant",
			"cooldown": "1 min"
		},
		"img": "/img/sc/d/51.png"
	},
	"tree_25|root": {
		"name": "Отступление",
		"effects": {
			"cost": 0,
			"damage": "Перемещает назад на 8 м",
			"attribute": "Сопротивление урону и негативным эффектам",
			"attribute_1": "Используется двойным нажатием клавиши [S]",
			"range": "From User",
			"radius": "Цель",
			"cast": "Instant",
			"cooldown": "12 sec"
		},
		"relations": [
			177
		],
		"img": "/img/sc/d/52.png"
	},
	"tree_25|177": {
		"name": "Отступление",
		"max_lvl": 1,
		"effects": {
			"cost": 0,
			"damage": "Перемещает назад на 8 м",
			"attribute": "Скорость +30% на 4 с.",
			"attribute_1": "Сопротивление урону и негативным эффектам",
			"attribute_2": "Используется двойным нажатием клавиши [S]",
			"range": "From User",
			"radius": "Цель",
			"cast": "Instant",
			"cooldown": "12 sec"
		},
		"relations": [
			178
		]
	},
	"tree_25|178": {
		"name": "Отступление",
		"max_lvl": 1,
		"effects": {
			"cost": 0,
			"damage": "Перемещает назад на 8 м",
			"attribute": "При сопротивлении Ци +30",
			"attribute_1": "Скорость +30% на 4 с.",
			"attribute_2": "Сопротивление урону и негативным эффектам",
			"attribute_3": "Используется двойным нажатием клавиши [S]",
			"range": "From User",
			"radius": "Цель",
			"cast": "Instant",
			"cooldown": "12 sec"
		},
		"relations": [
			179
		]
	},
	"tree_25|179": {
		"name": "Отступление",
		"max_lvl": 1,
		"effects": {
			"cost": 0,
			"damage": "Перемещает назад на 8 м",
			"attribute": "После использования сопротивление урону и негативным эффектам на 1 с.",
			"attribute_1": "При сопротивлении Ци +30",
			"attribute_2": "Скорость +30% на 4 с.",
			"attribute_3": "Сопротивление урону и негативным эффектам",
			"attribute_4": "Используется двойным нажатием клавиши [S]",
			"range": "From User",
			"radius": "Цель",
			"cast": "Instant",
			"cooldown": "24 sec"
		}
	},
	"tree_26|root": {
		"name": "Клин",
		"effects": {
			"cost": 20,
			"damage": "Deals 10 ~ 11 damage",
			"attribute": "100% Переводит нанесенного урона в HP",
			"range": "3 м",
			"radius": "Цель",
			"cast": "Instant",
			"cooldown": "Instant",
			"condition": "В состоянии Захвата",
			"condition_1": "После применения приема Стальной щит"
		},
		"img": "/img/sc/d/4.png"
	},
	"tree_27|root": {
		"name": "Ярость хранителя",
		"effects": {
			"cost": 15,
			"damage": "Deals 60 ~ 70 damage",
			"attribute": "Макс. ускоряет действие боевого приема",
			"attribute_1": "За каждого раненого врага Ци +15",
			"attribute_2": "При получении урона во время использования шанс крит. атаки следующим приемом +100%",
			"attribute_3": "При срабатывании эффекта крит. атаки длится 3 с.",
			"attribute_4": "При изучении приема 2 ветви начинает наносить урон тьмой",
			"attribute_5": "Доступено во время действия Soulburned",
			"range": "From User",
			"radius": "4 м",
			"cast": "Instant",
			"cooldown": "0.4 sec",
			"condition": "Под действием эффекта Soulburned (Warlock)"
		},
		"img": "/img/sc/d/8.png"
	},
	"tree_28|root": {
		"name": "Абсолютная защита",
		"effects": {
			"cost": 0,
			"damage": "Сопротивление урону и негативным эффектам у члена группы в состоянии медитации",
			"attribute": "У члена группы в состоянии медитации время медитации -6 с.",
			"range": "3 м",
			"radius": "Цель",
			"cast": "Instant",
			"cooldown": "45 sec",
			"condition": "Применяется к члену группы в состоянии медитации"
		},
		"img": "/img/sc/d/15.png"
	},
	"tree_3.1|root": {
		"name": "Раскол земли",
		"effects": {
			"cost": 20,
			"damage": "Deals 60 ~ 70 earth damage",
			"attribute": "Накладывает эффект Кровотечение (1 шт.) на 10 с.",
			"attribute_1": "Ци +120 за 8 с.",
			"attribute_2": "Deals 240 ~ 280 earth damage over 8 sec",
			"range": "1m",
			"radius": "2 x 8 м",
			"cast": "Instant",
			"cooldown": "24 sec",
			"condition": "При крит. атаке приемом Разрушение"
		},
		"img": "/img/sc/d/12.png"
	},
	"tree_3.2|root": {
		"name": "Громовой удар",
		"effects": {
			"cost": 30,
			"damage": "Deals 132 ~ 154 shadow damage",
			"attribute": "При крит. атаке дополнительно восстанавливает 120 Ци за 4 с.",
			"attribute_1": "Накладывает эффект Кровотечение (1 шт.) на 10 с.",
			"attribute_2": "Переводит 50% нанесенного урона в НР",
			"range": "From User",
			"radius": "2 x 8 м",
			"cast": "Instant",
			"cooldown": "Instant",
			"condition": "При крит. атаке приемом Отражение атаки"
		},
		"img": "/img/sc/d/14.png"
	},
	"tree_29|root": {
		"name": "Кувырок назад",
		"effects": {
			"cost": 0,
			"damage": "Выводит из состояния Опрокидывания, Ослабления и Обморока",
			"attribute": "Сопротивление урону и негативным эффектам",
			"attribute_1": "Перемещает назад на 4 м",
			"range": "From User",
			"radius": "Цель",
			"cast": "Instant",
			"cooldown": "12 sec",
			"condition": "В состоянии Опрокидывания, Ослабления или Обморока"
		},
		"img": "/img/sc/d/17.png"
	},
	"tree_30|root": {
		"name": "Спасение",
		"effects": {
			"cost": 0,
			"damage": "На 8 с. применяет прием Спасение к союзнику в состоянии истощения",
			"range": "3 м",
			"radius": "Цель",
			"cast": "Instant",
			"cooldown": "Instant",
			"condition": "Член группы в состоянии истощения"
		},
		"img": "/img/sc/d/18.png"
	},
	"tree_31|root": {
		"name": "Удар о землю",
		"effects": {
			"cost": -10,
			"damage": "Deals 120 ~ 140 earth damage",
			"attribute": "Бросает врага на землю",
			"attribute_1": "Шанс уклонения +100%",
			"attribute_2": "Прерывает Отбивание и Защиту",
			"attribute_3": "Скорость +30% на 4 с.",
			"attribute_4": "Боевые приемы быстрого перемещения и Защиты недоступны на 4 с.",
			"attribute_5": "При успехе атаки Ци +30",
			"attribute_6": "Опрокидывает врага на 2 с.",
			"range": "3 м",
			"radius": "3 м",
			"cast": "Instant",
			"cooldown": "Instant",
			"condition": "Если враг подброшен в воздухe"
		},
		"img": "/img/sc/d/19.png"
	},
	"tree_32|root": {
		"name": "Хватка урагана",
		"effects": {
			"cost": -20,
			"damage": "Deals 36 ~ 42 wind damage",
			"attribute": "Сопротивление негативным эффектам Оглушение, Ослабление и Отталкивание",
			"attribute_1": "При использовании приема мгновенно 1 раз отменяет Паралич",
			"attribute_2": "Отменяет эффект Травма",
			"attribute_3": "Боевой прием атаки и защиты",
			"range": "From User",
			"radius": "3 м",
			"cast": "Instant",
			"cooldown": "Instant",
			"condition": "В состоянии Захвата"
		},
		"img": "/img/sc/d/22.png"
	},
	"tree_33|root": {
		"name": "Пинок",
		"effects": {
			"cost": 0,
			"damage": "Deals 18 ~ 21 damage",
			"attribute": "Прерывает Отбивание и Защиту",
			"range": "3 м",
			"radius": "Цель",
			"cast": "Instant",
			"cooldown": "Instant",
			"condition": "В состоянии Пленения"
		},
		"img": "/img/sc/d/25.png"
	},
	"tree_34|root": {
		"name": "Удар в захвате",
		"effects": {
			"cost": 0,
			"damage": "Deals 18 ~ 21 damage",
			"attribute": "Прерывает Отбивание и Защиту",
			"range": "3 м",
			"radius": "Цель",
			"cast": "Instant",
			"cooldown": "Instant",
			"condition": "В состоянии Захвата"
		},
		"img": "/img/sc/d/26.png"
	},
	"tree_35|root": {
		"name": "Буйство стихии",
		"effects": {
			"cost": 0,
			"damage": "Выводит из состояния Опрокидывания",
			"attribute": "При получении урона во время применения приема опрокидывает на 1 с.",
			"attribute_1": "При успехе приема сопротивление Опрокидыванию, Оглушению, Ослаблению и Отталкиванию на 1 с.",
			"attribute_2": "Deals 12 ~ 14 damage",
			"range": "From User",
			"radius": "3 м",
			"cast": "Instant",
			"cooldown": "12 sec",
			"condition": "В состоянии Опрокидывания"
		},
		"img": "/img/sc/d/27.png"
	},
	"tree_36|root": {
		"name": "Спасение из боя",
		"effects": {
			"cost": 0,
			"damage": "Кладет на землю спасенного союзника",
			"range": "From User",
			"radius": "Цель",
			"cast": "Instant",
			"cooldown": "Instant",
			"condition": "Во время действия приема Спасение"
		},
		"img": "/img/sc/d/28.png"
	},
	"tree_37|root": {
		"name": "Воздаяние",
		"effects": {
			"cost": 0,
			"damage": "Позволяет контратаковать в ответ на атаку в радиусе до 8 м в течение 0,8 с.",
			"attribute": "При успешной Контратаке сопротивление Опрокидыванию, Оглушению, Ослаблению и Отталкиванию на 1 с.",
			"attribute_1": "При успехе приема выводит из состояния Опрокидывания",
			"attribute_2": "Deals 12 ~ 14 damage При успешной Контратаке",
			"attribute_3": "При успехе приема опрокидывает врага на 3 с.",
			"range": "From User",
			"radius": "Цель",
			"cast": "Instant",
			"cooldown": "12 sec",
			"condition": "В состоянии Опрокидывания"
		},
		"img": "/img/sc/d/28.png"
	},
	"tree_38|root": {
		"name": "Избавление",
		"effects": {
			"cost": 0,
			"damage": "Перемещает на 15 м вперед вместе со спасаемым союзником",
			"range": "16 м",
			"radius": "Цель",
			"cast": "Instant",
			"cooldown": "6 sec",
			"condition": "Во время действия приема Спасение"
		},
		"img": "/img/sc/d/30.png"
	},
	"tree_39|root": {
		"name": "Разрубание",
		"effects": {
			"cost": 0,
			"damage": "При использовании в качестве реакции на атаку врага выводит из состояния Захвата и Пленения",
			"attribute": "Прерывает Отбивание и Защиту",
			"attribute_1": "Deals 24 ~ 28 damage При успешной Контратаке",
			"attribute_2": "Сопротивление урону и негативным эффектам",
			"range": "3 м",
			"radius": "Цель",
			"cast": "Instant",
			"cooldown": "9 sec",
			"condition": "В состоянии Захвата или Пленения"
		},
		"img": "/img/sc/d/31.png"
	},
	"tree_40|root": {
		"name": "Таран",
		"effects": {
			"cost": 0,
			"damage": "Выводит из состояния Подавления",
			"attribute": "При использовании в качестве реакции на атаку врага выводит из состояния Подавления",
			"attribute_1": "Deals 24 ~ 28 damage При успешной Контратаке",
			"attribute_2": "Сопротивление урону и негативным эффектам на 1 атаку в течение 1 с. ",
			"range": "3 м",
			"radius": "Цель",
			"cast": "Instant",
			"cooldown": "9 sec",
			"condition": "В состоянии Подавления"
		},
		"img": "/img/sc/d/32.png"
	},
	"tree_13.1|root": {
		"name": "Подбрасывание",
		"effects": {
			"cost": -10,
			"damage": "Deals 54 ~ 63 damage",
			"attribute": "Защита -20% на 5 с.",
			"attribute_1": "Подбрасывает в воздух",
			"range": "3 м",
			"radius": "Цель",
			"cast": "Instant",
			"cooldown": "18 sec",
			"condition": "Если враг в состоянии Опрокидывания"
		},
		"img": "/img/sc/d/36.png"
	},
	"tree_41|root": {
		"name": "Катапульта",
		"effects": {
			"cost": -20,
			"damage": "Deals 54 ~ 63 damage",
			"attribute": "Если враг в состоянии Захвата, подбрасывает в воздух",
			"range": "3 м",
			"radius": "Цель",
			"cast": "Instant",
			"cooldown": "Instant",
			"condition": "В состоянии Захвата"
		},
		"img": "/img/sc/d/37.png"
	}
}
