import { Link } from "react-router-dom"
import "../../css/Signup.css"

const SignupForm=()=>{
    return(
        <div className="signup-outer-container">
            <div className="signupConatiner">
                <div className="signup-form">
                    <div className="signup-inner card">
                        <div className="card-header">
                            <h2>SIGNUP</h2>
                        </div>
                        <div className="card-body">
                        <form>
                        <div class="form-group">
                                <label for="exampleInputName1">Full Name</label>
                                <input type="text" class="form-control" id="exampleInputName1" aria-describedby="nameHelp"/>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
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
                <div className="container signin-form ">
                    <h2>Already have an account?</h2>
                    <Link className="btn btn-danger" to="/auth/login">Login</Link>
                </div>
            </div>
        </div>
    )
}
export default SignupForm;