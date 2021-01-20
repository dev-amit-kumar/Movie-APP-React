import React, { Component } from 'react';
import Slider from 'react-slick';
import {connect} from "react-redux";
import HomeMovieCard from '../../HomePage-Components/Display/HomeMovieCard';
import {fetchTrendingMovieList} from "../../../../redux/actions";
import LoadingSpinner from '../../../Common/LoadingSpinner';
import DataNotFound from '../../../Common/DataNotFound';
class Trending extends Component {
    setValue=(e)=>{
        console.log(e.target.value)
        this.props.fetchTrendingMovieList(e.target.value)
    }
    render() {
        var settings = {
            cssEase: "linear",
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 4,
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
          if(this.props.TrendingMovie){
            return (
                <div className="">
                        <div className="text-center font-weight-bolder heading_color">
                            <h1>TRENDING</h1>
                        </div>
                        <div className="d-flex justify-content-center">
                            <button onClick={this.setValue} className="btn btn-success ml-2 mr-2 font-bold font-weight-bold" value="day">Day</button>
                            <button onClick={this.setValue} className="btn btn-info ml-2 mr-2 font-bold font-weight-bold" value="week">Week</button>
                        </div>
                        <div className="container">
                        <Slider {...settings}>
                            {this.props.TrendingMovie && this.props.TrendingMovie.map((movie, idx) => {
                                return <HomeMovieCard data={movie} key={idx} height_s='250px'/>
                            })}
                        </Slider>
                        </div>
                </div>
            )
        }
        else if (this.props.isLoadingTrendingMovie) {
            return <LoadingSpinner />;
        } else {
            return <DataNotFound />;
        }
    }
    componentDidMount(){
        this.props.fetchTrendingMovieList("day")
    }
}
const mapStateToProps=(state)=>{
    return{
        TrendingMovie:state.NewHomePage.TrendingMovie,
        isLoadingTrendingMovie:state.NewHomePage.isLoadingTrendingMovie
    }
}

export default connect(mapStateToProps,{fetchTrendingMovieList})(Trending);