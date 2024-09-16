import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sareeimg from '../../assets/Saree.png'; // Default image
import ProductImage from '../../assets/Product_Image.png'; // Example additional images
import AnotherImage from '../../assets/Saree.png'; // Add more as needed
import './Home.css';

const Home = () => {
  const [image, setImage] = useState(Sareeimg);
  const navigate = useNavigate();

  // Handle image change based on clicked text item
  const handleImageChange = (newImage) => {
    setImage(newImage);
  };

  // Navigate to the products page
  const scrollToProducts = () => {
    navigate('/products');
  };

  return (
    <div className='Home-Main'>
      <div className='Home-Left'>
        <h1 className='Home-h1'>Your Thread to Timeless Style.</h1>
        <ul className='Home-texturelines'>
          <li onClick={() => handleImageChange(ProductImage)}>
            Premium Quality Fabrics
          </li>
          <li onClick={() => handleImageChange(AnotherImage)}>
            Diverse Range of Choices
          </li>
          <li onClick={() => handleImageChange(Sareeimg)}>
            Affordable Bulk Solutions
          </li>
          <li onClick={() => handleImageChange(ProductImage)}>
            Exceptional Customer Service
          </li>
        </ul>
        <button className='Home-ExploreBtn' onClick={scrollToProducts}>
          EXPLORE NOW
        </button>
      </div>
      <div className='Home-Right'>
        <img src={image} alt="Displayed" className='Sareeimg' />
      </div>
    </div>
  );
};

export default Home;
