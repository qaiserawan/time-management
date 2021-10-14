import loginReducer from './LogInReducer'
import userReducer from './UserReducers'
import usersReducer from './UserReducers'
import managerReducer from './ManagerReducers'
import adminReducer from './AdminReducers'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
  loginReducer,
  userReducer,
  usersReducer,
  managerReducer,
  adminReducer
})

export default rootReducer