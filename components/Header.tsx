
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[92%] max-w-6xl">
      <nav className="glass rounded-full px-8 h-14 flex items-center justify-between shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-black rounded-full" />
          <span className="text-[13px] font-black uppercase tracking-tight-custom">Royal</span>
        </div>
        
        <ul className="hidden md:flex items-center space-x-8 text-[11px] font-semibold text-neutral-500 uppercase tracking-widest-custom">
          <li><a href="#catalog-download" className="hover:text-black">Portfolio</a></li>
          <li><a href="#collection" className="hover:text-black">Catalog</a></li>
          <li><a href="#heritage" className="hover:text-black">Heritage</a></li>
        </ul>

        <div className="flex items-center space-x-4">
          <button className="hidden sm:block text-[11px] font-bold text-neutral-400 hover:text-black uppercase tracking-widest-custom">
            Partner Login
          </button>
          <button className="px-5 py-2 bg-black text-white text-[11px] font-bold uppercase tracking-widest-custom rounded-full hover:bg-neutral-800 active:scale-95">
            Book Sourcing
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
