import React, {useState} from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { createUsers } from '../../store/actions/UserAction'


const CreateUser = () => {
    const [user, setUser] = useState({
        firstName: "",
        lastName : "",
        email : "",
        password: "",
        password_confirmation: "",
        userType: "user"

    })
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const createUser = () => {
        if(user.firstName !== "" && user.lastName !== "" && user.email !== "" && user.password !== "" && user.confirmPassword !== ""){
            setShow(false);
            dispatch(createUsers(user))
        } 
        else{
            alert("Please Enter Data!")
        }
    }
    return (
        <div className="CursorPosition">
            <i variant="primary" onClick={handleShow}>Create User</i>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Create User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div>
                    <div className="form-group">
                        <label>First name</label>
                        <input type="" className="form-control" placeholder="First name" onChange={(e) => setUser({...user, firstName: e.target.value})}/>
                    </div>

                    <div className="form-group">
                        <label>Last name</label>
                        <input type="" className="form-control" placeholder="Last name" onChange={(e) => setUser({...user, lastName: e.target.value})}/>
                    </div>

                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" placeholder="Enter email" onChange={(e) => setUser({...user, email: e.target.value})}/>
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" onChange={(e) => setUser({...user, password: e.target.value})}/>
                    </div>
                    <div className="form-group">
                        <label>Confirm Password</label>
                        <input type="password" className="form-control" placeholder="Confirm password" onChange={(e) => setUser({...user, password_confirmation: e.target.value})}/>
                    </div>
                </div>
                
                </Modal.Body>
                <Modal.Footer>
                <Button variant="primary" onClick={createUser}>
                    Create
                </Button>
                
                </Modal.Footer>
            </Modal>
                </div>

    )
}

export default CreateUser
