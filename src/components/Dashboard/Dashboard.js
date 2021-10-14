import React, {useEffect} from 'react'
import UserCard from '../UserCard/UserCard'
// import UserList from '../List/UserList'
import styles from './Dashboard.module.css'
import CreateLog from '../Widgets/CreateLog'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getLogs } from '../../store/actions/UserAction'


const Dashboard = () => {
    const logData = useSelector(state => state.userReducer)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getLogs())
        // eslint-disable-next-line
    }, [])
    return (
        <div className="container">
            <div className={styles.DashboardHeading}>
                <div><h2>User Work Log</h2></div>
                <CreateLog />
            </div>
            {
                <div className={styles.CardsList}>
                {   
                    
                    logData?.userLog?.map((item, index) => {
                        return( 
                            <UserCard key={index} id={item.id} date= {item.log_date} description = {item.description} time = {item.hours} color={item.hours >= 8  ? "green" : "red"}/>
                        )
                    })
                }

            </div>
                   }
            
            
        </div>
    )
}

export default Dashboard
