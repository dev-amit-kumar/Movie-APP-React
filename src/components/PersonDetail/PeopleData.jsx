import React, { Component } from 'react';
import {withRouter} from "react-router-dom"
import PeopleDisplay from "./PeopleDisplay";
import PeopleKnownFor from "./PeopleKnownFor";
const url = `https://api.themoviedb.org/3/person`;

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
        fetch(`${url}/${this.props.match.params.id}?api_key=911c65436dd290d171fc662603dac6b3&language=en-US`,{
            method:"GET"
        })
        .then((res)=>res.json())
        .then((data)=>this.setState({movie:data}))
    }
}

export default withRouter(PeopleData);
