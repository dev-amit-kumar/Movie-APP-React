import React, { Component } from 'react';
import Slider from 'react-slick';
import DisplayTrailer from '../Display/DisplayTrailer';
import "../../../../css/Trailer.css";
const url="https://api.themoviedb.org/3/movie/now_playing?api_key=911c65436dd290d171fc662603dac6b3&language=en-US&page=1";
class Trailer extends Component {
    constructor(){
        super()
        this.state={
            nowPlaying:[]
        }
    }
    render() {
        var settings = {
            cssEase: "linear",
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
          };
        return (
            <div className="trailer">
            <div className="container pt-4 pb-4">
                <Slider  {...settings}>
                    {this.state.nowPlaying && this.state.nowPlaying.map((movie, idx) => {
                        return(<DisplayTrailer data={movie} key={idx}/>)
                        })}
                </Slider>
                </div>
                </div>
        )
    }
    componentDidMount(){
        fetch(url,{
            method:"GET"
        })
        .then((res)=>res.json())
        .then((data)=>this.setState({nowPlaying:data.results}))
    }
}
export default Trailer;