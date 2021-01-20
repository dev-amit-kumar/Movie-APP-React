import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import DisplayNowPlaying from '../Display/HomeMovieCard';
import {fetchNowPlayingMovieList} from "../../../../redux/actions"
import LoadingSpinner from '../../../Common/LoadingSpinner';
import DataNotFound from '../../../Common/DataNotFound';

class NowPlaying extends Component {
    render() {
        var settings = {
            cssEase: "linear",
            speed: 500,
            slidesToShow: 6,
            slidesToScroll: 5,
            arrows: true,
            responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 4,
						slidesToScroll: 3,
					},
				},
				{
					breakpoint: 780,
					settings: {
						slidesToShow: 3,
						slidesToScroll:2,
					},
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
					},
                },
                {
                    breakpoint: 340,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
				},
			],
        };
        if(this.props.NowPlayingMovie){
            return (
                <>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-11" style={{margin:"0 auto"}}>
                                <h1 className="font-weight-bolder heading_color mt-4 ml-4">NOW PLAYING</h1>
                                <Slider {...settings}>
                                    {this.props.NowPlayingMovie && this.props.NowPlayingMovie.map((movie, idx) => {
                                        return <DisplayNowPlaying data={movie} key={idx} height_s='250px' show_wishlist={true}/>
                                    })}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </>
            )
        }
        else if (this.props.isLoadingNowPlayingMovie) {
            return <LoadingSpinner />;
        } else {
            return <DataNotFound />;
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

export default connect(mapStateToProps,{fetchNowPlayingMovieList})(NowPlaying);
