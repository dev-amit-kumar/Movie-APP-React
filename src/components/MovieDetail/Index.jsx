import React from 'react';
import MainPage from './MainPage';
import { connect } from 'react-redux';
import { updateHistory } from '../../redux/actions';

const Index = (props) => {
	if (props.userDetail) {
		if (
			!props.userDetail.history.includes(parseInt(props.match.params.id))
		) {
			props.updateHistory(props.user, [
				...props.userDetail.history,
				parseInt(props.match.params.id),
			]);
		}
	}
	return (
		<React.Fragment key={props.match.params.id}>
			<MainPage movie_id={props.match.params.id} />
		</React.Fragment>
	);
};

const mapStateToProps = (state) => {
	return {
		user: state.UserAuth.user,
		userDetail: state.UserAuth.userDetail,
	};
};

export default connect(mapStateToProps, { updateHistory })(Index);
