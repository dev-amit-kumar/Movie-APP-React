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
                        <div className="col-md-1"></div>
                        <div className="col-md-8 person-text">
                            <h1>{data.name}</h1>
                            <div className="d-flex flex-row flex-wrap align-items-center">
                                <h6 className="mr-2 text-warning">{data.birthday}</h6>
                                <h6 className="mr-2 text-warning">{data.gender===2 ? 'Male': 'Female'}</h6>
                                <h6 className="mr-2 text-warning">{data.known_for_department}</h6>
                                <h6 className="mr-2 text-warning">{data.popularity}%</h6>
                            </div>
                            <p>{data.biography}</p>
                            {(data.also_known_as && data.also_known_as.length>1) &&
                                <>
                                    <b>ALSO KNOWN AS: </b>
                                    {data.also_known_as.map((item, idx) => {
                                        if(idx !== data.also_known_as.length-1){
                                            return(`${item}, `)
                                        }
                                        else{
                                            return(item)
                                        }
                                    })}
                                </>
                            }
                            <div>
                                {data.imdb_id && 
                                    <a rel="noopener noreferrer" target="_blank" href={`https://www.imdb.com/name/${data.imdb_id}`} className="btn btn-dark ml-2 mr-2 web-btn">IMDB <i className="fa fa-imdb" aria-hidden="true"></i> </a>
                                }
                                {data.homepage && 
                                    <a rel="noopener noreferrer" target="_blank" href={data.homepage} className="btn btn-dark ml-2 mr-2 web-btn">Website <i className="fa fa-link" aria-hidden="true"></i></a>
                                }
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