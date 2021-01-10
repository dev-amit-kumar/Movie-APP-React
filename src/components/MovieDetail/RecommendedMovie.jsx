import React from 'react'
import MovieCard from '../MovieCard'

class RecommendedMovie extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data: ''
        }
    }   
    
    componentDidMount(){
        const movie_id = this.props.movie_id
        const url = `https://api.themoviedb.org/3/movie/${movie_id}/recommendations?api_key=911c65436dd290d171fc662603dac6b3&language=en-US&page=2`
        fetch(url)
        .then(res => res.json())
        .then(res => this.setState({data: res}))
    }

    render(){
        return(
            <div className="container-fluid">
                <h2>Recommended Movie</h2>
                <div className="row text-center">
                        {this.state.data && this.state.data.results.map((movie, idx) => {
                            return(<MovieCard data={movie} key={idx}/>)
                        })}
                </div>
            </div>
        )
    }
}
export default RecommendedMovie