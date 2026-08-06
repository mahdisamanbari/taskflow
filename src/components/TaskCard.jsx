import styles from '../components/TaskCard.module.css'
function TaskCard({ title, status }) {
    return (
    <article className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.status}>{status}</p>
    </article>
    );
  }
  
  export default TaskCard;