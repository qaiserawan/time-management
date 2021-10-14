import React from 'react'
import Header from '../../../components/Header/Header'
// import Dashboard from '../../../components/Dashboard/Dashboard'
// import styles from './Home.module.css'
import { Tabs, Tab } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserList from '../../Manager/UserList/UserList';
// import AllList from '../../../components/List/AllList';
import ManagerList from '../../../components/List/ManagerList';
import UserOnlyList from '../../../components/List/UserList';

const AdminHome = () => {
    return (
        <div>
            <Header />
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="home" title="All">
                    <UserList />
                </Tab>
                <Tab eventKey="profile" title="Managers">
                    <ManagerList />
                </Tab>
                <Tab eventKey="contact" title="Users">
                    <UserOnlyList />
                </Tab>
            </Tabs>
            

        </div>
    )
}

export default AdminHome
