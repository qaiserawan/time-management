import React, {useState, useEffect} from 'react'
import styles from './CreateLog.module.css'
import { Button, Modal } from 'react-bootstrap';
import { Pen } from 'react-bootstrap-icons'
import { useDispatch } from 'react-redux';
import { updateLog } from '../../store/actions/UserAction';

const EditLog = (props) => {
    const [logs, setLogs] = useState({
        id: "",
        logDate: "",
        hours: "",
        description: ""
    })
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch()
    let id= props.id;
    const updateLogs = () => {
        if(logs.logDate !== "" && logs.hours !== "" && logs.description !== ""){
            setShow(false)
            dispatch(updateLog(logs, id))
        }
        else{
            alert("Enter Complete Data")
        }
    }
    useEffect(() => {
        setLogs({
            id: props.id,
            logDate: props.logDate,
            hours : props.hours,
            description : props.description
        })
    }, [props])
    return (
        <div className={styles.SignUpForm}>
            <h6 variant="primary" onClick={handleShow}><Pen /></h6>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create Logs</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div>
                <div className="form-group">
                    <label>Log Date</label>
                    <input type="date" className="form-control" placeholder="Log Date"  value={logs.logDate} onChange={(e) => setLogs({...logs, logDate: e.target.value})}/>
                </div>

                <div className="form-group">
                    <label>Hours</label>
                    <input type="text" className="form-control" placeholder="Hours" value={logs.hours} onChange={(e) => setLogs({...logs, hours: e.target.value})}/>
                </div>

                <div className="form-group">
                    <label>Description</label>
                    <input type="email" className="form-control" placeholder="Description" value={logs.description} onChange={(e) => setLogs({...logs, description: e.target.value})}/>
                </div>
                </div>
                
                </Modal.Body>
                <Modal.Footer>
                <Button variant="primary" onClick={updateLogs}>
                    Update Logs
                </Button>
                
                </Modal.Footer>
            </Modal>
                </div>

    )
}

export default EditLog
