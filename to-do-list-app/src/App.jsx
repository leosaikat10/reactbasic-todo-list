import { useState } from "react"
import "./App.css"

function App() {
  return (
    <div className="App">
        <div className="app-container">
          <div className="heading"><h1>To-Do List App</h1>
          <p>Manage your tasks efficiently</p>
          </div>
          <input id="task-input" className="task-input" type="text" placeholder="Add a new task..." /><button>Add Task</button>
        </div>
    </div>
  )
}

export default App