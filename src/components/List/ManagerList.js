import React, {useState, useEffect} from 'react'
import styles from './UserList.module.css'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getManagersOnly } from '../../store/actions/AdminActions'
import EditManager from '../Widgets/EditManagerPopUp'
import SignUp from '../SignUp/SignUp'
import DeleteUserPopUp from '../Widgets/DeleteUserPopUp'
import { Trash } from 'react-bootstrap-icons'

const ManagerList = () => {
    const UsersData = useSelector(state => state.adminReducer)
    const dispatch = useDispatch()
    const [delPop, setDelPop] = useState("")
    const delcheck = (id) => {
        setDelPop(id)
    }
    const handlecloseId=()=>{
        setDelPop("")
    }
    useEffect(() => {
        dispatch(getManagersOnly())
        // eslint-disable-next-line
    }, [])
    return (
        <div className="container">
            <div className={styles.Headingss}>
                {delPop&&<DeleteUserPopUp id={delPop} handlecloseId={handlecloseId} />}
                <div><h2>Managers List</h2></div>
                
                <div>
                    <button><SignUp /></button>
                </div>
            </div>
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
                        UsersData.managers.map((item, index) => {
                            return(
                                <tr key={index}>
                                    <td>{item.firstName}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.email}</td>
                                    <td>{item.roles[0].name}</td>
                                    <td className={styles.Action}><i ><EditManager currentuser={item}/></i></td>
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

export default ManagerList
