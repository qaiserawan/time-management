const initialState = {
    users : []
}

const managerReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_USERS_SUCCESS":
            return{
                ...state,
                users : action.payload
            }
    
        default:
            return state
    }
}

export default managerReducer