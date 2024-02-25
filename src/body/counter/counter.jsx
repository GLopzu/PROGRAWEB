import React from 'react';
import './counter.css';

function Counter({ count }) {
  return (
    <div className="counter">
      <p>Contador: <span className="counter-value">{count}</span></p>
    </div>
  );
}

export default Counter;