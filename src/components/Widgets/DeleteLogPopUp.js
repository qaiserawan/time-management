import React, {useState} from 'react'
import styles from './CreateLog.module.css'
import { Button, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

const DeleteLogPopUp = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch()
    const deleteLog = () => {
            // dispatch(createLogs(logs))
    }
    return (
        <div className={styles.SignUpForm}>
            <h6 variant="primary" onClick={handleShow}>Delete Log</h6>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Log</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div>
                    <p>Are you sure?</p>
                </div>
                
                </Modal.Body>
                <Modal.Footer>
                <Button variant="primary" onClick={deleteLog}>
                    Delete
                </Button>
                
                </Modal.Footer>
            </Modal>
                </div>

    )
}

export default DeleteLogPopUp
