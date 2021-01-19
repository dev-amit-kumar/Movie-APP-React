const LoadingSpinner = () => {
	return (
		<div className="full-cover">
			<div
				className="spinner-border"
				style={{ width: '3rem', height: '3rem' }}
				role="status"
			>
				<span className="sr-only">Loading...</span>
			</div>
		</div>
	);
};

export default LoadingSpinner;
