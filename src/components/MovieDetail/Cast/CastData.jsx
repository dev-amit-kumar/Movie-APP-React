import {Link} from 'react-router-dom'
const ReviewData = (props) => {
    return(
        <center>
            <Link to={`/person/${props.data.id}`} className="cast-name">
                <img src={`https://image.tmdb.org/t/p/w500${props.data.profile_path}`} alt="cast" width="100" height="100" className="rounded-circle"/>
                <small>{props.data.name}</small>
            </Link>
        </center>
    )
}
export default ReviewData