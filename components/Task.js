import React, { useState } from "react";
import styles from "../styles/Home.module.css";

const Task = ({ item, handleFunction, handleRemove }) => {
  const { title, description, status, uid } = item;

  const taskID = 1000 + uid;

  const setTaskColor = status => {
    if (status == "backlog") {
      return styles.backlogDot;
    } else if (status == "active") {
      return styles.activeDot;
    } else if (status == "review") {
      return styles.reviewDot;
    } else if (status == "resolved") {
      return styles.resolvedDot;
    }
  };

  return (
    <div className={styles.task}>
      <form>
        <label for="status">State: </label>
        <select
          value={status}
          name="status"
          id="status"
          onChange={e => handleFunction(e, uid)}
        >
          <option value="backlog" status="backlog">
            Backlog
          </option>
          <option value="active" status="active">
            Active
          </option>
          <option value="review" status="review">
            Review
          </option>
          <option value="resolved" status="resolved">
            Resolved
          </option>
        </select>
      </form>
      <h5>
        Task ID: {taskID} <span className={setTaskColor(status)}></span>
      </h5>
      <h5>Task: {title}</h5>
      {description.length >= 1 ? <p>Description: {description}</p> : ""}
      <button onClick={() => handleRemove(uid)}>Close Task</button>
    </div>
  );
};

export default Task;
