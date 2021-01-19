import { db } from '../Firebase'

export const setUser = (user) => {
    return {
        type: "SET_USER",
        payload: user,
    };
};

export const getUserData = (user) => (dispatch) => {
    try{
        dispatch({type: 'GET_USER_DATA', payload: null})
        dispatch({type: 'TOGGLE_IS_LOADING_USER_DATA'})

        db.collection("users")
        .doc(user.uid)
        .onSnapshot((doc) => {
            dispatch({type: 'GET_USER_DATA', payload: doc.data()})
        })
    }
    finally{
        dispatch({type: 'TOGGLE_IS_LOADING_USER_DATA'})
    }
}

export const updateProfileData = (user, fullname, genreList) => (dispatch) => {
    try{
        dispatch({type: 'TOGGLE_IS_UPDATING_USER_DATA'})
        db.collection("users")
        .doc(user.uid)
        .set({name: fullname, fav_genres: genreList}, { merge: true })
    }
    finally{
        dispatch({type: 'TOGGLE_IS_UPDATING_USER_DATA'})
    }
}


// auth.createUserWithEmailAndPassword(email,password)
// .then((res) => {
//     db.collection("users")
//     .doc(res.user.uid)
//     .set({name: fullname, wishlist: [], history: [], fav_genres:[]})
//     alert("Register Succesfull")
// })
// .catch((error) => {
//     dispatch({type: "REGISTER_ERROR", payload: error})
// });