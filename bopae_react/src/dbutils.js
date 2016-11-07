class Bopae {
	constructor(name, icon, obtaining, pieces, bonuses) {
		this.name = name
		this.icon = icon
		this.obtaining = obtaining
		this.pieces = pieces
		this.bonuses = bonuses
	}
	getIconPath() {
		return `${process.env.PUBLIC_URL}/img/bopae/${this.icon}.png`
	}
}

class BopaePiece {
	constructor(num, icon, stats, synthMax) {
		this.num = num
		this.icon = icon
		this.stats = stats
		this.synthMax = synthMax
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
		for (let statName in this.stats)
			if (this.stats.hasOwnProperty(statName))
				res.push(func(statName, this.stats[statName]))
		return res
	}
}

class BopaeDBUtils {
	static l10n = null
	static lang = ''

	static convert(db, lang) {
		this.l10n = db.l10n
		this.lang = lang
		return db.bopaes.map(BopaeDBUtils.convertBopae.bind(this))
	}

	static convertBopae(bopae) {
		let statsForNums = [[], [], [], [], [], [], [], []]
		for (let statName in bopae.pieces) {
			if (bopae.pieces.hasOwnProperty(statName)) {
				if (statName !== "synth") {
					let stats = bopae.pieces[statName].trim().split(/\s+/).map(this.convertStat)
					let l10nStatName = this.l10n.stats[statName][this.lang]
					for (let i=0; i<8; i++)
						if (stats[i].min !== 0 || stats[i].max !== 0)
							statsForNums[i].push([l10nStatName, stats[i]])
				}
			}
		}

		function sortStats([name0,stat0], [name1,stat1]){ return stat1.isBase - stat0.isBase }
		function reduceStats(stats, [name, params]){ stats[name] = params; return stats }
		let pieces = new Array(8)
		for (let i=0; i<8; i++) {
			statsForNums[i].sort(sortStats)
			let stats = statsForNums[i].reduce(reduceStats, {})
			pieces[i] = new BopaePiece(i, bopae.icon, stats, bopae.pieces.synth)
		}

		let bonuses = {3:{}, 5:{}, 8:{}}
		for (let statName in bopae.bonus) {
			if (bopae.bonus.hasOwnProperty(statName)) {
				let [b3, b5, b8] = bopae.bonus[statName]
				let l10nStatName = this.l10n.stats[statName][this.lang]
				if (b3 !== 0) bonuses[3][l10nStatName] = b3
				if (b5 !== 0) bonuses[5][l10nStatName] = b5
				if (b8 !== 0) bonuses[8][l10nStatName] = b8
			}
		}

		return new Bopae(bopae.name[this.lang], bopae.icon, bopae.obtaining[this.lang], pieces, bonuses)
	}

	static convertStat(str) {
		let isBase = false
		if (str.startsWith('#')) {
			isBase = true
			str = str.substr(1)
		}
		let [min, max] = str.split('-')
		return {min: +min, max: +max, isBase}
	}
}

export { Bopae, BopaePiece }
export default BopaeDBUtils
