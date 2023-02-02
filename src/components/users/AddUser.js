import React from "react";

import {styles} from '.AddUser.module.css'
const AddUser = () => {
    return(
        <div style={styles.add_user}>
            <form>
                <label htmlFor="username">Username</label>
                <input id="username" type="text"/>
                <label htmlFor="age">Age (years)</label>
                <input id="age" type="number"/>
            </form>
        </div>
    )
}

export default AddUser;