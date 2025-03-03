import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cart } = useContext(CartContext); // Obtener carrito

  return (
    <div className="cart">
      <h2>Tu Carrito</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              <img src={item.imageURL} alt={item.name} width="50" />
              {item.name} - {item.quantity} unidad(es)
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
