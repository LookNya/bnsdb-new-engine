import { createSelector } from 'reselect'
import { BopaeDBConv } from './lib/bopae'


const getLang = (state) => state.lang
const getL10n = (state) => state.bopaeCalc.db.l10n
const getDBBopaes = (state) => state.bopaeCalc.db.bopaes

export const getBopaes = createSelector(
	[getLang, getL10n, getDBBopaes],
	(lang, l10n, dbBopaes) => new BopaeDBConv(lang, l10n).convert(dbBopaes)
)
