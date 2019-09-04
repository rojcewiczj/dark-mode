import React, { useState } from 'react';
import useDarkMode from '../hooks/useDarkMode';
import useDropDown from '../hooks/useDropDown'

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const [dropDownMenu, setDropDownMode] = useDropDown(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  const dropDownMode = e => {
    e.preventDefault();
    setDropDownMode(!dropDownMenu)
  }
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="drop-down_toggle">
        <div 
           onClick={dropDownMode}
           className ={dropDownMenu ? 'toggle toggled' : 'toggle'}
           />
           </div>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
