import React, { Component } from 'react'
import { connect } from 'react-redux';
import Slider from 'react-slick';
import HomeMovieCard from '../../HomePage-Components/Display/HomeMovieCard';
import {fetchRecommendedMovieList} from "../../../../redux/actions"
import LoadingSpinner from '../../../Common/LoadingSpinner';
import DataNotFound from '../../../Common/DataNotFound';
const url ="https://api.themoviedb.org/3/movie/now_playing?api_key=911c65436dd290d171fc662603dac6b3&language=en-US&page=1";
class Recommended extends Component {
    constructor(){
        super()
        this.state={
            genre:[28],
        }
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
        if(this.props.RecommendedMovie){
        return (
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-11" style={{margin:"0 auto"}}>
                            <h1 className="font-weight-bolder heading_color mt-4 ml-4">Recommended</h1>
                            <Slider {...settings}>
                                    {this.props.RecommendedMovie && this.props.RecommendedMovie.map((movie, idx) => {
                                        var count = 0
                                        for(var i=0;i<=this.state.genre.length;i++){
                                                if(movie.genre_ids.includes(this.state.genre[i])){
                                                    count++
                                                }
                                        }
                                        if(count===this.state.genre.length){
                                            return(
                                                <HomeMovieCard data={movie} key={idx}  height_s='250px'/>
                                            )
                                        }
                                        })}
                            </Slider>
                </div>
            </div>
            </div>
        )
    }
    else if (this.props.isLoadingRecommendedMovie) {
        return <LoadingSpinner />;
    } else {
        return <DataNotFound />;
    }
    }componentDidMount(){
        this.props.fetchRecommendedMovieList()
    }
}
const mapStateToProps=(state)=>{
    return{
        RecommendedMovie:state.NewHomePage.RecommendedMovie,
        isLoadingRecommendedMovie:state.NewHomePage.isLoadingRecommendedMovie
    }
}

export default connect(mapStateToProps,{fetchRecommendedMovieList })(Recommended);
