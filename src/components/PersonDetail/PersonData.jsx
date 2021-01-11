import '../../css/PersonData.css'
const PersonData = (props)=>{
    const renderData=(data)=>{
        if(data){
            return(
                <div className="container-fluid person-data">
                    <div className="row">
                        <div className="card-image col-md-3">
                            <img src={`https://image.tmdb.org/t/p/w500${data.profile_path}`} alt="actor"/>
                        </div>
                        <div className="col-md-9">
                            <h1>{data.name}</h1>
                            <p>{data.biography}</p>
                            <h2>PERSONAL INFO</h2>
                            <div className="d-flex flex-row flex-wrap justify-content-between">
                                <span><h5>BIRTHDAY</h5>{data.birthday}</span>
                                <span><h5>GENDER</h5>{data.gender}</span>
                                <span><h5>KNOWN FOR</h5>{data.known_for_department}</span>
                                <span><h5>PLACE OF BIRTH</h5>{data.place_of_birth}</span>
                                <span><h5>POPULARITY</h5>{data.popularity}</span>
                                <span><h5>ALSO KNOWN AS</h5>{data.also_known_as}</span>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
    return(
        <div>
            {renderData(props.data)} 
        </div>
    )
}
export default PersonData;