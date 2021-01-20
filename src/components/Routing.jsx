import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home/Index';
import MovieDetail from './MovieDetail/Index';
import PersonDetail from './PersonDetail/Index';
import Header from './Common/Header';
import Footer from './Common/Footer';
import SearchPage from './Search/Index';
import Setting from './Setting/Index';
import ForgetPassword from './Auth/ForgetPassword';
import Login from './Auth/Login';
import SignUp from './Auth/Signup';
import HomePage from './Home/HomePage-Components/HomePage';
import { auth } from '../redux/Firebase';
import { connect } from 'react-redux';
import { setUser, getUserData, removeUserData } from '../redux/actions';
import PageNotFound from './Common/PageNotFound';

class Routing extends React.Component {
	componentDidMount() {
		auth.onAuthStateChanged((user) => {
			if (user) {
				this.props.setUser(user);
				this.props.getUserData(user);
			} else {
				this.props.setUser(null);
				this.props.removeUserData();
			}
		});
	}
	render() {
		return (
			<BrowserRouter>
				<Header />
				<Switch>
					<Route exact path="/movie_list" component={Home} />
					<Route exact path="/movie/:id" component={MovieDetail} />
					<Route exact path="/person/:id" component={PersonDetail} />
					<Route path="/search/:str" component={SearchPage} />
					<Route exact path="/setting/:type" component={Setting} />
					<Route exact path="/auth/login" component={Login} />
					<Route exact path="/auth/signup" component={SignUp} />
					<Route path="/" component={HomePage} />
					<Route
						exact
						path="/auth/forget-password"
						component={ForgetPassword}
					/>
					<Route component={PageNotFound} />
				</Switch>
				<Footer />
			</BrowserRouter>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		user: state.UserAuth.user,
		userDetail: state.UserAuth.userDetail,
	};
};

export default connect(mapStateToProps, {
	setUser,
	getUserData,
	removeUserData,
})(Routing);
