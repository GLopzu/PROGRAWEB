import React, { useState, useEffect } from 'react';
import Input from './body/form/inPut/inPut';
import List from './body/list/list';
import ClearBtn from './body/form/clearBtn/clearBtn';

const App = () => {
  const initialTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const [tasks, setTasks] = useState(initialTasks);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]); 

  const handleAddTask = (task) => {
    setTasks(prevTasks => [task, ...prevTasks]);
  };
  
  return (
    <div>
      <h1>Lista de Tareas</h1>
      <Input onAddTask={handleAddTask} />
      <List tasks={tasks} />
      <ClearBtn />
    </div>
  );
};

export default App;
