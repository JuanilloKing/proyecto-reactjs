import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import charactersData from '../data/personajes.json';

const OtherPage = () => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  return (
    <div className="other-page" style={{ display: 'flex', gap: '20px' }}>
      <section className="characters-list" style={{ flex: 2 }}>
        <h3>Personajes Disponibles</h3>
        <div className="characters" style={{ display: 'flex', flexWrap: 'wrap' }}>
          {charactersData.map((character, index) => (
            <div key={index} className="character" style={{ padding: '10px', border: '1px solid gray' }}>
              <img src={character.imageURL} alt={character.name} />
              <h4>{character.name}</h4>
              <button onClick={() => addToCart(character)}>Añadir al carrito</button>
            </div>
          ))}
        </div>
      </section>

      <aside className="cart" style={{ flex: 1, border: '1px solid black', padding: '10px' }}>
        <h3>🛒 Carrito</h3>
        {cart.length === 0 ? (
          <p>El carrito está vacío</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} (x{item.quantity})
                <button onClick={() => removeFromCart(item.name)}>❌</button>
              </li>
            ))}
          </ul>
        )}
      </aside>
    </div>
  );
};

export default OtherPage;
