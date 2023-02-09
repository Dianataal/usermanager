import React, { useState } from "react";
import styles from './AddUser.module.css'
import Card from "../UI/Card";
import Button from "../UI/Button";

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [Error, setError] = useState()

    const usernameChangeHandler = (event) => {
        event.preventDefault()
        setEnteredUsername(event.target.value)
    };

    //ok siin läks kõik metsa mingid asjad jäid puudu
    //username vajab pikka asja juurde
    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value)
    };


    const addUserHandler = (event) => {
        //siia ka midagi
        setEnteredAge(event.target.value)
    }

    return(
        <div>
        <Error title="Error occurred!" message="Something is wrong!"/>
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
        </div>
    )
}

export default AddUser