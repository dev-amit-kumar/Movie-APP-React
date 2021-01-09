import React from 'react'
import ReviewData from './ReviewData'

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
        return(
            <div>
                {this.state.data && this.state.data.results.map((review, idx) => {
                    return(<ReviewData data={review} key={idx}/>)
                })}
            </div>
        )
    }
}
export default Review