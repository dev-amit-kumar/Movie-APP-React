const initialState = {
  movieData: null,
  casts: null,
  review: null,
  recMovies: null,

  isLoadingMovieData: false,
  isLoadingCasts: false,
  isLoadingReview: false,
  isLoadingRecMovies: false,
};

const IndividualMovieDetail = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_MOVIE_DATA":
      return { ...state, movieData: payload };
    case "GET_CASTS":
      return { ...state, casts: payload };
    case "GET_REVIEW":
      return { ...state, review: payload };
    case "GET_REC_MOVIES":
      return { ...state, recMovies: payload };

    case "TOGGLE_IS_LOADING_MOVIE_DATA":
      return { ...state, isLoadingMovieData: !state.isLoadingMovieData };
    case "TOGGLE_IS_LOADING_CASTS":
      return { ...state, isLoadingCasts: !state.isLoadingCasts };
    case "TOGGLE_IS_LOADING_REVIEW":
      return { ...state, isLoadingReview: !state.isLoadingReview };
    case "TOGGLE_IS_LOADING_REC_MOVIES":
      return { ...state, isLoadingRecMovies: !state.isLoadingRecMovies };

    default:
      return state;
  }
};

export default IndividualMovieDetail;
