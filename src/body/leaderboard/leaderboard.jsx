import React, { useState, useEffect } from 'react';
import './leaderboard.css';

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    const storedLeaderboard = localStorage.getItem('leaderboard');
    if (storedLeaderboard) {
      try {
        const parsedLeaderboard = JSON.parse(storedLeaderboard);
        setLeaderboard(parsedLeaderboard);
      } catch (error) {
        console.error('Error parsing JSON from localStorage:', error);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
  }, [leaderboard]);

  const sortedLeaderboard = leaderboard.sort((a, b) => b.score - a.score).slice(0, 5);

  return (
    <div className="leaderboard">
      <h2>Leaderboard</h2>
      <ul>
        {sortedLeaderboard.map((entry, index) => (
          <li key={index}>
            <span>{entry.name}</span>
            <span>{entry.score}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Leaderboard;
