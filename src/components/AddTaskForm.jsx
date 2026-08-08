import React from 'react'
import {useState} from 'react'
function AddTaskForm({onAddTask}) {
    const [title , setTitle]=useState('')
    const [status , setStatus]=useState('Todo')
    const [error, setError] = useState("");
    function handleSubmit(event) {
        event.preventDefault();
        if (!title.trim()) {
      setError("Task title is required.");
      return;
    }
    
        const newTask = {
          id: Date.now(),
          title,
          status,
        };
    
        onAddTask(newTask);
    
        setTitle("");
        setStatus("Todo");
        setError("");
    }


  return (
    <form onSubmit={handleSubmit}>
    <input
      type="text"
      placeholder="Task title"
      value={title}
      onChange={(event)=>{
        setTitle(event.target.value);
        setError("");
    }}
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
    {error && <p>{error}</p>}
  </form>
  )
}

export default AddTaskForm