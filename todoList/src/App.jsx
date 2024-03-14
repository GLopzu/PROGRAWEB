import React, { useState, useEffect } from 'react';
import Input from './body/form/inPut/inPut';
import List from './body/list/list';
import ClearBtn from './body/form/clearBtn/clearBtn';
import FilterButtons from './body/form/filterBtn/filterBtn';

const App = () => {
  const initialTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const [tasks, setTasks] = useState(initialTasks);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (text) => {
    const newTask = { text, isCompleted: false };
    setTasks(prevTasks => [newTask, ...prevTasks]);
  };

  const handleToggle = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].isCompleted = !updatedTasks[index].isCompleted;
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const handleDelete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const handleClearCompletedTasks = () => {
    const updatedTasks = tasks.filter(task => !task.isCompleted);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') {
      return task.isCompleted;
    } else if (filter === 'pending') {
      return !task.isCompleted;
    } else {
      return true;
    }
  });

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <Input onAddTask={handleAddTask} />
      <FilterButtons filter={filter} setFilter={setFilter} />
      <List tasks={filteredTasks} onToggle={handleToggle} onDelete={handleDelete} />
      <ClearBtn tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default App;
