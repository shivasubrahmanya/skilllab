import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './CakeCategories.css';
import { CartContext } from './CartContext';

// Import images from the 'src/photos' folder
import chocolateCakeImage from '../src/photos/chocolate.jfif';  
import fruitCakeImage from '../src/photos/fruit-cake.jpg';  
import vanillaCakeImage from '../src/photos/vanilla.jfif';  
import redVelvetCakeImage from '../src/photos/redvelvetcake.jfif';

const CakeCategories = () => {
  const { addToCart } = useContext(CartContext);  // Get addToCart from CartContext
  const [showPopup, setShowPopup] = useState(false);  // State to manage pop-up visibility

  // Example cake data (replace with your actual cake data)
  const categories = [
    {
      id: 1,
      name: 'Chocolate Cakes',
      image: chocolateCakeImage,
      price: 2000,
      description: 'Delicious chocolate cake.',
      link: '/cakes/chocolate',
    },
    {
      id: 2,
      name: 'Fruit Cakes',
      image: fruitCakeImage,
      price: 2500,
      description: 'Fresh fruit cake with seasonal fruits.',
      link: '/cakes/fruit',
    },
    {
      id: 3,
      name: 'Vanilla Cakes',
      image: vanillaCakeImage,
      price: 1800,
      description: 'Classic vanilla cake with buttercream frosting.',
      link: '/cakes/vanilla',
    },
    {
      id: 4,
      name: 'Red Velvet Cakes',
      image: redVelvetCakeImage,
      price: 3500,
      description: 'Classic red velvet cake with cream cheese frosting.',
      link: '/cakes/red-velvet',
    },
  ];

  // Function to handle adding cakes to cart
  const handleAddToCart = (cake) => {
    addToCart(cake);  // Call addToCart function from context
    setShowPopup(true);  // Show the pop-up
    setTimeout(() => {
      setShowPopup(false);  // Hide the pop-up after 2 seconds
    }, 2000);
  };

  return (
    <div className="categories">
      <h1>Browse Our Cake Categories</h1>
      
      {/* Pop-up message */}
      {showPopup && (
        <div className="popup">
          <p>Added to Cart!</p>
        </div>
      )}

      <div className="categories-list">
        {categories.map((category) => (
          <div className="category" key={category.id}>
            <img src={category.image} alt={category.name} />
            <h2>{category.name}</h2>
            <p>{category.description}</p>
            <p className="cake-price">Price: Rs {category.price}</p>
            <div className="category-buttons">
              
              <button
                className="add-to-cart-btn"
                onClick={() => handleAddToCart(category)} 
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CakeCategories;
