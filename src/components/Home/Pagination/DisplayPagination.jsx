import {connect} from "react-redux";
import Paagination from 'react-paginating';
import {fetchDiscoverMovieList,fetchFilterMovieList} from "../../../redux/actions";
const DisplayPagination=(props)=>{
    const handlePageChange=(data)=>{
        if(props.type==="DISCOVER_MOVIE"){
            props.fetchDiscoverMovieList(props.parameters.discover_type,data)
        }
        else{
            props.fetchFilterMovieList(props.parameters.filter_query,data)
        }
    }
    return(
        <div>            
             <Paagination
          className="red"
          total={props.total_pages}
          limit={1}
          pageCount={10}
          currentPage={props.curr_page}
        >
          {({
            pages,
            currentPage,
            hasNextPage,
            hasPreviousPage,
            previousPage,
            nextPage,
            totalPages,
            getPageItemProps
          }) => (
            <div>
              <button className="btn btn-light border border-primary"
                {...getPageItemProps({
                  pageValue: 1,
                  onPageChange: handlePageChange
                })}
              >
                first
              </button>
 
              {hasPreviousPage && (
                <button className="btn btn-light border border-primary"
                  {...getPageItemProps({
                    pageValue: previousPage,
                    onPageChange: handlePageChange
                  })}
                >
                  {'<'}
                </button>
              )}
 
              {pages.map(page => {
                let activePage = null;
                if (currentPage === page) {
                  activePage = { backgroundColor: '#388f2b',color:"#0237f7" };
                }
                return (
                  <button className="btn btn-light border border-primary"
                    {...getPageItemProps({
                      pageValue: page,
                      key: page,
                      style: activePage,
                      onPageChange: handlePageChange
                    })}
                  >
                    {page}
                  </button>
                );
              })}
 
              {hasNextPage && (
                <button className="btn btn-light border border-primary"
                  {...getPageItemProps({
                    pageValue: nextPage,
                    onPageChange: handlePageChange
                  })}
                >
                  {'>'}
                </button>
              )}
 
              <button className="btn btn-light border border-primary"
                {...getPageItemProps({
                  pageValue: totalPages,
                  onPageChange: handlePageChange
                })}
              >
                last
              </button>
            </div>
          )}
        </Paagination>
        </div>
    )
}
const mapStateToProps=(state)=>{
    return{
        total_pages:state.HomeMovie.total_pages,
        curr_page:state.HomeMovie.curr_page,
        type:state.HomeMovie.type,
        parameters:state.HomeMovie.parameters
    }
}
export default connect(mapStateToProps,{fetchDiscoverMovieList,fetchFilterMovieList})(DisplayPagination);