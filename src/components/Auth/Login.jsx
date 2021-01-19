import { Link, Redirect } from 'react-router-dom';
import Zoom from 'react-reveal/Zoom';
import '../../css/Login.css';
import { connect } from 'react-redux';
import LoadingSpinner from '../Common/LoadingSpinner';
import { loginUser } from '../../redux/actions';
import React, { useState } from 'react';

const LoginForm = (props) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		props.loginUser(email, password);
	};

	if (!props.user) {
		return (
			<div className="login-outer-container">
				<div className="mainConatiner">
					<Zoom>
						<div className="login-form">
							<div className="login-inner card">
								<div className="card-header">
									<h2>LOGIN</h2>
								</div>
								<div className="card-body">
									<form onSubmit={handleSubmit}>
										<div className="form-group">
											<label htmlFor="exampleInputEmail1">
												Email address
											</label>
											<input
												type="email"
												onChange={(e) =>
													setEmail(e.target.value)
												}
												value={email}
												className="form-control"
												id="exampleInputEmail1"
												placeholder="Enter email address"
												aria-describedby="emailHelp"
											/>
										</div>
										<div className="form-group">
											<label htmlFor="exampleInputPassword1">
												Password
											</label>
											<input
												type="password"
												onChange={(e) =>
													setPassword(e.target.value)
												}
												value={password}
												className="form-control"
												placeholder="Enter password"
												id="exampleInputPassword1"
											/>
										</div>
										{props.loginError && (
											<small className="text-danger">
												{props.loginError.message}
											</small>
										)}
										<div className="form-group text-center">
											<button
												type="submit"
												className="pl-3 pr-3 btn btn-primary"
											>
												Login
											</button>
										</div>
										<hr />
										<div className="form-group">
											<h5>
												<span className="heading_color">
													Social Login{' '}
												</span>
												<i
													className="fa fa-facebook-official login-fb"
													aria-hidden="true"
												></i>
												<i
													className="fa fa-google-plus-square login-goggle"
													aria-hidden="true"
												></i>
											</h5>
										</div>
										<div className="form-group register-option-mobile">
											<hr />
											<h6>
												Don't have an account ?{' '}
												<Link
													className=""
													to="/auth/signup"
												>
													Register
												</Link>
											</h6>
										</div>
									</form>
								</div>
							</div>
						</div>
					</Zoom>
					<div className="container register-option">
						<h2>Don't have an account ? </h2>
						<Link className="btn btn-danger" to="/auth/signup">
							Register
						</Link>
					</div>
				</div>
			</div>
		);
	} else if (props.isLoadingUserAuth) {
		return <LoadingSpinner />;
	} else {
		return <Redirect to="/"></Redirect>;
	}
};
const mapStateToProps = (state) => {
	return {
		user: state.UserAuth.user,
		loginError: state.UserAuth.loginError,
		isLoadingUserAuth: state.UserAuth.isLoadingUserAuth,
	};
};

export default connect(mapStateToProps, { loginUser })(LoginForm);
