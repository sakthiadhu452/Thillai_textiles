import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Logo.png';
import Carticon from '../../assets/Cart.png';
import './Navbar.css';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive); // Toggle active class
  };

  return (
    <div className='Navbar-Main'>
      <span className='Nav-Branding'>
        <img src={logo} alt="logo" className='Nav-Logo' />
        <h3 className='Nav-BrandName'>Shri Thillai <br />Textiles</h3>
      </span>
      
      <div 
        className={`Nav-HandBurger ${isActive ? 'active' : ''}`} 
        onClick={toggleMenu}
      > 
        <li></li>
        <li></li>
        <li></li>
      </div>
      
      <span className={`Nav-Links ${isActive ? 'active' : ''}`}>
        <li to="/" className='Nav-li' style={{ fontWeight: 'bold' }}>Home</li>
        <li to="/about" className='Nav-li'>About</li>
        <li to="/contact" className='Nav-li'>Contact Us</li>
        <button className='Nav-LoginBtn'>Login</button>
      </span>
    </div>
  );
};

export default Navbar;
