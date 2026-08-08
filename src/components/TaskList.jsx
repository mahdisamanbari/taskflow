import TaskCard from "./TaskCard";

function TaskList({ tasks, onDelete }) {
  return (
    <>
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          title={task.title}
          status={task.status}
          onDelete={() => onDelete(task.id)}
        />
      ))}
    </>
  );
}

export default TaskList;