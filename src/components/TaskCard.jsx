import { MdDelete } from "react-icons/md";
import styles from "./TaskCard.module.css";

function TaskCard({ title, status, onDelete }) {
  const statusClass = {
    Todo: styles.todo,
    "In Progress": styles.inProgress,
    Done: styles.done,
  };

  return (
    <article className={styles.card}>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>

        <span className={`${styles.status} ${statusClass[status]}`}>
          {status}
        </span>
      </div>

      <button
        className={styles.deleteButton}
        type="button"
        onClick={onDelete}
        aria-label={`Delete ${title}`}
      >
        <MdDelete />
      </button>
    </article>
  );
}

export default TaskCard;