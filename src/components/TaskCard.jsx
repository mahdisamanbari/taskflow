function TaskCard({ title, status }) {
    return (
      <div>
        <h3>{title}</h3>
        <p>{status}</p>
      </div>
    );
  }
  
  export default TaskCard;