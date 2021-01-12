import React, { Component } from 'react';
import GenreFilter from "./Filter/GenreFilter";
import SortByYear from "./Sort/SortByYear";
import SortByType from "./Sort/SortByType";
import SortByRating from "./Sort/SortByRating";
const url ="https://api.themoviedb.org/3/discover/movie?api_key=911c65436dd290d171fc662603dac6b3&language=en-US"

class SortFilter extends Component {
    constructor(){
        super()
        this.state={
            genre:[],
            year:"",
            type:"",
            rating:""
        }
    }
    sendData=()=>{
        if(this.state.type){
            var str= `&sort_by=${this.state.type}&include_adult=false&include_video=false&page=1`
        }
        else{
            str ="&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
        }
        if(this.state.year){
            str = str+`&primary_release_year=${this.state.year}`
        }
        if(this.state.genre){
            str=str+`&with_genres=${this.state.genre}`
        }
        if(this.state.rating){
            str=str+`&vote_average.gte=${this.state.rating}`
        }
         fetch(`${url}${str}`,{
             method:"GET"
         })
         .then((res)=>res.json())
         .then((data)=>this.props.CustomData(data.results))
    }
    render() {
        return (
            <div>
                <GenreFilter Genre={(data)=>this.setState({genre:data})}/>
                <SortByYear  Year={(data)=>this.setState({year:data})}/>
                <SortByType  Type={(data)=>this.setState({type:data})}/>
                <SortByRating Rating={(data)=>this.setState({rating:data})}/>
                <button onClick={this.sendData}>Submit</button>
            </div>
        )
    }
}

export default SortFilter;
