import React from "react";
import styles from './AddUser.module.css'
import Card from '../UI/Card'
const AddUser = (props) => {
    const addUserHandler = (event) => {
        event.preventDefault()
    }

    return(
        <div className={styles.add_user}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text"/>
                <label htmlFor="age">Age (years)</label>
                <input id="age" type="number"/>
                <button type="submit">Add user</button>
            </form>
        </div>
    )
}

export default AddUser;