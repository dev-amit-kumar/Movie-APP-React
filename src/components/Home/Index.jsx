import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import {Link} from "react-router-dom"
import MovieCard from "../Common/MovieCard";
import Sidebar from "./Sidebar/Index";
import { fetchDiscoverMovie,fetchFilterMovie } from '../../redux/actions'
import { connect } from 'react-redux';
import LoadingSpinner from '../Common/LoadingSpinner'
import DataNotFound from '../Common/DataNotFound'

class Home extends Component {
    constructor(props){
        super(props)
        this.state={
            movieData:""
        }
    }
    renderSearch=(data)=>{
        if(data){
            return data.map((val)=>{
                return(
                    <Link>{val.title}</Link>
                )
            })
        }
    }
    saveState=(data)=>{
        this.setState({movieData:data})
    }
    render() {
        console.log(this.state.movieData,"state")
        if(this.props.discoverMovie){
        return (
            <div className="container-fluid">    
                <div className="row">
                    <Fade left>
                        <div className="col-md-2 col-12" id="accordion">
                            <Sidebar send={(data)=>this.saveState(data)} MovieList={this.state.movieData}/>
                        </div>
                    </Fade>
                    <div className="col-md-10 col-12 container d-flex flex-row flex-wrap justify-content-between">
                        {this.props.discoverMovie !== null && this.props.discoverMovie.map((movie, idx) => {
                            return <MovieCard data={movie} key={idx} height_s='250px' show_wishlist={true}/>
                        })}
                    </div>
                </div>
            </div>
        )
    }
    else if(this.props.isLoadingdiscoverMovie){
        return(
            <LoadingSpinner/>
        )
    }
    else{
        return(
            <DataNotFound/>
        )
    }
    }
    componentDidMount(){
        this.props.fetchDiscoverMovie("popular",1)
    }
}
const mapStateToProps = (state) => {
    return{
        discoverMovie:state.HomeMovie.discoverMovie,
        isLoadingdiscoverMovie:state.HomeMovie.isLoadingdiscoverMovie,
        stat:state.HomeMovie.stat
    }
}

export default connect(mapStateToProps,{fetchDiscoverMovie,fetchFilterMovie})(Home);