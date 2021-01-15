import { Link } from "react-router-dom"

const LoginForm=()=>{
    return(
        <div className="card setting_common_card">
            <h2 className="card-header">Login Form</h2>
            <div className="card-body">
                <form className="row">
                    <div className="col-12">
                        <h4>Login</h4>
                    </div>
                    <div className="form-group col-6">
                        <label>Email id</label>
                        <input className="form-control" name="emailid"  type="email"/>
                    </div>
                    <div className="form-group col-6">
                        <label>Password</label>
                        <input className="form-control" name="fname" type="password"/>
                    </div>
                    <div className="form-group col-12">
                        <Link>Forget Password?</Link>
                    </div>
                    <div className="form-group col-6">
                        <button className="btn btn-success">Login</button>
                    </div>
                    <div className="form-group col-6">
                        <Link>Don't Have Account?</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default LoginForm;