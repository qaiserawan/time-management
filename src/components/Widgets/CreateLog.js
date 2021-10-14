import React, {useState} from 'react'
import styles from './CreateLog.module.css'
import { Button, Modal } from 'react-bootstrap';
import { ClockHistory } from 'react-bootstrap-icons'
import { useDispatch } from 'react-redux';
import {createLogs} from '../../store/actions/UserAction'

const CreateLog = () => {
    const [logs, setLogs] = useState({
        logDate: "",
        hours: "",
        description: ""
    })
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch()
    const addLogs = () => {
        if(logs.logDate !== "" && logs.hours !== "" && logs.description !== ""){
            setShow(false)
            dispatch(createLogs(logs))
        }
        else{
            alert("Enter Complete Data")
        }
    }
    return (
        <div className={styles.SignUpForm}>
            <h6 variant="primary" onClick={handleShow}>Create Logs<ClockHistory /></h6>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create Logs</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div>
                <div className="form-group">
                    <label>Log Date</label>
                    <input type="date" className="form-control" placeholder="Log Date" onChange={(e) => setLogs({...logs, logDate: e.target.value})}/>
                </div>

                <div className="form-group">
                    <label>Hours</label>
                    <input type="" className="form-control" placeholder="Hours" onChange={(e) => setLogs({...logs, hours: e.target.value})}/>
                </div>

                <div className="form-group">
                    <label>Description</label>
                    <input type="email" className="form-control" placeholder="Description" onChange={(e) => setLogs({...logs, description: e.target.value})}/>
                </div>
                </div>
                
                </Modal.Body>
                <Modal.Footer>
                <Button variant="primary" onClick={addLogs}>
                    Add
                </Button>
                
                </Modal.Footer>
            </Modal>
                </div>

    )
}

export default CreateLog
