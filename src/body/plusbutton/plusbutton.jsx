import React from 'react';
import './plusbutton.css'

function PlusBtn({ handleClick }) {
  return (
    <button className="plus-btn" onClick={handleClick}></button>
  );
}

export default PlusBtn;
