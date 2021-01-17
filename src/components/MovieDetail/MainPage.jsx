import React, {useEffect} from 'react'
import Fade from 'react-reveal/Fade';
import TopContainer from './TopContainer'
import AllReviews from './Review/AllReviews'
import RecommendedMovie from './RecommendedMovie'
import AllCast from './Cast/AllCast'
import OtherData from './OtherData'
import { connect } from 'react-redux';
import {fetchMovieData} from '../../redux/actions'

const MainPage = ({movie_id,fetchMovieData,movieData,isLoadingMovieData}) => {
    
    useEffect (() => {
        fetchMovieData(movie_id)
    },[])
    console.log(isLoadingMovieData, movieData)
    if(movieData){
        return(
            <>
                <TopContainer 
                    key={movie_id}
                    title={movieData.title} 
                    tagline={movieData.tagline} 
                    poster_path={movieData.poster_path}
                    bg_path={movieData.backdrop_path}
                    year={movieData.release_date.substr(0,4)}
                    data={movieData}
                    movie_id={movie_id}
                />
                {/* <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-9">
                            <AllCast movie_id={movie_id}/>
                        </div>
                        <div className="col-md-3">
                            <Fade bottom>
                                <OtherData 
                                    original_title={movieData.original_title}
                                    vote_count={movieData.vote_count}
                                    popularity={movieData.popularity}
                                    status={movieData.status}
                                    imdb={movieData.imdb_id}
                                    website={movieData.homepage}
                                    movie_id={movie_id}
                                    />
                            </Fade>
                        </div>
                        <div className="col-md-12">
                            <Fade bottom>
                                <AllReviews movie_id={movie_id}/>
                            </Fade>
                        </div>
                    </div>
                </div> */}
                {/* <RecommendedMovie movie_id={movie_id}/> */}
            </>
        )
    }
    else if(isLoadingMovieData){
        return(
            <div className="full-cover">
                <div className="spinner-border" style={{width: '3rem', height: '3rem'}} role="status">
                <span className="sr-only">Loading...</span>
                </div>
            </div>
        
        )
    }
    else{
        return(
            <div>
                Data not found
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        movieData: state.IndividualMovieDetail.movieData,
        isLoadingMovieData: state.IndividualMovieDetail.isLoadingMovieData
    }
}

export default connect(mapStateToProps, {fetchMovieData})(MainPage);