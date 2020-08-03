import React, { useState } from 'react';
import ScoreInput from './score-input';
import PlayerInput from './player-input';
import DealerButton from '../dealer-button';


const PlayerScore = ({ name, setPlayerName, playerNumber, className, playerToDeal, setPlayerToDeal }) => {
  const [score, setScore] = useState(undefined);
  const [total, setTotal] = useState(0);
  const [roundNumber, setRoundNumber] = useState(0);
  const [scoreList] = useState([]);


  return (
    <div className={className}>
      <PlayerInput name={name} setPlayerName={setPlayerName} playerNumber={playerNumber} />
      <div>
        <ScoreInput score={score} setScore={setScore} setTotal={setTotal} total={total} roundNumber={roundNumber} setRoundNumber={setRoundNumber} scoreList={scoreList} />

        {scoreList.map((scoreAndRound, i) => {
          const { roundNumber: currentRoundNumber, score: currentScore } = scoreAndRound;
          if (!currentRoundNumber) {
            return null;
          }
          return (<p key={i} className="md-font">Round {currentRoundNumber}: {currentScore}</p>)
        })}
      </div>
      <p className="text-center md-font">Total: {total}</p>

      {playerToDeal === playerNumber && (
        <div className="mt7 pt7 flex justify-center">
          <DealerButton playerToDeal={playerToDeal} setPlayerToDeal={setPlayerToDeal} />
        </div>
      )
      }
    </div>
  );
}

export default PlayerScore;
