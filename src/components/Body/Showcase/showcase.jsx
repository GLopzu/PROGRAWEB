import React from 'react';
import './showcase.css';

const Showcase = () => {
  return (
    <div className="showcase-container">
      <div className="showcase-content">
        <div className="showcases">
          <img src="/src/assets/showcase1.jpg" className="showcase" />
          <img src="/src/assets/showcase2.jpg" className="showcase" />
          <img src="/src/assets/showcase3.jpg" className="showcase" />
        </div>
        <div className="logo-text">
          <img src="/src/assets/logo_white.png" className="logo-showcase" />
          <div className="text">It's All Here</div>
          <button className="button-showcase">SIGN UP NOW</button>
        </div>
      </div>
    </div>
  );
}

export default Showcase;
