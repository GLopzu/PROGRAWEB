import React from 'react';

const CatData = ({ catData }) => {
  return (
    <div className='cat-data' >
      <p id='mew-facts'>Mew Facts</p>
      <p id='data'>{catData}</p>
    </div>
  );
};

export default CatData;
