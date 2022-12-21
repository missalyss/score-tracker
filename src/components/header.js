import React from 'react';
import './styles/header.css';

const Header = () => {
  return (
    // <a href="/">
        <h1 className="flex justify-center align-center bg-med-green banner heading-text text-black heading-font">
          <marquee aria-live="polite">
            * SCORE * TRACKER *
          </marquee>
        </h1>
    // </a>
  );
}

export default Header;
