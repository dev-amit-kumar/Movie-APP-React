import React, { Component } from 'react'
import MovieSearch from "./MovieSearch";
import ActorSearch from "./ActorSearch";
const url="https://api.themoviedb.org/3/search/multi?api_key=911c65436dd290d171fc662603dac6b3&language=en-US";
class SearchPage extends Component {
    constructor(){
        super()
        this.state={
            people:[]
        }
    }
    render() {
        return (
            <div>
                <input type="radio" name="list" value="1"/>
                <input type="radio" name="list" value="2"/>
                <MovieSearch list={this.state.people}/>
            </div>
        )
    }
    componentDidMount(){
        fetch(`${url}&query=${this.props.match.params.str}&page=1&include_adult=false`,{
            method:"GET"
        })
        .then((res)=>res.json())
        .then((data)=>this.setState({people:data.results}))
    }
}

export default SearchPage;
