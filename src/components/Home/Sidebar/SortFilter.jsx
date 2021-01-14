import React, { Component } from 'react';
import FilterGenre from "./Filter/Genre";
import FilterYear from "./Filter/Year";
import FilterRating from "./Filter/Rating";
import SortByType from "./Sort/Type";
const url ="https://api.themoviedb.org/3/discover/movie?api_key=911c65436dd290d171fc662603dac6b3&language=en-US"

class SortFilter extends Component {
    constructor(props){
        super(props)
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
        const filterOption = () => {
            return(
                <>  
                    <div className="col-6 col-md-12">
                        <FilterGenre GenreData={(data)=>this.setState({genre:data})}/>
                    </div>
                    <div className="col-6 col-md-12">
                        <FilterYear  YearData={(data)=>this.setState({year:data})}/>
                    </div>
                    <div className="col-6 col-md-12">
                        <SortByType  TypeData={(data)=>this.setState({type:data})}/>
                    </div>
                    <div className="col-6 col-md-12">
                        <FilterRating RatingData={(data)=>this.setState({rating:data})}/>
                    </div>
                    <div className="col-md-12">
                        <button onClick={this.sendData} className="btn btn-block mt-4">Submit</button>
                    </div>
                </>
            )
        }
        return (
            <div className="filter-card">
                <div className="show_on_mobile card">
                    <div className="card-header">
                        <a className="cast-name collapsed text-dark" href="#collapseOne" role="button"  data-toggle="collapse" aria-expanded="false" aria-controls="collapseOne">
                            <h6 className="text-center" style={{margin: 0}}>Filter Movie List</h6>
                        </a>
                    </div>
                    <div id="collapseOne" className="row collapse card-body" aria-labelledby="headingOne" data-parent="#accordion">
                        {filterOption()}
                    </div>
                </div>
                <div className="hide_on_mobile card">
                    <div className="card-header">
                        <h6 className="text-center">Filter Movie List</h6>
                    </div>
                    <div className="row card-body">
                        {filterOption()}
                    </div>
                </div>
            </div>
        )
    }
}

export default SortFilter;