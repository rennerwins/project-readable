import api from '../api'

export const GET_ALL_CATEGORY = 'GET_ALL_CATEGORY'

export const getAllCategory = categories => {
	return {
		type: GET_ALL_CATEGORY,
		categories
	}
}

export const fetchCategory = () => {
	return dispatch => {
		api
			.getAllCategory()
			.then(categories => dispatch(getAllCategory(categories)))
	}
}
