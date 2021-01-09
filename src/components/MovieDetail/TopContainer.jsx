import '../../css/TopContainer.css'

const TopContainer = (props) => {
    return(
        <div className="movie-detail" style={{backgroundImage: `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${props.image})`}}>
            <div className="overlay">
            </div>
        </div>
    )
}
export default TopContainer