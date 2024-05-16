
import React from 'react';

const Favorites = ({ favorites }) => {
  return (
    <div>
      <h2>Favorites</h2>
      <div className="grid">
        {favorites.map((gif) => (
          <div key={gif.id} className="gif-card">
            <img src={gif.images.fixed_height.url} alt={gif.title} />
            <p>{gif.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
