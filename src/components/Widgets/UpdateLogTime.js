import React, {useState, useEffect} from 'react'
import styles from './CreateLog.module.css'
import { Button, Modal } from 'react-bootstrap';
import { ClockHistory } from 'react-bootstrap-icons'
import { useDispatch } from 'react-redux';
import {createLogs} from '../../store/actions/UserAction'

const UpdateTime = ({time}) => {
    const [logs, setLogs] = useState({
        hours: ""
    })
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch()
    const addLogs = () => {
        if(logs.hours !== ""){
            setShow(false)
            dispatch(createLogs(logs))
        }
        else{
            alert("Enter Complete Data")
        }
    }
    useEffect(() => {
        setLogs({
            hours : time,
            })
    }, [time])
    return (
        <div className={styles.SignUpForm}>
            <h6 variant="primary" onClick={handleShow}><ClockHistory /></h6>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Time</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div>
                    <div className="form-group">
                        <label>Hours</label>
                        <input type="text" className="form-control" placeholder="Hours" value={logs.hours} onChange={(e) => setLogs({...logs, hours: e.target.value})}/>
                    </div>
                </div>
                
                </Modal.Body>
                <Modal.Footer>
                <Button variant="primary" onClick={addLogs}>
                    Update Time
                </Button>
                
                </Modal.Footer>
            </Modal>
                </div>

    )
}

export default UpdateTime
