import React from 'react';
import './comingSoon.css';
import comingsoon from '../../const/comingsoon';

const ComingSoon = () => {
    const startIndex = 0;

    return (
        <div className="coming-soon-container">
            <div className='upcoming'>
                <h1>Coming Soon to WAV</h1>
            </div>
            <div className="comingsoon-container">
                {comingsoon.slice(startIndex, startIndex + 3).map((comingsoon, index) => (
                    <div key={index} className="comigsoon">
                        <img src={comingsoon.image} alt={comingsoon.title} />
                        <h3>{comingsoon.date}</h3>
                        <h2>{comingsoon.title}</h2>
                        <p>{comingsoon.info}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ComingSoon;
