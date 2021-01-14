import '../../css/OtherData.css'
const OtherData = (props) => {
    return(
        <div className="other_data">
            <p><b className="heading_color">Original Title: </b>{props.original_title}</p>
            <p><b className="heading_color">Vote Count: </b>{props.vote_count}</p>
            <p><b className="heading_color">Popularity: </b>{props.popularity}</p>
            <p><b className="heading_color">Status: </b>{props.status}</p>
            <center>
                <a rel="noopener noreferrer" target="_blank" href={`https://www.imdb.com/title/${props.imdb}`} className="btn btn-warning ml-2 mr-2 font-bold font-weight-bold">IMDB <i className="fa fa-imdb" aria-hidden="true"></i> </a>
                <a rel="noopener noreferrer" target="_blank" href={props.website} className="btn btn-danger ml-2 mr-2 font-weight-bold">Website <i className="fa fa-link" aria-hidden="true"></i></a>
            </center>
        </div>
    )
}
export default OtherData