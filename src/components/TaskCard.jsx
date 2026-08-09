import { MdDelete,MdEdit } from "react-icons/md";
import styles from "./TaskCard.module.css";

function TaskCard({ title, status, onDelete ,onEdit }) {
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

      <div className={styles.actions}>
        <button
          className={styles.editButton}
          type="button"
          onClick={onEdit}
          aria-label={`Edit ${title}`}
        >
          <MdEdit />
        </button>

        <button
          className={styles.deleteButton}
          type="button"
          onClick={onDelete}
          aria-label={`Delete ${title}`}
        >
          <MdDelete />
        </button>
      </div>
    </article>
  );
}

export default TaskCard;