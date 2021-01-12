import React, { Component } from 'react'
const url="https://api.themoviedb.org/3/movie";

class DiscoverMovie extends Component {
    renderFilterMovie=(e)=>{
        fetch(`${url}/${e.target.value}?api_key=911c65436dd290d171fc662603dac6b3&language=en-US&page=1`,{
            method:"GET"
        })  
        .then((res)=>res.json())
        .then((data)=>this.props.FilterData(data.results))
    }
    render() {
        return (
            <div>
                <h6>Discover Movie</h6>
                <div className="form-check">
                    <input className="form-check-input" onClick={this.renderFilterMovie}  type="radio" name="discover_movie" value="top_rated" />
                    <label className="form-check-label">TOP RATED</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" onClick={this.renderFilterMovie}  type="radio" name="discover_movie" value="popular"/>
                    <label className="form-check-label">POPULAR</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" onClick={this.renderFilterMovie}  type="radio" name="discover_movie" value="upcoming"/>
                    <label className="form-check-label">UPCOMING</label>
                </div>
            </div>
        )
    }
}

export default DiscoverMovie;