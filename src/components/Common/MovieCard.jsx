import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import ReactTooltip from 'react-tooltip';
import ReactStars from 'react-rating-stars-component';
import { connect } from 'react-redux';
import { updateWishlist } from '../../redux/actions';
import '../../css/MovieCard.css';
const MovieCard = (props) => {
	const img_src = () => {
		if (props.data.poster_path === null) {
			return '../demo.png';
		} else {
			return `https://image.tmdb.org/t/p/w500/${props.data.poster_path}`;
		}
	};
	const style = {
		height: props.height_s,
	};
	const addWishlist = () => {
		props.updateWishlist(props.user, [
			...props.userDetail.wishlist,
			props.data.id,
		]);
	};
	const removeWishlist = () => {
		let newList = props.userDetail.wishlist.filter(
			(item) => item !== props.data.id,
		);
		props.updateWishlist(props.user, newList);
	};
	const renderWishlistOption = () => {
		if (
			props.userDetail &&
			props.userDetail.wishlist.includes(props.data.id)
		) {
			return (
				<div
					className="wishlist_show"
					data-tip="Remove movie from wishlist"
					data-for="wishlist"
					onClick={removeWishlist}
				>
					<i
						className="fa fa-heart text-danger"
						aria-hidden="true"
					></i>
				</div>
			);
		} else {
			return (
				<div
					className="wishlist_show"
					onClick={addWishlist}
					data-tip="Add movie to wishlist"
					data-for="wishlist"
				>
					<i
						className="fa fa-heart-o text-danger"
						aria-hidden="true"
						style={{ fontWeight: '800' }}
					></i>
				</div>
			);
		}
	};
	return (
		<Fade bottom>
			<div className="movie-outer-card text-center">
				<div className="movie-inner-card">
					<div className="position-relative card-shadow">
						<Link to={`/movie/${props.data.id}`}>
							<img src={img_src()} alt="movie" style={style} />
							<div className="movie-card-text">
								<h6>{props.data.title}</h6>
							</div>
							<div
								className="d-flex justify-content-center"
								data-tip={`Rating based on ${props.data.vote_count} votes`}
								data-for="rating"
							>
								<ReactStars
									count={5}
									value={props.data.vote_average / 2}
									edit={false}
									size={25}
									isHalf={true}
									color="#585555"
									emptyIcon={<i className="fa fa-star-o"></i>}
									halfIcon={
										<i className="fa fa-star-half-alt"></i>
									}
									fullIcon={<i className="fa fa-star"></i>}
									activeColor="#F9A825"
								/>
							</div>
							<ReactTooltip
								id="rating"
								place="bottom"
								border={true}
								borderColor="#000"
								backgroundColor="#fff"
								textColor="#000"
								effect="solid"
							/>
							<ReactTooltip
								id="wishlist"
								place="right"
								border={true}
								borderColor="#000"
								backgroundColor="#fff"
								textColor="#000"
								effect="solid"
							/>
						</Link>
						{props.show_wishlist && renderWishlistOption()}
						{props.show_delete && (
							<div className="wishlist_show">
								<i
									className="fa fa-trash text-danger"
									aria-hidden="true"
								></i>
							</div>
						)}
					</div>
				</div>
			</div>
		</Fade>
	);
};

const mapStateToProps = (state) => {
	return {
		user: state.UserAuth.user,
		userDetail: state.UserAuth.userDetail,
	};
};

export default connect(mapStateToProps, { updateWishlist })(MovieCard);
