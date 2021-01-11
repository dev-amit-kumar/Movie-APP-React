import React from 'react'
import MovieCard from '../MovieCard'
const url = "https://api.themoviedb.org/3/person";

class KnownForMovie extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            movie_list: ''
        }
    }   
    
    componentDidMount(){
        fetch(`${url}/${this.props.person_id}/movie_credits?api_key=911c65436dd290d171fc662603dac6b3&language=en-US`,{
            method:"GET"
        })
        .then((res)=>res.json())
        .then((data)=>this.setState({movie_list:data.cast}))
    }

    render(){
        console.log(this.state.movie_list)
        return(
            <div className="container-fluid mt-4">
                <h2 className="font-weight-bolder ml-4">Known For Movie</h2>
                <div className="row text-center">
                        {this.state.movie_list && this.state.movie_list.map((movie, idx) => {
                            return(<MovieCard data={movie} key={idx}/>)
                        })}
                </div>
            </div>
        )
    }
}
export default KnownForMovie