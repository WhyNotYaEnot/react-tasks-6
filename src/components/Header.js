// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import DateTime from './DateTime'; 

const Header = ({ title, logoImagePath }) => {
  return (
    <header className="header">
      <Logo imagePath={logoImagePath} />
      <h1>{title}</h1>
      <div className="date-time">
        <DateTime />
      </div>
    </header>
  );
};

export default Header;
