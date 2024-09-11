import React, { useState } from 'react';
import '../Styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>BrandLogo</h2>
      </div>
      <div className={`nav-links ${isOpen ? 'active' : ''}`}>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <span className={`icon ${isOpen ? 'close' : 'open'}`}>&#9776;</span>
      </div>
    </nav>
  );
};

export default Navbar;
