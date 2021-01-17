/* All Movie Details actions are contained in this file */

import axios from "axios"
const api_key = "api_key=911c65436dd290d171fc662603dac6b3"
const movie_detail_url = 'https://api.themoviedb.org/3/movie/'

// export const GetMovieDetailById = (id) => async (dispatch) =>{
//     return (
//         await axios.get(`${movie_detail_url}${id}?${api_key}&append_to_response=videos,images`)
//         .then(({ data }) => {
//                 dispatch({type: 'GET_MOVIE_DETAIL', payload: data});
//         })
//     )
// }

export const fetchMovieData = (id) => async (dispatch) => {
    try {
      dispatch({ type: "GET_MOVIE_DATA", payload: null });
      dispatch({ type: "TOGGLE_IS_LOADING_MOVIE_DATA" });
  
      const { data } = await axios.get(`${movie_detail_url}${id}?${api_key}&append_to_response=videos,images`)
        dispatch({ type: "GET_MOVIE_DATA", payload: data });
   
    } catch (error) {
      
    } finally {
      dispatch({ type: "TOGGLE_IS_LOADING_MOVIE_DATA" });
    }
  };