const SortByType=(props)=>{
    const SendSort=(e)=>{
       props.Type(e.target.value)
    }
    return (
        <div>
            <h6>ByType</h6>
            <select className="btn btn-light" onChange={SendSort}>
                <option value="popularity.desc">popularity.desc</option>
                <option value="popularity.asc">popularity.asc</option>
                <option value="release_date.desc">release_date.desc</option>
                <option value="release_date.asc">release_date.asc</option>
                <option value="vote_average.asc">vote_average.asc</option>
                <option value="vote_average.desc">vote_average.desc</option>
            </select>
        </div>
    )
}

export default SortByType;
