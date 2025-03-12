import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from './Context/CartContext';  // Import CartProvider
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductOverview from "./pages/productOverview";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Navbar from './components/Navbar';
import Checkout from './pages/Checkout';

import CustomerReviews from "./components/CustomerReviews";

function App() {
  return (
    <CartProvider> {/* Wrap the entire app with CartProvider */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/productOverview" element={<ProductOverview />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/reviews" element={<CustomerReviews />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
