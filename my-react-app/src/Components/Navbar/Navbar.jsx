import React, { useState, useEffect } from 'react';
import logo from '../../assets/Logo.png';
import './Navbar.css';

const Navbar = ({ onNavigateHome, onNavigateProducts, onNavigateAbout, onNavigateContact }) => {
  const [activePage, setActivePage] = useState('home');
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  // Add or remove class to body to prevent scrolling
  useEffect(() => {
    if (isActive) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    // Cleanup to ensure body class is removed when the component unmounts
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isActive]);

  const handleNavigation = (page, navigateFunction) => {
    setActivePage(page);
    setIsActive(false); // Close the menu when a navigation link is clicked
    navigateFunction();
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
        <li
          onClick={() => handleNavigation('home', onNavigateHome)}
          className='Nav-li'
          style={{ fontWeight: activePage === 'home' ? 'bold' : 'normal' }}
        >
          Home
        </li>
        <li
          onClick={() => handleNavigation('products', onNavigateProducts)}
          className='Nav-li'
          style={{ fontWeight: activePage === 'products' ? 'bold' : 'normal' }}
        >
          Our Products
        </li>
        <li
          onClick={() => handleNavigation('about', onNavigateAbout)}
          className='Nav-li'
          style={{ fontWeight: activePage === 'about' ? 'bold' : 'normal' }}
        >
          About Us
        </li>
        <li
          onClick={() => handleNavigation('contact', onNavigateContact)}
          className='Nav-li'
          style={{ fontWeight: activePage === 'contact' ? 'bold' : 'normal' }}
        >
          Contact Us
        </li>
      </span>
    </div>
  );
};

export default Navbar;
