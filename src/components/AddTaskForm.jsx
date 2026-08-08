import React from 'react'
import {useState} from 'react'
import styles from "./AddTaskForm.module.css";
function AddTaskForm({onAddTask}) {
    const [title , setTitle]=useState('')
    const [status , setStatus]=useState('Todo')
    const [error, setError] = useState("");
    function handleSubmit(event) {
        event.preventDefault();
        if (!title.trim()) {
      setError("Task title is required.");
      return;
    }
    
        const newTask = {
          id: Date.now(),
          title,
          status,
        };
    
        onAddTask(newTask);
    
        setTitle("");
        setStatus("Todo");
        setError("");
    }


  return (
    <form className={styles.form} onSubmit={handleSubmit}>
    <div className={styles.inputGroup}>
      <input
        className={styles.input}
        type="text"
        placeholder="What needs to be done?"
        value={title}
        onChange={(event) => {
          setTitle(event.target.value);
          setError("");
        }}
      />

      {error && <p className={styles.error}>{error}</p>}
    </div>

    <select
      className={styles.select}
      value={status}
      onChange={(event) => setStatus(event.target.value)}
    >
      <option value="Todo">Todo</option>
      <option value="In Progress">In Progress</option>
      <option value="Done">Done</option>
    </select>

    <button className={styles.button} type="submit">
      Add Task
    </button>
  </form>
  )
}

export default AddTaskForm