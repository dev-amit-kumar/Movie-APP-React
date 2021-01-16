import { NavLink } from 'react-router-dom'
import Fade from 'react-reveal/Fade';
import Theme from "./Theme";
import History from "./History";
import Profile from "./Profile";
import Wishlist from "./Wishlist";
import Logout from "./Logout";

import '../../css/Setting.css'
const Setting = (props) => {
    return(
        <div className="container-fluid setting">
            <div className="row">
                <Fade left>
                    <div className="col-12 col-md-2 hide_on_mobile">
                        <div className="card setting_card">
                            <div className="card-header">
                                <h5>Settings</h5>
                            </div>
                            <div className="card-body">
                                <p><NavLink to="/setting/profile" activeClassName="navlink_active">Profile Details</NavLink></p>
                                <p><NavLink to="/setting/theme" activeClassName="navlink_active">Change Theme</NavLink></p>
                                <p><NavLink to="/setting/history" activeClassName="navlink_active">View History</NavLink></p>
                                <p><NavLink to="/setting/wishlist" activeClassName="navlink_active">View Wishlist</NavLink></p>
                                <p><NavLink to="/setting/logout" activeClassName="navlink_active">Log out <i className="fa fa-sign-out" aria-hidden="true"></i></NavLink></p>
                            </div>
                        </div>
                    </div>
                </Fade>
                <div className="col-12 col-md-10">
                    {props.match.params.type === 'theme' && <Theme/>}
                    {props.match.params.type === 'history' && <History/>}
                    {props.match.params.type === 'profile' && <Profile/>}
                    {props.match.params.type === 'wishlist' && <Wishlist/>}
                    {props.match.params.type === 'logout' && <Logout/>}
                </div>
            </div>
        </div>
    )
}

export default Setting