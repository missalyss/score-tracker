import React, { useState, useEffect } from 'react';
import './styles/player.css';
import Score from './score';

const Player = ({ name, setPlayerName, playerNumber }) => {
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);
  const [roundNumber, setRoundNumber] = useState(0);
  const [scoreList] = useState([]);

  useEffect(() => {
    scoreList.push({ roundNumber, score });
    console.log('===SCORELIST===: ', scoreList);
  }, [roundNumber]);


  return (
    <div className="">
      <div className="playerWrap">
        <h2 className="text-neon-green p0 m0">
          Player {playerNumber}:&nbsp;
        <input
            className="playerName"
            type="text"
            onChange={(e) => setPlayerName(e.target.value)}
            value={name}
            maxLength="10"
          />
        </h2>
      </div>
      <div>
        <Score key='scoreone' score={score} setScore={setScore} setTotal={setTotal} total={total} roundNumber={roundNumber} setRoundNumber={setRoundNumber} />
        {scoreList.map((scoreAndRound, i) => {
          const { roundNumber: currentRoundNumber, score: currentScore } = scoreAndRound;
          console.log('score and round: ', scoreAndRound);
          return (<Score key={i} score={currentScore} setScore={setScore} setTotal={setTotal} total={total} roundNumber={currentRoundNumber} setRoundNumber={setRoundNumber} />)
        })}
      </div>
      <p>Total: {total}</p>
    </div>
  );
}

export default Player;
