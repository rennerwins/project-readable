export const SORT_BY_RECENT = 'SORT_BY_RECENT'
export const SORT_BY_SCORE = 'SORT_BY_SCORE'

export const sortByRecent = sort => ({
	type: SORT_BY_RECENT,
	sort
})

export const sortByScore = sort => ({
	type: SORT_BY_SCORE,
	sort
})
