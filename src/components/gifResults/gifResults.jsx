import React from 'react';

const GifResults = ({ loading, results, addToFavorites }) => {
  return (
    <div>
      {loading && <div>Loading...</div>}
      <div className="grid-container">
        {results.map((gif) => (
          <div key={gif.id} className="gif-card">
            <img src={gif.images.fixed_height.url} alt={gif.title} />
            <p>{gif.title}</p>
            <button  className= "fav" onClick={() => addToFavorites(gif)}>Add to ❤️</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GifResults;
