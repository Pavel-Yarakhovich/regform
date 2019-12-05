const initialState = {
	email: '',
	firstName: '',
	lastName: '',
	gender: '',
	companyName: '',
	timezone: ''
}

const reducer = (state = initialState, action) => {
	if (action.type === 'CREATE_ACCOUNT') {
		return {
			state: action.payload
		};
	}
	return state;
}

export default reducer;