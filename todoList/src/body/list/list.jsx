import React from 'react';
import ToggleBtn from '../form/toggleBtn/toggleBtn';

const List = ({ tasks, onToggle, onDelete }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index} style={{ textDecoration: task.isCompleted ? 'line-through' : 'none' }}>
          {task.text}
          <ToggleBtn
            isCompleted={task.isCompleted}
            onClick={() => onToggle(index)}
          />
          <button onClick={() => onDelete(index)}>X</button>
        </li>
      ))}
    </ul>
  );
};

export default List;
