const initialState = {
    user: null,
    userDetail: null,
    error: null,
    res: null,

    isLoadingUserDetail: false,
    isLoadingUserAuth: false
}

const UserAuth = (state = initialState, action) => {
    const {type, payload} = action;
    switch(type){
        case "SET_USER":
            return {...state, user: payload}
        case "GET_USER_DATA":
            return {...state, userDetail: payload}
        case "AUTH_ERROR":
            return {...state, error: payload}
        case "SET_RES":
            return {...state, res: payload}
        
        case "TOGGLE_IS_LOADING_USER_DATA":
            return {...state, isLoadingUserDetail: !state.isLoadingUserDetail}
        case "TOGGLE_IS_LOADING_AUTH_USER":
            return {...state, isLoadingUserAuth: !state.isLoadingUserAuth}
        default:
            return state;
    }   
}

export default UserAuth;