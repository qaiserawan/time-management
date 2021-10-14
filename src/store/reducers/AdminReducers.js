const initialState = {
    users : [],
    managers: []
}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_OUSERS_SUCCESS":
            return{
                ...state,
                users : action.payload
            }
        case "GET_MANAGERS_SUCCESS":
            return{
                ...state,
                managers : action.payload
            }
    
        default:
            return state
    }
}

export default adminReducer