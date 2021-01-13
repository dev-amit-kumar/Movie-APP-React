import { Link } from 'react-router-dom'
import ReactTooltip from 'react-tooltip';
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
    const style = {
        height: props.height_s
    }
    return(
        <div className="movie-outer-card text-center">
            <div className="movie-inner-card">
                <Link to={`/movie/${props.data.id}`}>
                    <div className="position-relative">
                        <img src={img_src()} alt="movie" style={style}/>
                        <div className="movie-card-text">
                            <h6>{props.data.title}</h6>
                        </div>
                        <div className="rating_show bg-dark" data-tip={`Rating based on ${props.data.vote_count} votes`}>
                            <p>{props.data.vote_average} <i className="fa fa-star text-warning" aria-hidden="true"></i></p>
                        </div>
                        <ReactTooltip place="right" border={true} borderColor='#000' backgroundColor='#fff' textColor="#000" effect="solid"/>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default MovieCard