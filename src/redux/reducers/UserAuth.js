const initialState = {
    user: null,
    userDetail: null,

    isLoadingUserDetail: false
}

const UserAuth = (state = initialState, action) => {
    const {type, payload} = action;
    switch(type){
        case "SET_USER":
            return {...state, user: payload}
        case "GET_USER_DATA":
            return {...state, userDetail: payload}
        
        case "TOGGLE_IS_LOADING_USER_DATA":
            return {...state, isLoadingUserDetail: !state.isLoadingUserDetail}
        
        default:
            return state;
    }   
}

export default UserAuth;