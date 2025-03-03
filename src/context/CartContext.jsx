import { createContext, useState } from 'react';

// Crear el contexto
export const CartContext = createContext(null);

// Proveedor del contexto
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (character) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.name === character.name);
      if (existingItem) {
        return prevCart.map((item) =>
          item.name === character.name ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...character, quantity: 1 }];
    });
  };

  const removeFromCart = (name) => {
    setCart((prevCart) => prevCart.filter((item) => item.name !== name));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
