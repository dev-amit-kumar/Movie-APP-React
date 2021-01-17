import {combineReducers} from 'redux';
import DiscoverMovie from './DiscoverMovie'
import IndividualMovieDetail from './IndividualMovieDetail'
const rootReducer = combineReducers({
    DiscoverMovie,
    IndividualMovieDetail
});

export default rootReducer;