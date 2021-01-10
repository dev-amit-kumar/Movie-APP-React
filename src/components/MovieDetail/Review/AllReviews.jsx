import React from 'react'
import ReviewData from './ReviewData'
import Slider from "react-slick";

class Review extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data: ''
        }
    }   
    
    componentDidMount(){
        const movie_id = this.props.movie_id
        const url = `https://api.themoviedb.org/3/movie/${movie_id}/reviews?api_key=911c65436dd290d171fc662603dac6b3&language=en-US&page=1`
        fetch(url)
        .then(res => res.json())
        .then(res => this.setState({data: res}))
    }

    render(){
        var settings = {
            cssEase: "linear",
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true
        };
        return(
            <div className="other_data container mt-4 pb-4">
                <h1 className="text-center font-weight-bolder">Review</h1>
                <Slider {...settings}>
                    {this.state.data && this.state.data.results.map((review, idx) => {
                        return(<ReviewData data={review} key={idx} active={idx===0 && 'active'}/>)
                    })}
                </Slider>
            </div>
        )
    }
}
export default Review