import React from 'react'
import CastData from './CastData'
import Slider from "react-slick";

class AllCast extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data: ''
        }
    }   
    
    componentDidMount(){
        const movie_id = this.props.movie_id
        const url = `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=911c65436dd290d171fc662603dac6b3&language=en-US`
        fetch(url)
        .then(res => res.json())
        .then(res => this.setState({data: res.cast}))

    }

    render(){
        var settings = {
      cssEase: "linear",
      speed: 2000,
      autoplaySpeed: 2000,
      infinite: false,
      slidesToShow: 8,
      slidesToScroll: 2,
      autoplay: true,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
        };
        return(
            <Slider {...settings}>
                {this.state.data && this.state.data.map((cast, idx) => {
                    return(<CastData data={cast} key={idx}/>)
                })}
            </Slider>
        )
    }
}
export default AllCast