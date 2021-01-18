const initialState = {
    movieList: null,
    type: null,
    parameters: [],

    isLoadingMovieList: false
}

const HomeMovie = (state = initialState, action) => {
    const {type, payload,status} = action;
    switch(type){
        case "GET_DISCOVER_MOVIE_LIST":
            return {...state, movieList: payload.movieList, type: payload.type, parameters: payload.parameters}
        case "GET_FILTER_MOVIE_LIST":
            return {...state, movieList: payload.movieList, type: payload.type, parameters: payload.parameters}
        
        case "TOGGLE_IS_LOADING_MOVIE_LIST":
            return {...state, isLoadingMovieList: !state.isLoadingMovieList}
        
        default:
            return state;
    }   
}

export default HomeMovie;