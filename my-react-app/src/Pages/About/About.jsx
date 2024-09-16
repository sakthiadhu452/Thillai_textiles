import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <div className="about-boxes">
        <div className="about-box" id="box1">
          <h3>Our Mission</h3>
          <p>We aim to provide the best textile products at affordable prices.</p>
        </div>
        <div className="about-box" id="box2">
          <h3>Our Vision</h3>
          <p>To be the leading textile provider with innovation and customer satisfaction.</p>
        </div>
        <div className="about-box" id="box3">
          <h3>Our Values</h3>
          <p>Quality, Integrity, and Commitment drive our daily operations.</p>
        </div>
        <div className="about-box" id="box4">
          <h3>Our Team</h3>
          <p>A dedicated team with a passion for delivering excellence in textiles.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
