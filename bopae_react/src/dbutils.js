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
		let statsForNums = [{}, {}, {}, {}, {}, {}, {}, {}]
		for (let statName in bopae.pieces) {
			if (bopae.pieces.hasOwnProperty(statName)) {
				if (statName !== "synth") {
					let stats = bopae.pieces[statName].trim().split(/\s+/).map(this.convertStat)
					let l10nStatName = this.l10n.stats[statName][this.lang]
					for (let i=0; i<8; i++)
						statsForNums[i][l10nStatName] = stats[i]
				}
			}
		}

		let pieces = new Array(8)
		for (let i=0; i<pieces.length; i++) {
			pieces[i] = new BopaePiece(i, bopae.icon, statsForNums[i], bopae.pieces.synth)
		}

		return new Bopae(bopae.name[this.lang], bopae.icon, bopae.obtaining[this.lang], pieces, bopae.bonus)
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
