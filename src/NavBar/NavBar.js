import React from 'react';
import './NavBar.css';
import NavList from './NavList';

function NavBar() {
  return (
    <div className="navBack">
      <div className="navCont">
      <a href="#about" className="get-started-btn scrollto">شروع</a>
      <NavList></NavList>
        <header className="navHeader">
          <h1>
            <a href="#" className="BlackerLogo">Blacker Site</a>
          </h1>
        </header>
      </div>
    </div>
  );
}

export default NavBar;
