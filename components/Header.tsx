
import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

interface HeaderProps {
  setView: (view: 'home' | 'about') => void;
  currentView: 'home' | 'about';
}

const Header: React.FC<HeaderProps> = ({ setView, currentView }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinkClass = (isActive: boolean) => 
    `transition-colors outline-none text-[11px] font-bold uppercase tracking-widest-custom ${
      isActive ? 'text-black' : 'text-neutral-500 hover:text-black'
    }`;

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[92%] max-w-6xl">
      <nav className="glass rounded-full px-8 h-14 flex items-center justify-between shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
        <button 
          onClick={() => setView('home')}
          className="flex items-center space-x-2 outline-none group"
        >
          <div className="w-6 h-6 bg-black rounded-full group-hover:scale-110 transition-transform" />
          <span className="text-[13px] font-black uppercase tracking-tight-custom">SLB Overseas</span>
        </button>
        
        <ul className="hidden md:flex items-center space-x-8">
          <li>
            <button 
              onClick={() => setView('about')}
              className={navLinkClass(currentView === 'about')}
            >
              About Us
            </button>
          </li>
          <li>
            <button 
              onClick={() => { setView('home'); setTimeout(() => { document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' }); }, 100); }}
              className={navLinkClass(false)}
            >
              Catalog
            </button>
          </li>
          
          <li 
            ref={dropdownRef}
            className="relative h-full flex items-center"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button 
              className={`flex items-center space-x-1 ${navLinkClass(isDropdownOpen)}`}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span>Product Tiers</span>
              <ChevronDown size={10} className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            <div 
              className={`absolute top-full left-0 mt-2 w-48 bg-white border border-neutral-100 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 origin-top ${
                isDropdownOpen ? 'opacity-100 scale-100 translate-y-0 visible' : 'opacity-0 scale-95 -translate-y-2 invisible'
              }`}
            >
              <div className="py-2">
                <button onClick={() => setView('home')} className="w-full text-left block px-6 py-3 text-[10px] font-bold uppercase tracking-widest-custom text-neutral-400 hover:bg-neutral-50 hover:text-black transition-colors">Top-Grain Leather</button>
                <button onClick={() => setView('home')} className="w-full text-left block px-6 py-3 text-[10px] font-bold uppercase tracking-widest-custom text-neutral-400 hover:bg-neutral-50 hover:text-black transition-colors">Premium Canvas</button>
                <button onClick={() => setView('home')} className="w-full text-left block px-6 py-3 text-[10px] font-bold uppercase tracking-widest-custom text-neutral-400 hover:bg-neutral-50 hover:text-black transition-colors">Lifestyle Essentials</button>
              </div>
            </div>
          </li>

          <li>
            <button 
              onClick={() => { setView('home'); setTimeout(() => { document.getElementById('location')?.scrollIntoView({ behavior: 'smooth' }); }, 100); }}
              className={navLinkClass(false)}
            >
              Export Desk
            </button>
          </li>
        </ul>

        <div className="flex items-center">
          <button className="px-5 py-2 bg-black text-white text-[11px] font-bold uppercase tracking-widest-custom rounded-full hover:bg-neutral-800 active:scale-95 transition-all">
            Inquiry
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
