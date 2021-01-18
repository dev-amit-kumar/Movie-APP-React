import DiscoverMovie from "./DiscoverMovie";
import SortFilter from "./SortFilter";

const Sidebar=(props)=>{
    const sendto=(data)=>{
        props.send(data)
    }
    return (
        <div className="row">
            <div className="col-12 col-md-12 mt-3">
                <DiscoverMovie send={(data)=>sendto(data)}/>
            </div>
            <div className="col-12 col-md-12 mt-3">
                <SortFilter send={(data)=>sendto(data)}/>
            </div>
        </div>
    )
}

export default Sidebar;