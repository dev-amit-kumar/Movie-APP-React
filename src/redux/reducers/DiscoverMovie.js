const initialMovieList = {
    list: null
}

const DiscoverMovie = (state = initialMovieList, action) => {
    switch(action.type){
        case 'POPULAR':
            return {...state, list: action.payload}
        case 'TOP_RATED':
            return {...state, list: action.payload}
        case 'UPCOMING':
            return {...state, list: action.payload}
        default:
            return{...state}
    }
}

export default DiscoverMovie