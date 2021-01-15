const SearchCard=(props)=>{
    const searchdata=(data) => {
        return( 
            data.map((val)=>{
                if(props.value==="1" && val.media_type==="movie"){
                    return(
                        <div className="card mb-4" style={{width: "18rem"}} key={val.id}>
                            <img className="card-img-top" src={`https://image.tmdb.org/t/p/w500${val.backdrop_path}`} alt="movie"/>
                            <div className="card-body">
                                <h5 className="card-title">{val.title}</h5>
                            </div>
                        </div>
                    )
                }
                else if (val.media_type==="person"){
                    return(
                        <div className="card mb-4" style={{width: "18rem"}} key={val.id}>
                            <img className="card-img-top" src={`https://image.tmdb.org/t/p/w500${val.profile_path}`} alt="actor"/>
                            <div className="card-body">
                                <h5 className="card-title">{val.name}</h5>
                            </div>
                        </div>
                    )
                }
                else{
                    return(<></>)
                }
            })
        )
    }
    return(
        <div className="container col-md-10 d-flex flex-row flex-wrap justify-content-between">
            {searchdata(props.list)}
        </div>
    )
}
export default SearchCard;