import React from 'react'
import TopContainer from './TopContainer'
import MainDetail from './MainDetail'
import Review from './Review'
import SimilarMovie from './SimilarMovie'
import RecommendedMovie from './RecommendedMovie'
class Index extends React.Component{
    constructor(){
        super()
        this.state = {
            data: ''
        }
    }
    componentDidMount(){
        const movie_id = this.props.match.params.id
        const url = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=911c65436dd290d171fc662603dac6b3&append_to_response=videos,images`
        fetch(url)
        .then(res => res.json())
        .then(res => this.setState({data: res}))
    }
    render(){
        console.log(this.state.data)
        return(
            <div>
                <TopContainer image={this.state.data.backdrop_path}/>
                <MainDetail/>
                <Review/>
                <SimilarMovie/>
                <RecommendedMovie/>
                {this.state.data && this.state.data.images.backdrops.map((image,idx) => {
                    return <img src={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${image.file_path}`} key={idx} alt="back" style={{width: '25%'}}/>
                })}
                <h1>Poster</h1>
                {this.state.data && this.state.data.images.posters.map((image,idx) => {
                    return <img src={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${image.file_path}`} key={idx} alt="poster" style={{width: '25%'}}/>
                })}
            </div>
        )
    }
}

export default Index