const initialState={
    TrendingMovie:null,
    RecommendedMovie:null,
    NowPlayingMovie:null,

    TrendingType:null,

    isLoadingTrendingMovie:false,
    isLoadingRecommendedMovie:false,
    isLoadingNowPlayingMovie:false
}
const NewHomePage = (state = initialState, action) => {
    const {type, payload} = action;
    switch(type){
        case "GET_TRENDING_MOVIE":
            return {
                ...state,
                TrendingMovie: payload.movieList,
                TrendingType:payload.TrendingType
                }
        case "GET_RECOMMENDED_MOVIE":
            return {
                ...state,
                RecommendedMovie: payload
            }
        case "GET_NOW_PLAYING_MOVIE":
        return {
            ...state,
            NowPlayingMovie: payload
        }
        
        case "TOGGLE_IS_LOADING_TRENDING_MOVIE":
            return {...state,  isLoadingTrendingMovie: !state.isLoadingTrendingMovie}
        case "TOGGLE_IS_LOADING_RECOMMENDED_MOVIE":
            return {...state, isLoadingRecommendedMovie: !state.isLoadingRecommendedMovie}
        case "TOGGLE_IS_LOADING_NOW_PLAYING_MOVIE":
            return {...state,  isLoadingNowPlayingMovie: !state.isLoadingNowPlayingMovie}

        default:
            return state;
    }   
}
export default NewHomePage;