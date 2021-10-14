import React, {useState, useEffect} from 'react'
import styles from './UserList.module.css'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getUsers } from '../../../store/actions/ManagerActions'
import DeleteUserPopUp from '../../../components/Widgets/DeleteUserPopUp'

import { Trash } from 'react-bootstrap-icons'

const UserList = () => {
    const UsersData = useSelector(state => state.managerReducer)
    const dispatch = useDispatch()
    const [delPop, setDelPop] = useState("")
    const delcheck = (id) => {
        setDelPop(id)
    }
    const handlecloseId=()=>{
        setDelPop("")
    }
    useEffect(() => {
        dispatch(getUsers())
        // eslint-disable-next-line
    }, [])
    return (
        <div className="container">
            <div className={styles.Headingss}>
                {delPop&&<DeleteUserPopUp id={delPop} handlecloseId={handlecloseId} />}
                </div>
            <table className={styles.UserLogList}>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody className={styles.UserFlag}>
                    {
                        UsersData.users.map((item, index) => {
                            return(
                                <tr key={index}>
                                    <td>{item.firstName}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.email}</td>
                                    <td>{item.roles[0].name}</td>
                                    <td className={styles.Action}><i onClick={() => delcheck(item.id)}><Trash /></i></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default UserList
