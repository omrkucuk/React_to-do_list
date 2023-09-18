import React, { useState } from "react";
import "./styles/styles.css";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editingIndex, setEditingIndex] = useState(-1);
  const [editedTask, setEditedTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return; 
    setTasks([...tasks, { text: newTask, completed: false }]);
    setNewTask("");
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const toggleCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const editTask = (index) => {
    setEditingIndex(index);
    setEditedTask(tasks[index].text);
  };

  const updateTask = () => {
    if (editedTask.trim() === "") return; 
    const updatedTasks = [...tasks];
    updatedTasks[editingIndex].text = editedTask;
    setTasks(updatedTasks);
    setEditingIndex(-1); 
    setEditedTask(""); 
  };

  return (
    <div className="todo-container">
      <h1 className="todo-title">To-Do List</h1>
      <div className="todo-input-container">
        <input
          className="todo-input first"
          type="text"
          placeholder="Yeni görev ekle"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button className="todo-button new" onClick={addTask}>
          Ekle
        </button>
      </div>
      <ul className="todo-list">
        {tasks.map((task, index) => (
          <li key={index} className="todo-list-item">
            <input
              className="todo-checkbox"
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleCompletion(index)}
            />
            {editingIndex === index ? (
              <input
                className="todo-input"
                type="text"
                value={editedTask}
                onChange={(e) => setEditedTask(e.target.value)}
              />
            ) : (
              <span
                className={`todo-text ${task.completed ? "completed" : ""}`}
              >
                {task.text}
              </span>
            )}
            {editingIndex === index ? (
              <button className="todo-button update" onClick={updateTask}>
                Güncelle
              </button>
            ) : (
              <button
                className="todo-button edit"
                onClick={() => editTask(index)}
              >
                Düzenle
              </button>
            )}
            <button
              className="todo-button delete"
              onClick={() => deleteTask(index)}
            >
              Sil
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
