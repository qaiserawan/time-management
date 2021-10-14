import React from 'react'
import Header from '../../../components/Header/Header'
import styles from './Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import UserList from '../UserList/UserList'
import CreateUser from '../../../components/Widgets/CreateUser'

const ManagerHome = () => {
    
    return (
        <div>
            <Header />
            <div className="container">
                <div className={styles.UserList}>
                    <h3>List of Users</h3>
                    <i className={styles.UserIcon}><CreateUser /></i>
                </div>
            </div>
            <UserList />
        </div>
    )
}

export default ManagerHome
