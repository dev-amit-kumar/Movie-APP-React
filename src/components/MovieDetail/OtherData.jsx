import '../../css/OtherData.css'
const OtherData = (props) => {
    console.log(props)
        return(
            <div className="other_data">
                <p><b>Original Title: </b>{props.original_title}</p>
                <p><b>Vote Count: </b>{props.vote_count}</p>
                <p><b>Popularity: </b>{props.popularity}</p>
                <p><b>Status: </b>{props.status}</p>
                <center>
                    <a target="_blank" href={`https://www.imdb.com/title/${props.imdb}`} className="btn btn-dark ml-2 mr-2 web-btn">IMDB <i class="fa fa-link" aria-hidden="true"></i> </a>
                    <a target="_blank" href={props.website} className="btn btn-dark ml-2 mr-2 web-btn">Website <i class="fa fa-imdb" aria-hidden="true"></i></a>
                </center>
            </div>
        )
}
export default OtherData