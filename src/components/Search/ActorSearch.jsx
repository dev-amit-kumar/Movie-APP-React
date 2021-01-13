const ActorPage=(props)=>{
    const renderActor=(data)=>{
        return data.map((val)=>{
            return(
                <div>
                    <img src={`https://image.tmdb.org/t/p/w500/${val.profile_path}`} alt="actor"/>
                    <h5>{val.name}</h5>
                </div>
            )
        })
    }
    return(
        <div>
            {renderActor(props.ActorList)}
        </div>
    )
}
export default ActorPage;