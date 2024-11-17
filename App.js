import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';  
import Header from './Header';
import Footer from './Footer';
import Homepage from './Homepage';
import CakeCategories from './CakeCategories';
import CakeDetails from './CakeDetails';
import ShoppingCart from './ShoppingCart';
import AboutUs from './AboutUs';

import { CartProvider } from './CartContext'; 

const App = () => {
  const [cakes] = useState([
    { id: 1, name: 'Chocolate Cake', image: 'chocolate-cake.jpg', price: 20, description: 'Delicious chocolate cake.' },
    { id: 2, name: 'Fruit Cake', image: 'fruit-cake.jpg', price: 25, description: 'Fresh fruit cake with seasonal fruits.' },
    { id: 3, name: 'Vanilla Cake', image: 'vanilla-cake.jpg', price: 18, description: 'Classic vanilla cake with buttercream frosting.' },
  ]);

  return (
    <CartProvider>
      <Router>
        <div className="app">
          <Header />  
          
          <main>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/categories" element={<CakeCategories />} />
              {/* Route for CakeDetails with dynamic cakeId */}
              <Route 
                path="/cakes/:cakeId" 
                element={<CakeDetails cakes={cakes} />} 
              />
              <Route path="/cart" element={<ShoppingCart />} />
              <Route path="/about" element={<AboutUs />} />
            </Routes>
          </main>

          <Footer /> 
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
