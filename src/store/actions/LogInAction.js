import axios from "axios";

const LogInUser = (data, history) => (dispatch) => {
    axios({
      method: 'post',
      url: 'http://34.210.129.167/api/login',
      data: data,
    })
    
      .then((response) => {
        const data = response.data
        dispatch({ 
            type: "USER_LOGIN_SUCCESS", 
            payload: data 
        })
        
        localStorage.setItem('token', data.token)
        localStorage.setItem('userId', data.user.id)
        const roles=data.user.roles[0].name
        if(roles === "user") {
          history.push('/Home')
        }
        if(roles === "manager"){
          history.push('/ManagerHome')
        }
        else if(roles === "admin"){
          history.push('/AdminHome')
        }
      })
      .catch(( response ) => {
         if(response){
            if (response.status === 422) {
                alert(response.data[0])
                dispatch({
                  type: "USER_LOGIN_FAILURE",
                  payload: response.data,
                })
              }
              if (response.status === 403) {
                alert(response.data.message)
                dispatch({
                  type: "USER_LOGIN_FAILURE",
                  payload: response.data.message,
                })
              }
         }
      })
    
}


export default LogInUser 