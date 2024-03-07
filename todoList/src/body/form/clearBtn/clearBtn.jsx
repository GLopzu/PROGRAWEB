import React from 'react';

const ClearBtn = () => {
  const handleClearTasks = () => {
    localStorage.removeItem('tasks');
  };

  return (
    <button onClick={handleClearTasks}>Borrar Todo</button>
  );
};

export default ClearBtn;
