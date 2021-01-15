import {withRouter, Link, NavLink} from "react-router-dom";
import SearchSuggestion from './SearchSuggestion';
import "../css/searchFunction.css";
import '../css/Header.css'
const url="https://api.themoviedb.org/3/search/multi?api_key=911c65436dd290d171fc662603dac6b3&language=en-US";
class Header extends React.Component{
    constructor(){
        super()
        this.state={
            key:"",
            suggestion: []
        }
    }
    handleChange=(data)=>{
        this.setState({key: data})
        fetch(`${url}/&query=${data}&page=1&include_adult=false`)
        .then(res => res.json())
        .then(res=> {this.setState({suggestion: res.results})})
    }
    redirect=(e)=>{
        this.props.history.push(`/search/${this.state.key}`)
    }
    
    render(){
          return(
              <nav className="navbar navbar-expand-lg navbar-dark sticky-top fixed-top">
                  <div className="d-flex flex-grow-1">
                      <Link to="/"><span className="navbar-brand"><img src="https://dl.dropboxusercontent.com/s/vx8n6h25qj5dgwn/logo.png?dl=0" alt="logo" width="55"/></span></Link>
                      <form className="mr-2 my-auto w-100 d-inline-block searchBox">
                          <div className="input-group">
                              <input type="search" id="myInput" onChange={(e) => this.handleChange(e.target.value)} className="form-control" placeholder="Search movie/actor" aria-label="Search movie/acto" aria-describedby="button-addon2"/>
                              <div className="input-group-append">
                                  <button onClick={this.redirect} className="btn btn-outline-light" type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>
                              </div>
                              <div className="searchResult">
                                  {this.state.suggestion && this.state.suggestion.map((suggestion, idx) => {
                                      return(<SearchSuggestion suggestionList={suggestion} key={idx}/>)
                                  })}
                              </div>
                          </div>
                      </form>
                        
                      <ul className="navbar-nav mr-auto mt-lg-0">
                          <li className="nav-item dropdown mt-1">
                              <button className="setting_btn" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                  <i className="fa fa-user-circle" aria-hidden="true"></i>
                              </button>
                              <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                                  <NavLink className="dropdown-item" to="/setting/profile" activeClassName="navlink_active">Profile Details</NavLink>
                                  <NavLink className="dropdown-item" to="/setting/theme" activeClassName="navlink_active">Change Theme</NavLink>
                                  <NavLink className="dropdown-item" to="/setting/history" activeClassName="navlink_active">View History</NavLink>
                                  <NavLink className="dropdown-item" to="/setting/wishlist" activeClassName="navlink_active">View Wishlist</NavLink>
                                  <NavLink className="dropdown-item logout_btn font-weight-bold" to="/setting/logout">Log out <i className="fa fa-sign-out" aria-hidden="true"></i></NavLink>
                              </div>
                          </li>
                      </ul>
                  </div>
              </nav>
          )
    }
    export default withRouter(Header);
}