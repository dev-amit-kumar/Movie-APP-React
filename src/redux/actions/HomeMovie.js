/* All actions are contained in this file */

import axios from "axios"
const api_key = "api_key=911c65436dd290d171fc662603dac6b3"
const discover_movie_url="https://api.themoviedb.org/3/movie";

export const fetchDiscoverMovie = (str,page_no) => async (dispatch) => {
    try {
        dispatch({ type: "GET_DISCOVER_MOVIE", payload: null });
        dispatch({ type: "TOGGLE_IS_LOADING_DISCOVER_MOVIE" });
        const { data } = await axios.get(`${discover_movie_url}/${str}?api_key=911c65436dd290d171fc662603dac6b3&language=en-US&page=${page_no}`)
        dispatch({ type: "GET_DISCOVER_MOVIE", payload: data.results });
    } finally {
        dispatch({ type: "TOGGLE_IS_LOADING_DISCOVER_MOVIE" });
        dispatch({ type: "SET_TYPE",status:str});
    }
};

export const fetchFilterMovie = (str,page_no) => async (dispatch) => {
    try {
        dispatch({ type: "GET_FILTER_MOVIE", payload: null });
        dispatch({ type: "TOGGLE_IS_LOADING_FILTER_MOVIE" });
        const { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=911c65436dd290d171fc662603dac6b3&language=en-US${str}&page=${page_no}`)
        dispatch({ type: "GET_FILTER_MOVIE", payload: data.results });
    } finally {
        dispatch({ type: "TOGGLE_IS_LOADING_FILTER_MOVIE" });
    }
};