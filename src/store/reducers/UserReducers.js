const initialState = {
    userLog : []
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_USERLOG_SUCCESS":
            return{
                ...state,
                userLog: action.payload
            }
            
        
        default:
         return state;   
    }
}

export default userReducer