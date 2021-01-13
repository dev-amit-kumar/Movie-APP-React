import  React from "react";
import { Link } from "react-router-dom";
const url="https://api.themoviedb.org/3/search/multi?api_key=911c65436dd290d171fc662603dac6b3&language=en-US";

class Header extends React.Component{
    fetchSearch=(e)=>{
        fetch(`${url}&query=${e.target.value}&page=1&include_adult=false`,{
            method:"GET"
        })
        .then((res)=>res.json())
        .then((data)=>this.props.SearchData(data.results))     

    }
    SearchHandler=(e)=>{
        console.log(e.target.value,"value")
    }
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">Navbar</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-div="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/movie/464052">Movie</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/person/12">Person</Link>
                    </li>
                    </ul>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
                    <form className="form-inline my-2 my-lg-0">
                        <input onChange={this.fetchSearch} className="form-control mr-sm-2" type="search" placeholder="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        )
    }
}

export default Header;