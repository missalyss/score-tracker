import React from 'react';
import './styles/header.css';

const Header = () => {
  return (
    <a href="/">
      <div className="flex justify-center align-center bg-med-green banner">
        <h1 className="heading-text text-black heading-font">
          <marquee>
            * SCORE * TRACKER *
          </marquee>
        </h1>
      </div>
    </a>
  );
}

export default Header;
