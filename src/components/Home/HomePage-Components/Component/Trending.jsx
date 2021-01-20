import React, { Component } from 'react';
import Slider from 'react-slick';
import {connect} from "react-redux";
import HomeMovieCard from '../../HomePage-Components/Display/HomeMovieCard';
import {fetchTrendingMovieList} from "../../../../redux/actions";
import LoadingSpinner from '../../../Common/LoadingSpinner';
import NoMovies from '../../../Common/NoMovies';
class Trending extends Component {
    constructor(){
        super()
        this.state={
            value:"person"
        }
    }
    setValue=(e)=>{
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
                <div className="container-fluid">
                    <div className="search-option mt-4 ml-5">
                        <h1 className="heading_color font-weight-bolder ml-4">TRENDING</h1>
                        <button
                            onClick={this.setValue}
                            className={
                                this.props.TrendingType === 'day'
                                    ? 'btn-active'
                                    : 'btn-inactive'
                            }
                            value="day"
                        >
                            Day
                        </button>
                        <button
                            onClick={this.setValue}
                            className={
                                this.props.TrendingType === 'week'
                                    ? 'btn-active'
                                    : 'btn-inactive'
                            }
                            value="week"
                        >
                            Week
                        </button>
					</div>
                    <div className="row">
                        <div className="col-11" style={{margin:"0 auto"}}>
                            <Slider {...settings}>
                                {this.props.TrendingMovie && this.props.TrendingMovie.map((movie, idx) => {
                                    return <HomeMovieCard data={movie} key={idx} height_s='250px'/>
                                })}
                            </Slider>
                        </div>
                    </div>
                </div>
            )
        }
        else if (this.props.isLoadingTrendingMovie) {
            return <LoadingSpinner />;
        } else {
            return <NoMovies/>;
        }
    }
    componentDidMount(){
        this.props.fetchTrendingMovieList("day")
    }
}
const mapStateToProps=(state)=>{
    return{
        TrendingMovie:state.NewHomePage.TrendingMovie,
        TrendingType:state.NewHomePage.TrendingType,
        isLoadingTrendingMovie:state.NewHomePage.isLoadingTrendingMovie
    }
}

export default connect(mapStateToProps,{fetchTrendingMovieList})(Trending);