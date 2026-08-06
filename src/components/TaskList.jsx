import TaskCard from "./TaskCard";

function TaskList({ tasks }) {
  return (
    <>
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          title={task.title}
          status={task.status}
        />
      ))}
    </>
  );
}

export default TaskList;