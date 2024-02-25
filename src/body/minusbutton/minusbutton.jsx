
import React from 'react';
import './minusbutton.css'

function MinusBtn({ handleClick, disabled }) {
    return (
      <button className="minus-btn" onClick={handleClick} disabled={disabled}></button>
    );
  }
  
  export default MinusBtn;
