import React from 'react';

const ClearBtn = ({ tasks, setTasks }) => {
  const handleClearCompletedTasks = () => {
    const updatedTasks = tasks.filter(task => !task.isCompleted);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  return (
    <button onClick={handleClearCompletedTasks} type='button'>Borrar Completadas</button>
  );
};

export default ClearBtn;
