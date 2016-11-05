class Bopae {
	constructor(name, icon, obtaining, pieces, bonuses) {
		this.name = name
		this.icon = icon
		this.obtaining = obtaining
		this.pieces = pieces
		this.bonuses = bonuses
	}
	iconPath() {
		return `${process.env.PUBLIC_URL}/img/${this.bopae.icon}.png`
	}
}

class BopaePiece {
	constructor(num, icon, stats) {
		this.num = num
		this.icon = icon
		this.stats = stats
	}
	iconPath() {
		return `${process.env.PUBLIC_URL}/img/${this.icon}${this.num}.png`
	}
	stat(name) {
		return name in this.stats ? this.stats[name] : [0, 0]
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
		for (let statName in bopae.pieces) { //eslint-disable-line guard-for-in
			let stats = bopae.pieces[statName].trim().split(/\s+/).map(this.convertStat)
			let l10nStatName = this.l10n.stats[statName][this.lang]
			for (let i=0; i<8; i++)
				statsForNums[i][l10nStatName] = stats[i]
		}

		let pieces = new Array(8)
		for (let i=0; i<pieces.length; i++) {
			pieces[i] = new BopaePiece(i+1, bopae.icon, statsForNums[i])
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