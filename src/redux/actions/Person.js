import axios from "axios"
import {apiKey} from '../config'
const api_key = `api_key=${apiKey}`
const base_url = 'https://api.themoviedb.org/3/person/'

export const fetchPersonDetail = (id) => async (dispatch) => {
    try {
        dispatch({ type: "GET_PERSON_DETAIL", payload: null });
        dispatch({ type: "TOGGLE_IS_LOADING_PERSON_DETAIL" });
        const { data } = await axios.get(`${base_url}${id}?${api_key}&language=en-US`)
        dispatch({ type: "GET_PERSON_DETAIL", payload: data });
    } finally {
        dispatch({ type: "TOGGLE_IS_LOADING_PERSON_DETAIL" });
    }
};

export const fetchKnownFor = (id) => async (dispatch) => {
    try {
        dispatch({ type: "GET_KNOWN_FOR", payload: null });
        dispatch({ type: "TOGGLE_IS_LOADING_KNOWN_FOR" });
        const { data } = await axios.get(`${base_url}${id}/movie_credits?${api_key}&language=en-US`)
        dispatch({ type: "GET_KNOWN_FOR", payload: data.cast });
    } finally {
        dispatch({ type: "TOGGLE_IS_LOADING_KNOWN_FOR" });
    }
};