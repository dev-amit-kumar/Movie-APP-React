import React, { useEffect } from 'react';
import DisplayTrailer from '../Display/DisplayTrailer';
import { fetchNowPlayingMovieList } from '../../../../redux/actions';
import LoadingSpinner from '../../../Common/LoadingSpinner';
import NoMovies from '../../../Common/NoMovies';
import '../../../../css/Trailer.css';
import { connect } from 'react-redux';
const Trailer = (props) => {
	useEffect(() => {
		props.fetchNowPlayingMovieList();
	}, []);
	if (props.NowPlayingMovie) {
		return (
			<div className="container pt-5 pb-5">
				<DisplayTrailer data={props.NowPlayingMovie[0]} />
			</div>
		);
	} else if (props.isLoadingNowPlayingMovie) {
		return <LoadingSpinner />;
	} else {
		return <NoMovies />;
	}
};
const mapStateToProps = (state) => {
	return {
		NowPlayingMovie: state.NewHomePage.NowPlayingMovie,
		isLoadingNowPlayingMovie: state.NewHomePage.isLoadingNowPlayingMovie,
	};
};
export default connect(mapStateToProps, { fetchNowPlayingMovieList })(Trailer);
