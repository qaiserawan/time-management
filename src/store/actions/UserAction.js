import axios from "axios";

export const createUsers = (data) => (dispatch) =>{
    axios({
        method: 'post',
        url: 'http://34.210.129.167/api/users',
        data: data,
        headers: {
          'Authorization': `Bearer  ${localStorage.getItem('token')}` 
        }
      })
      .then((response) => {
        // const data = response.data
        dispatch(getUser())
      })
      .catch(({ response }) => {
        if (response)
          if (response.status === 422) {
            alert(response.data[0])
          }
        if (response.status === 403) {
          alert(response.data.message)
        }})


      
}

export const getUser = () => (dispatch) =>{
  axios({
    method: 'get',
    url: 'http://34.210.129.167/api/users',
    headers: {
      'Authorization': `Bearer  ${localStorage.getItem('token')}` 
    }
  })
  .then((response) => {
    dispatch({
      type: 'GET_USER_SUCCESS',
      payload: response.data.users,
    })
  })
  // .catch((error) => {
  //   console.error('There was an error!', error)
  // })

}

export const createLogs = (data) => (dispatch) => {
  axios({
    method: 'post',
    url: 'http://34.210.129.167/api/work-logs',
    data: data,
    headers: {
      'Authorization': `Bearer  ${localStorage.getItem('token')}` 
    }
  })
  .then((response) => {
    // const data = response.data
    dispatch(getLogs())
  })
  .catch(({ response }) => {
    if (response)
      if (response.status === 422) {
        alert(response.data[0])
      }
    if (response.status === 403) {
      alert(response.data.message)
    }})
}


export const getLogs = () => (dispatch) => {
  let id = localStorage.getItem('userId')
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

export const updateLog = (data, id) => (dispatch) => {
  let UserID = localStorage.getItem('userId')
  console.log("User Id is", UserID, "Log ID is", id)
  
  axios({
    method: 'put',
    url: `http://34.210.129.167/api/user/${UserID}/work-logs/${id}`,
    data: data,
    headers: {
      'Authorization': `Bearer  ${localStorage.getItem('token')}` 
    }
  })
  .then((response) => {
    // const data = response.data
    dispatch(getLogs())
  })
  .catch(({ response }) => {
    if (response)
      if (response.status === 422) {
        alert(response.data[0])
      }
    if (response.status === 403) {
      alert(response.data.message)
    }})
}



// export export default {
//   createUsers,
//   getUser,
//   createLogs,
//   // getLogs
// }