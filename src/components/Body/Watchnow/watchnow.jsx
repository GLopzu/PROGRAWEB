import React from 'react';
import './watchnow.css';
import tokio from '../../../assets/img1.jpg';

function Watchnow() {
  return (
    <div className="container">
      <img src={tokio} alt="Descripción de la imagen" className="image" />
      <div className="text-container">
        <h5>AVAILABLE NOW</h5>
        <h1>Tokyo vice season 2</h1>
        <p>He wants to immerse himself in the real Tokyo. His secrets will drown him.</p>
        <div className="buttons-container">
          <button className="trailer-button">
          ▷ WATCH THE TRAILER</button>
          <button className="more-button">FIND OUT MORE</button>
        </div>
      </div>
    </div>
  );
}

export default Watchnow;
