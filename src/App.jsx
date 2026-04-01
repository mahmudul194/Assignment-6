import { useState } from 'react';
import Navbar from './components/Navbar'
import Banner from './components/Banner';
import Stats from './components/Stats';

import './App.css'

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [view, setView] = useState('products');


  return (
    <>
      <div className="min-h-screen bg-white font-sans text-gray-900">
        <Navbar cartCount={cart.length} setView={setView} />
        <main>
          <Banner setView={setView} />
          <Stats />
        </main>
      </div>
    </>
  )
}

export default App;
