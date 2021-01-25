import React, { useEffect } from 'react';
import MovieCard from '../Common/MovieCard';
import { connect } from 'react-redux';
import LoadingSpinner from '../Common/LoadingSpinner';
import DataNotFound from '../Common/DataNotFound';
import { fetchRecMoviesList } from '../../redux/actions';
import NoMovies from '../Common/NoMovies';

const RecommendedMovie = ({
	movie_id,
	fetchRecMoviesList,
	recMoviesList,
	isLoadingRecMoviesList,
}) => {
	useEffect(() => {
		fetchRecMoviesList(movie_id);
	}, []);

	const renderData = (data) => {
		if (data.total_results) {
			return (
				<div className="row text-center">
					{data.results.map((movie, idx) => {
						return (
							<MovieCard
								data={movie}
								key={idx}
								show_wishlist={true}
							/>
						);
					})}
				</div>
			);
		} else {
			return (
				<h1 className="text-center">
					<i>No Recommended Movies available</i>
				</h1>
			);
		}
	};
	if (recMoviesList) {
		return (
			<div className="container-fluid mt-4">
				<h2 className="font-weight-bolder ml-4 heading_color">
					Recommended Movie
				</h2>
				{renderData(recMoviesList)}
			</div>
		);
	} else if (isLoadingRecMoviesList) {
		return <LoadingSpinner />;
	} else {
		return <DataNotFound />;
	}
};

const mapStateToProps = (state) => {
	return {
		recMoviesList: state.IndividualMovieDetail.recMoviesList,
		isLoadingRecMoviesList:
			state.IndividualMovieDetail.isLoadingRecMoviesList,
	};
};

export default connect(mapStateToProps, { fetchRecMoviesList })(
	RecommendedMovie,
);
