import React from 'react';

import "./Header.scss"

const Header = () => {
  return (
    <>
      <header className="App-header">
        <div className="App">
          <a href="#" className="logo">React</a>
          <nav>
            <ul className="header__nav">
              <li className="nav__element">
                <a href="#wyprawy" className="nav__link">Wyprawy</a>
              </li>
              <li className="nav__element">
                <a href="#mapa" className="nav__link">Mapa</a>
              </li>
              <li className="nav__element">
                <a href="#galeria" className="nav__link">Galeria</a>
              </li>
              <li className="nav__element">
                <a href="#kontakt" className="nav__link">Kontakt</a>
              </li>
            </ul>

          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;