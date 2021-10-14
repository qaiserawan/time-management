const initialState = {
    currentUser : {},
    logIn: false,
    loginError: ''
}

const loginReducer = (state = initialState, action) => {
    switch (action.payload) {
        case "USER_LOGIN_SUCCESS":
            return{
                ...state,
                currentUser: action.payload,
                login: true
            }
        case "USER_LOGIN_FAILURE":
            return{
                ...state,
                loginError: action.payload,
                login: false
            }
           
    
        default:
            return state;
            
    }
}

export default loginReducer