import { useEffect, useState } from "react";
import styles from "./EditTaskForm.module.css";
function EditTaskForm({ task, onSave, onCancel }) {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("Todo");
  const [error, setError] = useState("");

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setStatus(task.status);
      setError("");
    }
  }, [task]);

  function handleSubmit(event) {
    event.preventDefault();

    if (!title.trim()) {
      setError("Task title is required.");
      return;
    }

    onSave({
      ...task,
      title: title.trim(),
      status,
    });
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.inputGroup}>
        <input
          className={styles.input}
          type="text"
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
  
      <button className={styles.saveButton} type="submit">
        Save
      </button>
  
      <button
        className={styles.cancelButton}
        type="button"
        onClick={onCancel}
      >
        Cancel
      </button>
    </form>
  );
}

export default EditTaskForm;