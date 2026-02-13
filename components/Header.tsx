import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Globe } from 'lucide-react';

interface HeaderProps {
  setView: (view: 'home' | 'about' | 'contact' | 'portfolio') => void;
  currentView: 'home' | 'about' | 'contact' | 'portfolio';
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
    `transition-colors outline-none text-[12px] font-semibold uppercase tracking-widest-custom ${
      isActive ? 'text-black' : 'text-[#666666] hover:text-black'
    }`;

  const scrollToSection = (id: string) => {
    if (currentView !== 'home') {
      setView('home');
      // Wait for home to render before scrolling
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="fixed top-8 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-6xl">
      <nav className="glass-light rounded-full px-10 h-14 flex items-center justify-between shadow-sm">
        <button 
          onClick={() => setView('home')}
          className="flex items-center space-x-3 outline-none group"
        >
          <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
             <Globe size={12} className="text-white" />
          </div>
          <span className="text-[14px] font-semibold uppercase tracking-tight-custom text-black">SLB Overseas</span>
        </button>
        
        <ul className="hidden md:flex items-center space-x-10">
          <li>
            <button 
              onClick={() => setView('about')}
              className={navLinkClass(currentView === 'about')}
            >
              About
            </button>
          </li>
          <li>
            <button 
              onClick={() => setView('portfolio')}
              className={navLinkClass(currentView === 'portfolio')}
            >
              Portfolio
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
              <span>Manufacturing</span>
              <ChevronDown size={10} className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            <div 
              className={`absolute top-full left-0 mt-3 w-56 bg-white border border-black/5 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 origin-top ${
                isDropdownOpen ? 'opacity-100 scale-100 translate-y-0 visible' : 'opacity-0 scale-95 -translate-y-2 invisible'
              }`}
            >
              <div className="py-2">
                <button onClick={() => scrollToSection('heritage-blueprint')} className="w-full text-left block px-6 py-4 text-[10px] font-semibold uppercase tracking-widest-custom text-[#666666] hover:bg-black/5 hover:text-black transition-colors">Elite Grain Tier</button>
                <button onClick={() => scrollToSection('heritage-blueprint')} className="w-full text-left block px-6 py-4 text-[10px] font-semibold uppercase tracking-widest-custom text-[#666666] hover:bg-black/5 hover:text-black transition-colors">Structural Precision</button>
                <button onClick={() => scrollToSection('heritage-blueprint')} className="w-full text-left block px-6 py-4 text-[10px] font-semibold uppercase tracking-widest-custom text-[#666666] hover:bg-black/5 hover:text-black transition-colors">Reinforced Foundation</button>
              </div>
            </div>
          </li>

          <li>
            <button 
              onClick={() => setView('contact')}
              className={navLinkClass(currentView === 'contact')}
            >
              Contact
            </button>
          </li>
        </ul>

        <div className="flex items-center">
          <button 
            onClick={() => setView('contact')}
            className="px-6 py-2 bg-black text-white text-[11px] font-semibold uppercase tracking-widest-custom rounded-full hover:bg-neutral-800 transition-all"
          >
            Inquiry
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;