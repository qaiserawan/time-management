import React from 'react'
import styles from './UserCard.module.css'
import EditLog from '../Widgets/EditLogPopUp';
import UpdateTime from '../Widgets/UpdateLogTime';

const UserCard = (props) => {
    
    return (
        <div className={styles.UserCards}>
            <div className={props.color === 'red' ? styles.UserCard : styles.UserCard1}>
                <div className={styles.CardHead}>
                    {props.date}
                </div>
                <div className={styles.CardBreaker}></div>
                <div className={styles.Cardody}>
                    {props.description}
                </div>
                <div className={styles.CardBreaker}></div>
                <div className={styles.CardFoot}>
                    <div className={styles.Time}>
                        <div className={styles.UserTime}>
                            <UpdateTime time={props.time}/> 
                        </div>
                        <span>{props.time} hrs</span>
                    </div>
                    
                    <div className={styles.EditUser}>
                        <i ><EditLog id={props.id} logDate={props.date} description={props.description} hours={props.time}/></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserCard
