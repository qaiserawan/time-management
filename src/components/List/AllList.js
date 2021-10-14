import React, {useEffect} from 'react'
import styles from './UserList.module.css'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getLogs } from '../../store/actions/UserAction'
import { getUsers } from '../../store/actions/ManagerActions'

const AllList = () => {
    const UsersData = useSelector(state => state.adminReducer)
    const dispatch = useDispatch()
    const [eleId, setEleId] = useState(1)
    useEffect(() => {
        dispatch(getUsers())
        // eslint-disable-next-line
    }, [])
    return (
        <div className="container">
            
            <table className={styles.UserLogList}>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th colSpan="2">Actions</th>
                    </tr>
                </thead>
                <tbody className={styles.UserFlag}>
                    {
                        UsersData.users.map((item, index) => {
                            return(
                                <tr key={index}>
                                    <th>{item.firstName}</th>
                                    <th>{item.lastName}</th>
                                    <th>{item.email}</th>
                                    <th>{item.roles[0].name}</th>
                                    <th className={styles.Action}><i onClick={dispatch(getLogs())}>Work Log</i></th>
                                    <th className={styles.Action}>Delete</th>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            
        </div>
    )
}

export default AllList
