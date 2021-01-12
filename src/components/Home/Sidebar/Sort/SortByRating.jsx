const SortByRating=(props)=>{
    const sendRate=(e)=>{
        props.Rating(e.target.value)
    }
    return(
        <div>
            <h6>rating</h6>
            <input onClick={sendRate} type="number"/>
        </div>
    )
}
export default SortByRating;