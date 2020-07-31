import React, { useState } from 'react';
import './styles/header.css';
import PlayerScore from './player-and-score';

const Players = () => {
  const [name1, setPlayerName1] = useState('LOU');
  const [name2, setPlayerName2] = useState('BRENDO');
  const player1 = name1.toUpperCase();
  const player2 = name2.toUpperCase();

  return (
    <div className="flex justify-evenly height-100 mt7 mb6 ml5 mr5">
      <PlayerScore className="mr7" key="player1" playerNumber="1" name={player1} setPlayerName={setPlayerName1} />
      <PlayerScore key="player2" playerNumber="2" name={player2} setPlayerName={setPlayerName2} />
    </div>
  );
}

export default Players;
