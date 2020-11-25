import React from 'react';

import "./Header.scss"
import {Link} from "react-router-dom";

const Header = () => {
  
  
  return (
    <>
      <header className="App-header">
        <div className="App">
          <a href="#" className="logo">React</a>
          <nav>
            <ul className="header__nav">
              <Link to ="/wyprawy" style={{textDecoration:"none"}}>
              <li className="nav__element">
                <a  href="#wyprawy" className="nav__link">Wyprawy</a>
              </li>
              </Link>
              <Link to ="/mapa" style={{textDecoration:"none"}}>
              <li className="nav__element">
                <a href="#mapa" className="nav__link">Mapa</a>
              </li>
              </Link>
              <Link to ="/about" style={{textDecoration:"none"}}>
              <li className="nav__element">
                <a href="#about" className="nav__link">O mnie</a>
              </li>
              </Link>
              <Link to ="/kontakt" style={{textDecoration:"none"}}>
              <li className="nav__element">
                <a href="#kontakt" className="nav__link">Kontakt</a>
              </li>
              </Link>
            </ul>

          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;