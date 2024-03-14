import React, { useState } from 'react';

const Input = ({ onAddTask }) => {
  const [task, setTask] = useState('');

  const handleChange = (event) => {
    setTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!task.trim()) return; // Evita agregar tareas vacías
    onAddTask(task);
    setTask('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={handleChange}
        placeholder="Escribe una tarea..."
      />
      <button type="submit">Agregar</button>
    </form>
  );
};

export default Input;
