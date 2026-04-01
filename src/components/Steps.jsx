import React from 'react';
import userIcon from '../assets/user.png';
import packageIcon from '../assets/package.png';
import rocketIcon from '../assets/rocket.png';

export default function Steps() {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-[40px] font-bold text-gray-900 mb-4">Get Started In 3 Steps</h2>
          <p className="text-gray-500 font-light text-[15px]">Start using premium digital tools in minutes, not hours.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          
          <div className="bg-white p-10 md:p-12 rounded-3xl border border-gray-100 shadow-sm text-center relative hover:-translate-y-1 transition-transform duration-300">
            <div className="absolute top-8 right-8 w-8 h-8 bg-[#7c3aed] text-white rounded-full flex items-center justify-center text-[11px] font-bold tracking-wider">01</div>
            <div className="w-25 h-25 bg-purple-100 rounded-full mx-auto flex items-center justify-center mb-8 mt-4">
              <img src={userIcon} alt="Create Account" className="w-10.5 h-10.5 object-contain" />
            </div>
            <h3 className="text-[22px] font-bold text-gray-900 mb-3">Create Account</h3>
            <p className="text-gray-500 font-light text-[15px] leading-relaxed max-w-65 mx-auto">
              Sign up for free in seconds. No credit card required to get started.
            </p>
          </div>
          
          <div className="bg-white p-10 md:p-12 rounded-3xl border border-gray-100 shadow-sm text-center relative hover:-translate-y-1 transition-transform duration-300">
            <div className="absolute top-8 right-8 w-8 h-8 bg-[#7c3aed] text-white rounded-full flex items-center justify-center text-[11px] font-bold tracking-wider">02</div>
            <div className="w-25 h-25 bg-purple-100 rounded-full mx-auto flex items-center justify-center mb-8 mt-4">
              <img src={packageIcon} alt="Choose Products" className="w-10.5 h-10.5 object-contain" />
            </div>
            <h3 className="text-[22px] font-bold text-gray-900 mb-3">Choose Products</h3>
            <p className="text-gray-500 font-light text-[15px] leading-relaxed max-w-65 mx-auto">
              Browse our catalog and select the tools that fit your needs.
            </p>
          </div>
          
          <div className="bg-white p-10 md:p-12 rounded-3xl border border-gray-100 shadow-sm text-center relative hover:-translate-y-1 transition-transform duration-300">
            <div className="absolute top-8 right-8 w-8 h-8 bg-[#7c3aed] text-white rounded-full flex items-center justify-center text-[11px] font-bold tracking-wider">03</div>
            <div className="w-25 h-25 bg-purple-100 rounded-full mx-auto flex items-center justify-center mb-8 mt-4">
              <img src={rocketIcon} alt="Start Creating" className="w-10.5 h-10.5 object-contain" />
            </div>
            <h3 className="text-[22px] font-bold text-gray-900 mb-3">Start Creating</h3>
            <p className="text-gray-500 font-light text-[15px] leading-relaxed max-w-65 mx-auto">
              Download and start using your premium tools immediately.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
