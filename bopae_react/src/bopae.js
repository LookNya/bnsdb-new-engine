class Bopae {
	constructor(name, icon, obtaining, pieces, bonuses) {
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
}

class BopaePiece {
	constructor(num, icon, stats, synth) {
		this.num = num
		this.icon = icon
		this.stats = stats
		this.synth = synth
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
}


class BopaePieceConfig {
	static maxActiveStats = 2
	static default = new BopaePieceConfig()
	constructor(stats={}, activeStats=[]) {
		this.stats = stats
		this.activeStats = activeStats
	}
	get(piece, statName) {
		if (statName in this.stats) return this.stats[statName]
		return statName === 'synth' ? piece.synth.max : piece.stats[statName].max
	}
	isActive(statName) {
		return this.activeStats.indexOf(statName) !== -1
	}
	update(statName, value) {
		let newStats = {...this.stats, [statName]: value}
		let newActiveStats = this.activeStats
		if (this.activeStats[this.activeStats.length-1] !== statName) {
			newActiveStats = this.activeStats.slice()
			let ind = newActiveStats.indexOf(statName)
			if (ind !== -1) newActiveStats.splice(ind, 1)
			if (newActiveStats.length === BopaePieceConfig.maxActiveStats) newActiveStats.shift()
			newActiveStats.push(statName)
		}
		return new BopaePieceConfig(newStats, newActiveStats)
	}
}

class BopaesConfig {
	constructor(bopaesConfig={}) {
		this.bopaesConfig = bopaesConfig
	}
	getPieceConfig(bopae, num) {
		let piecesConfig = this.bopaesConfig[bopae.name]
		if (!piecesConfig) return BopaePieceConfig.default
		let pieceConfig = piecesConfig[num]
		if (!pieceConfig) return BopaePieceConfig.default
		return pieceConfig
	}
	updatePieceConfig(bopae, num, statName, statValue) {
		let bopaeConfig = this.bopaesConfig[bopae.name] || {}
		let pieceConfig = bopaeConfig[num] || BopaePieceConfig.default
		let newBopaesConfig = {
				...this.bopaesConfig,
			[bopae.name]: {...bopaeConfig, [num]: pieceConfig.update(statName, statValue)}
		}
		return new BopaesConfig(newBopaesConfig)
	}
}


class BopaeDBConv {
	constructor(lang, l10n) {
		this.lang = lang
		this.l10n = l10n
	}

	convert(dbBopaes) {
		return dbBopaes.map(this.convertBopae)
	}

	convertBopae = (bopae, index) => {
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
			let synth = this.makeStat(0, bopae.pieces.synth[i], false)
			pieces[i] = new BopaePiece(i, bopae.icon, stats, synth)
		}

		let bonuses = {3:{}, 5:{}, 8:{}}
		for (let statName in bopae.bonus) { //eslint-disable-line guard-for-in
			let [b3, b5, b8] = bopae.bonus[statName]
			let l10nStatName = this.l10n.stats[statName][this.lang]
			if (b3 !== 0) bonuses[3][l10nStatName] = b3
			if (b5 !== 0) bonuses[5][l10nStatName] = b5
			if (b8 !== 0) bonuses[8][l10nStatName] = b8
		}

		return new Bopae(bopae.name[this.lang], bopae.icon, bopae.obtaining[this.lang], pieces, bonuses)
	}

	convertStat = (str) => {
		let isBase = false
		if (str.startsWith('#')) {
			isBase = true
			str = str.substr(1)
		}
		let [min, max] = str.split('-')
		return this.makeStat(+min, +max, isBase)
	}
	makeStat(min, max, isBase) {
		return {min, max, isBase}
	}
}

export { Bopae, BopaePiece, BopaesConfig, BopaePieceConfig, BopaeDBConv }
