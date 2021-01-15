import React from 'react'
import {withRouter} from "react-router-dom";
import "../../css/searchFunction.css";
const url="https://api.themoviedb.org/3/search/multi?api_key=911c65436dd290d171fc662603dac6b3&language=en-US";
class SearchBar extends React.Component{
    constructor(){
        super()
        this.state={
            key:"",
            suggestion: []
        }
    }
    handleChange=(data)=>{
        this.setState({key: data})
        if(data){
            fetch(`${url}/&query=${data}&page=1&include_adult=false`)
            .then(res => res.json())
            .then(res=> {this.setState({suggestion: res.results})})
        }
        else{
            this.setState({suggestion: []})
        }
    }
    redirect=(e)=>{
        e.preventDefault()
        if(this.state.key){
            this.setState({suggestion: []})
            this.props.history.push(`/search/${this.state.key}`)
        }
    }
    redirectMovie = (e) =>{
        this.setState({suggestion: []})
        this.props.history.push(`/movie/${e.target.id}`)
    }
    renderSearchResults = () => {
        if(this.state.suggestion.length>0){
            return(
                <div className="searchResult" id="match-list">
                    {this.state.suggestion.map((suggestion, idx) => {
                        return(<div onClick={this.redirectMovie} id={suggestion.id} key={idx}>{suggestion.title}</div>)
                    })}
                </div>
            )
        }
        else{
            return(<></>)
        }
    }
    render(){
        return(
            <form className="mr-2 my-auto w-100 d-inline-block searchBox">
                <div className="input-group">
                    <input type="search" id="myInput" list="match-list" onChange={(e) => this.handleChange(e.target.value)} className="form-control" placeholder="Search movie/actor" aria-label="Search movie/actor" aria-describedby="button-addon2"/>
                    <div className="input-group-append">
                        <button onClick={this.redirect} className="btn btn-outline-light" type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>
                    </div>
                    {this.renderSearchResults()}
                </div>
            </form>
        )
    }
}
export default withRouter(SearchBar)