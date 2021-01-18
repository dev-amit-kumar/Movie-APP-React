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
        .get()
        .then((doc) => {  
            dispatch({type: 'GET_USER_DATA',payload: doc.data()})
        })
    }
    finally{
        dispatch({type: 'TOGGLE_IS_LOADING_USER_DATA'})
    }
}

// export const updateProfileData = (user) => (dispatch) => {
//     try{

//     }
// }