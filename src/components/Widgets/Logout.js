import React from 'react'
import styles from './Logout.module.css'
import user from '../../assets/img/user.png'
import { useHistory } from "react-router-dom";

const Logout = () => {
    let history = useHistory()
    const removeToken = () => {
        localStorage.removeItem('token');
        history.push('/')
    }
    return (
        <div className={styles.UserLoggedIn }>
            <div>
                <div className={styles.Dropdown}>
                    <img src={user} alt="user" className={styles.Dropbtn} />
                        <div className={styles.DropdownContent}>
                            <i onClick={removeToken}>Log Out</i>
                        </div>
                </div> 
            </div>
            {/* <div>
                Welcome User
            </div> */}
        </div>
    )
}

export default Logout
