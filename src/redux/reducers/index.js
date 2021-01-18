import {combineReducers} from 'redux';
import DiscoverMovie from './DiscoverMovie'
import IndividualMovieDetail from './IndividualMovieDetail'
import Search from './Search'
import Person from "./Person";

const rootReducer = combineReducers({
    DiscoverMovie,
    IndividualMovieDetail,
    Search,
    Person
});

export default rootReducer;