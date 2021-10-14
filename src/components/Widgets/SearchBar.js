import React from 'react'
import styles from './SearchBar.module.css'

const SearchBar = () => {
    return (
        <div>
            <div className={styles.SearchBar}>
                <input type="text" placeholder="Search" />
            </div>
        </div>
    )
}

export default SearchBar
