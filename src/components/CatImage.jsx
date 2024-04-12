import React from 'react';

const CatImage = ({ imageUrl }) => {
  return (
    <div className="cat-image-container">
      <img src={imageUrl} alt="Cat" />
    </div>
  );
};

export default CatImage;
