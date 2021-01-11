import React, { Component } from 'react'
const uurl="https://api.themoviedb.org/3/movie/upcoming?api_key=911c65436dd290d171fc662603dac6b3&language=en-US&page=1";
const turl="https://api.themoviedb.org/3/movie/top_rated?api_key=911c65436dd290d171fc662603dac6b3&language=en-US&page=1";
const purl="https://api.themoviedb.org/3/movie/popular?api_key=911c65436dd290d171fc662603dac6b3&language=en-US&page=1";

class QuickFilter extends Component {
    constructor(){
        super()
        this.state={
            movieData:[]
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
    sendData=()=>{
        this.props.FilterData(this.state.movieData)
    }
    render() {
        return (
            <div>
                <div className="form-check">
                    <input className="form-check-input" onClick={this.renderTopRated}  type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
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
        )
    }
}

export default QuickFilter;
