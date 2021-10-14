import axios from "axios"

export const getUsers = () => (dispatch) =>{
    axios({
        method: 'get',
        url: 'http://34.210.129.167/api/users',
        headers: {
          'Authorization': `Bearer  ${localStorage.getItem('token')}` 
        }
      })
      .then((response) => {
        dispatch({
          type: 'GET_USERS_SUCCESS',
          payload: response.data.users.data,
        })
        
      })
      // .catch((error) => {
      //   console.error('There was an error!', error)
      // })
}

export const SignUpManager = (data) => (dispatch) =>{
  axios({
    method: 'post',
    url: 'http://34.210.129.167/api/register',
    data: data,
    })
  // .then((response) => {
  //   // const data = response.data
  //   // dispatch(getUser())
  //   console.log("Response on SignUP", response);
  // })
  // .catch(({ response }) => {
  //   // if (response)
  //   //   if (response.status === 422) {
  //   //     alert(response.data[0])
  //   //   }
  //   // if (response.status === 403) {
  //     // alert(response.data.message)
  //   })
}