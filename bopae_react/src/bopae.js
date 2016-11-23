class Bopae {
	constructor(id, name, icon, obtaining, pieces, bonuses) {
		this.id = id
		this.name = name
		this.icon = icon
		this.obtaining = obtaining
		this.pieces = pieces
		this.bonuses = bonuses
	}

	static getBGPath() {
		return `${process.env.PUBLIC_URL}/img/bopae/background.png`
	}
	getIconPath() {
		return `${process.env.PUBLIC_URL}/img/bopae/${this.icon}.png`
	}

	copy() {
		return new Bopae(this.id, this.name, this.icon, this.obtaining, this.pieces, this.bonuses)
	}
	updatePieceConfig(num, statName, value) {
		let newBopae = this.copy()
		newBopae.pieces = newBopae.pieces.slice()
		newBopae.pieces[num] = newBopae.pieces[num].updateConfig(statName, value)
		return newBopae
	}
}


class BopaePiece {
	constructor(num, icon, stats, synthMax) {
		this.num = num
		this.icon = icon
		this.stats = stats
		this.synthMax = synthMax
		this.config = {}
	}

	static getBGPath(num) {
		return `${process.env.PUBLIC_URL}/img/bopae/background${num}.png`
	}
	getIconPath() {
		return `${process.env.PUBLIC_URL}/img/bopae/${this.icon}${this.num}.png`
	}
	getFullIconPath() {
		return `${process.env.PUBLIC_URL}/img/bopae/${this.icon}.png`
	}
	getStat(name) {
		return name in this.stats ? this.stats[name] : [0, 0, false]
	}
	mapStats(func) {
		let res = []
		for (let statName in this.stats) //eslint-disable-line guard-for-in
			res.push(func(statName, this.stats[statName]))
		return res
	}

	copy() {
		return new BopaePiece(this.num, this.icon, this.stats, this.synthMax)
	}
	updateConfig(statName, value) {
		let newPiece = this.copy()
		for (let name in this.config) //eslint-disable-line guard-for-in
			newPiece.config[name] = this.config[name]
		newPiece.config[statName] = value
		return newPiece
	}
}


class BopaeDBConv {
	constructor(lang, l10n) {
		this.lang = lang
		this.l10n = l10n
	}

	convert(dbBopaes) {
		return dbBopaes.map(this.convertBopae.bind(this))
	}

	convertBopae(bopae, index) {
		let statsForNums = [[], [], [], [], [], [], [], []]
		for (let statName in bopae.pieces) {
			if (statName !== "synth") {
				let stats = bopae.pieces[statName].trim().split(/\s+/).map(this.convertStat)
				let l10nStatName = this.l10n.stats[statName][this.lang]
				for (let i=0; i<8; i++)
					if (stats[i].min !== 0 || stats[i].max !== 0)
						statsForNums[i].push([l10nStatName, stats[i]])
			}
		}

		function sortStats([name0,stat0], [name1,stat1]){ return stat1.isBase - stat0.isBase }
		function reduceStats(stats, [name, params]){ stats[name] = params; return stats }
		let pieces = new Array(8)
		for (let i=0; i<8; i++) {
			statsForNums[i].sort(sortStats)
			let stats = statsForNums[i].reduce(reduceStats, {})
			pieces[i] = new BopaePiece(i, bopae.icon, stats, bopae.pieces.synth[i])
		}

		let bonuses = {3:{}, 5:{}, 8:{}}
		for (let statName in bopae.bonus) { //eslint-disable-line guard-for-in
			let [b3, b5, b8] = bopae.bonus[statName]
			let l10nStatName = this.l10n.stats[statName][this.lang]
			if (b3 !== 0) bonuses[3][l10nStatName] = b3
			if (b5 !== 0) bonuses[5][l10nStatName] = b5
			if (b8 !== 0) bonuses[8][l10nStatName] = b8
		}

		return new Bopae(index, bopae.name[this.lang], bopae.icon, bopae.obtaining[this.lang], pieces, bonuses)
	}

	convertStat(str) {
		let isBase = false
		if (str.startsWith('#')) {
			isBase = true
			str = str.substr(1)
		}
		let [min, max] = str.split('-')
		return {min: +min, max: +max, isBase}
	}
}

export { Bopae, BopaePiece, BopaeDBConv }
