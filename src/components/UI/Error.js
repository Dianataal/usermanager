import React from "react";
import Card from "./Card";
import Button from "./Button";

import styles from "./Error.module.css"

const Error = (props) => {
    return (
        <div>
            <Card>
                <header className={styles.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={styles.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={styles.footer}>
                    <button>OK</button>
                </footer>
            </Card>
        </div>
    )
}

export default Error