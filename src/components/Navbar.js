import React from 'react';
import './navbar.css';
import logoimage from './image/logo-techno.png'; 

class Navbar extends React.Component {
  render() {
    return (
      <div className='header'>
        <nav className="navbar">
          <div className="logo">
            <img src="image/logo-techno.png" alt="Techbo Logo" />
          </div>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Services</a></li>
            <li><a href="/contact">Samples</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
