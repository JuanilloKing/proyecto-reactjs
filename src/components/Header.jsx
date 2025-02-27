import React from 'react';
import Button from './Button';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="store-name">Dokkan Dragon Characters Simulator</h1>
        <nav className="nav">
          <ul>
            <li><Button to="/" className="nav-button">Inicio</Button></li>
            <li><Button to="/add-character" className="nav-button">Añadir personajes</Button></li>
            <li><Button to="/collection" className="nav-button">Tu colección</Button></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
