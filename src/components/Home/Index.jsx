import React, { Component } from 'react';
import {Link} from "react-router-dom"
import MovieCard from "./MovieCard";
import Sidebar from "../Sidebar/Sidebar";
const purl="https://api.themoviedb.org/3/movie/popular?api_key=911c65436dd290d171fc662603dac6b3&language=en-US&page=1";



class Home extends Component {
    constructor(){
        super()
        this.state={
            movieData:[],
        }
    }
    renderSearch=(data)=>{
        if(data){
            return data.map((val)=>{
                return(
                    <Link>{val.title}</Link>
                )
            })
        }
    }
    render() {
        return (
            <div className="container-fluid mt-4">
                <div className="col-md-2">{this.renderSearch(this.props.SearchList)}</div>
                <div className="row">
                    <div className="col-md-2">
                    <h4 className="">POPULAR MOVIES</h4>
                        <Sidebar MovieData={(data)=>this.setState({movieData:data})} MovieList={this.state.movieData}/>
                    </div>
                    <div className="col-md-10 container my-5 d-flex flex-row flex-wrap justify-content-between">
                        {this.state.movieData && this.state.movieData.map((movie, idx) => {
                            return <MovieCard data={movie} key={idx}/>
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


