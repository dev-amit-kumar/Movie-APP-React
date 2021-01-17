import { Link } from "react-router-dom"
import "../../css/Login.css"

const LoginForm=()=>{
    return(
        <div className="login-outer-container">
            <div className="mainConatiner">
                <div className="login-form">
                    <div className="login-inner card">
                        <div className="card-header">
                            <h2>LOGIN</h2>
                        </div>
                        <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email address" aria-describedby="emailHelp"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" placeholder="Enter password" id="exampleInputPassword1"/>
                            </div>
                            <div className="form-group text-center">
                                <button type="submit" className="pl-5 pr-5 btn btn-primary">Login</button>
                            </div>
                            <hr/>
                            <div className="form-group">
                                <h5>
                                    <span className="heading_color">Social Login </span>
                                    <i className="fa fa-facebook-official login-fb" aria-hidden="true"></i>
                                    <i className="fa fa-google-plus-square login-goggle" aria-hidden="true"></i>
                                </h5>
                            </div>
                            <div className="form-group register-option-mobile">
                                <hr/>
                                <h6>Don't have an account? <Link className="" to="/auth/signup">Register</Link></h6>
                            </div>

                        </form>
                        </div>
                    </div>
                </div>
                <div className="container register-option">
                    <h2>Don't have an account?</h2>
                    <Link className="btn btn-danger" to="/auth/signup">Register</Link>
                </div>
            </div>
        </div>
    )
}
export default LoginForm;