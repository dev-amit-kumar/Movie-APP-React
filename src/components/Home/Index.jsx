import React, { Component } from 'react';
import MovieCard from "./MovieCard";
const uurl="https://api.themoviedb.org/3/movie/upcoming?api_key=911c65436dd290d171fc662603dac6b3&language=en-US&page=1";
const turl="https://api.themoviedb.org/3/movie/top_rated?api_key=911c65436dd290d171fc662603dac6b3&language=en-US&page=1";
const purl="https://api.themoviedb.org/3/movie/popular?api_key=911c65436dd290d171fc662603dac6b3&language=en-US&page=1";
const sortUrl="https://api.themoviedb.org/3/discover/movie?api_key=911c65436dd290d171fc662603dac6b3&language=en-US";
const dateUrl="https://api.themoviedb.org/3/discover/movie?api_key=911c65436dd290d171fc662603dac6b3&language=en-US";

class Home extends Component {
    constructor(){
        super()
        this.state={
            movieData:[],
            startDate:"",
            endDate:""
        }
    }
    renderTopRated=()=>{
        fetch(turl,{
            method:"GET"
        })  
        .then((res)=>res.json())
        .then((data)=>this.setState({movieData:data.results}))
    }
    renderPopular=()=>{
        fetch(purl,{
            method:"GET"
        })  
        .then((res)=>res.json())
        .then((data)=>this.setState({movieData:data.results}))
    }
    renderUpcoming=()=>{
        fetch(uurl,{
            method:"GET"
        })  
        .then((res)=>res.json())
        .then((data)=>this.setState({movieData:data.results}))
    }
    renderSort=(e)=>{
        fetch(`${sortUrl}&sort_by=${e.target.value}&include_adult=false&include_video=false&page=1`,{
            method:"GET"
        })
        .then((res)=>res.json())
        .then((data)=>this.setState({movieData:data.results}))
    }
    setStartDate=(e)=>{
        this.setState({startDate:e.target.value})
    }
    setEndDate=(e)=>{
        this.setState({EndDate:e.target.value})
    }
    renderDate=()=>{
        console.log(this.state.startDate,this.state.endDate)
        fetch(`${dateUrl}&sort_by=popularity.asc&include_adult=false&include_video=false&page=1&release_date.gte=${this.state.startDate}&release_date.lte=${this.state.endDate}";`,{
            method:"GET"
        })
        .then((res)=>res.json())
        .then((data)=>this.setState({movieData:data.results}))
    }
    render() {
        return (
            <div className="container-fluid mt-4">
                
                <div className="row">
                    <div className="col-md-2">
                    <h4 className="">POPULAR MOVIES</h4>
                        <div  className="row" >
                            <div className="col-6 col-md-12 mb-5">
                                <button className="btn btn-light" type="button" data-toggle="collapse" data-target="#filtername" aria-expanded="false" aria-controls="collapseExample">
                                    FILTER
                                </button>
                                <div className="collapse" id="filtername">
                                    <div className="card card-body">
                                            <div className="form-check">
                                                <input className="form-check-input" onClick={this.renderTopRated} type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                                                <label className="form-check-label" for="exampleRadios1">
                                                    TOP RATED
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" onClick={this.renderPopular}  type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
                                                <label className="form-check-label" for="exampleRadios2">
                                                    POPULAR
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" onClick={this.renderUpcoming}  type="radio" name="exampleRadios" id="exampleRadios3" value="option3" />
                                                <label className="form-check-label" for="exampleRadios3">
                                                    UPCOMING
                                                </label>
                                            </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-md-12">
                                <button className="btn btn-light" type="button" data-toggle="collapse" data-target="#sortname" aria-expanded="false" aria-controls="collapseExample">
                                    SORT
                                </button>
                                <div className="collapse" id="sortname">
                                    <div className="card card-body">
                                        <select className="btn btn-light" onChange={this.renderSort}>
                                            <option value="release_date.desc">release_date.desc</option>
                                            <option value="release_date.asc">release_date.asc</option>
                                            <option value="popularity.asc">popularity.asc</option>
                                            <option value="popularity.desc">popularity.desc</option>
                                            <option value="vote_average.asc">vote_average.asc</option>
                                            <option value="vote_average.desc">vote_average.desc</option>
                                        </select>
                                    </div>
                                </div>    
                            </div>
                            <div className="col-6 col-md-12">
                                <button className="btn btn-light" type="button" data-toggle="collapse" data-target="#sortname" aria-expanded="false" aria-controls="collapseExample">
                                    SORT BY DATE
                                </button>
                                <div className="collapse" id="sortname">
                                    <div className="card card-body">
                                        <div><input type="date" onChange={this.setStartDate}/>
                                        <label>STARTING DATE</label>
                                        </div>
                                        <div><input type="date" onChange={this.setEndDate}/>
                                        <label>END DATE</label>
                                        </div>
                                        <div>
                                            <button onClick={this.renderDate}>SUBMIT</button>
                                        </div>
                                    </div>
                                </div>    
                            </div>
                        </div>
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


