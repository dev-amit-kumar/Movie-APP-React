import React, {useState} from 'react'
const Genre=(props)=>{
    const [genre, changeGenre] = useState('')
    const genreSelect=(e)=>{
        changeGenre(e.target.value)
        props.GenreData(e.target.value)
    }

    return (
        <div>
            <h6>Choose Genre</h6>
            <select className="form-control" value={genre} onChange={genreSelect}>
                <option value="">Select Genre</option>
                <option value="28"> Action </option>
                <option value="12"> Adventure </option>
                <option value="16"> Animation </option>
                <option value="35"> comedy </option>
                <option value="80"> Crime </option>
                <option value="99"> Documentary </option>
                <option value="10751"> Family </option>
                <option value="14"> Fantasy </option>
                <option value="36"> History </option>
                <option value="27"> Horror </option>
                <option value="10402"> Musicr </option>
                <option value="9648"> Mystery </option>
                <option value="10749"> Romance </option>
                <option value="878"> Science Fiction </option>
                <option value="53"> Thriller </option>
                <option value="10752"> War </option>
                <option value="37"> Western </option>
            </select>
        </div>
    )
}

export default Genre;
