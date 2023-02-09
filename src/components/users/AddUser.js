import React, { useState } from "react";
import styles from './AddUser.module.css'
import Card from "../UI/Card";
import Button from "../UI/Button";

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value)
    };
    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value)
    };


    const addUserHandler = (event) => {
        setEnteredAge(event.target.value)
    }

    return(
        <Card className={styles.add_user}>
            <form onSubmit={addUserHandler}>
                <label htmlFor='username'>Username</label>
                <input
                    id='username'
                    type='text'
                    value={enteredUsername}
                    onChange={usernameChangeHandler}
                />
                <label htmlFor='age'>Age (Years)</label>
                <input id='age'
                       type='number'
                       value={enteredAge}
                       onChange={ageChangeHandler}
                />
                <Button type='submit'>Add User</Button>
            </form>
        </Card>
    )
}

export default AddUser