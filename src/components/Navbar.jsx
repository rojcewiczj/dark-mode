import React, { useState ,useEffect } from 'react';
import axios from 'axios';
import useDarkMode from '../hooks/useDarkMode';


const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  const [coinData, setCoinData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then(res => setCoinData(res.data))
      .catch(err => console.log(err));
     
  }, []);console.log(coinData)
  
  const MakeMenu = () => {
    let element = document.getElementsByClassName('menu');
    element.classList.add("drop-down");
  }
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
          <div className="menu" onClick= {MakeMenu}> <h1>Switch Coin</h1></div>
          <div className="drop-down">
            <ul>
              <li>{coinData.id[0]}  </li>
              <li> {coinData.id[1]} </li>
              <li> {coinData.id[2]} </li>
              <li> {coinData.id[3]} </li>
              <li>  </li>
              <li>  </li>
              <li>  </li>
              <li>  </li>
              <li>  </li>
              <li>  </li>
            </ul>
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
