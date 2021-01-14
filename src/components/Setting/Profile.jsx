import React, {useState, useEffect} from 'react'
const url = 'https://api.themoviedb.org/3/genre/movie/list?api_key=911c65436dd290d171fc662603dac6b3&language=en-US'

const Profile = () => {
    const [genreList, GetGenreList] = useState([])
    const [selectedGenreList, UpdateGenreList] = useState([])

    useEffect(() => {
        fetch(url, {method: 'GET'})
        .then(res => res.json())
        .then(res => GetGenreList(res.genres))
    },[])

    const genreHandler = (e) => {
        let id = parseInt(e.target.id)
        if(selectedGenreList.length <3 && !selectedGenreList.includes(id)){
            UpdateGenreList([...selectedGenreList, id])
        }
        else if(selectedGenreList.includes(id)){
            let idx = selectedGenreList.indexOf(id)
            UpdateGenreList([...selectedGenreList.slice(0, idx), ...selectedGenreList.slice(idx+1)])
        }
    }
    const renderGenre = () => {
        return(
            genreList.map((genre) => {
                if(selectedGenreList.includes(genre.id)){
                    return (
                        <input type="button" className="btn m-2 btn-danger" key={genre.id} id={genre.id} value={genre.name} onClick={genreHandler}/>
                    )
                }
                else{
                    return (
                        <input type="button" className="btn m-2 btn-outline-danger" key={genre.id} id={genre.id} value={genre.name} onClick={genreHandler}/>
                    )
                }
            })
        )
    }
    return(
        <div className="card setting_common_card">
            <h2 className="card-header">Profile details</h2>
            <div className="card-body">
                <form className="row">
                    <div className="col-12">
                        <h4>Personal Details</h4>
                    </div>
                    <div className="form-group col-6">
                        <label>First Name</label>
                        <input className="form-control" name="fname" value="Amit" type="text" placeholder="Enter first name" required readOnly/>
                    </div>
                    <div className="form-group col-6">
                        <label>Last Name</label>
                        <input className="form-control" name="lname" value="Kumar" type="text" placeholder="Enter last name" required readOnly/>
                    </div>
                    <div className="form-group col-6">
                        <label>Email id</label>
                        <input className="form-control" name="emailid" value="email@gmail.com" type="email" readOnly required/>
                    </div>
                    <div className="form-group col-6">
                        <label>Age</label>
                        <input className="form-control" name="fname" value="fname" type="number" min="10" max="100" required readOnly/>
                    </div>
                    <div className="col-12">
                        <h4>Favourite genres <small className="text-danger">(Max 3)</small></h4>
                    </div>
                    <div className="form-group col-12">
                        {renderGenre()}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Profile