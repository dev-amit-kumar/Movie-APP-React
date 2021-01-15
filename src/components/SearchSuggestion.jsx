import {Link} from "react-router-dom";
const SearchSuggestion =(props) =>{{
    console.log(props)
    return(
        <div>
            <Link to={`/movie/${props.suggestionList.id}`}>{props.suggestionList.title}</Link>
        </div>
    )
}}
export default SearchSuggestion;