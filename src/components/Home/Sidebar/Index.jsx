import DiscoverMovie from "./DiscoverMovie";
import SortFilter from "./SortFilter";

const Sidebar=(props)=>{
    const transferToIndex=(data)=>{
        props.MovieData(data)
    }
    return (
        <div className="row" >
            <div className="col-6 col-md-12 mb-4 mt-3">
                <DiscoverMovie FilterData={(data)=>transferToIndex(data)}/>
            </div>
            <div className="col-6 col-md-12">
                <SortFilter CustomData={(data)=>transferToIndex(data)}/>
            </div>
        </div>
    )
}

export default Sidebar;