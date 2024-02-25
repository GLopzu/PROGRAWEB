import React, { useState, useEffect } from 'react';
import NameInput from '../name/name';
import PlusBtn from '../plusbutton/plusbutton';
import MinusBtn from '../minusbutton/minusbutton';
import Leaderboard from '../leaderboard/leaderboard';
import './game.css';

function GameApp() {
  const [playerName, setPlayerName] = useState('');
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });
  const [buttonType, setButtonType] = useState('');
  const [lives, setLives] = useState(3);
  const [leaderboardData, setLeaderboardData] = useState(() => {
    const storedData = localStorage.getItem('leaderboard');
    return storedData ? JSON.parse(storedData) : [];
  });

  useEffect(() => {
    localStorage.setItem('leaderboard', JSON.stringify(leaderboardData));
  }, [leaderboardData]);

  useEffect(() => {
    if (gameStarted) {
      const interval = setInterval(() => {
        const containerWidth = window.innerWidth * 0.8;
        const containerHeight = 500;
        const randomX = Math.min(Math.random() * containerWidth, containerWidth - 50);
        const randomY = Math.min(Math.random() * containerHeight, containerHeight - 50);
        setButtonPosition({
          x: randomX,
          y: randomY
        });
        setButtonType(Math.random() < 0.5 ? 'plus' : 'minus');
      }, 700);
      return () => clearInterval(interval);
    }
  }, [gameStarted]);

  const handleStartGame = (name) => {
    setPlayerName(name);
    setGameStarted(true);
    setScore(0);
    setLives(3);
  };

  const handleIncrementScore = () => {
    setScore(score + 1);
  };

  const handleDecrementScore = () => {
    if (lives > 0) {
      setLives(lives - 1);
      if (score > 0) {
        setScore(score - 1);
      }
    }
  };

  const handleGameOver = () => {
    setGameStarted(false);
    setLeaderboardData((prevData) => [...prevData, { name: playerName, score }]);
  };

  useEffect(() => {
    if (lives === 0) {
      handleGameOver();
    }
  }, [lives]);

  return (
    <div>
      {!gameStarted && <NameInput startGame={handleStartGame} />}
      {gameStarted && (
        <>
          <div className="button-container">
            <div className="btn-movement" style={{ position: 'absolute', top: buttonPosition.y, left: buttonPosition.x }}>
              {buttonType === 'plus' && (
                <PlusBtn
                  handleClick={handleIncrementScore}
                />
              )}
              {buttonType === 'minus' && (
                <MinusBtn
                  handleClick={handleDecrementScore}
                  disabled={score === 0}
                />
              )}
            </div>
          </div>
          <p>❤x {lives}</p>
          <p>Puntaje: {score}</p>
        </>
      )}
      <Leaderboard leaderboardData={leaderboardData} />
    </div>
  );
}

export default GameApp;
