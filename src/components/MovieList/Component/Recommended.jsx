import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import HomeMovieCard from '../Display/HomeMovieCard';
import { fetchTrendingMovieList } from '../../../redux/actions';
class Recommended extends Component {
	constructor() {
		super();
		this.state = {
			genre: [28],
		};
	}
	render() {
		var settings = {
			cssEase: 'linear',
			speed: 500,
			slidesToShow: 5,
			slidesToScroll: 1,
			arrows: true,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 4,
						slidesToScroll: 1,
					},
				},
				{
					breakpoint: 780,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1,
					},
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
					},
				},
				{
					breakpoint: 340,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					},
				},
			],
		};
		if (this.props.TrendingMovie) {
			return (
				<div className="container-fluid">
					<div className="row">
						<div className="col-11" style={{ margin: '0 auto' }}>
							<h1 className="font-weight-bolder heading_color mt-4 ml-4">
								RECOMMENDED
							</h1>
							<Slider {...settings}>
								{this.props.TrendingMovie &&
									this.props.TrendingMovie.map(
										(movie, idx) => {
											var count = 0;
											for (
												var i = 0;
												i <= this.state.genre.length;
												i++
											) {
												if (
													movie.genre_ids.includes(
														this.state.genre[i],
													)
												) {
													count++;
												}
											}
											if (
												count ===
												this.state.genre.length
											) {
												return (
													<HomeMovieCard
														data={movie}
														key={idx}
														height_s="250px"
													/>
												);
											}
										},
									)}
							</Slider>
						</div>
					</div>
				</div>
			);
		} else {
			return <></>;
		}
	}
	componentDidMount() {
		this.props.fetchTrendingMovieList('day');
	}
}
const mapStateToProps = (state) => {
	return {
		TrendingMovie: state.NewHomePage.TrendingMovie,
	};
};

export default connect(mapStateToProps, { fetchTrendingMovieList })(
	Recommended,
);
