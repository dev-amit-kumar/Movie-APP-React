import React, {useState, useEffect} from 'react'
const url = 'https://api.themoviedb.org/3/genre/movie/list?api_key=911c65436dd290d171fc662603dac6b3&language=en-US'
const Genre=(props)=>{
    const [genre, changeGenre] = useState('')
    const [genreList, GetGenreList] = useState([])
    const genreSelect=(e)=>{
        changeGenre(e.target.value)
        props.GenreData(e.target.value)
    }
    useEffect(() => {
        fetch(url, {method: 'GET'})
        .then(res => res.json())
        .then(res => GetGenreList(res.genres))
    },[])
    
    return (
        <div>
            <h6>Choose Genre</h6>
            <select className="form-control" value={genre} onChange={genreSelect}>
                <option value="">Select Genre</option>
                {genreList.map((genre, idx) => {return(<option key={idx} value={genre.id}>{genre.name}</option>)})}
            </select>
        </div>
    )
}

export default Genre;
