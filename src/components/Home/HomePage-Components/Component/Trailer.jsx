import React, { Component } from 'react';
import Slider from 'react-slick';
import DisplayTrailer from '../Display/DisplayTrailer';
import {fetchNowPlayingMovieList} from "../../../../redux/actions"
import LoadingSpinner from '../../../Common/LoadingSpinner';
import NoMovies from '../../../Common/NoMovies';
import "../../../../css/Trailer.css";
import { connect } from 'react-redux';
class Trailer extends Component {
    render() {
        var settings = {
            cssEase: "linear",
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
          };
        if(this.props.NowPlayingMovie){
            return (
                <div className="trailer">
                <div className="container pt-4 pb-4">
                    <Slider  {...settings}>
                        {this.props.NowPlayingMovie && this.props.NowPlayingMovie.map((movie, idx) => {
                            return(<DisplayTrailer data={movie} key={idx}/>)
                            })}
                    </Slider>
                    </div>
                    </div>
            )
        }
        else if (this.props.isLoadingNowPlayingMovie) {
            return <LoadingSpinner />;
        } else {
            return <NoMovies />;
        }
    }
    componentDidMount(){
        this.props.fetchNowPlayingMovieList()
    }
}
const mapStateToProps=(state)=>{
    return{
        NowPlayingMovie:state.NewHomePage.NowPlayingMovie,
        isLoadingNowPlayingMovie:state.NewHomePage.isLoadingNowPlayingMovie
    }
}
export default connect(mapStateToProps,{fetchNowPlayingMovieList})(Trailer);