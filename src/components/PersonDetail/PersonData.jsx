import '../../css/PersonData.css'
const PersonData = (props)=>{
    const renderData=(data)=>{
        const img_src = () => {
            if(props.data.profile_path === null){
                return 'https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png'
            }
            else{
                return `https://image.tmdb.org/t/p/w500${props.data.profile_path}`
            }
        }
        if(data){
            return(
                <div className="container-fluid person-data">
                    <div className="row">
                        <div className="card-image col-md-4 col-12 vh_center align-items-center">
                            <img src={img_src()} alt="actor"/>
                        </div>
                        {/* <div className="col-md-1"></div> */}
                        <div className="col-md-8 person-text col-12 vh_center">
                            <h1>{data.name}</h1>
                            <div className="d-flex flex-row flex-wrap align-items-center">
                                <h6 className="mr-2 text-warning">{data.birthday}</h6>
                                <h6 className="mr-2 text-warning">{data.gender===2 ? 'Male': 'Female'}</h6>
                                <h6 className="mr-2 text-warning">{data.known_for_department}</h6>
                                <h6 className="mr-2 text-warning">{data.popularity}%</h6>
                            </div>
                            <b>BIOGRAPHY: </b>
                            <p>{data.biography ? data.biography : <i>No biography available</i>}</p>
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
                                    <a rel="noopener noreferrer" 
                                        target="_blank" 
                                        href={`https://www.imdb.com/name/${data.imdb_id}`} 
                                        className="btn btn-dark ml-2 mr-2 web-btn">IMDB 
                                        <i className="fa fa-imdb" aria-hidden="true"></i> 
                                    </a>
                                }
                                {data.homepage && 
                                    <a rel="noopener noreferrer" 
                                        target="_blank" 
                                        href={data.homepage} 
                                        className="btn btn-dark ml-2 mr-2 web-btn">Website 
                                        <i className="fa fa-link" aria-hidden="true"></i>
                                    </a>
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