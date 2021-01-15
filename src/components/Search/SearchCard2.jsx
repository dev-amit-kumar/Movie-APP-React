const SearchCard2=(props)=>{
    if(props.value==="1"){
        if(props.media_type==="movie"){
            return(
                <div className="card mb-4" style={{width: "18rem"}} key={props.id}>
                    <img className="card-img-top" src={`https://image.tmdb.org/t/p/w500${props.backdrop_path}`} alt="movie"/>
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                    </div>
                </div>
            )
        }
    }
    else{
        if(props.media_type==="person"){
            return(
                <div className="card mb-4" style={{width: "18rem"}} key={props.id}>
                    <img className="card-img-top" src={`https://image.tmdb.org/t/p/w500${props.profile_path}`} alt="actor"/>
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                    </div>
                </div>
            )
        }
    }
}
export default SearchCard2;