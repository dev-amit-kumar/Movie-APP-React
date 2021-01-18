import { auth, db } from '../Firebase'

export const registerUser = (fullname, email, password) => (dispatch) => {
    try{
        dispatch({type: "TOGGLE_IS_LOADING_REGISTER_USER"})
        auth.createUserWithEmailAndPassword(email,password)
        .then((res) => {
            db.collection("users")
            .doc(res.user.uid)
            .set({name: fullname})
        })
        // .catch((err) => {
        //     dispatch({type: "REGISTER_ERROR", payload: err})
        // });
    }
    finally{
        dispatch({type: "TOGGLE_IS_LOADING_REGISTER_USER"})
    }
}

export const loginUser = (email, password) => (dispatch) => {
    try{
        dispatch({type: "TOGGLE_IS_LOADING_LOGIN_USER"})
        auth.signInWithEmailAndPassword(email,password)
        // .then((res) => {
        //     db.collection("users")
        //     .doc(res.user.uid)
        //     .set({name: fullname})
        // })
        // .catch((err) => {
        //     dispatch({type: "REGISTER_ERROR", payload: err})
        // });
    }
    finally{
        dispatch({type: "TOGGLE_IS_LOADING_LOGIN_USER"})
    }
}

export const logoutUser = (email, password) => (dispatch) => {
    try{
        dispatch({type: "TOGGLE_IS_LOADING_LOGOUT_USER"})
        auth.signOut()
        // .then(alert("Succesfull Logout"))
        // .catch((err) => alert(err))
    }
    finally{
        dispatch({type: "TOGGLE_IS_LOADING_LOGOUT_USER"})
    }
}
