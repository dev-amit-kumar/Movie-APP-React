import React from 'react'
import { connect } from 'react-redux'
import MovieCard from '../Common/MovieCard'
import {fetchKnownFor} from "../../redux/actions";
import LoadingSpinner from '../Common/LoadingSpinner'
import DataNotFound from '../Common/DataNotFound'

class KnownForMovie extends React.Component{
    componentDidMount(){
        this.props.fetchKnownFor(this.props.person_id)
    }

    render(){
        if(this.props.KnownFor){
            return(
                <div className="container-fluid mt-4">
                    {this.props.KnownFor.length>0 &&
                        <>
                            <h2 className="font-weight-bolder ml-4 heading_color">Known For Movie</h2>
                            <div className="row text-center">
                                    {this.props.KnownFor.map((movie, idx) => {
                                        return(<MovieCard data={movie} key={idx}/>)
                                    })}
                            </div>
                        </>
                    }
                </div>
            )
        } 
        else if(this.props.isLoadingKnownFor){
            return(
                <LoadingSpinner/>
            )
        }
        else{
            return(
                <DataNotFound/>
            )
        }
    }
}
const mapStateToProps = (state) => {
    return{
        KnownFor: state.Person.KnownFor,
        isLoadingKnownFor:state.Person.isLoadingKnownFor
    }
}
export default connect(mapStateToProps, {fetchKnownFor})(KnownForMovie);