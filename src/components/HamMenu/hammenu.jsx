import React from 'react';
import './hammenu.css';

const HamMenu = () => {
    return (
        <div className="menu-items">
            <button className="ham-btn">SERIES</button>
            <button className="ham-btn">MOVIES</button>
            <button className="ham-btn">NEW</button>
            <button className="ham-btn">SCHEDULE</button>
            <button className="ham-btn">FREE EP</button>
            <button className="ham-btn">MORE</button>
        </div>
    );
};

export default HamMenu;
