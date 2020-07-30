import React, { useState } from 'react';
import './styles/header.css';
import Player from './player';

const PlayerWrapper = () => {
  const [name1, setPlayerName1] = useState('LOU');
  const [name2, setPlayerName2] = useState('BRENDO');
  const player1 = name1.toUpperCase();
  const player2 = name2.toUpperCase();

  return (
    <div className="flex justify-evenly align-center height-100 mt7 mb6">
      <Player key="player1" number="1" name={player1} setPlayerName={setPlayerName1} />
      <Player key="player2" number="2" name={player2} setPlayerName={setPlayerName2} />
    </div>
  );
}

export default PlayerWrapper;
