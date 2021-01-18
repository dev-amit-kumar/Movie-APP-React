/* All Search actions are contained in this file */

import axios from "axios"
import {apiKey} from '../config'
const api_key = `api_key=${apiKey}`
const base_url = `https://api.themoviedb.org/3/search/multi?${api_key}&language=en-US`;

export const emptySearchSuggestion = () => (dispatch) => {
    dispatch({ type: "GET_SEARCH_SUGGESTION", payload: null });
};

export const fetchSearchSuggestion = (keyword) => async (dispatch) => {
    try {
        dispatch({ type: "GET_SEARCH_SUGGESTION", payload: null });
        dispatch({ type: "TOGGLE_IS_LOADING_SEARCH_SUGGESTION" });
        const { data } = await axios.get(`${base_url}/&query=${keyword}&page=1&include_adult=false`)
        dispatch({ type: "GET_SEARCH_SUGGESTION", payload: data });
    } finally {
        dispatch({ type: "TOGGLE_IS_LOADING_SEARCH_SUGGESTION" });
    }
};

export const fetchSearchResults = (keyword) => async (dispatch) => {
    try {
        dispatch({ type: "GET_SEARCH_RESULTS", payload: null });
        dispatch({ type: "TOGGLE_IS_LOADING_SEARCH_RESULTS" });
        const { data } = await axios.get(`${base_url}/&query=${keyword}&page=1&include_adult=false`)
        dispatch({ type: "GET_SEARCH_RESULTS", payload: data });
    } finally {
        dispatch({ type: "TOGGLE_IS_LOADING_SEARCH_RESULTS" });
    }
};