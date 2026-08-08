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
  return (
    <>
    <h1>Dashboard</h1>
    <AddTaskForm onAddTask={handleAddTask} />
    <TaskList tasks={tasks} />
  </>
  )
}

export default Dashboard