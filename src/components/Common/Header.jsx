import {Link, NavLink, withRouter} from "react-router-dom";
import SearchBar from './SearchBar'
import '../../css/Header.css'
import {logoutUser} from '../../redux/actions'
import {connect} from 'react-redux'

const Header =(props) => {
    const handleLogout = () => {
        props.logoutUser()
        props.history.push("/")
    }
    return(
        <nav className="navbar navbar-expand-lg navbar-dark sticky-top fixed-top">
            <div className="d-flex flex-grow-1">
                <Link to="/"><span className="navbar-brand"><img src="https://dl.dropboxusercontent.com/s/vx8n6h25qj5dgwn/logo.png?dl=0" alt="logo" width="55"/></span></Link>
                <SearchBar/>
                <ul className="navbar-nav mr-auto mt-lg-0">
                    <li className="nav-item dropdown mt-1">
                        <button className="setting_btn" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fa fa-user-circle" aria-hidden="true"></i>
                        </button>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                            {props.user &&
                                <NavLink className="dropdown-item" to="/setting/profile" activeClassName="navlink_active">Profile Details</NavLink>
                            }
                            <NavLink className="dropdown-item" to="/setting/theme" activeClassName="navlink_active">Change Theme</NavLink>
                            <NavLink className="dropdown-item" to="/setting/history" activeClassName="navlink_active">View History</NavLink>
                            <NavLink className="dropdown-item" to="/setting/wishlist" activeClassName="navlink_active">View Wishlist</NavLink>
                            {props.user 
                                ? <button className="dropdown-item logout_btn font-weight-bold" onClick={handleLogout}>Log out <i className="fa fa-sign-out" aria-hidden="true"></i></button>
                                : <NavLink className="dropdown-item logout_btn font-weight-bold" to="/auth/login">Login/Signup <i className="fa fa-sign-in" aria-hidden="true"></i></NavLink>
                            }
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    return{
        user: state.UserAuth.user
    }
}

export default withRouter(connect(mapStateToProps, {logoutUser})(Header))