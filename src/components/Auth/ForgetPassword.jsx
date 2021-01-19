const ForgetPassword = () => {
	return (
		<div className="card setting_common_card">
			<h2 className="card-header">Forget Password Form</h2>
			<div className="card-body">
				<form className="row">
					<div className="col-12">
						<h4>Forget Password</h4>
					</div>
					<div className="form-group col-12">
						<label>OTP</label>
						<input
							className="form-control"
							name="otp"
							type="number"
						/>
					</div>
					<div className="form-group col-12">
						<label>Password</label>
						<input
							className="form-control"
							name="password"
							type="password"
						/>
					</div>
					<div className="form-group col-12">
						<label>Confirm Password</label>
						<input
							className="form-control"
							name="cpassword"
							type="password"
						/>
					</div>
					<div className="form-group col-6">
						<button className="btn btn-primary">Confirm</button>
					</div>
				</form>
			</div>
		</div>
	);
};
export default ForgetPassword;
