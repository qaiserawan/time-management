import React, {useEffect, useState} from 'react'
import styles from './CreateLog.module.css'
import { Button, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Trash } from 'react-bootstrap-icons'
import { deleteUser } from '../../store/actions/AdminActions';

const DeleteUserPopUp = ({id,handlecloseId}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => {
        handlecloseId()
    setShow(false)
    }
    const handleShow = () => setShow(true);
    const dispatch = useDispatch()
    const deletedUser = () => {
        handlecloseId()
        setShow(false)
        dispatch(deleteUser(id))
    }
    useEffect(()=>{
 if(id)
    setShow(true)
    },[id])
    return (
        <div className={styles.SignUpForm}>
            <h6 variant="primary" onClick={handleShow}><Trash /></h6>
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
                <Button variant="primary" onClick={deletedUser}>
                    Delete
                </Button>
                
                </Modal.Footer>
            </Modal>
                </div>

    )
}

export default DeleteUserPopUp
