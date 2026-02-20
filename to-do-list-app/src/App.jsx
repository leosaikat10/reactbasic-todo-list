import { useState } from "react"
import "./App.css"

function App() {
  // State to hold the current task input
  const [task, setTask] = useState("");

  //State for task list
  const [tasks, setTasks] = useState([]);

  // Function to handle adding a new task
  const addTask = () => {
    if (task.trim() !== "") 
      setTasks([...tasks, task]);
      setTask(""); // Clear the input field after adding the task
    };

    // delete task handler
    const deleteTask = (index) => {
      const newTasks = tasks.filter((_, i) => i !== index);
      setTasks(newTasks);
    };

  return (
    <div className="App">
        <div className="app-container">
          <div className="heading"><h1>To-Do List App</h1>
          <p>Manage your tasks efficiently</p>
          </div>
          <div className="input-section">
           <input id="task-input" className="task-input" type="text" placeholder="Add a new task..."  value={task} onChange={(e)=> setTask(e.target.value)}/>
           <button onClick={addTask}>Add Task</button>  
          </div>
          <ul className="task-list">
            {tasks.map((task, index) => (
              <li key={index} className="task-item">
                {task}
                <button className="delete-button" onClick={() => deleteTask(index)}>❌</button>
              </li>
            ))}
          </ul>

        </div>
    </div>
  )
}

export default App