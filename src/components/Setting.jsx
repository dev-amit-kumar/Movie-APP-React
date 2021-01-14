import { Link } from 'react-router-dom'
import '../css/Setting.css'
const Setting = (props) => {
    return(
        <div className="container-fluid setting">
            <div className="row">
                <div className="col-2">
                    <div className="card setting_card">
                        <div className="card-header">
                            <h5>Settings</h5>
                        </div>
                        <div className="card-body">
                            <p>
                                <Link to="/setting/theme">Color Theme</Link>
                            </p>
                            <p>
                                <Link to="/setting/history">History</Link>
                            </p>
                            <p>
                                <Link to="/setting/profile">Profile</Link>
                            </p>
                            <p>
                                <Link to="/setting/wishlist">Wishlist</Link>
                            </p>
                            <p>
                                <Link to="/setting/logout">Log out</Link>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-10 bg-dark">
                    {props.match.params.type === 'theme' &&
                        <div>
                            <h1>Change theme</h1>
                        </div>
                    }
                    {props.match.params.type === 'history' &&
                        <div>
                            <h1>Change history</h1>
                        </div>
                    }
                    {props.match.params.type === 'profile' &&
                        <div>
                            <h1>Change profile</h1>
                        </div>
                    }
                    {props.match.params.type === 'wishlist' &&
                        <div>
                            <h1>Change wishlist</h1>
                        </div>
                    }
                </div>
            </div>

        </div>
    )
}

export default Setting