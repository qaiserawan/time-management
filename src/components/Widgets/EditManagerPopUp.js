import React, {useState, useEffect} from 'react'
import { Pen } from 'react-bootstrap-icons'
import { Button, Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { editManager } from '../../store/actions/AdminActions'


const EditManager = (props) => {
    const [manager, setManager] = useState({
        firstName: "",
        lastName : "",
        email : "",
        password: "",
        password_confirmation: ""

    })
    useEffect(() => {
        setManager({
            firstName: props.currentuser.firstName,
            lastName : props.currentuser.lastName,
            email : props.currentuser.email
        })
    }, [props.currentuser])
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let id = props.currentuser.id;

    const edManager = () => {
        if(manager.firstName !== "" && manager.lastName !== "" && manager.email !== "" && manager.password !== "" && manager.password_confirmation !== ""){
            setShow(false);
            dispatch(editManager(id, manager))
        } 
        else{
            alert("Please Enter Data!")
        }
    }
    return (
        <div className="CursorPosition">
            <h6 variant="primary" onClick={handleShow}><Pen /></h6>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Edit Manager</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div>
                    <div className="form-group">
                        <label>First name</label>
                        <input type="" className="form-control" placeholder="First name" value={manager.firstName} onChange={(e) => setManager({...manager, firstName: e.target.value})}/>
                    </div>

                    <div className="form-group">
                        <label>Last name</label>
                        <input type="" className="form-control" placeholder="Last name" value={manager.lastName} onChange={(e) => setManager({...manager, lastName: e.target.value})}/>
                    </div>

                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" placeholder="Enter email" value={manager.email} onChange={(e) => setManager({...manager, email: e.target.value})}/>
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password"  onChange={(e) => setManager({...manager, password: e.target.value})}/>
                    </div>
                    <div className="form-group">
                        <label>Confirm Password</label>
                        <input type="password" className="form-control" placeholder="Confirm password" onChange={(e) => setManager({...manager, password_confirmation: e.target.value})}/>
                    </div>
                </div>
                
                </Modal.Body>
                <Modal.Footer>
                <Button variant="primary" onClick={edManager}>
                    Update
                </Button>
                
                </Modal.Footer>
            </Modal>
                </div>

    )
}

export default EditManager
