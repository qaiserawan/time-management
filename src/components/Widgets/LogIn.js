import React, { useState } from 'react'
import SignUp from '../SignUp/SignUp'
import styles from './LogIn.module.css'
import { useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom";
import allActions from '../../store/actions/index'

const LogIn = () => {
    const dispatch = useDispatch()
    let history = useHistory()
    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    const signIn = () => {
        if(user.email !== "" && user.password !== ""){
            dispatch(allActions.LogInUser(user, history))
        }
        else{
            alert("Please Enter your data")
        }
    }
    return (
        <div>
            <div className={styles.Body}>
                <div class="container">
                    <div className={styles.Card}>
                        <div className={styles.LogInCard}>
                            <div className={styles.LogInHeader}>
                                <h4>SignIn</h4>
                            </div>
                            <div className={styles.LogInBody}>
                                <div >
                                    <input type="text" placeholder="email" onChange= {(e) => setUser({...user, email:e.target.value})}/>
                                </div>
                                <div >
                                    <label>
                                        
                                    </label><br />
                                    <input type="text" placeholder="password" onChange= {(e) => setUser({...user, password:e.target.value})}/>
                                </div>
                            </div>
                            <div className={styles.LogInFooter}>
                                <div className={styles.LogInBtn}>
                                    <button onClick={signIn}>LogIn</button> <br />
                                    <SignUp />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LogIn
