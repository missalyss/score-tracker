import React from 'react';
import './styles/player.css';

const Score = ({ score, setScore, setTotal, total, setRoundNumber, roundNumber }) => {

  return (
    <div className="">
      round {roundNumber}:&nbsp;
      <input
        className="playerName pb5"
        type="number"
        onChange={(e) => {
          const newScore = e.target.valueAsNumber || 0
          console.log('etarval: ', e.target.valueAsNumber);
          setScore(newScore)
        }}
        onBlur={() => {
          setTotal(score + total);
          setRoundNumber(roundNumber + 1);
          // setScore(0)
        }}
        placeholder="0"
        value={score}
        maxLength="10"
      />
    </div>
  );
}

export default Score;
