import styles from "./TaskCard.module.css";

function TaskCard({ title, status, onDelete }) {
  const statusClass = {
    Todo: styles.todo,
    "In Progress": styles.inProgress,
    Done: styles.done,
  };

  return (
    <article className={styles.card}>
      <h3 className={styles.title}>{title}</h3>

      <span className={`${styles.status} ${statusClass[status]}`}>
        {status}
      </span>

      <button
        type="button"
        onClick={onDelete}
      >
        Delete
      </button>
    </article>
  );
}

export default TaskCard;