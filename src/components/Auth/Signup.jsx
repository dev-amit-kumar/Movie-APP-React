import { Link } from "react-router-dom"
import "../../css/Login.css"

const LoginForm=()=>{
    return(
        <div className="signup-form login-outer-container">
            <div className="mainConatiner">
                <div className="login-form">
                    <div className="signup-inner login-inner card">
                        <div className="card-header">
                            <h2>Create Account</h2>
                        </div>
                        <div className="card-body">
                        <form>
                            <div className="row">
                                <div className="form-group col-md-6 col-sm-6">
                                    <label htmlFor="exampleInputEmail1">Full Name</label>
                                    <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter email address" aria-describedby="emailHelp"/>
                                </div>
                                <div className="form-group col-md-6 col-sm-6">
                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email address" aria-describedby="emailHelp"/>
                                </div>
                                <div className="form-group col-md-6 col-sm-6">
                                    <label htmlFor="exampleInputPassword1">Password</label>
                                    <input type="password" className="form-control" placeholder="Enter password" id="exampleInputPassword1"/>
                                </div>
                                <div className="form-group col-md-6 col-sm-6">
                                    <label htmlFor="exampleInputPassword1">Repeat Password</label>
                                    <input type="password" className="form-control" placeholder="Repeat password" id="exampleInputPassword1"/>
                                </div>
                            </div>
                            <div className="form-group text-center">
                                <button type="submit" className="pl-5 pr-5 btn btn-primary">Create Account</button>
                            </div>
                            <hr/>
                            <div className="form-group">
                                <h5>
                                    <span className="heading_color">Social Signup </span>
                                    <i className="fa fa-facebook-official login-fb" aria-hidden="true"></i>
                                    <i className="fa fa-google-plus-square login-goggle" aria-hidden="true"></i>
                                </h5>
                            </div>
                            <div className="form-group register-option-mobile">
                                <hr/>
                                <h6>Already have an account <Link className="" to="/auth/login">Login</Link></h6>
                            </div>

                        </form>
                        </div>
                    </div>
                </div>
                <div className="container register-option">
                    <h2>Already have an account</h2>
                    <Link className="btn btn-danger" to="/auth/login">Login</Link>
                </div>
            </div>
        </div>
    )
}
export default LoginForm;