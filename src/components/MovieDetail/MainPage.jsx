import React from 'react'
import {withRouter} from 'react-router-dom'
import TopContainer from './TopContainer'
import AllReviews from './Review/AllReviews'
import RecommendedMovie from './RecommendedMovie'
import AllCast from './Cast/AllCast'
import OtherData from './OtherData'

class MainPage extends React.Component{
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
        if(this.state.data){
            return(
                <>
                    <TopContainer 
                        key={this.props.match.params.id}
                        title={this.state.data.title} 
                        tagline={this.state.data.tagline} 
                        poster_path={this.state.data.poster_path}
                        bg_path={this.state.data.backdrop_path}
                        year={this.state.data.release_date.substr(0,4)}
                        data={this.state.data}
                        movie_id={this.props.match.params.id}
                    />
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-9">
                                <AllCast movie_id={this.props.match.params.id}/>
                            </div>
                            <div className="col-md-3">
                                <OtherData 
                                    original_title={this.state.data.original_title}
                                    vote_count={this.state.data.vote_count}
                                    popularity={this.state.data.popularity}
                                    status={this.state.data.status}
                                    imdb={this.state.data.imdb_id}
                                    website={this.state.data.homepage}
                                    movie_id={this.props.match.params.id}
                                />
                            </div>
                            <div className="col-md-12">
                                <AllReviews movie_id={this.props.match.params.id}/>
                            </div>
                        </div>
                    </div>
                    <RecommendedMovie movie_id={this.props.match.params.id}/>
                </>
            )
        }else{
            return(
                <div className="full-cover">
                    <div className="spinner-border" style={{width: '3rem', height: '3rem'}} role="status">
                    <span className="sr-only">Loading...</span>
                    </div>
                </div>
            )
        }
    }
}

export default withRouter(MainPage)