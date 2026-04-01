import React from 'react';
import playIcon from '../assets/Play.png';
import bannerImg from '../assets/banner.png';

export default function Banner({ setView }) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
      <div className="space-y-6 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100/50 text-purple-600 text-sm font-medium mb-2">
          <div className="w-4 h-4 rounded-full bg-purple-200 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-purple-600"></div>
          </div>
          New: AI-Powered Tools Available
        </div>
        <h1 className="text-5xl md:text-6xl lg:text-[64px] font-bold tracking-tight text-[#1f2937] leading-[1.1]">
          Supercharge Your Digital Workflow
        </h1>
        <p className="text-gray-500 text-lg max-w-lg mx-auto md:mx-0 leading-relaxed font-light">
          Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.<br/>
          Explore Products
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
          <button 
            className="btn bg-[#7c3aed] hover:bg-[#6d28d9] text-white rounded-full px-8 h-12 border-none text-base font-semibold"
            onClick={() => setView('products')}
          >
            Explore Products
          </button>
          <button className="btn bg-white border border-[#7c3aed] text-[#7c3aed] hover:bg-purple-50 rounded-full px-8 h-12 text-base font-semibold">
            <img src={playIcon} className="w-4 h-4 mr-2" alt="Play" /> Watch Demo
          </button>
        </div>
      </div>
      <div className="relative">
        <div className="absolute inset-0 bg-purple-200 blur-[80px] rounded-full opacity-50 -z-10"></div>
        <img 
          src={bannerImg} 
          alt="Dashboard Interface preview" 
          className="rounded-3xl shadow-2xl object-cover h-125 w-full border border-gray-100"
        />
      </div>
    </div>
  );
}
