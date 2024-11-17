// Header.js
import React from 'react';
import './Header.css'; // Add this line if you have a CSS file for the header

const Header = () => {
  return (
    <header className="header">
      <h1>Welcome to Our Cake Shop!</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/categories">Cake Categories</a></li>
          <li><a href="/cart">Cart</a></li>
          <li><a href="/about">About Us</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
