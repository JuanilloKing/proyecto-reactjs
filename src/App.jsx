// src/App.jsx
import { Routes, Route } from 'react-router-dom'; 
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage'; 
import Cart from './components/Cart';  

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
