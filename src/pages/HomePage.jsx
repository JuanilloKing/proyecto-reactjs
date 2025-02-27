// src/pages/HomePage.jsx
import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
            <h2>Bienvenido a la tienda de personajes Dokkan!</h2>
      <iframe 
        className="homepage-iframe"
        src="https://www.youtube.com/embed/ZQMyr0Kw6LE?si=-8I_xFw5_Cquw-Al?autoplay=1&mute=0" 
        title="YouTube video player" 
        size="75%"
        height="900px"
        width="75%"
        allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin">
      </iframe>
      <h3>Pagina web no oficial</h3>
    </div>
  );
};

export default HomePage;
