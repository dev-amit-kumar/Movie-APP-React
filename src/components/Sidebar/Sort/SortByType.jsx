import React, { Component } from 'react'
const sortUrl="https://api.themoviedb.org/3/discover/movie?api_key=911c65436dd290d171fc662603dac6b3&language=en-US";
const dateUrl="https://api.themoviedb.org/3/discover/movie?api_key=911c65436dd290d171fc662603dac6b3&language=en-US";

class SortByType extends Component {
    renderSort=(e)=>{
        fetch(`${sortUrl}&sort_by=${e.target.value}&include_adult=false&include_video=false&page=1`,{
            method:"GET"
        })
        .then((res)=>res.json())
        .then((data)=>this.setState({movieData:data.results}))
    }
    render() {
        return (
            <div>
                <select className="btn btn-light" onChange={this.renderSort}>
                    <option value="release_date.desc">release_date.desc</option>
                    <option value="release_date.asc">release_date.asc</option>
                    <option value="popularity.asc">popularity.asc</option>
                    <option value="popularity.desc">popularity.desc</option>
                    <option value="vote_average.asc">vote_average.asc</option>
                    <option value="vote_average.desc">vote_average.desc</option>
                </select>
            </div>
        )
    }
}

export default SortByType;
