import { Link } from "react-router-dom";
import '../css/Header.css'

const Header = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark sticky-top fixed-top">
            <div className="d-flex flex-grow-1">
                <Link to="/"><span className="navbar-brand">Home</span></Link>
                <form className="mr-2 my-auto w-100 d-inline-block">
                    <div className="input-group">
                        <input type="search" className="form-control" placeholder="Search movie/actor" aria-label="Search movie/acto" aria-describedby="button-addon2"/>
                        <div className="input-group-append">
                            <button className="btn btn-outline-light" type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>
                        </div>
                    </div>
                </form>
                <ul className="navbar-nav mr-auto mt-lg-0">
                    <li className="nav-item dropdown">
                        <button className="setting_btn" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fa fa-user-circle" aria-hidden="true"></i>
                        </button>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                            <a className="dropdown-item" href="/">Change theme</a>
                            <a className="dropdown-item" href="/">Profile</a>
                            <a className="dropdown-item" href="/">View wishlist</a>
                            <a className="dropdown-item" href="/">View history</a>
                            <a className="dropdown-item text-danger font-weight-bold" href="/">Logout <i className="fa fa-sign-out" aria-hidden="true"></i></a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;