import React, {useEffect, useState} from 'react'
import UserCard from '../../../components/UserCard/UserCard'
import styles from '../../../components/Dashboard/Dashboard.module.css'
import axios from 'axios'
import { useParams } from 'react-router'
import Header from '../../../components/Header/Header'


const UserLogs = () => {
    const {id}  = useParams();
    let userID = id.split(":")[1];
    const [logData, setLogData] = useState([])
    useEffect(() => {
        axios({
            method: 'get',
            url: `http://34.210.129.167/api/user/${userID}/work-logs`,
            headers: {
              'Authorization': `Bearer  ${localStorage.getItem('token')}` 
            }
          })
          .then((response) => {
            setLogData(response.data.workLogs.data)
          })
        //   .catch((error) => {
        //     console.error('There was an error!', error)
        //   })
        // eslint-disable-next-line
    }, [])
    return (
        <div>
            <Header />
            <div className="container">
            {logData.length >= 1 ? <h3>User Work Log</h3> :  <h1>User has no logs</h1> }
                <div className={styles.CardsList}>
                    {   
                        logData?.map((item) => {
                            return( 
                                <UserCard date= {item.log_date} description = {item.description} time = {item.hours} color={item.hours >= 8  ? "green" : "red"}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default UserLogs
