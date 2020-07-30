import React, { useState } from 'react';
import './styles/player.css';
import Score from './score';

const Player = ({ name, setPlayerName, number }) => {
  const [score, setScore] = useState('LOU');

  return (
    <div className="">

      <div className="playerWrap">
        <h2 className="text-neon-green p0 m0">
          Player {number}:&nbsp;
        <input
            className="playerName"
            type="text"
            onChange={(e) => setPlayerName(e.target.value)}
            value={`${name}`}
            maxLength="10"
          />
        </h2>
      </div>
      <Score score={score} setScore={setScore} />
    </div>
  );
}

export default Player;
