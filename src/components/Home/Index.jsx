import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import {Link} from "react-router-dom"
import MovieCard from "../Common/MovieCard";
import Sidebar from "./Sidebar/Index";
import { Upcoming } from '../../redux/actions'
import { connect } from 'react-redux';

// const purl="https://api.themoviedb.org/3/movie/popular?api_key=911c65436dd290d171fc662603dac6b3&language=en-US&page=1";

class Home extends Component {
    constructor(props){
        super(props)
        this.state={
            movieData:[]
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
        return (
            <div className="container-fluid">    
                <div className="row">
                    <Fade left>
                        <div className="col-md-2 col-12" id="accordion">
                            <Sidebar MovieData={(data)=>this.setState({movieData:data})} MovieList={this.state.movieData}/>
                        </div>
                    </Fade>
                    <div className="col-md-10 col-12 container d-flex flex-row flex-wrap justify-content-between">
                        {this.props.list !== null && this.props.list.results.map((movie, idx) => {
                            return <MovieCard data={movie} key={idx} height_s='250px' show_wishlist={true}/>
                        })}
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount = async () => {
        await this.props.Upcoming(1);
    }
}

const mapStateToProps = (state) => {
    return{
        list: state.DiscoverMovie.list
    }
}

export default connect(mapStateToProps, {Upcoming})(Home);