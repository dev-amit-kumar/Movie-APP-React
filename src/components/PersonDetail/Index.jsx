import React, { Component } from 'react';
import {withRouter} from "react-router-dom"
import PersonData from "./PersonData";
import KnownForMovie from './KnownForMovie';
const url = "https://api.themoviedb.org/3/person";

class Index extends Component {
    constructor(){
        super()
        this.state={
            person_data:[]
        }
    }
    render() {
        return (
            <>
                <PersonData data={this.state.person_data}/>
                <KnownForMovie person_id={this.props.match.params.id}/>
            </>
        )
    }
    componentDidMount(){
        fetch(`${url}/${this.props.match.params.id}?api_key=911c65436dd290d171fc662603dac6b3&language=en-US`,{
            method:"GET"
        })
        .then((res)=>res.json())
        .then((data)=>this.setState({person_data:data}))
    }
}

export default withRouter(Index);