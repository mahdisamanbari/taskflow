import React from 'react'
import {useState} from 'react'
function AddTaskForm() {
    const [title , setTitle]=useState('')
    const [status , setStatus]=useState('Todo')
  return (
    <form>
    <input
      type="text"
      placeholder="Task title"
      value={title}
      onChange={(event)=>setTitle(event.target.value)}
    />
 
    <select
    value={status}
    onChange={(event)=>setStatus(event.target.value)}
    >
      <option value="Todo">Todo</option>
      <option value="In Progress">In Progress</option>
      <option value="Done">Done</option>
    </select>

    <button type="submit">
      Add Task
    </button>
  </form>
  )
}

export default AddTaskForm