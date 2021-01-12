import React, { Component } from 'react';
import FilterGenre from "./Filter/Genre";
import FilterYear from "./Filter/Year";
import FilterRating from "./Filter/Rating";
import SortByType from "./Sort/Type";
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
            str = `${str}&primary_release_year=${this.state.year}`
        }
        if(this.state.genre){
            str=`${str}&with_genres=${this.state.genre}`
        }
        if(this.state.rating){
            str=`${str}&vote_average.gte=${this.state.rating}`
        }
        fetch(`${url}${str}`,{
            method:"GET"
        })
        .then((res)=>res.json())
        .then((data)=>this.props.CustomData(data.results))
    }

    render() {
        return (
            <div className="card card-body">
                <h6 className="text-center">CUSTOM FILTER</h6>
                <FilterGenre GenreData={(data)=>this.setState({genre:data})}/>
                <FilterYear  YearData={(data)=>this.setState({year:data})}/>
                <SortByType  TypeData={(data)=>this.setState({type:data})}/>
                <FilterRating RatingData={(data)=>this.setState({rating:data})}/>
                <center>
                    <button onClick={this.sendData} className="btn btn-dark mt-4">Submit</button>
                </center>
            </div>
        )
    }
}

export default SortFilter;
