import axios from "axios"

export const getUsersOnly = () => (dispatch) =>{
    axios({
        method: 'get',
        url: 'http://34.210.129.167/api/users?filter=user',
        headers: {
          'Authorization': `Bearer  ${localStorage.getItem('token')}` 
        }
      })
      .then((response) => {
        dispatch({
          type: 'GET_OUSERS_SUCCESS',
          payload: response.data.users.data,
        })
        
      })
    //   .catch((error) => {
    //     console.error('There was an error!', error)
    //   })
}

export const getManagersOnly = () => (dispatch) =>{
    axios({
        method: 'get',
        url: 'http://34.210.129.167/api/users?filter=manager',
        headers: {
          'Authorization': `Bearer  ${localStorage.getItem('token')}` 
        }
      })
      .then((response) => {
        dispatch({
          type: 'GET_MANAGERS_SUCCESS',
          payload: response.data.users.data,
        })
        
      })
    //   .catch((error) => {
    //     console.error('There was an error!', error)
    //   })
}

export const getUserLogs = (id) => (dispatch) => {
    axios({
      method: 'get',
      url: `http://34.210.129.167/api/user/${id}/work-logs`,
      headers: {
        'Authorization': `Bearer  ${localStorage.getItem('token')}` 
      }
    })
    .then((response) => {
      dispatch({
        type: 'GET_USERLOG_SUCCESS',
        payload: response.data.workLogs.data,
      
      })
    })
    // .catch((error) => {
    //   console.error('There was an error!', error)
    // })
  }

export const editManager = (id, data) => (dispatch) => {
    axios({
        method: 'put',
        url: `http://34.210.129.167/api/users/${id}`,
        data: data,
        headers: {
          'Authorization': `Bearer  ${localStorage.getItem('token')}` 
        }
      })
      .then((response) => {
        dispatch(getManagersOnly())
    //     // dispatch({
    //     //   type: 'GET_USERLOG_SUCCESS',
    //     //   payload: response.data.workLogs.data,
        
    //     // })
      })
    //   .catch((error) => {
    //     console.error('There was an error in updation!', error)
    //   })
}

export const deleteUser = (id) => (dispatch) => {
    axios({
        method: 'delete',
        url: `http://34.210.129.167/api/users/${id}`,
        headers: {
          'Authorization': `Bearer  ${localStorage.getItem('token')}` 
        }
      })
    //     .then((response) => {
    //     console.log("Delete Reesponseee", response)
        
    //   })
    //   .catch((error) => {
    //     console.error('There was an error in deletion!', error)
    //   })
}