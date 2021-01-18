import {combineReducers} from 'redux';
import IndividualMovieDetail from './IndividualMovieDetail'
import Search from './Search'
import HomeMovie from "./HomeMovie";
import Person from "./Person";

const rootReducer = combineReducers({
    IndividualMovieDetail,
    Search,
    HomeMovie,
    Person
});

export default rootReducer;