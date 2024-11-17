// AboutUs.js
import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      <h1>About Our Bakery</h1>
      <p>Welcome to our bakery, where we craft the most delicious cakes made from the finest ingredients. Our passion is baking, and we aim to bring joy with every bite.</p>
      
      <h2>Contact Us</h2>
      <div className="contact-info">
        <p>Phone: <a href="tel:+1234567890">(123) 456-7890</a></p>
        <p>Email: <a href="mailto:info@cakeshop.com">info@cakeshop.com</a></p>
      </div>
      
      <img src="path-to-your-image.jpg" alt="Our Bakery" />
    </div>
  );
};

export default AboutUs;
