import {combineReducers} from 'redux';
import IndividualMovieDetail from './IndividualMovieDetail'
import Search from './Search'
import HomeMovie from "./HomeMovie";

const rootReducer = combineReducers({
    IndividualMovieDetail,
    Search,
    HomeMovie
});

export default rootReducer;