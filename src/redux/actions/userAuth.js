import { auth, db } from '../Firebase'

export const registerUser = (fullname, email, password) => (dispatch) => {
    try{
        dispatch({type: "TOGGLE_IS_LOADING_AUTH_USER"})
        dispatch({type: "AUTH_ERROR", payload: null})
        auth.createUserWithEmailAndPassword(email,password)
        .then((res) => {
            db.collection("users")
            .doc(res.user.uid)
            .set({name: fullname, wishlist: [], history: []})
            alert("Register Succesfull")
        })
        .catch((error) => {
            dispatch({type: "AUTH_ERROR", payload: error})
        });
    }
    finally{
        dispatch({type: "TOGGLE_IS_LOADING_AUTH_USER"})
    }
}

export const loginUser = (email, password) => (dispatch) => {
    try{
        dispatch({type: "TOGGLE_IS_LOADING_AUTH_USER"})
        dispatch({type: "AUTH_ERROR", payload: null})
        auth.signInWithEmailAndPassword(email,password)
        .then((user) => {
            dispatch({type: "SET_RES", payload: user})
            alert("Login Succesfull")
        })
        .catch((error) => {
            dispatch({type: "AUTH_ERROR", payload: error})
        });
    }
    finally{
        dispatch({type: "TOGGLE_IS_LOADING_AUTH_USER"})
    }
}

export const logoutUser = () => (dispatch) => {
    try{
        dispatch({type: "TOGGLE_IS_LOADING_AUTH_USER"})
        auth.signOut()
        .then(alert("Succesfull Logout"))
        .catch((err) => alert(err))
    }
    finally{
        dispatch({type: "TOGGLE_IS_LOADING_AUTH_USER"})
    }
}
