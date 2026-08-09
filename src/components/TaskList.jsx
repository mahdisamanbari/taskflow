import TaskCard from "./TaskCard";

function TaskList({ tasks, onDelete , onEdit}) {
  return (
    <>
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          title={task.title}
          status={task.status}
          onDelete={() => onDelete(task.id)}
          onEdit = {()=>onEdit(task)}
        />
      ))}
    </>
  );
}

export default TaskList;