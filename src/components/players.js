import React, { useState } from 'react';
import PlayerScore from './player-and-score';
import './styles/header.css';

const Players = () => {
  const [name1, setPlayerName1] = useState('LOU');
  const [name2, setPlayerName2] = useState('BRENDO');
  const player1 = name1.toUpperCase();
  const player2 = name2.toUpperCase();

  const [playerToDeal, setPlayerToDeal] = useState(1);

  return (
    <div className="flex flex-wrap justify-evenly height-100 mt7 mb6 ml5 mr5">
      <PlayerScore
        className="mr7"
        key="player1"
        playerNumber={1}
        name={player1}
        setPlayerName={setPlayerName1} playerToDeal={playerToDeal}
        setPlayerToDeal={setPlayerToDeal}
      />
      <PlayerScore
        key="player2"
        playerNumber={2}
        name={player2}
        setPlayerName={setPlayerName2}
        playerToDeal={playerToDeal}
        setPlayerToDeal={setPlayerToDeal}
      />

    </div>
  );
}

export default Players;
