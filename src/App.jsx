// src/App.jsx
import { Routes, Route } from 'react-router-dom';  // Importa Routes y Route
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';  // Página de inicio
import Cart from './components/Cart';  // Componente de carrito

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Ruta de la página principal */}
        <Route path="/add-character" element={<Cart />} /> {/* Ruta para el carrito */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
