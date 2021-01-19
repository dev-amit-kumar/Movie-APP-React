import DisplayPagination from "./DisplayPagination";
import { connect } from "react-redux";
const number = []
const Pagination=(props)=>{
    for(var i=1;i<=props.total_pages;i++){
        number.push(i)
    }  
    return(
        <div className="container col-9 col-sm-8 col-md-7 col-lg-5">
            <DisplayPagination index={number}/>
        </div>
    )
}
const mapStateToProps=(state)=>{
    return{
        total_pages:state.HomeMovie.total_pages
    }
}

export default connect(mapStateToProps)(Pagination);