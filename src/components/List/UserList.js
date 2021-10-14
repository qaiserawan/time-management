import React, {useEffect, useState} from 'react'
import styles from './UserList.module.css'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { Link } from "react-router-dom"
import { getUsersOnly } from '../../store/actions/AdminActions'
import CreateUser from '../Widgets/CreateUser'
import DeleteUserPopUp from '../Widgets/DeleteUserPopUp'
import { Trash } from 'react-bootstrap-icons'

const UserOnlyList = () => {
    const UsersData = useSelector(state => state.adminReducer)
    const [search, setSearch] = useState("")
    const dispatch = useDispatch()
    const [delPop, setDelPop] = useState("")
    const delcheck = (id) => {
        setDelPop(id)
    }
    const handlecloseId=()=>{
        setDelPop("")
    }
    useEffect(() => {
        dispatch(getUsersOnly())
        // eslint-disable-next-line
    }, [])
    return (
        <div className="container">
            
            <div className={styles.Headingss}>
                {delPop&&<DeleteUserPopUp id={delPop} handlecloseId={handlecloseId} />}
                <div><h2>Users List</h2></div>
                <div><input type="text" onChange={(e) => setSearch(e.target.value)}/></div>
                <div>
                    <button><CreateUser /></button>
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
                        UsersData.users.filter((value)=>{
                            if(search === "") return value
                            else if(search.length < 3 ){
                                return value
                                }
                            else if(search.length >= 3 && value.firstName.toLowerCase().includes(search.toLowerCase())){
                                return value
                            }
                        }).map((item, index) => {
                            return(
                                <tr key={index}>
                                    <td>{item.firstName}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.email}</td>
                                    <td>{item.roles[0].name}</td>
                                    <td className={styles.Action}><Link to={`/userLogs/:${item.id}`}>Work Log</Link></td>
                                    <td className={styles.Action}><i className="DeleteAction" onClick={() => delcheck(item.id)}><Trash /></i></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default UserOnlyList
