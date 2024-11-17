import React, { createContext, useState, useContext, useEffect } from 'react';

// Create a Context for the Cart
export const CartContext = createContext();

// CartProvider component to wrap your app and provide cart state
export const CartProvider = ({ children }) => {
  // Retrieve cart data from localStorage, if available
  const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
  const [cartItems, setCartItems] = useState(storedCart);

  // Function to add an item to the cart
  const addToCart = (cake) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(item => item.id === cake.id);
      if (existingItem) {
        // If item already exists in cart, increase the quantity
        return prevItems.map(item =>
          item.id === cake.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // If item does not exist, add it to the cart
        return [...prevItems, { ...cake, quantity: 1 }];
      }
    });
  };

  // Function to remove an item from the cart
  const removeFromCart = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  // Function to update the quantity of an item
  const updateQuantity = (id, delta) => {
    setCartItems((prevItems) =>
      prevItems.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity + delta, 1) } // Ensure quantity doesn't go below 1
          : item
      )
    );
  };

  // Persist cart data to localStorage whenever cartItems change
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

// A custom hook to use the CartContext in other components
export const useCart = () => useContext(CartContext);
