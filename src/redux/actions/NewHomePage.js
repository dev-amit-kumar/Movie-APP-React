import axios from 'axios';
// import { apiKey } from '../config';
const api_key = `api_key=911c65436dd290d171fc662603dac6b3`;
const url = 'https://api.themoviedb.org/3/movie';
const turl ="https://api.themoviedb.org/3/trending/movie";

export const fetchTrendingMovieList = (type) => async (dispatch) => {
    try {
        dispatch({ type: "GET_TRENDING_MOVIE", payload:{
            movieList:null,
            TrendingType:null
            }
        });
        dispatch({ type: "TOGGLE_IS_LOADING_TRENDING_MOVIE" });

        const { data } = await axios.get(`${turl}/${type}?${api_key}&language=en-US&page=1`)
        dispatch({ type: "GET_TRENDING_MOVIE", payload:{
            movieList:data.results,
            TrendingType:type
            }
        });
    } finally {
        dispatch({ type: "TOGGLE_IS_LOADING_TRENDING_MOVIE" });
        
    }
};
export const fetchRecommendedMovieList = () => async (dispatch) => {
    try {
        dispatch({ type: "GET_RECOMMENDED_MOVIE", payload:null
        });
        dispatch({ type: "TOGGLE_IS_LOADING_RECOMMENDED_MOVIE" });

        const { data } = await axios.get(`${url}/now_playing?${api_key}&language=en-US&page=1`)
        dispatch({ type: "GET_RECOMMENDED_MOVIE", payload:data.results
        });
    } finally {
        dispatch({ type: "TOGGLE_IS_LOADING_RECOMMENDED_MOVIE" });
        
    }
};
export const fetchNowPlayingMovieList = () => async (dispatch) => {
    try {
        dispatch({ type: "GET_NOW_PLAYING_MOVIE", payload:null
        });
        dispatch({ type: "TOGGLE_IS_LOADING_NOW_PLAYING_MOVIE" });

        const { data } = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=911c65436dd290d171fc662603dac6b3&language=en-US&page=1`)
        dispatch({ type: "GET_NOW_PLAYING_MOVIE", payload:data.results
        });
    } finally {
        dispatch({ type: "TOGGLE_IS_LOADING_NOW_PLAYING_MOVIE" });
        
    }
};
