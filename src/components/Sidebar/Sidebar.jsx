import React, { Component } from 'react'
import QuickFilter from "./Filter/QuickFilter";
import SortByType from "./Sort/SortByType";

class Sidebar extends Component {
    constructor(){
        super()
        this.state={
            MovieData:[]
        }
    }
    render() {
        console.log(this.state.MovieData,"heyy")
        return (
            <div>
                <div  className="row" >
                    <div className="col-6 col-md-12 mb-5">
                        <button className="btn btn-light" type="button" data-toggle="collapse" data-target="#filtername" aria-expanded="false" aria-controls="collapseExample">
                            FILTER
                        </button>
                        <div className="collapse" id="filtername">
                            <div className="card card-body">
                                <QuickFilter FilterData={(data)=>this.setState({MovieData:data})}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-12">
                        <button className="btn btn-light" type="button" data-toggle="collapse" data-target="#sortname" aria-expanded="false" aria-controls="collapseExample">
                            SORT
                        </button>
                        <div className="collapse" id="sortname">
                            <div className="card card-body">
                                <SortByType SortData={(data)=>this.setState({MovieData:data})}/>
                            </div>
                        </div>    
                    </div>
                </div>
            </div>
        )
    }
}

export default Sidebar;
