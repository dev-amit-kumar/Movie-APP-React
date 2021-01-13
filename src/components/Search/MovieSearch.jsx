const MovieSearch=(props)=>{
    const renderMovie=(data)=>{
        console.log(data)
            return(
                <div>
                    <h5>title</h5>
                </div>
            )
    }
    console.log(props)
    return(
        <div>
            {renderMovie(props.MovieList)}
        </div>
    )
}
export default MovieSearch;