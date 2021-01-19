const initialState = {
	movieData: null,
	castsList: null,
	reviewsList: null,
	recMoviesList: null,

	isLoadingMovieData: false,
	isLoadingCastsList: false,
	isLoadingReviewsList: false,
	isLoadingRecMoviesList: false,
};

const IndividualMovieDetail = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case 'GET_MOVIE_DATA':
			return { ...state, movieData: payload };
		case 'GET_CASTS_LIST':
			return { ...state, castsList: payload };
		case 'GET_REVIEWS_LIST':
			return { ...state, reviewsList: payload };
		case 'GET_REC_MOVIES_LIST':
			return { ...state, recMoviesList: payload };

		case 'TOGGLE_IS_LOADING_MOVIE_DATA':
			return { ...state, isLoadingMovieData: !state.isLoadingMovieData };
		case 'TOGGLE_IS_LOADING_CASTS_LIST':
			return { ...state, isLoadingCastsList: !state.isLoadingCastsList };
		case 'TOGGLE_IS_LOADING_REVIEWS_LIST':
			return {
				...state,
				isLoadingReviewsList: !state.isLoadingReviewsList,
			};
		case 'TOGGLE_IS_LOADING_REC_MOVIES_LIST':
			return {
				...state,
				isLoadingRecMoviesList: !state.isLoadingRecMoviesList,
			};

		default:
			return state;
	}
};

export default IndividualMovieDetail;
