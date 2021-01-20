import Trending from "./Component/Trending";
import NowPlaying from "./Component/NowPlaying";
import Recommended from "./Component/Recommended"
import Trailer from "./Component/Trailer";
const HomePage=()=>{
    return(
        <div>
            <Trailer/>
            <NowPlaying/>
            <Trending/>
            <Recommended/>
        </div>
    )
}
export default HomePage;