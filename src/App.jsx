import { useState } from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header /> {/* Renderizar el Header */}
      <main>
        <h2>Bienvenido a la tienda de personajes Dokkan!</h2>
        {/* Aquí irán las páginas o contenido adicional */}
      </main>
      <Footer /> {/* Renderizar el Footer */}
    </div>
  );
}

export default App
