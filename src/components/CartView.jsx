import React from 'react';
import { Trash2 } from 'lucide-react';

const cartIcon = '/products/shopping-cart.png';

export default function CartView({ cart, removeFromCart, proceedToCheckout }) {
  if (cart.length === 0) {
    return (
      <div className="max-w-3xl mx-auto text-center py-20 bg-white rounded-3xl border border-gray-100 shadow-sm">
        <div className="inline-flex items-center justify-center p-6 bg-gray-50 rounded-full mb-6 relative">
          <img src={cartIcon} alt="Empty Cart" className="w-12 h-12 object-contain grayscale opacity-50 block shadow-inner rounded-md" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h3>
        <p className="text-gray-500">Go back to products to add some items.</p>
      </div>
    );
  }

  const subtotal = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
      <div className="p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-8">Selected Products</h3>
        <div className="space-y-4">
          {cart.map((item) => {
            const iconSrc = `/products/${item.icon}`;
            return (
              <div key={item.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white rounded-xl shadow-sm">
                    <img src={iconSrc} alt={item.name} className="w-6 h-6 object-contain" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{item.name}</h4>
                    <p className="text-gray-500 font-medium">${item.price}</p>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="btn btn-ghost btn-circle text-red-500 hover:bg-red-50"
                  aria-label="Remove item"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            );
          })}
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-100 flex items-center justify-between">
          <span className="text-lg text-gray-500 font-medium">Total Price:</span>
          <span className="text-3xl font-bold text-gray-900">${subtotal}</span>
        </div>
        
        <button
          onClick={proceedToCheckout}
          className="w-full btn bg-purple-600 hover:bg-purple-700 text-white rounded-xl h-14 mt-8 border-none text-lg font-semibold shadow-lg shadow-purple-200"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}
