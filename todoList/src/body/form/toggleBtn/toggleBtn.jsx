import React from 'react';

const ToggleBtn = ({ isCompleted, onClick }) => {
  return (
    <button onClick={onClick}>
      {isCompleted ? 'Pendiente' : 'Completada'}
    </button>
  );
};

export default ToggleBtn;
