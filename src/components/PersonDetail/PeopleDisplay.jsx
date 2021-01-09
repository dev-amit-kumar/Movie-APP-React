const PeopleDisplay = (props)=>{
    const renderList=(mList)=>{
        if(mList){
            console.log(mList)
                return(
                    <div>
                        <div className=" container d-flex flex-row justify-content-between">
                            <img className="p-4" src={`https://image.tmdb.org/t/p/original${mList.profile_path}`}/>
                            <div className="d-flex flex-column">
                                <h1>{mList.name}</h1>
                                <p>{mList.biography}</p>
                                <h2>PERSONAL INFO</h2>
                                <div className="d-flex flex-row flex-wrap justify-content-between">
                                    <span><h5>BIRTHDAY</h5>{mList.birthday}</span>
                                    <span><h5>GENDER</h5>{mList.gender}</span>
                                    <span><h5>KNOWN FOR</h5>{mList.known_for_department}</span>
                                    <span><h5>PLACE OF BIRTH</h5>{mList.place_of_birth}</span>
                                    <span><h5>POPULARITY</h5>{mList.popularity}</span>
                                    <span><h5>ALSO KNOWN AS</h5>{mList.also_known_as}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )
        
        
    }
}
    return(
        <div>
         {renderList(props.mList)} 
        </div>
    )
}
export default PeopleDisplay;