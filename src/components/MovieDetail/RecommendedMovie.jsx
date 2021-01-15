import React from 'react'
import MovieCard from '../Common/MovieCard'

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
    renderData = (data) => {
        if(data.total_results){
            return(
                    <div className="row text-center">
                            {data.results.map((movie, idx) => {
                                return(<MovieCard data={movie} key={idx} show_wishlist={true}/>)
                            })}
                    </div>
            )
        }
        else{
            return(
                <h1 className="text-center"><i>Sorry, no movies found</i></h1>
            )
        }
    }
    render(){
        return(
            <div className="container-fluid mt-4">
                <h2 className="font-weight-bolder ml-4 heading_color">Recommended Movie</h2>
                {this.renderData(this.state.data)}
            </div>
        )
    }
}
export default RecommendedMovie