import React from 'react';
import { Check } from 'lucide-react';

export default function ProductCard({ product, addToCart, cart }) {
  const iconSrc = `/products/${product.icon}`;
  const inCart = cart.some(item => item.id === product.id);

  const getTypeStyle = (type) => {
    switch(type) {
      case 'hot': return 'bg-orange-100 text-orange-700';
      case 'new': return 'bg-green-100 text-green-700';
      case 'popular': return 'bg-purple-100 text-purple-700';
      case 'best': return 'bg-blue-100 text-blue-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
      <div className="flex justify-between items-start mb-6">
        <div className={`p-4 rounded-xl inline-block ${getTypeStyle(product.tagType)}/80`}>
          <img src={iconSrc} alt={product.name} className="w-8 h-8 object-contain" />
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-bold leading-tight ${getTypeStyle(product.tagType)}`}>
          {product.tag}
        </span>
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
      <p className="text-gray-500 mb-6 text-sm min-h-10 leading-relaxed">
        {product.description}
      </p>

      <div className="mb-6 flex items-baseline">
        <span className="text-3xl font-bold">${product.price}</span>
        <span className="text-gray-500 ml-1 text-sm font-medium">/{product.period}</span>
      </div>

      <ul className="space-y-3 mb-8 min-h-25">
        {product.features.map((feature, idx) => (
          <li key={idx} className="flex flex-row items-center gap-2 text-sm text-gray-600">
            <Check className="w-4 h-4 text-green-500 shrink-0" />
            <span className="font-medium">{feature}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={() => addToCart(product)}
        className={`w-full btn rounded-xl h-12 border-none font-semibold ${
          inCart
            ? 'bg-purple-600/10 text-purple-700 hover:bg-purple-600/20'
            : 'bg-purple-600 hover:bg-purple-700 text-white shadow-lg shadow-purple-200'
        }`}
      >
        {inCart ? 'Added to cart' : 'Buy Now'}
      </button>
    </div>
  );
}
