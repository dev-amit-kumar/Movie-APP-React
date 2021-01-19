const initialState = {
	PersonDetail: null,
	KnownFor: null,

	isLoadingPersonDetail: false,
	isLoadingKnownFor: false,
};

const Person = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case 'GET_PERSON_DETAIL':
			return { ...state, PersonDetail: payload };
		case 'GET_KNOWN_FOR':
			return { ...state, KnownFor: payload };

		case 'TOGGLE_IS_LOADING_PERSON_DETAIL':
			return {
				...state,
				isLoadingPersonDetail: !state.isLoadingPersonDetail,
			};
		case 'TOGGLE_IS_LOADING_KNOWN_FOR':
			return { ...state, isLoadingKnownFor: !state.isLoadingKnownFor };

		default:
			return state;
	}
};

export default Person;
