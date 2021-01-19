import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
	fetchSearchSuggestion,
	emptySearchSuggestion,
} from '../../redux/actions';
import { withRouter } from 'react-router-dom';
import SearchSuggestion from './SearchSuggestion';
import '../../css/searchFunction.css';

const SearchBar = (props) => {
	const [keyword, setKeyword] = useState('');

	const handleChange = (data) => {
		setKeyword(data);
		if (data) {
			props.fetchSearchSuggestion(data);
		} else {
			props.emptySearchSuggestion();
		}
	};

	const redirect = (e) => {
		e.preventDefault();
		if (keyword) {
			props.emptySearchSuggestion();
			props.history.push(`/search/${keyword}`);
		}
	};

	return (
		<form className="mr-2 my-auto w-100 d-inline-block searchBox">
			<div className="input-group">
				<input
					type="search"
					id="myInput"
					list="match-list"
					onChange={(e) => handleChange(e.target.value)}
					className="form-control"
					placeholder="Search movie/actor"
					aria-label="Search movie/actor"
					aria-describedby="button-addon2"
				/>
				<div className="input-group-append">
					<button
						onClick={redirect}
						className="btn btn-outline-light"
						type="submit"
					>
						<i className="fa fa-search" aria-hidden="true"></i>
					</button>
				</div>
				<SearchSuggestion />
			</div>
		</form>
	);
};

export default withRouter(
	connect(null, { fetchSearchSuggestion, emptySearchSuggestion })(SearchBar),
);
