import React from 'react';
import Sareeimg from '../../assets/Saree.png';
import './Home.css';

const Home = ({ scrollToProducts }) => {
  return (
    <div className='Home-Main'>
      <div className='Home-Left'>
        <h1 className='Home-h1'>Your Thread to Timeless Style.</h1>
        <div className='Home-texturelines'>
          <li>Premium Quality Fabrics</li>
          <li>Diverse Range of Choices</li>
          <li>Affordable Bulk Solutions</li>
          <li>Exceptional Customer Service</li>
        </div>
        <button className='Home-ExploreBtn' onClick={scrollToProducts}>
          EXPLORE NOW
        </button>
      </div>
      <div className='Home-Right'>
        <img src={Sareeimg} alt="sareeimg" className='Sareeimg' />
      </div>
    </div>
  );
};

export default Home;
