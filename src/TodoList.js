 import React, { useState } from "react";

function TodoList() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: task, done: false }]);
    setTask("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, done: !t.done } : t
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <section className="card">
      <h2>Todo List ✅</h2>

      <form onSubmit={addTask} className="todo-form">
        <input
          type="text"
          placeholder="Add a new task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="todo-input"
        />
        <button type="submit" className="btn primary">
          Add
        </button>
      </form>

      {tasks.length === 0 ? (
        <p className="todo-empty">No tasks yet. Add one!</p>
      ) : (
        <ul className="todo-list">
          {tasks.map((t) => (
            <li key={t.id} className="todo-item">
              <span
                onClick={() => toggleTask(t.id)}
                className={t.done ? "todo-text done" : "todo-text"}
              >
                {t.text}
              </span>
              <button
                className="btn danger btn-small"
                onClick={() => deleteTask(t.id)}
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default TodoList;
