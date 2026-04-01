import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#111827] text-gray-300 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 mb-16 border-b border-gray-800 pb-16">
        <div className="lg:col-span-2 pr-4">
          <h2 className="text-[32px] font-bold text-white mb-6 tracking-tight">DigiTools</h2>
          <p className="text-gray-400 text-[15px] font-light leading-relaxed">
            Premium digital tools for creators,<br/>
            professionals, and businesses. Work smarter<br/>
            with our suite of powerful tools.
          </p>
        </div>
        
        <div>
          <h3 className="text-white font-medium mb-6 text-lg">Product</h3>
          <ul className="space-y-4 text-[15px] text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Templates</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-white font-medium mb-6 text-lg">Company</h3>
          <ul className="space-y-4 text-[15px] text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">About</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-white font-medium mb-6 text-lg">Resources</h3>
          <ul className="space-y-4 text-[15px] text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
           <h3 className="text-white font-medium mb-6 text-lg">Social Links</h3>
           <div className="flex gap-3">
            <a href="#" className="w-9 h-9 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
             <a href="#" className="w-9 h-9 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="#111827"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
           </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-[14px] text-gray-500 font-light">
        <p>&copy; 2026 Digitools. All rights reserved.</p>
        <div className="flex gap-8 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Cookies</a>
        </div>
      </div>
    </footer>
  );
}
