import React, { Component } from 'react';
const url = 'https://api.themoviedb.org/3/movie';
class DisplayTrailer extends Component {
	constructor() {
		super();
		this.state = {
			keys: 'sfM7_JLk-84',
		};
	}
	render() {
		return (
			<iframe
				title="trailer"
				width="100%"
				height="400"
				src={`https://www.youtube.com/embed/${this.state.keys}`}
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
				className="trailer"
			></iframe>
		);
	}
	componentDidMount() {
		fetch(
			`${url}/${this.props.data.id}/videos?api_key=911c65436dd290d171fc662603dac6b3&language=en-US`,
			{
				method: 'GET',
			},
		)
			.then((res) => res.json())
			.then((data) => this.setState({ keys: data.results[0].key }));
	}
}

export default DisplayTrailer;
