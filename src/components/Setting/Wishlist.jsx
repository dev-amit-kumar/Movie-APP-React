import React from 'react'
import MovieCard from '../Common/MovieCard'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'

const url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=911c65436dd290d171fc662603dac6b3&language=en-US&page=1'
class Wishlist extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            list: []
        }
    }
    componentDidMount(){
        fetch(url)
        .then(res => res.json())
        .then(res => this.setState({list: res.results}))
    }
    render(){
        return(
            <div className="card setting_common_card">
                <h2 className="card-header">Wishlist</h2>
                {
                    this.props.user ?
                    <div className="card-body d-flex flex-row flex-wrap justify-content-between" style={{padding: 0}}>
                        {this.state.list.map(movie => {
                            return(<MovieCard key={movie.id} data={movie} show_wishlist={true}  height_s="250px"/>)
                        })}
                    </div>
                    :
                    <div className="card-body d-flex flex-column justify-content-center align-items-center" style={{padding: 0, height: '200px'}}>    
                        <h2 className="text-center">You need to Login/Signup first to see your wishlist</h2>
                        <Link to="/auth/login" className="mt-4"><h4>Click to Login/Signup</h4></Link>
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        user: state.UserAuth.user
    }
}

export default connect(mapStateToProps)(Wishlist);
