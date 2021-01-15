import { Link } from "react-router-dom"

const SignupForm=()=>{
    return(
        <div className="card setting_common_card">
            <h2 className="card-header">SignUp Form</h2>
            <div className="card-body">
                <form className="row">
                    <div className="col-12">
                        <h4>SignUp</h4>
                    </div>
                    <div className="form-group col-6">
                        <label>First Name</label>
                        <input className="form-control" name="fname"  type="text"/>
                    </div><div className="form-group col-6">
                        <label>Last Name</label>
                        <input className="form-control" name="lname"  type="text"/>
                    </div>
                    <div className="form-group col-12">
                        <label>Email id</label>
                        <input className="form-control" name="emailid"  type="email"/>
                    </div>
                    <div className="form-group col-12">
                        <label>Password</label>
                        <input className="form-control" name="fname" type="password"/>
                    </div>
                    <div className="form-group col-6">
                        <label>Phone Number</label>
                        <input className="form-control" name="number"  type="number"/>
                    </div>
                    <div className="form-group col-6">
                    <label>Gender</label>
                        <div>
                            <select className="btn btn-light">
                                <option>Male</option>
                                <option>Female</option>
                                <option>Others</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group col-12">
                        <button className="btn btn-danger">SignUp</button>
                    </div>
                    <div className="form-group col-6">
                        <Link>Already Have Account?</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default SignupForm;