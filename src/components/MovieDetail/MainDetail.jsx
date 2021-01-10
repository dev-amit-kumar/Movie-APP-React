import React, {useState} from 'react'
import '../../css/MainDetail.css'
const MainDetail = (props) => {
    const [videoSrc, changeSrc] = useState('')

    const fnum = (x) => {
        if(isNaN(x)) return x;
        else if(x < 9999) {
            return x;
        }
        else if(x < 1000000) {
            return (x/1000).toFixed(3) + "K";
        }
        else if( x < 10000000) {
            return (x/1000000).toFixed(3) + "M";
        }
        else if(x < 1000000000) {
            return (x/1000000).toFixed(3) + "M";
        }
        else if(x < 1000000000000) {
            return (x/1000000000).toFixed(3) + "B";
        }
        return "1T+";
    }

    const playVideo = (status) => {
        changeSrc(status ? props.data.videos.results[0].key : '')
    }

    return(
        <div className="movie-detail" style={{backgroundImage: `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${props.bg_path})`}}>
            <div className="overlay">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4 movie-image">
                            <img src={`https://image.tmdb.org/t/p/w500/${props.poster_path}`} alt="movie"/>
                        </div>
                        <div className="col-md-7 movie-text-data">
                            <h1>{props.title} ({props.year})</h1>
                            <h6><i>{props.tagline}</i></h6>
                            <h6 className="mt-2">
                                <i className="fa fa-calendar-o pr-2" aria-hidden="true"></i>
                                <span className="text-info" style={{fontWeight: '400'}}>
                                    {props.data.release_date}
                                </span>
                                <i className="fa fa-film pr-2 pl-4" aria-hidden="true"></i>
                                <span className="text-info" style={{fontWeight: '400'}}>
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
                                <i className="fa fa-clock-o pr-2 pl-4" aria-hidden="true"></i>
                                <span className="text-info" style={{fontWeight: '400'}}>
                                    &nbsp;{`${parseInt(props.data.runtime/60)}h ${props.data.runtime%60}min`}
                                </span>
                                <button type="button" onClick={() => playVideo(true)} className="play-btn pl-4" data-toggle="modal" data-target="#staticBackdrop">
                                    <i className="fa fa-play" aria-hidden="true"></i> Play Trailer
                                </button>
                            </h6>
                            <div className="d-flex flex-row flex-wrap mt-3">
                                <h5>
                                    Vote Score : 
                                    <span className="text-warning" style={{fontWeight: '400'}}>
                                        &nbsp;{props.data.vote_average}
                                    </span>
                                </h5> 
                                <h5 className="ml-4">
                                    Budget : 
                                    <span className="text-warning" style={{fontWeight: '400'}}>
                                        &nbsp;$ {fnum(props.data.budget)}
                                    </span>
                                </h5>
                                <h5 className="ml-4">
                                    Revenue : 
                                    <span className="text-warning" style={{fontWeight: '400'}}>
                                        &nbsp;$ {fnum(props.data.revenue)}
                                    </span>
                                </h5>
                            </div>
                            <h5 className="mt-2">Overview</h5>
                            <p>
                                {props.data.overview}
                            </p>
                            <div className="d-flex flex-wrap justify-content-between col-10" style={{paddingLeft: 0}}>
                                <div className="text-center col-6">
                                    <h5>Origin Country</h5>
                                    <h6 style={{fontWeight: '400', color: '#07B4E1'}}>
                                        {
                                            props.data.production_countries.map((item, idx) => {
                                                if(idx !== props.data.production_countries.length-1){
                                                    return(`${item['name']}, `)
                                                }
                                                else{
                                                    return(item['name'])
                                                }
                                            })
                                        }
                                    </h6>
                                </div>
                                <div className="text-center col-6">
                                    <h5>Language</h5>
                                    <h6 style={{fontWeight: '400', color: '#62C6B8'}}>
                                        {
                                            props.data.spoken_languages.map((item, idx) => {
                                                if(idx !== props.data.spoken_languages.length-1){
                                                    return(`${item['english_name']}, `)
                                                }
                                                else{
                                                    return(item['english_name'])
                                                }
                                            })
                                        }
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content" style={{backgroundColor: '#fff0'}}>
                        <div className="modal-body">
                            <button type="button" onClick={() => playVideo(false)} style={{float: 'right'}} className="close text-white" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <iframe title="youtube" style={{width: '100%', height:'85vh'}} 
                                src={`https://www.youtube-nocookie.com/embed/${videoSrc}`} frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen>
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MainDetail