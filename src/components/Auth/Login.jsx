import { Link } from "react-router-dom"
import "../../css/Login.css"

const LoginForm=()=>{
    return(
        <div className="container mainConatiner">
            <div className="login-form" >
				<h2>LOGIN</h2>
				<input className="form-control" type="text" placeholder="Email"/>
				<input className="form-control" type="password" placeholder="Password"/>
				<button className="btn btn-primary">Login</button>
			</div>
            <div className="container register-form ">
                <h2>Don't have an account?</h2>
                <button className="btn btn-danger">Register</button>
            </div>
        </div>
    )
}
export default LoginForm;