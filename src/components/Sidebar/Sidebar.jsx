import QuickFilter from "./Filter/QuickFilter";
import CustomFilter from "./Custom-Filter/CustomFilter";

const Sidebar=(props)=>{
    const transferToIndex=(data)=>{
        props.MovieData(data)
    }
    return (
        <div>
            <div  className="row" >
                <div className="col-6 col-md-12 mb-5">
                    <button className="btn btn-light" type="button" data-toggle="collapse" data-target="#filtername" aria-expanded="false" aria-controls="collapseExample">
                        QUICK FILTER
                    </button>
                    <div className="collapse" id="filtername">
                        <div className="card card-body">
                            <QuickFilter FilterData={(data)=>transferToIndex(data)}/>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-md-12">
                    <button className="btn btn-light" type="button" data-toggle="collapse" data-target="#sortname" aria-expanded="false" aria-controls="collapseExample">
                        CUSTOM FILTER
                    </button>
                    <div className="collapse" id="sortname">
                        <div className="card card-body">
                            <CustomFilter CustomData={(data)=>transferToIndex(data)}/>
                        </div>
                    </div>    
                </div>
            </div>
        </div>
    )
}

export default Sidebar;
