import React, { useState } from 'react'
// import styles from './SignIn.module.css'
import { Button, Modal } from 'react-bootstrap';
import SignUp from '../SignUp/SignUp';

const SignIn = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
        Login
      </Button>
      

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
        Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
        <SignUp />
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    )
}

export default SignIn
