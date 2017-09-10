import _ from 'lodash'
import {
	GET_ALL_POST,
	GET_POSTS_FROM_CATEGORY,
	GET_VOTE_POST
} from '../actions/post'
import { 
  SORT_BY_RECENT,
	SORT_BY_SCORE
} from '../actions/sort'

const post = (state = {}, action) => {
	switch (action.type) {
		case GET_ALL_POST: {
			const { posts } = action
			const post = _.reverse(_.sortBy(posts, 'voteScore'))
			const mapPost = _.mapKeys(post, 'id')
			return {
				...mapPost
			}
		}

		case GET_POSTS_FROM_CATEGORY: {
			const { posts } = action
			const post = _.reverse(_.sortBy(posts, 'voteScore'))
			const mapPost = _.mapKeys(post, 'id')
			return {
				...mapPost
			}
		}

		case GET_VOTE_POST: {
			return {
				...state,
				[action.id]: {
					...state[action.id],
					voteScore: action.score
				}
			}
		}

		case SORT_BY_RECENT: {
			let sortByRecentPost
			action.sort === 'new'
				? (sortByRecentPost = _.reverse(_.sortBy(state, 'timestamp')))
				: (sortByRecentPost = _.sortBy(state, 'timestamp'))
			return _.mapKeys(sortByRecentPost, 'id')
		}

		case SORT_BY_SCORE: {
			let sortByScore
			action.sort === 'high'
				? (sortByScore = _.reverse(_.sortBy(state, 'voteScore')))
				: (sortByScore = _.sortBy(state, 'voteScore'))
			return _.mapKeys(sortByScore, 'id')
		}

		default:
			return state
	}
}

export default post
