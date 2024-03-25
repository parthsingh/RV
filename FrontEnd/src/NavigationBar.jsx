// NavigationBar.js
import React from 'react';

const NavigationBar = ({ title }) => {
  return (
    <nav className="navbar">
      <h1>{title}</h1>
    </nav>
  );
};

export default NavigationBar;
