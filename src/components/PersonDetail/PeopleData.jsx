import React, { Component } from 'react';
import PeopleDisplay from "./PeopleDisplay";
import PeopleKnownFor from "./PeopleKnownFor";
const url = 'https://api.themoviedb.org/3/person/500?api_key=911c65436dd290d171fc662603dac6b3&language=en-US';

class PeopleData extends Component {
    constructor(){
        super()
        this.state={
            movie:[]
        }
    }
    render() {
        return (
            <div>
                <PeopleDisplay mList={this.state.movie}/>
                <PeopleKnownFor/>                
            </div>
        )
    }
    componentDidMount(){
        fetch(url,{
            method:"GET"
        })
        .then((res)=>res.json())
        .then((data)=>this.setState({movie:data}))
    }
}

export default PeopleData;
