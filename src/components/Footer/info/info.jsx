import React from 'react';
import './info.css';
import logo from '../../../assets/logo3.png';

const Info = () => {
  return (
    <div className="info-container">
      <div className="info-text">
        <img src={logo} alt="Logo" className="logo-info" />
        <div className="buttons-row">
          <button className="nav-button">ABOUT</button>
          <button className="nav-button">GET WAV</button>
          <button className="nav-button">HELP</button>
          <button className="nav-button">SHOP</button>
          <button className="nav-button">CAREERS</button>
          <button className="nav-button">WAV INSPIRES</button>
          <button className="nav-button how-to-watch-button">HOW TO WATCH WAV</button>
        </div>
        <div className="footer-links">
          <button className="footer-link">Privacy Policy</button>
          <button className="footer-link">Terms of Use</button>
          <button className="footer-link">Ad Choices</button>
          <button className="footer-link">Edit Preferences</button>
        </div>
        <p className="copyright">
          © 2024 With Another Vibes, Inc. All Rights Reserved.
        </p>
        <p className="mature-content">
          This website may contain mature content.
        </p>
      </div>
    </div>
  );
}

export default Info;
