// Logo.js
import React from 'react';
import { Link } from 'react-router-dom';

const Logo = ({ imagePath }) => {
  return (
    <div className="logo">
      <Link to="/">
        <img src={imagePath} alt="Logo" />
      </Link>
    </div>
  );
};

export default Logo;
