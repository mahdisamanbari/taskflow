import React from 'react'
import TaskList from "../components/TaskList";
import AddTaskForm from '../components/AddTaskForm';
const tasks = [
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
  ];
  
function Dashboard() {
  return (
    <>
    <h1>Dashboard</h1>
    <AddTaskForm />
    <TaskList tasks={tasks} />
  </>
  )
}

export default Dashboard