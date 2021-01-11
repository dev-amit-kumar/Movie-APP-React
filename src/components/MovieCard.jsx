import { Link } from 'react-router-dom'
import '../css/MovieCard.css'
const MovieCard = (props) => {
    return(
        <div className="movie-outer-card text-center">
            <div className="movie-inner-card">
                <Link to={`/movie/${props.data.id}`}>
                    <img src={`https://image.tmdb.org/t/p/w500/${props.data.poster_path}`} alt="movie"/>
                    <div className="movie-card-text">
                        <h6>{props.data.title}</h6>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default MovieCard