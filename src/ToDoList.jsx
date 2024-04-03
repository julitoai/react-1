// ponerle estilos a la shit

import "./ToDoList.css";
import { useEffect, useRef, useState } from "react";

function ToDoList() {
  const [task, setTask] = useState([
    "Pasear al perro",
    "Dar de comer al perro",
    "Dormir al perro",
  ]);
  const [newTask, setNewTask] = useState("");

  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      setTask((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTask((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function handleInputChange(e) {
    setNewTask(e.target.value);
  }

  function deleteTask(index) {
    const updatedTasks = task.filter((_, i) => i !== index);
    setTask(updatedTasks);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTask = [...task];
      [updatedTask[index], updatedTask[index - 1]] = [
        updatedTask[index - 1],
        updatedTask[index],
      ];
      setTask(updatedTask);
    }
  }
  function moveTaskDown(index) {
    if (index < task.length - 1) {
      const updatedTask = [...task];
      [updatedTask[index], updatedTask[index + 1]] = [
        updatedTask[index + 1],
        updatedTask[index],
      ];
      setTask(updatedTask);
    }
  }

  return (
    <div className="container-container">
      <div className="container-todo">
        <h1>To-Do-List</h1>
        <div>
          <input
            type="text"
            placeholder="Ingresa una tarea..."
            value={newTask}
            onChange={handleInputChange}
            onKeyUp={handleKeyUp}
          />

          <button className="add-button" onClick={addTask} >
            Agregar
          </button>
        </div>
        <ol>
          {task.map((task, index) => (
            <li key={index}>
              <span className="text">{task}</span>
              <button
                className="delete-button"
                onClick={() => deleteTask(index)}
              >
                Borrar
              </button>
              <button className="move-button" onClick={() => moveTaskUp(index)}>
                Arriba
              </button>
              <button
                className="move-button"
                onClick={() => moveTaskDown(index)}
              >
                Abajo
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default ToDoList;
