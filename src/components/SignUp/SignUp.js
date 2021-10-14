import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { SignUpManager } from '../../store/actions/ManagerActions';
import { useHistory } from 'react-router';
import "./Signup.module.css"



const SignUp = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const [manager, setManager] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password_confirmation: ""
  }) 

  const createManager = () => {
    if(manager.firstName !== "" && manager.lastName !== "" && manager.email !== "" && manager.password !== ""){
      setShow(false);
      dispatch(SignUpManager(manager, history))
    }
    else {
      alert("Enter Data")
    }
  }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className="CursorPosition">
            <i variant="primary" onClick={handleShow}>Create Manager</i>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Manager</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div>
          <div className="form-group">
              <label>First name</label>
              <input type="text" className="form-control" placeholder="First name" onChange={(e) => setManager({...manager, firstName:e.target.value})}/>
          </div>

          <div className="form-group">
              <label>Last name</label>
              <input type="text" className="form-control" placeholder="Last name" onChange={(e) => setManager({...manager, lastName:e.target.value})}/>
          </div>

          <div className="form-group">
              <label>Email address</label>
              <input type="email" className="form-control" placeholder="Enter email" onChange={(e) => setManager({...manager, email:e.target.value})}/>
          </div>

          <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" placeholder="Enter password" onChange={(e) => setManager({...manager, password:e.target.value})}/>
          </div>
          <div className="form-group">
              <label>Confirm Password</label>
              <input type="password" className="form-control" placeholder="Enter password" onChange={(e) => setManager({...manager, password_confirmation:e.target.value})}/>
          </div>
        </div>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={createManager}>
            Save Changes
          </Button>
          <p className="forgot-password text-right AlreadyAccount" onClick={handleClose}>
              Already registered <i>sign in?</i>
          </p>
        </Modal.Footer>
      </Modal>
        </div>
    )
}

export default SignUp
