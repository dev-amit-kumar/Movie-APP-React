import React, { Component } from 'react'
const url="https://api.themoviedb.org/3/discover/movie?api_key=911c65436dd290d171fc662603dac6b3&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"

class SortByDate extends Component {
    constructor(){
        super()
        this.state={
            start:"",
            end:"",
        }
    }
    StartDate=(e)=>{
        this.setState({start:e.target.value})
    }
    EndDate=(e)=>{
        this.setState({end:e.target.value})
    }
    renderDate=()=>{
        fetch(`${url}&primary_rrelease_date.gte=${this.state.start}&primary_rrelease_date.lte=${this.state.end}`,{
            method:"GET"
        })
        .then((res)=>res.json())
        .then((data)=>this.props.SortData(data.results))
    }
    render() {
        return (
            <div>
                <h6>ByDate</h6>
                <input onChange={this.StartDate} type="date"/>
                <label>start date</label>
                <input onChange={this.EndDate} type="date"/>
                <label>end date</label>
                <div><button onClick={this.renderDate}>Submit</button></div>
            </div>
        )
    }
}

export default SortByDate;
