/* All home movie actions are contained in this file */

import axios from "axios"
import {apiKey} from '../config'
const api_key = `api_key=${apiKey}`
const discover_movie_url="https://api.themoviedb.org/3/movie";
const filter_movie_url = "https://api.themoviedb.org/3/discover/movie"

export const fetchDiscoverMovieList = (type,page_no) => async (dispatch) => {
    try {
        dispatch({ type: "GET_DISCOVER_MOVIE_LIST", payload: {
            movieList:  null,
            type: null,
            parameters: null
            }
        });
        dispatch({ type: "TOGGLE_IS_LOADING_MOVIE_LIST" });

        const { data } = await axios.get(`${discover_movie_url}/${type}?${api_key}&language=en-US&page=${page_no}`)
        dispatch({ type: "GET_DISCOVER_MOVIE_LIST", payload: {
            movieList:  data.results,
            type: 'DISCOVER_MOVIE',
            parameters: {
                discover_type: type,
                page_no: page_no
                }
            }
        });
    } finally {
        dispatch({ type: "TOGGLE_IS_LOADING_MOVIE_LIST" });
        
    }
};

export const fetchFilterMovieList= (query,page_no) => async (dispatch) => {
    try {
        dispatch({ type: "GET_FILTER_MOVIE_LIST", payload: {
            movieList:  null,
            type: null,
            parameters: null
            }
        });
        dispatch({ type: "TOGGLE_IS_LOADING_MOVIE_LIST" });
        const { data } = await axios.get(`${filter_movie_url}?${api_key}&language=en-US${query}&page=${page_no}`)
        dispatch({ type: "GET_FILTER_MOVIE_LIST", payload: {
            movieList:  data.results,
            type: 'FILTER_MOVIE',
            parameters: {
                filter_query:query,
                page_no: page_no
                }
            }
        });
    } finally {
        dispatch({ type: "TOGGLE_IS_LOADING_MOVIE_LIST" });
    }
};

// export const fetchGenresList = () => async (dispatch) => {
//     try{
//         // dispatch({type: "GET_GENRES_LIST", payload: null})
//     }
// }