import React from 'react';
import '../styles/player.css';

const ScoreInput = ({ score, setScore, setTotal, total, setRoundNumber, roundNumber, scoreList }) => {

  return (
    <input
      className="playerName pb5"
      type="number"
      size="10"
      min="-999"
      maxLength="10"
      onChange={(e) => {
        const newScore = parseInt(e.target.value);
        setScore(newScore)
      }}
      onBlur={() => {
        const newRoundNumber = roundNumber + 1;
        if (isNaN(score)) {
          return;
        }
        setTotal(score + total);
        setRoundNumber(newRoundNumber);
        scoreList.push({ roundNumber: newRoundNumber, score })
        setScore(0)
      }}
      onFocus={() => {
        if (score === 0) {
          setScore(undefined);
        }
      }}
      placeholder="0"
      value={score}
      maxLength="10"
    />
  );
}

export default ScoreInput;
