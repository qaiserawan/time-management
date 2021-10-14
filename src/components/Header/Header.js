import React from 'react'
import styles from './Header.module.css'
import logo from '../../assets/img/logo.png'
import Logout from '../Widgets/Logout'

const Header = () => {
    const isLoggedIn = true
    var login;
    // var searchBar;
    if(isLoggedIn === true){
        // searchBar = <SearchBar />
        login =  <Logout />
    }
    else{
        
    }

    return (
        <div>
        <div className={styles.Nav}>
            <div className="container">
                <nav>
                    <div className={styles.NavWrapper}>
                        <div className={styles.Logo}>
                            <img src={logo} alt="Logo" />
                        </div>
                        {login}
                    </div>
                </nav>
            </div>
        </div>
        <div>
            
        </div>
        </div>
    )
}

export default Header
