import { useState,useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Navbar from './components/Navbar'
import Banner from './components/Banner';
import ProductSection from './components/ProductSection';
import ProductCard from './components/ProductCard';
import CartView from './components/CartView';
import Steps from './components/Steps';
import './App.css'

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [view, setView] = useState('products');

  useEffect(() => {
    fetch('/products.json')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("Error fetching products:", err));
  }, []);

  const handleAddToCart = (product) => {
    const isExist = cart.find(item => item.id === product.id);
    if (!isExist) {
      setCart([...cart, product]);
      toast.success(`${product.name} added to cart!`, {
        position: "top-right",
        autoClose: 2000,
        className: 'rounded-xl',
      });
    } else {
      toast.info(`${product.name} is already in the cart.`, {
        position: "top-right",
        autoClose: 2000,
        className: 'rounded-xl',
      });
    }
  };

  const handleRemoveFromCart = (id) => {
    const itemToRemove = cart.find(item => item.id === id);
    if (itemToRemove) {
      setCart(cart.filter(item => item.id !== id));
      toast.error(`${itemToRemove.name} removed from cart.`, {
        position: "top-right",
        autoClose: 2000,
        className: 'rounded-xl',
      });
    }
  };

  const handleProceedToCheckout = () => {
    if (cart.length > 0) {
      setCart([]);
      setView('products');
      toast.success("Proceeding to checkout! Your cart has been cleared.", {
        position: "top-center",
        autoClose: 3000,
        className: 'rounded-xl font-bold bg-purple-600 text-white',
        theme: "colored"
      });
    }
  };

  return (
    <>
      <div className="min-h-screen bg-white font-sans text-gray-900">
        <Navbar cartCount={cart.length} setView={setView} />
        <main>
          <Banner setView={setView} />
          <Stats />

          <ProductSection view={view} setView={setView} cartCount={cart.length}>
          {view === 'products' ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map(product => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  addToCart={handleAddToCart}
                  cart={cart}
                />
              ))}
            </div>
          ) : (
            <CartView 
              cart={cart} 
              removeFromCart={handleRemoveFromCart}
              proceedToCheckout={handleProceedToCheckout}
            />
          )}
        </ProductSection>
        </main>
      </div>
    </>
  )
}

export default App;
