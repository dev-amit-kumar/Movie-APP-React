import React, { Component } from 'react';
import MovieCard from "../MovieCard";
import Sidebar from "./Sidebar/Index";
const purl="https://api.themoviedb.org/3/movie/popular?api_key=911c65436dd290d171fc662603dac6b3&language=en-US&page=1";

class Home extends Component {
    constructor(){
        super()
        this.state={
            movieData:[]
        }
    }
    render() {
        return (
            <div className="container-fluid">    
                <div className="row">
                    <div className="col-md-2">
                        <Sidebar MovieData={(data)=>this.setState({movieData:data})} MovieList={this.state.movieData}/>
                    </div>
                    <div className="col-md-10 container my-5 d-flex flex-row flex-wrap justify-content-between">
                        {this.state.movieData && this.state.movieData.map((movie, idx) => {
                            return <MovieCard data={movie} key={idx} height_s='auto'/>
                        })}
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount(){
        fetch(purl,{
            method:"GET"
        })  
        .then((res)=>res.json())
        .then((data)=>this.setState({movieData:data.results}))
    }
}

export default Home;