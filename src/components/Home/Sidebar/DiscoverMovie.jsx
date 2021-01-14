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
        const discoverOption = () => {
            return(
                <>
                    <div className="form-check">
                        <label className="form-check-label">
                            <input className="form-check-input" onClick={this.renderFilterMovie}  type="radio" name="discover_movie" value="top_rated" />
                            TOP RATED
                        </label>
                    </div>
                    <div className="form-check">
                        <label className="form-check-label">
                            <input className="form-check-input" onClick={this.renderFilterMovie}  type="radio" name="discover_movie" value="popular"/>
                            POPULAR
                        </label>
                    </div>
                    <div className="form-check">
                        <label className="form-check-label">
                            <input className="form-check-input" onClick={this.renderFilterMovie}  type="radio" name="discover_movie" value="upcoming"/>
                            UPCOMING
                        </label>
                    </div>
                </>
            )
        }
        return (
            <div className="filter-card">
                <div className="show_on_mobile card">
                    <div className="card-header">
                        <a className="cast-name collapsed text-dark " href="#collapseTwo" role="button"  data-toggle="collapse" aria-expanded="false" aria-controls="collapseTwo">
                            <h6 className="text-center" style={{margin: 0}}>Discover Movie</h6>
                        </a>
                    </div>
                    <div id="collapseTwo" className="collapse card-body" aria-labelledby="headingOne" data-parent="#accordion">
                        {discoverOption()}
                    </div>
                </div>
                <div className="hide_on_mobile card">
                    <div className="card-header">
                        <h6 className="text-center">Discover Movie</h6>
                    </div>
                    <div className="card-body">
                        {discoverOption()}
                    </div>
                </div>
            </div>
        )
    }
}

export default DiscoverMovie;