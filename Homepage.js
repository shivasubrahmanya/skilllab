import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';

// Import sample images for featured cakes
import chocolateCakeImage from '../src/photos/chocolate.jfif';
import fruitCakeImage from '../src/photos/fruit-cake.jpg';
import vanillaCakeImage from '../src/photos/vanilla.jfif';

const Homepage = () => {
  return (
    <div className="homepage">
      <header className="hero">
        <h1>Welcome to Our Cake Shop</h1>
        <p>Delicious cakes made with love!</p>
        <Link to="/categories" className="btn">Browse Our Cakes</Link>
      </header>
      <section className="featured-cakes">
        <h2>Featured Cakes</h2>
        <div className="cake-cards">
          <div className="cake-card">
            <img src={chocolateCakeImage} alt="Chocolate Cake" />
            <h3>Chocolate Cake</h3>
            <p>A rich and decadent chocolate cake.</p>
          </div>
          <div className="cake-card">
            <img src={fruitCakeImage} alt="Fruit Cake" />
            <h3>Fruit Cake</h3>
            <p>Fresh and seasonal fruit cake.</p>
          </div>
          <div className="cake-card">
            <img src={vanillaCakeImage} alt="Vanilla Cake" />
            <h3>Vanilla Cake</h3>
            <p>Classic vanilla cake with buttercream frosting.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
