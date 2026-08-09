import React from 'react'
import TaskList from "../components/TaskList";
import AddTaskForm from '../components/AddTaskForm';
import { useState } from 'react';

  
function Dashboard() {
  function handleAddTask(newTask) {
    setTasks((currentTasks) => [
      ...currentTasks,
      newTask,
    ]);
  }
  function handleDeleteTask(taskId) {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.id !== taskId)
    );
  }
  const [editingTask, setEditingTask] = useState(null);
  const [tasks , setTasks]=useState([
    {
      id: 1,
      title: "Learn React",
      status: "In Progress",
    },
    {
      id: 2,
      title: "Build TaskFlow",
      status: "Todo",
    },
    {
      id: 3,
      title: "Push to GitHub",
      status: "Done",
    },
  ])
  function handleEditTask(task) {
    setEditingTask(task);
  }
  return (
    <>
    <h1>Dashboard</h1>
    <AddTaskForm onAddTask={handleAddTask} />
    <TaskList
      tasks={tasks}
      onDelete={handleDeleteTask}
      onEdit={handleEditTask}
      />
      {editingTask && (
        <p>
        Editing: {editingTask.title}
        </p>
      )}
  </>
  )
}

export default Dashboard