import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import './ShoppingCart.css';

const ShoppingCart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);

  // Calculate the total cost
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Function to handle quantity updates (either increase or decrease)
  const handleQuantityChange = (itemId, action) => {
    if (action === 'increase') {
      updateQuantity(itemId, 1);  // Increase quantity by 1
    } else if (action === 'decrease' && cartItems.find(item => item.id === itemId).quantity > 1) {
      updateQuantity(itemId, -1); // Decrease quantity by 1
    }
  };

  return (
    <div className="shopping-cart">
      <h1>Your Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <div>
          <div className="cart-items">
            <ul>
              {cartItems.map((item) => (
                <li key={item.id}>
                  <div className="item-details">
                    <img src={item.image || 'https://via.placeholder.com/150'} alt={item.name} />
                    <div className="item-info">
                      <p>{item.name}</p>
                      <p className="price">Rs {item.price}</p>
                      <div className="quantity-controls">
                        <button onClick={() => handleQuantityChange(item.id, 'decrease')}>-</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => handleQuantityChange(item.id, 'increase')}>+</button>
                      </div>
                    </div>
                    <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="total">
            <h3>Total:</h3>
            <span className="total-price">Rs {total.toFixed(2)}</span>
          </div>

          <div className="checkout">
            <button>Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
