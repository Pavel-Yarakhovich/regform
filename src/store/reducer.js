import * as actionTypes from './actions';

const initialState = {
	step: 1,
	email: '',
	firstName: '',
	lastName: '',
	gender: '',
	companyName: '',
	timezone: '',
	accountCreated: false
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.CREATE_ACCOUNT:
				return {
					...state,
					accountCreated: true
				};
		case actionTypes.NEXT_PAGE:
			return {
				...state,
				step: state.step + 1
			};
		case actionTypes.PREV_PAGE:
			return {
				...state,
				step: state.step - 1
			};
		case actionTypes.INPUT_DATA:
			return {
				...state,
				[action.payload.name]: action.payload.data
			};
		case actionTypes.INPUT_NAME:
			if (action.payload.data.match(/[A-Za-z]{1,}/)) {
				return {
					...state,
					[action.payload.name]: action.payload.data
				};
			} else {
				return {
					...state,
					[action.payload.name]: ''
				};
			}
		default:
			return state;
	}
}

export default reducer;