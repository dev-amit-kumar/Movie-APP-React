import React, { Component } from 'react';
import SearchCard from "./SearchCard";
const url="https://api.themoviedb.org/3/search/multi?api_key=911c65436dd290d171fc662603dac6b3&language=en-US";
class SearchPage extends Component {
    constructor(){
        super()
        this.state={
            searchData:[],
            value:"movie"
        }
    }
    setValue=(e)=>{
        this.setState({value:e.target.value})
    }
    render() {
        return (
            <div>
                <div className="d-flex flex-row container my-5 col-md-2 justify-content-between">
                    <button onClick={this.setValue} className="btn btn-success" value="movie">Movies</button>
                    <button onClick={this.setValue} className="btn btn-info" value="person">Actor</button>
                </div>
                <SearchCard list={this.state.searchData} type={this.state.value}/>
            </div>
        )
    }
    componentDidMount(){
        fetch(`${url}&query=${this.props.match.params.str}&page=1&include_adult=false`,{
            method:"GET"
        })
        .then((res)=>res.json())
        .then((data)=>this.setState({searchData:data.results}))
    }
}

export default SearchPage;