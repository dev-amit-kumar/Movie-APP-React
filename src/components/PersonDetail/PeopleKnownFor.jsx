import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import PeopleKnownDisplay from "./peopleknownDisplay";
const url ="https://api.themoviedb.org/3/person";
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
        fetch(`${url}/${this.props.match.params.id}/movie_credits?api_key=911c65436dd290d171fc662603dac6b3&language=en-US`,{
            method:"GET"
        })
        .then((res)=>res.json())
        .then((data)=>this.setState({known:data.cast}))
    }
}

export default withRouter(PeopleKnownFor);
