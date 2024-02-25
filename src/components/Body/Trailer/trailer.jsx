import React from 'react';
import './trailer.css';

const Trailer = () => {
  return (
    <div className="trailer-container">
      <div className="video-wrapper">
        <iframe 
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/vc3saE9MgIo?si=n7JFsJL-PM24QCCe" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowFullScreen
        ></iframe>
      </div>
      <div className="info-wrapper">
        <h2>THE LAST CHAPTER | AVAILABLE NOW</h2>
        <h3>John Wick: Chapter 5</h3>
        <p>New installment of the John Wick franchise, starring Keanu Reeves, in which we once again have the unstoppable hitman facing a new enemy. To face it he will have to propose powerful alliances around the world, and he will see how old friends become enemies.</p>
        <button>FIND OUT MORE &gt;</button>
      </div>
    </div>
  );
};

export default Trailer;
