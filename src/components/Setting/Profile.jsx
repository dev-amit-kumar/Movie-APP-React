import React, {useState, useEffect} from 'react'
import Zoom from 'react-reveal/Zoom';
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom';
import {updateProfileData} from '../../redux/actions'
const url = 'https://api.themoviedb.org/3/genre/movie/list?api_key=911c65436dd290d171fc662603dac6b3&language=en-US'

const Profile = (props) => {
    const [genreList, GetGenreList] = useState([])
    const [selectedGenreList, UpdateGenreList] = useState([])
    const [name, setName] = useState('')

    useEffect(() => {
        fetch(url, {method: 'GET'})
        .then(res => res.json())
        .then(res => GetGenreList(res.genres))
        if(props.userDetail ){
            if(props.userDetail.name){
                setName(props.userDetail.name)
            }
            if(props.userDetail.fav_genres){
                UpdateGenreList(props.userDetail.fav_genres)
            }
        }
    },[])

    const genreHandler = (e) => {
        let id = parseInt(e.target.id)
        if(selectedGenreList.length === 1 && selectedGenreList.includes(id)){
            alert('Atleast one genre should be selected')
        }
        else if(selectedGenreList.length <3 && !selectedGenreList.includes(id)){
            UpdateGenreList([...selectedGenreList, id])
        }
        else if(selectedGenreList.includes(id)){
            let idx = selectedGenreList.indexOf(id)
            UpdateGenreList([...selectedGenreList.slice(0, idx), ...selectedGenreList.slice(idx+1)])
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.updateProfileData(props.user, name, selectedGenreList)
    }

    const renderGenre = () => {
        return(
            genreList.map((genre) => {
                if(selectedGenreList.includes(genre.id)){
                    return (
                        <input type="button" className="btn m-2 active_genre" key={genre.id} id={genre.id} value={genre.name} onClick={genreHandler}/>
                    )
                }
                else{
                    return (
                        <input type="button" className="btn m-2 inactive_genre" key={genre.id} id={genre.id} value={genre.name} onClick={genreHandler}/>
                    )
                }
            })
        )
    }
    if(props.user){
        // console.log(props.userDetail, props.user)
        return(
            <div className="card setting_common_card">
                <h2 className="card-header">Profile details</h2>
                <div className="card-body">
                    <Zoom>
                        <form className="row" onSubmit={handleSubmit}>
                            <div className="col-12">
                                <h4>Personal Details</h4>
                            </div>
                            <div className="form-group col-12 col-md-6">
                                <label>Full Name</label>
                                <input className="form-control" name="full_name" onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder="Enter full name" required/>
                            </div>
                            <div className="form-group col-12 col-md-6">
                                <label>Email id</label>
                                <input className="form-control" name="emailid" value={props.user.email} type="email" readOnly required/>
                            </div>
                            <div className="col-12">
                                <h4>Favourite genres <small className="text-danger" style={{fontSize: '15px'}}>(Max 1 to 3)</small></h4>
                            </div>
                            <div className="form-group col-12">
                                {renderGenre()}
                            </div>
                            <div className="form-group col-12">
                                {props.isUpdatingUserDetail ?
                                    <button class="btn btn-primary" type="button" disabled>
                                        <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                                        Loading...
                                    </button>
                                    :
                                    <button type="submit" className="btn btn-primary">Update</button>
                                }
                            </div>
                        </form>
                    </Zoom>
                </div>
            </div>
        )
    }
    else{
        return(
            <Redirect to="/auth/login"></Redirect>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        user: state.UserAuth.user,
        userDetail: state.UserAuth.userDetail,
        isUpdatingUserDetail: state.UserAuth.isUpdatingUserDetail
    }
}

export default connect(mapStateToProps, {updateProfileData})(Profile);