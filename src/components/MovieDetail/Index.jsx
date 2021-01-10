import React from 'react'
import TopContainer from './TopContainer'
import AllReviews from './Review/AllReviews'
import RecommendedMovie from './RecommendedMovie'
import AllCast from './Cast/AllCast'

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
        if(this.state.data){
            return(
                <>
                    <TopContainer 
                        title={this.state.data.title} 
                        tagline={this.state.data.tagline} 
                        poster_path={this.state.data.poster_path}
                        bg_path={this.state.data.backdrop_path}
                        year={this.state.data.release_date.substr(0,4)}
                        data={this.state.data}
                        />
                        <div className="container-fluid"  style={{padding: '0 30px'}}>
                            <h3>Movie Cast</h3>
                            <AllCast movie_id={this.props.match.params.id}/>
                        </div>
                        <div className="container">
                            <h1>Review</h1>
                            <AllReviews movie_id={this.props.match.params.id}/>
                        </div>
                    <RecommendedMovie movie_id={this.props.match.params.id}/>
                </>
            )
        }else{
            return(
                <h1>loading</h1>
            )
        }
    }
}

export default Index