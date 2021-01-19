import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import SearchCard from './SearchCard';
import { connect } from 'react-redux';
import LoadingSpinner from '../Common/LoadingSpinner';
import DataNotFound from '../Common/DataNotFound';
import { fetchSearchResults } from '../../redux/actions';

class SearchPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 'movie',
		};
	}
	componentDidMount() {
		this.props.fetchSearchResults(this.props.match.params.str);
	}

	setValue = (e) => {
		this.setState({ value: e.target.value });
	};

	render() {
		if (this.props.searchResults) {
			return (
				<div className="container-fluid">
					<div className="search-option">
						<h2>Search type</h2>
						<button
							onClick={this.setValue}
							className={
								this.state.value === 'movie'
									? 'btn-active'
									: 'btn-inactive'
							}
							value="movie"
						>
							Movies
						</button>
						<button
							onClick={this.setValue}
							className={
								this.state.value === 'person'
									? 'btn-active'
									: 'btn-inactive'
							}
							value="person"
						>
							Actor
						</button>
					</div>
					{this.props.searchResults.total_results > 0 ? (
						<SearchCard
							list={this.props.searchResults.results}
							type={this.state.value}
						/>
					) : (
						<div>
							<h1>No movie or actor found</h1>
						</div>
					)}
				</div>
			);
		} else if (this.props.isLoadingSearchResults) {
			return <LoadingSpinner />;
		} else {
			return <DataNotFound />;
		}
	}
}

const mapStateToProps = (state) => {
	return {
		searchResults: state.Search.searchResults,
		isLoadingSearchResults: state.Search.isLoadingSearchResults,
	};
};
export default withRouter(
	connect(mapStateToProps, { fetchSearchResults })(SearchPage),
);
