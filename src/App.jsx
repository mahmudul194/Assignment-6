import { useState } from 'react';
import Navbar from './components/Navbar'


import './App.css'

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [view, setView] = useState('products');


  return (
    <>
      <div className="min-h-screen bg-white font-sans text-gray-900">
        <Navbar cartCount={cart.length} setView={setView} />
      </div>
    </>
  )
}

export default App
