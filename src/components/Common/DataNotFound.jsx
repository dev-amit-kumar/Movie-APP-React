import "../../css/DataNotFound.scss";
const DataNotFound = () => {
	return (
		<div>
		<div className="jumbotron">
			<div class="toy-train">
				<div class="engine">
					<div class="window">
					<div class="engine-main">
						<div class="smokes">
						<span></span>
						</div>
					</div>
					</div>
					<div class="engine-body">
					<div class="wheels">
						<div class="big-wheel"></div>
						<div class="normal-wheel"></div>
					</div>
					</div>
				</div>
				<div class="locomotive">
					<div class="trash"></div>
					<div class="wheels">
					<div class="normal-wheel"></div>
					<div class="normal-wheel"></div>
					</div>
				</div>
				<div class="tracks">
					<span></span>
					<span></span>
				</div>
				</div>
				</div>
				<div>
					<h1 className="text-center font-weight-bolder text-danger">404</h1>
					<h4 className="text-center font-weight-bolder text-primary">Mistakes are the portals of discovery.</h4>
					<h4 className="text-center font-weight-bolder text-primary">But we'd rather suggest you use our homepage</h4>
				</div>
		</div>
	);
};

export default DataNotFound;
