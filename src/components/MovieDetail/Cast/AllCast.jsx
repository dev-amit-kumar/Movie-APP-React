import React, { useEffect } from 'react';
import CastData from './CastData';
import Slider from 'react-slick';
import { connect } from 'react-redux';
import LoadingSpinner from '../../Common/LoadingSpinner';
import DataNotFound from '../../Common/DataNotFound';
import { fetchCastsList } from '../../../redux/actions';

const AllCast = ({
	movie_id,
	fetchCastsList,
	castsList,
	isLoadingCastsList,
}) => {
	useEffect(() => {
		fetchCastsList(movie_id);
	}, []);

	var settings = {
		cssEase: 'linear',
		speed: 500,
		slidesToShow: 8,
		slidesToScroll: 2,
		arrows: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 5,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				},
			},
		],
	};
	if (castsList) {
		return (
			<div className="other_data">
				<h2 className="heading_color">Movie Cast</h2>
				<Slider {...settings}>
					{castsList &&
						castsList.cast.map((cast, idx) => {
							return <CastData data={cast} key={idx} />;
						})}
				</Slider>
			</div>
		);
	} else if (isLoadingCastsList) {
		return <LoadingSpinner />;
	} else {
		return <DataNotFound />;
	}
};

const mapStateToProps = (state) => {
	return {
		castsList: state.IndividualMovieDetail.castsList,
		isLoadingCastsList: state.IndividualMovieDetail.isLoadingCastsList,
	};
};

export default connect(mapStateToProps, { fetchCastsList })(AllCast);
