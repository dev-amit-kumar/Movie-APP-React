import {withRouter} from "react-router-dom";
import { connect } from 'react-redux';
import {emptySearchSuggestion} from '../../redux/actions'

const SearchSuggestion = (props) => {

    const redirectMovie = (e) =>{
        props.emptySearchSuggestion()
        props.history.push(`/movie/${e.target.id}`)
    }
    if(props.searchSuggestion){
        return(
            <div className="searchResult" id="match-list">
                {props.searchSuggestion.results.map((suggestion, idx) => {
                    return(<div onClick={redirectMovie} id={suggestion.id} key={idx}>{suggestion.title}</div>)
                })}
            </div>
        )
    }
    else if(props.isLoadingSearchSuggestion){
        return(
            <div className="spinner-border" style={{width: '3rem', height: '3rem'}} role="status">
                <span className="sr-only">Loading...</span>
            </div>
        )
    }
    else{
        return(
            <></>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        searchSuggestion: state.Search.searchSuggestion,
        isLoadingSearchSuggestion: state.Search.isLoadingSearchSuggestion
    }
}

export default withRouter(connect(mapStateToProps, {emptySearchSuggestion})(SearchSuggestion));
