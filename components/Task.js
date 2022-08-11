import React from "react";
import styles from "../styles/Home.module.css"

const Task = ({index, item, handleBacklog, handleActive, handleReview, handleResolved}) => {
    const {title, status} = item;

    return (
        <div className={styles.task}>
        <h5>{title} {status}</h5>
        <button onClick={() => handleBacklog}>Backlog</button>
        <button onClick={() => handleActive}>Active</button>
        <button onClick={() => handleReview}>Review</button>
        <button onClick={() => handleResolved}>Resolved</button>
        </div>
    )
}

export default Task;