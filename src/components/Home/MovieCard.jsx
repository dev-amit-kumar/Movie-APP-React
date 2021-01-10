const MovieCard=(props)=>{
    return(
        <div className="card mb-4" style={{width: "18rem"}}>
            <img className="card-img-top" src={`https://image.tmdb.org/t/p/w500${props.data.backdrop_path}`} alt="Card  cap"/>
            <div className="card-body">
                <h5 className="card-title">{props.data.title}</h5>
                <p className="card-text">{props.data.vote_average}</p>
            </div>
        </div>
    )
}
export default MovieCard;