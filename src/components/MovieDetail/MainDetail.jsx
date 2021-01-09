import '../../css/MainDetail.css'
const MainDetail = (props) => {
    return(
        <div className="movie-detail" style={{backgroundImage: `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${props.bg_path})`}}>
            <div className="overlay">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4 movie-image">
                            <img src={`https://image.tmdb.org/t/p/w500/${props.poster_path}`}/>
                        </div>
                        <div className="col-md-8 movie-text-data">
                            <h1>{props.title} ({props.year})</h1>
                            <p>
                                <span><i class="fa fa-circle" aria-hidden="true"></i>{props.data.release_date}</span>
                                <span>
                                    <i class="fa fa-circle" aria-hidden="true"></i>
                                    {
                                        props.data.genres.map((item, idx) => {
                                            if(idx !== props.data.genres.length-1){
                                                return(`${item['name']}, `)
                                            }
                                            else{
                                                return(item['name'])
                                            }
                                        })
                                    }
                                </span>
                            </p>
                            <p>
                                Language: &nbsp;
                                {
                                    props.data.spoken_languages.map((item, idx) => {
                                        if(idx !== props.data.spoken_languages.length-1){
                                            return(`${item['name']}, `)
                                        }
                                        else{
                                            return(item['name'])
                                        }
                                    })
                                }
                            </p>
                            <p>
                                Run time: {`${parseInt(props.data.runtime/60)}h ${props.data.runtime%60}min`}
                            </p>
                            <h6>{props.tagline}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MainDetail