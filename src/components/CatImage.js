import React from 'react';

const CatImage = ({ imageUrl, altText }) => {
  return (
    <div>
      <img src={imageUrl} alt={altText} />
    </div>
  );
};

export default CatImage;
