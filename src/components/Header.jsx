// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';  // Usa Link de React Router
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="store-name">Dokkan Dragon Characters Simulator</h1>
        <nav className="nav">
          <ul>
            <li><Link to="/" className="nav-link">Inicio</Link></li>
            <li><Link to="/add-character" className="nav-link">Añadir personajes</Link></li> {/* Usar Link en lugar de a */}
            <li><Link to="/collection" className="nav-link">Tu colección</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
