import React from 'react';
import '../styles/player.css';

const PlayerInput = ({ name, setPlayerName, playerNumber }) => (
  <div className="playerWrap mb5">
    <label className="lg-font text-bold text-neon-green p0 m0">
      Player {playerNumber}: &nbsp;
    </label>
    <input
      size="8"
      className="playerName"
      type="text"
      onChange={(e) => setPlayerName(e.target.value)}
      value={name}
      maxLength="8" />
  </div>
)

export default PlayerInput;
