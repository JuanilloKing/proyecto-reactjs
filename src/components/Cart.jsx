import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import charactersData from '../data/personajes.json';  

const HomePage = () => {
return (
    <div className="home-page">
        <main>
            <h2>Bienvenido a la tienda de personajes Dokkan!</h2>
            
            <section className="characters-list">
                <h3>Personajes Disponibles</h3>
                <div className="characters" style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {charactersData.map((character, index) => (
                        <div key={index} className="character" style={{ flex: '1 0 50%', boxSizing: 'border-box', padding: '10px' }}>
                            <img src={character.imageURL} alt={character.name} />
                            <h4>{character.name}</h4>
                            <p>Título: {character.title}</p>
                            <p>Rareza: {character.rarity}</p>
                            <p>Clase: {character.class}</p>
                            <p>Tipo: {character.type}</p>
                            <button>Añadir al carrito</button>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    </div>
);
};

export default HomePage;
