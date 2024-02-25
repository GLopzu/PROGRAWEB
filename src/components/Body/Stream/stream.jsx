import React, { useState, useRef } from 'react';
import './stream.css';
import { cards } from '../../const/cards';

const Carousel = () => {
    const [startIndex, setStartIndex] = useState(0);
    const [startX, setStartX] = useState(null);
    const [isDragging, setIsDragging] = useState(false);
    const [dragStartIndex, setDragStartIndex] = useState(0);
    const carouselRef = useRef(null);


    const handleDragStart = (e) => {
        e.preventDefault();
        setIsDragging(true);
        setDragStartIndex(startIndex);
        setStartX(e.clientX);
    };

    const handleDragMove = (e) => {
        if (!isDragging) return;
        const currentX = e.clientX;
        const diffX = currentX - startX;
        const itemsScrolled = Math.floor(diffX / 260);
        setStartIndex(Math.min(Math.max(dragStartIndex - itemsScrolled, 0), cards.length - 4));
    };

    const handleDragEnd = () => {
        setIsDragging(false);
    };

    const handlePrev = () => {
        setStartIndex(Math.max(startIndex - 1, 0));
    };

    const handleNext = () => {
        setStartIndex(Math.min(startIndex + 1, cards.length - 4));
    };

    return (
        <div className="carousel-container">
            <div className='stream-latest'>
                <h1>Stream the Latest</h1>
            </div>
            <div
                className="carousel"
                onMouseDown={handleDragStart}
                onMouseMove={handleDragMove}
                onMouseUp={handleDragEnd}
                onMouseLeave={handleDragEnd}
                ref={carouselRef}
            >
                <div className="cards-container">
                    {cards.slice(startIndex, startIndex + 4).map((card, index) => (
                        <div key={index} className="card">
                            <img src={card.image} alt={card.title} />
                            <h3>AVAILABLE NOW</h3>
                            <h2>{card.title}</h2>
                            <p>{card.info}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="move-buttons">
                {startIndex > 0 && (
                    <button className="prev" onClick={handlePrev}>{'<'}</button>
                )}
                {startIndex < cards.length - 4 && (
                    <button className="next" onClick={handleNext}>{'>'}</button>
                )}
            </div>
        </div>
    );
};

export default Carousel;
