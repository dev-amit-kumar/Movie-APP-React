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
          speed: 500,
          slidesToShow: 8,
          slidesToScroll: 2,
          arrows: true,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 5
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            }
          ]
        };
        return(
          <div className="other_data">
            <h2 className="heading_color">Movie Cast</h2>
            <Slider {...settings}>
                {this.state.data && this.state.data.map((cast, idx) => {
                  return(<CastData data={cast} key={idx}/>)
                })}
            </Slider>
          </div>
        )
    }
}
export default AllCast