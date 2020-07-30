import React from 'react';
import './styles/player.css';

const Score = ({ score, setScore, number }) => {
  return (
    <div className="">
      round 1:&nbsp;
      <input
        className="playerName"
        type="number"
        onChange={(e) => setScore(e.target.value)}
        placeholder="0"
        maxLength="10"
      />
    </div>
  );
}

export default Score;
