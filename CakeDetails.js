import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from './CartContext';
import './CakeDetails.css';  // You can add a custom CSS file to style this page

const CakeDetails = ({ cakes }) => {
  const { cakeId } = useParams();  // Extract the cakeId from the URL
  const { addToCart } = useContext(CartContext);  // Get addToCart function from context

  // Ensure cakeId is treated as a number and find the selected cake from cakes array
  const selectedCake = cakes.find(cake => cake.id === parseInt(cakeId, 10));

  if (!selectedCake) {
    return <p>Cake not found!</p>;  // Show message if cake is not found
  }

  // Fallback image URL in case the cake image is missing
  const fallbackImage = 'https://via.placeholder.com/400x300?text=No+Image+Available';

  // Function to handle adding the cake to the cart
  const handleAddToCart = () => {
    addToCart(selectedCake);  // Add the selected cake to the cart
  };

  return (
    <div className="cake-details">
      <div className="cake-image">
        {/* If selectedCake.image is missing, show the fallback image */}
        <img src={selectedCake.image || fallbackImage} alt={selectedCake.name} />
      </div>

      <div className="cake-info">
        <h1>{selectedCake.name}</h1>
        <p>{selectedCake.description}</p>
        <p className="cake-price">Price: Rs {selectedCake.price}</p>

        {/* Add to Cart button */}
        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default CakeDetails;
