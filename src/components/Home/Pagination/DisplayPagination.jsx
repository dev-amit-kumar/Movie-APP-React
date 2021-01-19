import {connect} from "react-redux";
import Slider from 'react-slick';
import {fetchDiscoverMovieList,fetchFilterMovieList} from "../../../redux/actions";
const DisplayPagination=(props)=>{
    const dispatchFunction=(e)=>{
        if(props.type==="DISCOVER_MOVIE"){
            props.fetchDiscoverMovieList(props.parameters.discover_type,e.target.value)
        }
        else{
            props.fetchFilterMovieList(props.parameters.filter_query,e.target.value)
        }
    }
    const renderButton=(data)=>{
        return data.map((res)=>{
            return(
                <button value={res} onClick={dispatchFunction} className="btn btn-light">{res}</button>
            )
        })        
    }
    var settings = {
        cssEase: "linear",
        speed: 500,
        slidesToShow: 10,
        slidesToScroll: 10,
        arrows: true,
      }; 
    return(
        <div className="row">            
            <button value={1} onClick={dispatchFunction} className="btn btn-light col-1">First</button>
            <Slider className="col-8"  {...settings}>
            {renderButton(props.index)}
            </Slider>
            <button value={props.total_pages} onClick={dispatchFunction} className="ml-4 btn btn-light col-1">Last</button>
        </div>
    )
}
const mapStateToProps=(state)=>{
    return{
        total_pages:state.HomeMovie.total_pages,
        type:state.HomeMovie.type,
        parameters:state.HomeMovie.parameters
    }
}
export default connect(mapStateToProps,{fetchDiscoverMovieList,fetchFilterMovieList})(DisplayPagination);