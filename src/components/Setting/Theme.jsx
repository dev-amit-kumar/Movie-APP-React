import '../../css/Theme.css';
import colorList from '../../colors.json';
import Zoom from 'react-reveal/Zoom';
import { updateUserTheme } from '../../redux/actions';
import { connect } from 'react-redux';

const Theme = (props) => {
	const changeTheme = (color) => {
		if (props.user) {
			props.updateUserTheme(props.user, color);
		} else {
			document.body.style.setProperty('--primary', color);
			document.body.style.setProperty('--primary_text', color);
		}
	};
	return (
		<div className="card setting_common_card">
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
