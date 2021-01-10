const ReviewData = (props) => {
    return(
        <div>
            <h6>Author: {props.data.author}</h6>
            <small>{props.data.created_at}</small>
            <img src={`https://image.tmdb.org/t/p/w500${props.data.author_details.avatar_path}`} alt="review_person" width="50"/>
            <p>{props.data.author_details.rating}</p>
            <p style={{height: '150px', overflowY: 'scroll'}}>{props.data.content}</p>
        </div>
    )
}
export default ReviewData