import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // 🛒 Fetch cart from backend
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          console.warn("Unauthorized: Please log in first!"); // 🔹 Console log instead of alert
          return;
        }
  
        const response = await axios.get("http://localhost:5000/api/cart", {
          headers: { Authorization: `Bearer ${token}` },
        });
  
        setCartItems(response.data.items);
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    };
  
    fetchCart();
  }, []);
  
  

  const addToCart = async (item) => {
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/cart/add", // ✅ Full API path
        { productId: item.id, quantity: item.quantity },
        { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } } // ✅ Token pass
      );
      setCartItems(data.cart.items);
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };
  

  // 🛒 Remove specific item (Backend Sync)
  const removeFromCart = async (id) => {
    try {
      const { data } = await axios.delete(`/api/cart/remove/${id}`, { withCredentials: true });
      setCartItems(data.cart.items);
    } catch (error) {
      console.error("Error removing item:", error);
    }
  };

  // 🛒 Update item quantity (Backend Sync)
  const updateQuantity = async (id, quantity) => {
    try {
      const { data } = await axios.put(
        "/api/cart/update",
        { productId: id, quantity },
        { withCredentials: true }
      );
      setCartItems(data.cart.items);
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  };

  // 🛒 Clear Cart (Backend Sync)
  const clearCart = async () => {
    try {
      await axios.delete("/api/cart/clear", { withCredentials: true });
      setCartItems([]);
    } catch (error) {
      console.error("Error clearing cart:", error);
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
