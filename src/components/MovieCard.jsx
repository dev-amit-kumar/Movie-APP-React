import { Link } from 'react-router-dom'
import '../css/MovieCard.css'
const MovieCard = (props) => {
    const img_src = () => {
        if(props.data.poster_path === null){
            return '../demo.png'
        }
        else{
            return `https://image.tmdb.org/t/p/w500/${props.data.poster_path}`
        }
    }
    return(
        <div className="movie-outer-card text-center">
            <div className="movie-inner-card">
                <Link to={`/movie/${props.data.id}`}>
                    <img src={img_src()} alt="movie"/>
                    <div className="movie-card-text">
                        <h6>{props.data.title}</h6>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default MovieCard