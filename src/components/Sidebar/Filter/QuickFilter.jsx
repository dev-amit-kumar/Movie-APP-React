import React, { Component } from 'react'
const url="https://api.themoviedb.org/3/movie";

class QuickFilter extends Component {
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
                <h6>QUICK</h6>
                <div className="form-check">
                    <input className="form-check-input" onClick={this.renderFilterMovie}  type="radio" name="exampleRadios" id="exampleRadios1" value="top_rated" />
                    <label className="form-check-label" for="exampleRadios1">
                        TOP RATED
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" onClick={this.renderFilterMovie}  type="radio" name="exampleRadios" id="exampleRadios2" value="popular"/>
                    <label className="form-check-label" for="exampleRadios2">
                        POPULAR
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" onClick={this.renderFilterMovie}  type="radio" name="exampleRadios" id="exampleRadios3" value="upcoming"/>
                    <label className="form-check-label" for="exampleRadios3">
                        UPCOMING
                    </label>
                </div>
            </div>
        )
    }
}

export default QuickFilter;