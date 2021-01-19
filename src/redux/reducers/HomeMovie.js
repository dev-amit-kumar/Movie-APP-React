const initialState = {
    movieList: null,
    total_pages:null,
    curr_page:null,
    type: null,
    parameters: [],

    isLoadingMovieList: false
}

const HomeMovie = (state = initialState, action) => {
    const {type, payload} = action;
    switch(type){
        case "GET_DISCOVER_MOVIE_LIST":
            return {...state, movieList: payload.movieList, type: payload.type, parameters: payload.parameters, total_pages:payload.total_pages,curr_page:payload.curr_page}
        case "GET_FILTER_MOVIE_LIST":
            return {...state, movieList: payload.movieList, type: payload.type, parameters: payload.parameters, total_pages:payload.total_pages,curr_page:payload.curr_page}
        
        case "TOGGLE_IS_LOADING_MOVIE_LIST":
            return {...state, isLoadingMovieList: !state.isLoadingMovieList}
        
        default:
            return state;
    }   
}

export default HomeMovie;