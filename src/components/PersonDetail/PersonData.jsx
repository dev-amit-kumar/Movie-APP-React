import { connect } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { fetchPersonDetail } from '../../redux/actions';
import LoadingSpinner from '../Common/LoadingSpinner';
import DataNotFound from '../Common/DataNotFound';
import Zoom from 'react-reveal/Zoom';
import '../../css/PersonData.css';
const PersonData = ({
	data,
	fetchPersonDetail,
	PersonDetail,
	isLoadingPersonDetail,
}) => {
	const [showReadMore, changeToggle] = useState(false);

	useEffect(() => {
		fetchPersonDetail(data);
	}, []);
	const renderLinks = (imdb_id, homepage) => {
		return (
			<>
				<b className="heading_color">EXTERNAL LINKS: </b>
				{imdb_id && (
					<a
						rel="noopener noreferrer"
						target="_blank"
						href={`https://www.imdb.com/name/${imdb_id}`}
						className="btn btn-warning ml-2 mr-2 font-bold font-weight-bold"
					>
						IMDB&nbsp;
						<i className="fa fa-imdb" aria-hidden="true"></i>
					</a>
				)}
				{homepage && (
					<a
						rel="noopener noreferrer"
						target="_blank"
						href={homepage}
						className="btn btn-danger ml-2 mr-2 font-bold font-weight-bold"
					>
						Website&nbsp;
						<i className="fa fa-link" aria-hidden="true"></i>
					</a>
				)}
			</>
		);
	};
	const img_src = (img_url) => {
		if (img_url === null) {
			return 'https://dl.dropboxusercontent.com/s/yes3bkjzwczt5cz/actor.png?dl=0';
		} else {
			return `https://image.tmdb.org/t/p/w500${img_url}`;
		}
	};
	const renderOverview = (data) => {
		if (data.length < 500) {
			return <p>{data}</p>;
		} else {
			return (
				<>
					<p>
						{data.slice(0, 500)}
						{!showReadMore && (
							<span
								className="text-danger"
								onClick={() => changeToggle(!showReadMore)}
							>
								&nbsp;(Read more)
							</span>
						)}
						{showReadMore && (
							<>
								<span className="">{data.slice(500)}</span>
								<span
									className="text-danger"
									onClick={() => changeToggle(!showReadMore)}
								>
									&nbsp;(Show less)
								</span>
							</>
						)}
					</p>
				</>
			);
		}
	};
	if (PersonDetail) {
		return (
			<Zoom>
				<div className="container-fluid person-data">
					<div className="row">
						<div className="card-image col-md-4 col-12 vh_center align-items-center">
							<img
								src={img_src(PersonDetail.profile_path)}
								alt="actor"
							/>
						</div>
						<div className="col-md-8 person-text col-12 vh_center">
							<h1 className="heading_color">
								{PersonDetail.name}
							</h1>
							<div className="d-flex flex-row flex-wrap align-items-center">
								<h6 className="mr-2 text-warning">
									{PersonDetail.birthday}
								</h6>
								<h6 className="mr-2 text-warning">
									{PersonDetail.gender === 2
										? 'Male'
										: 'Female'}
								</h6>
								<h6 className="mr-2 text-warning">
									{PersonDetail.known_for_department}
								</h6>
								<h6 className="mr-2 text-warning">
									{PersonDetail.popularity}%
								</h6>
							</div>
							<b className="heading_color">BIOGRAPHY: </b>
							<p>
								{PersonDetail.biography ? (
									renderOverview(PersonDetail.biography)
								) : (
									<i>No biography available</i>
								)}
							</p>
							{PersonDetail.also_known_as &&
								PersonDetail.also_known_as.length > 1 && (
									<>
										<b className="heading_color">
											ALSO KNOWN AS:{' '}
										</b>
										{PersonDetail.also_known_as.map(
											(item, idx) => {
												if (
													idx !==
													PersonDetail.also_known_as
														.length -
														1
												) {
													return `${item}, `;
												} else {
													return item;
												}
											},
										)}
									</>
								)}
							<div className="mt-2">
								{renderLinks(
									PersonDetail.imdb_id,
									PersonDetail.homepage,
								)}
							</div>
						</div>
					</div>
				</div>
			</Zoom>
		);
	} else if (isLoadingPersonDetail) {
		return <LoadingSpinner />;
	} else {
		return <DataNotFound />;
	}
};
const mapStateToProps = (state) => {
	return {
		PersonDetail: state.Person.PersonDetail,
		isLoadingPersonDetail: state.Person.isLoadingPersonDetail,
	};
};
export default connect(mapStateToProps, { fetchPersonDetail })(PersonData);
