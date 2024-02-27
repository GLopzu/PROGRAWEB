import React, { useState } from 'react';
import logo from '../../../assets/logo.png';
import hamIcon from '../../../assets/hammenu-02.png';
import './navbar.css';
import HamMenu from '../../HamMenu/hammenu';
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='sticky-container'>
      <div className="navbar">
        <div className='ham-menu-icon'>
          <button className='ham-btn' onClick={toggleMenu}><img src={hamIcon} alt='hamIcon'/></button>
        </div>
        <div className='navbar-logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className='btn-container' style={{ display: menuOpen ? 'none' : 'flex' }}>
          <button className="navbar-btn">SERIES</button>
          <button className="navbar-btn">MOVIES</button>
          <button className="navbar-btn">NEW</button>
          <button className="navbar-btn">SCHEDULE</button>
          <button className="navbar-btn">FREE EP</button>
          <button className="navbar-btn">MORE</button>
        </div>
        <div className='sign-btn-container'>
          <button className="sign-in-btn">SIGN IN</button>
          <button className="sign-up-btn">SIGN UP</button>
        </div>
      </div>
      {menuOpen && <HamMenu  onClick={toggleMenu}/>}
    </div>
  );
};

export default Navbar;
