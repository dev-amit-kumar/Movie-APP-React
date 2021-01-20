import React, { Component } from 'react'
const url="https://api.themoviedb.org/3/movie";
class DisplayTrailer extends Component {
    constructor(){
        super()
        this.state={
            keys:"sfM7_JLk-84"
        }
    }
    render() {
        return (
            <div className="jumbotron" style={{backgroundImage:`url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${this.props.data.backdrop_path})`}}>
                <div className="container d-flex justify-content-center">
                    <iframe title="trailer" width="900" height="315" src={`https://www.youtube.com/embed/${this.state.keys}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen></iframe>
                </div>
            </div>
        )
    }
    componentDidMount(){
        fetch(`${url}/${this.props.data.id}/videos?api_key=911c65436dd290d171fc662603dac6b3&language=en-US`,{
            method:"GET"
        })
        .then((res)=>res.json())
        .then((data)=>this.setState({keys:data.results[0].key}))
    }
}

export default DisplayTrailer;
