import React from 'react';

export default function ProductSection({ view, setView, cartCount, children }) {
  return (
    <div className="bg-gray-50 py-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">Premium Digital Tools</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Choose from our curated collection of premium digital products designed to boost your productivity.
          </p>
          
          <div className="mt-8 flex justify-center">
            <div className="inline-flex items-center p-1 bg-white border border-gray-100 rounded-full shadow-sm">
              <button
                onClick={() => setView('products')}
                className={`rounded-full px-8 py-3 text-[17px] font-semibold transition-all duration-300 ${
                  view === 'products' 
                  ? 'bg-[#7c3aed] text-white shadow-[0_4px_14px_0_rgba(124,58,237,0.39)]' 
                  : 'bg-transparent text-[#2e1065] hover:bg-purple-50'
                }`}
              >
                Products
              </button>
              <button
                onClick={() => setView('cart')}
                className={`rounded-full px-8 py-3 text-[17px] font-semibold transition-all duration-300 ${
                  view === 'cart' 
                  ? 'bg-[#7c3aed] text-white shadow-[0_4px_14px_0_rgba(124,58,237,0.39)]' 
                  : 'bg-transparent text-[#2e1065] hover:bg-purple-50'
                }`}
              >
                Cart ({cartCount})
              </button>
            </div>
          </div>
        </div>
        
        {children}
      </div>
    </div>
  );
}
