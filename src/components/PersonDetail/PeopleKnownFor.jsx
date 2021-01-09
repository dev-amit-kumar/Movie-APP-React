import React, { Component } from 'react';
import PeopleKnownDisplay from "./PeopleknownDisplay";
const url ="https://api.themoviedb.org/3/person/500/movie_credits?api_key=911c65436dd290d171fc662603dac6b3&language=en-US";
class PeopleKnownFor extends Component {
    constructor(){
        super()
        this.state={
            known:[]
        }
    }
    render() {
        console.log(this.state.known)
        return (
            <div>
                <PeopleKnownDisplay mknown={this.state.known}/>
            </div>
        )
    }
    componentDidMount(){
        fetch(url,{
            method:"GET"
        })
        .then((res)=>res.json())
        .then((data)=>this.setState({known:data.cast}))
    }
}

export default PeopleKnownFor;
