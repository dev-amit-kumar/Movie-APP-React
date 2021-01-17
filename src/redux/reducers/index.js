import {combineReducers} from 'redux';
import DiscoverMovie from './DiscoverMovie'
import IndividualMovieDetail from './IndividualMovieDetail'
import Search from './Search'

const rootReducer = combineReducers({
    DiscoverMovie,
    IndividualMovieDetail,
    Search
});

export default rootReducer;