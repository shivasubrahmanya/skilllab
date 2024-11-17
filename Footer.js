// Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-links">
        <a href="/">Home</a>
        <a href="/categories">Cake Categories</a>
        <a href="/cart">Shopping Cart</a>
        <a href="/about">About Us</a>
      </div>
      <div className="social-media">
        {/* Social media icons */}
      </div>
      <p>&copy; 2024 Cake Shop. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
