import axios from "axios"

export const fetchPersonDetail = (id) => async (dispatch) => {
    try {
        dispatch({ type: "GET_PERSON_DETAIL", payload: null });
        dispatch({ type: "TOGGLE_IS_LOADING_PERSON_DETAIL" });
        const { data } = await axios.get(`https://api.themoviedb.org/3/person/${id}?api_key=911c65436dd290d171fc662603dac6b3&language=en-US`)
        dispatch({ type: "GET_PERSON_DETAIL", payload: data });
    } finally {
        dispatch({ type: "TOGGLE_IS_LOADING_PERSON_DETAIL" });
    }
};

export const fetchKnownFor = (id) => async (dispatch) => {
    try {
        dispatch({ type: "GET_KNOWN_FOR", payload: null });
        dispatch({ type: "TOGGLE_IS_LOADING_KNOWN_FOR" });
        const { data } = await axios.get(`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=911c65436dd290d171fc662603dac6b3&language=en-US`)
        dispatch({ type: "GET_KNOWN_FOR", payload: data.cast });
    } finally {
        dispatch({ type: "TOGGLE_IS_LOADING_KNOWN_FOR" });
    }
};