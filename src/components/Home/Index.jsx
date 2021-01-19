import React, { useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import MovieCard from '../Common/MovieCard';
import Sidebar from './Sidebar/Index';
import { fetchDiscoverMovieList } from '../../redux/actions';
import { connect } from 'react-redux';
import LoadingSpinner from '../Common/LoadingSpinner';
import DataNotFound from '../Common/DataNotFound';

const Home = (props) => {
	useEffect(() => {
		props.fetchDiscoverMovieList('popular', 1);
	}, []);
	const renderMovieList = ({ movieList, isLoadingMovieList }) => {
		if (movieList) {
			if (movieList.length > 0) {
				return movieList.map((movie, idx) => {
					return (
						<MovieCard
							data={movie}
							key={idx}
							height_s="250px"
							show_wishlist={true}
						/>
					);
				});
			} else {
				return (
					<div>
						<h1>No movies found for this filter options</h1>
					</div>
				);
			}
		} else if (isLoadingMovieList) {
			return <LoadingSpinner />;
		} else {
			return <DataNotFound />;
		}
	};

	return (
		<div className="container-fluid">
			<div className="row">
				<Fade left>
					<div className="col-md-2 col-12" id="accordion">
						<Sidebar />
					</div>
				</Fade>
				<div className="col-md-10 col-12 container d-flex flex-row flex-wrap justify-content-between">
					{renderMovieList(props)}
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		movieList: state.HomeMovie.movieList,
		isLoadingMovieList: state.HomeMovie.isLoadingMovieList,
	};
};

export default connect(mapStateToProps, { fetchDiscoverMovieList })(Home);
