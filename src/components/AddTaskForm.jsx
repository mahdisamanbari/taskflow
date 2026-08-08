import React from 'react'
import {useState} from 'react'
function AddTaskForm({onAddTask}) {
    const [title , setTitle]=useState('')
    const [status , setStatus]=useState('Todo')
    function handleSubmit(event) {
        event.preventDefault();
    
        const newTask = {
          id: Date.now(),
          title,
          status,
        };
    
        onAddTask(newTask);
    
        setTitle("");
        setStatus("Todo");
    }


  return (
    <form onSubmit={handleSubmit}>
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