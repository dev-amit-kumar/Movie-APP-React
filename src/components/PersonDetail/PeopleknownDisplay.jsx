const PeopleKnownDisplay=(props)=>{
    const renderKnown=(known)=>{
        console.log(known)
        if(known){
            console.log(known,"yess")
            return known.map((val)=>{
                return(
                        <div className="card mb-4" style={{width: "18rem"}}>
                                <img className="card-img-top" src={`https://image.tmdb.org/t/p/original${val.poster_path}`} alt="Card image cap"/>
                                <div className="card-body">
                                    <h5 className="card-title">{val.original_title}</h5>
                                    <p className="card-text">{val.overview}</p>
                                </div>
                        </div>
                )
            })
            
        }
    }
    return(
        <div className="container  my-5 px-4 py-4">
        <h1 >KNOWN FOR</h1>
        <div className="d-flex flex-row flex-wrap justify-content-between my-4">{renderKnown(props.mknown)}</div>
        </div>
    )
}
export default PeopleKnownDisplay;