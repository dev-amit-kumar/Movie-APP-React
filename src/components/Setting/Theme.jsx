import '../../css/Theme.css';
import colorList from '../../colors.json';
import Zoom from 'react-reveal/Zoom';
import { updateUserTheme } from '../../redux/actions';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Theme = (props) => {
	const changeTheme = (color) => {
		if (props.user) {
			props.updateUserTheme(props.user, color);
		} else {
			document.body.style.setProperty('--primary', color);
			document.body.style.setProperty('--primary_text', color);
		}
		toast.dark('Theme changed', {
			position: 'bottom-left',
			autoClose: 4000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
	};
	return (
		<div className="card setting_common_card mb-5">
			<ToastContainer
				position="bottom-left"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
			<h2 className="card-header">Select Theme Color</h2>
			<div className="card-body theme_container">
				<Zoom>
					{colorList.colors.map((color, idx) => {
						return (
							<button
								key={idx}
								onClick={() => changeTheme(color)}
								style={{ backgroundColor: color }}
							></button>
						);
					})}
				</Zoom>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		user: state.UserAuth.user,
		userDetail: state.UserAuth.userDetail,
	};
};

export default connect(mapStateToProps, { updateUserTheme })(Theme);
