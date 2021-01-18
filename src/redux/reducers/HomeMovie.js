const initialState = {
    discoverMovie: null,
    filterMovie: null,

    stat:null,

    isLoadingdiscoverMovie: false,
    isLoadingfilterMovie: false
}

const HomeMovie = (state = initialState, action) => {
    const {type, payload,status} = action;
    switch(type){
        case "GET_DISCOVER_MOVIE":
            return {...state, discoverMovie: payload}
        case "GET_FILTER_MOVIE":
            return {...state, filterMovie: payload}
        
        case "TOGGLE_IS_LOADING_DISCOVER_MOVIE":
            return {...state, isLoadingdiscoverMovie: !state.isLoadingdiscoverMovie}
        case "TOGGLE_IS_LOADING_FILTER_MOVIE":
            return {...state, isLoadingfilterMovie: !state.isLoadingfilterMovie}

        case "SET_TYPE":
            return {...state,stat:status}
        
        default:
            return state;
    }   
}

export default HomeMovie;