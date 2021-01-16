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
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1"/>
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                        </div>
                    </div>
                </div>
                <div className="container register-form ">
                    <h2>Don't have an account?</h2>
                    <Link className="btn btn-danger" to="/auth/signup">Register</Link>
                </div>
            </div>
        </div>
    )
}
export default LoginForm;