import React from "react";
import './OurProducts.css'
import Product_Image from '../../assets/Product_Image.png'

const products = [
  {
    name: "Designer Saree",
    price: "Rs.1000",
    rating: "5.0",
    image: Product_Image, // Replace with the actual image source
  },
  {
    name: "Cotton Saree",
    price: "Rs.999",
    rating: "4.9",
    image: Product_Image, // Replace with the actual image source
  },
  {
    name: "Western Saree",
    price: "Rs.899",
    rating: "4.8",
    image: Product_Image, // Replace with the actual image source
  },
  {
    name: "Silk Saree",
    price: "Rs.799",
    rating: "4.7",
    image: Product_Image, // Replace with the actual image source
  },
];

function OurProducts() {
  return (
    <div className="OurProduct-Main">
      <header>
        <h1>Our products</h1>
        <nav>
          <a href="#">Home</a>
          <a href="#" className="active">Hot</a>
          <a href="#">New Arrivals</a>
          <a href="#">About</a>
        </nav>
      </header>

      <div className="products-grid">
        {products.map((product, index) => (
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
  );
}

export default OurProducts;
