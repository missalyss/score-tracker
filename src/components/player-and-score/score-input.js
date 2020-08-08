import React from 'react';
import '../styles/player.css';

const ScoreInput = ({ score, setScore, setTotal, total, setRoundNumber, roundNumber, scoreList }) => {
  const submitScore = () => {
    const newRoundNumber = roundNumber + 1;
    if (isNaN(score)) {
      return;
    }
    setTotal(parseInt(score) + parseInt(total));
    setRoundNumber(newRoundNumber);
    scoreList.push({ roundNumber: newRoundNumber, score })
    setScore(NaN)
    return;
  }
  return (
    <input
      className="playerName pb5"
      type="number"
      size="10"
      min="-999"
      step="1"
      maxLength="10"
      onChange={(e) => {
        setScore(e.target.value)
      }}
      onBlur={submitScore}
      onSubmit={submitScore}
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
