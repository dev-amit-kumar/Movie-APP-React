/* All actions are contained in this file */

import axios from "axios"
const api_key = "api_key=911c65436dd290d171fc662603dac6b3"
const discover_movie_url="https://api.themoviedb.org/3/movie/";

// export const TopRated = (page_no) => async (dispatch) => {
//     const res = await axios(`${discover_movie_url}top_rated?${api_key}&language=en-US&page=${page_no}`)
//     return dispatch({type: 'TOP_RATED', payload: res});
// };

// export const Popular = (page_no) => async (dispatch) => {
//     const res = await axios(`${discover_movie_url}popular?${api_key}&language=en-US&page=${page_no}`)
//     return dispatch({type: 'POPULAR', payload: res});
// };

// export const Upcoming = (page_no) => async (dispatch) => {
//     const res = await axios(`${discover_movie_url}/upcoming?${api_key}&language=en-US&page=${page_no}`)
//     return dispatch({type: 'UPCOMING', payload: res});
// };

export const Upcoming = (page_no) => async (dispatch) =>{
    return (
        axios.get(`${discover_movie_url}upcoming?${api_key}&language=en-US&page=${page_no}`)
        .then(({ data }) => {
                dispatch({type: 'UPCOMING', payload: data});
        })
    )
}