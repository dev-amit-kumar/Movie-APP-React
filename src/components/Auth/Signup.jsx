import React, {useState} from 'react'
import { Link, Redirect } from "react-router-dom"
import Zoom from 'react-reveal/Zoom';
import "../../css/Login.css"
import {registerUser} from '../../redux/actions'
import { connect } from 'react-redux';

const SignupForm=(props)=>{
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if(password === repeatPassword){
            props.registerUser(name, email, password)
            props.history.push('/')
        }
        else{
            alert("Password should match repeat password")
        }
    };
    if(!props.user){
        return(
            <div className="signup-form login-outer-container">
                <div className="mainConatiner">
                    <Zoom>
                        <div className="login-form">
                            <div className="signup-inner login-inner card">
                                <div className="card-header">
                                    <h2>Create Account</h2>
                                </div>
                                <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="form-group col-md-6 col-sm-6">
                                            <label htmlFor="full_name">Full Name</label>
                                            <input type="text" onChange={(e) => setName(e.target.value)} value={name} className="form-control" id="full_name" placeholder="Enter email address" aria-describedby="emailHelp"/>
                                        </div>
                                        <div className="form-group col-md-6 col-sm-6">
                                            <label htmlFor="email_id">Email address</label>
                                            <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} className="form-control" id="email_id" placeholder="Enter email address" aria-describedby="emailHelp"/>
                                        </div>
                                        <div className="form-group col-md-6 col-sm-6">
                                            <label htmlFor="password">Password</label>
                                            <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} className="form-control" placeholder="Enter password" id="password"/>
                                        </div>
                                        <div className="form-group col-md-6 col-sm-6">
                                            <label htmlFor="repeat_password">Repeat Password</label>
                                            <input type="password" onChange={(e) => setRepeatPassword(e.target.value)} value={repeatPassword} className="form-control" placeholder="Repeat password" id="repeat_password"/>
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
                                        <h6>Already have an account? <Link className="" to="/auth/login">Login</Link></h6>
                                    </div>
                                </form>
                                </div>
                            </div>
                        </div>
                    </Zoom>
                    <div className="container register-option">
                        <h2>Already have an account</h2>
                        <Link className="btn btn-danger" to="/auth/login">Login</Link>
                    </div>
                </div>
            </div>
        )
    }
    else{
        return(
            <Redirect to="/"></Redirect>
        )
    }
}
const mapStateToProps = (state) => {
    return{
        user: state.UserAuth.user,
    }
}
export default connect(mapStateToProps, {registerUser})(SignupForm);