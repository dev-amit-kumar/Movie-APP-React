import { Link } from 'react-router-dom'
import '../css/MovieCard.css'
const MovieCard = (props) => {
    return(
        <div className="col-3 text-center">
            <Link to={`/movie/${props.data.id}`}>
                <div className="movie-card">
                    <img src={`https://image.tmdb.org/t/p/w500/${props.data.poster_path}`} alt="movie"/>
                    <h6>{props.data.title}</h6>
                </div>
            </Link>
        </div>
    )
}

export default MovieCard