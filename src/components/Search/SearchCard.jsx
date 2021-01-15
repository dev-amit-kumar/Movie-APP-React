import MovieCard from '../MovieCard'
import PersonCard from '../PersonCard'
const SearchCard=(props)=>{
    const searchdata=(data) => {
        return( 
            data.map((val, idx)=>{
                if(props.type==="movie" && val.media_type==="movie"){
                    return(
                        <MovieCard data={val} show_wishlist={true} key={idx}/>
                    )
                }
                else if (props.type==="person" && val.media_type==="person"){
                    return(
                        <PersonCard data={val} key={idx} />
                    )
                }
                else{
                    return(<span key={idx}></span>)
                }
            })
        )
    }
    return(
        <div className="container col-md-11 d-flex flex-row flex-wrap">
            {searchdata(props.list)}
        </div>
    )
}
export default SearchCard;