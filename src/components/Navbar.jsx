import React from 'react';
import { ShoppingCart } from 'lucide-react';

export default function Navbar({ cartCount, setView }) {
  return (
    <div className="bg-white w-full z-50 sticky top-0 shadow-sm md:shadow-none">
      <div className="navbar max-w-275 mx-auto px-4 py-4 md:py-3">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden -ml-4 hover:bg-transparent active:bg-transparent text-gray-800 focus:bg-transparent">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white border border-gray-100 text-[#374151] rounded-box z-1 mt-3 w-52 p-2 shadow-lg lg:hidden flex gap-2">
              <li><a className="hover:text-[#7C3AED] hover:bg-gray-50 active:bg-gray-100">Products</a></li>
              <li><a className="hover:text-[#7C3AED] hover:bg-gray-50 active:bg-gray-100">Features</a></li>
              <li><a className="hover:text-[#7C3AED] hover:bg-gray-50 active:bg-gray-100">Pricing</a></li>
              <li><a className="hover:text-[#7C3AED] hover:bg-gray-50 active:bg-gray-100">Testimonials</a></li>
              <li><a className="hover:text-[#7C3AED] hover:bg-gray-50 active:bg-gray-100">FAQ</a></li>
            </ul>
          </div>
          <a className="text-[26px] md:text-[40px] font-bold text-[#7C3AED] inline-flex tracking-tight cursor-pointer hover:opacity-90 transition-opacity ml-1 lg:ml-0">
            DigiTools
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-10 font-medium text-[15px] text-[#374151]">
            <li><a className="cursor-pointer hover:text-[#7C3AED] transition-colors">Products</a></li>
            <li><a className="cursor-pointer hover:text-[#7C3AED] transition-colors">Features</a></li>
            <li><a className="cursor-pointer hover:text-[#7C3AED] transition-colors">Pricing</a></li>
            <li><a className="cursor-pointer hover:text-[#7C3AED] transition-colors">Testimonials</a></li>
            <li><a className="cursor-pointer hover:text-[#7C3AED] transition-colors">FAQ</a></li>
          </ul>
        </div>
        <div className="navbar-end flex gap-6 items-center">
          <div 
            className="relative cursor-pointer text-[#374151] hover:text-[#7C3AED] transition-colors flex items-center" 
            onClick={() => setView('cart')}
          >
            <ShoppingCart className="w-5 h-5 md:w-5.5 md:h-5.5" strokeWidth={2} />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-2 py-0.5 px-1.5 text-[10px] text-white bg-[#7C3AED] rounded-full font-bold shadow-sm">
                {cartCount}
              </span>
            )}
          </div>
          <a className="cursor-pointer hidden sm:block text-[#374151] font-medium text-[15px] hover:text-[#7C3AED] transition-colors">
            Login
          </a>
          <button className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white rounded-full px-6 md:px-8 h-10 md:h-12 text-[14px] md:text-[15px] font-semibold transition-colors shadow-sm ml-1 md:ml-2">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
