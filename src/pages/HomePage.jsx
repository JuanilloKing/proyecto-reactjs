// src/pages/HomePage.jsx
import React from 'react';
import videoHome from '../videoHome.mp4'; // Ajusta la ruta si es necesario
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <h2>Bienvenido a la tienda de personajes Dokkan!</h2>
      
      {/* Video Local */}
      <video 
        src={videoHome} 
        autoPlay 
        loop 
        muted 
        controls
        className="homepage-video"
      />

      <h3>Página web no oficial</h3>
    </div>
  );
};

export default HomePage;
