import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // 🔥 Add item to cart (considering unique pack sizes)
  const addToCart = (item) => {
    setCartItems((prevCart) => {
      const existingItemIndex = prevCart.findIndex(
        (cartItem) => cartItem.id === item.id && cartItem.packQuantity === item.packQuantity
      );

      if (existingItemIndex !== -1) {
        // If item with same pack size exists, update quantity
        return prevCart.map((cartItem, index) =>
          index === existingItemIndex
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        );
      } else {
        // Else, add new item with different pack size
        return [...prevCart, item];
      }
    });
  };

  // 🔥 Remove specific pack size of an item
  const removeFromCart = (id, packQuantity) => {
    setCartItems((prevCart) => prevCart.filter(
      (item) => !(item.id === id && item.packQuantity === packQuantity)
    ));
  };

  // 🔥 Update quantity of a specific pack size
  const updateQuantity = (id, quantity, packQuantity) => {
    setCartItems((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.packQuantity === packQuantity
          ? { ...item, quantity: Math.max(1, quantity) }
          : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cart");
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
