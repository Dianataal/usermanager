import React from "react";
import styles from './AddUser.module.css'
import Card from '.components/UI/Card'
const AddUser = () => {
    return(
        <div className={styles.add_user}>
            <form>
                <label htmlFor="username">Username</label>
                <input id="username" type="text"/>
                <label htmlFor="age">Age (years)</label>
                <input id="age" type="number"/>
                <button>Add user</button>
            </form>
        </div>
    )
}

export default AddUser;