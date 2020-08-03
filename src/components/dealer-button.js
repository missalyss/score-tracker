import React, { useState } from 'react';
import './styles/dealer-button.css';
import dealButton from './images/dealer-button.png';

const DealerButton = ({ playerToDeal, setPlayerToDeal }) => {
  return (
    <button className="bg-black border-none dealerButton m0 p0" onClick={() => {
      const setTo = playerToDeal === 1 ? 2 : 1;
      return setPlayerToDeal(setTo);
    }}>
      <img
        className="bg-black dealerImg"
        src={dealButton}
        alt="dealer button"
      />
    </button>
  );
}

export default DealerButton;
