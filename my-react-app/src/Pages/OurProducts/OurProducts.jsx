import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'; // Import Link
import './OurProducts.css';
import Product_Image from '../../assets/Product_Image.png';
import banarsi from '../../assets/banarsi saree.jpg'
import design from '../../assets/designer saree.jpg'
import cherfon from '../../assets/cherfon.jpg'
import kanji from '../../assets/kanjiveram saree.jpg'
import verget from '../../assets/verget.jpg'
import wast from '../../assets/wastern.jpg'
import cotton from '../../assets/cotton saree.jpg'

const products = [
  {
    name: "Designer Saree",
    price: "Rs.1000",
    rating: "5.0",
    image: Product_Image,
  },
  {
    name: "Cotton Saree",
    price: "Rs.999",
    rating: "4.9",
    image: design,
  },
  {
    name: "Western Saree",
    price: "Rs.899",
    rating: "4.8",
    image: wast,
  },
  {
    name: "Silk Saree",
    price: "Rs.799",
    rating: "4.7",
    image: cotton,
  },
  {
    name: "Banarasi Saree",
    price: "Rs.1200",
    rating: "4.9",
    image: banarsi,
  },
  {
    name: "Kanjeevaram Saree",
    price: "Rs.1500",
    rating: "4.6",
    image: kanji,
  },
  {
    name: "Georgette Saree",
    price: "Rs.1100",
    rating: "4.8",
    image: verget,
  },
  {
    name: "Chiffon Saree",
    price: "Rs.1300",
    rating: "4.5",
    image: cherfon,
  }
];

function OurProducts() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalProducts = products.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 4) % totalProducts);
    }, 5000); // Slide every 5 seconds
    return () => clearInterval(interval);
  }, [totalProducts]);

  const visibleProducts = products.slice(currentIndex, currentIndex + 4).concat(
    products.slice(0, Math.max(0, (currentIndex + 4) - totalProducts))
  );

  return (
    <div className="OurProduct-Main">
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/products" className="active">Hot</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>
      <div><h1 className="head">Our Products</h1></div>

      <div className="products-slider">
        <div className="products-grid">
          {visibleProducts.map((product, index) => (
            <div className="product-card" key={index}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <div className="product-details">
                <p>{product.price}</p>
                <div className="product-details-line"></div>
                <div className="rating">
                  {product.rating} <span>⭐</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurProducts;
