import React from 'react';
import MovieCard from '../Common/MovieCard';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { apiKey } from '../../redux/config';
const api_key = `api_key=${apiKey}`;
const base_url = 'https://api.themoviedb.org/3/movie/';

class Wishlist extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			list: [],
		};
	}
	componentDidMount() {
		if (this.props.user) {
			this.fetchMovieDataList(this.props.userDetail.wishlist);
		}
	}
	fetchMovieDataList = (list) => {
		list.forEach((id) => {
			axios
				.get(`${base_url}${id}?${api_key}&language=en-US`)
				.then((data) =>
					this.setState({ list: [...this.state.list, data.data] }),
				);
		});
	};
	render() {
		return (
			<div className="card setting_common_card mb-5">
				<h2 className="card-header">Wishlist</h2>
				{this.props.user ? (
					this.state.list.length > 0 ? (
						<div
							className="card-body d-flex flex-row flex-wrap justify-content-start"
							style={{ padding: 0 }}
						>
							{this.state.list.map((movie) => {
								return (
									<MovieCard
										key={movie.id}
										data={movie}
										show_wishlist={true}
										height_s="250px"
									/>
								);
							})}
						</div>
					) : (
						<div
							className="card-body d-flex flex-row flex-wrap justify-content-center align-items-center"
							style={{ padding: 0, height: '200px' }}
						>
							<h1>No movie saved in wishlist</h1>
						</div>
					)
				) : (
					<div
						className="card-body d-flex flex-column justify-content-center align-items-center"
						style={{ padding: 0, height: '200px' }}
					>
						<h2 className="text-center">
							You need to Login/Signup first to see your history
						</h2>
						<Link to="/auth/login" className="mt-4">
							<h4>Click to Login/Signup</h4>
						</Link>
					</div>
				)}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		user: state.UserAuth.user,
		userDetail: state.UserAuth.userDetail,
	};
};

export default connect(mapStateToProps)(Wishlist);
