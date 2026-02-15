import React, { useState, useEffect } from 'react';
import { Globe, Menu, X } from 'lucide-react';

interface HeaderProps {
  setView: (view: 'home' | 'about' | 'contact' | 'portfolio') => void;
  currentView: 'home' | 'about' | 'contact' | 'portfolio';
}

const Header: React.FC<HeaderProps> = ({ setView, currentView }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when view changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [currentView]);

  const navLinkClass = (isActive: boolean) => 
    `transition-colors outline-none text-[12px] font-semibold uppercase tracking-widest-custom ${
      isActive ? 'text-black' : 'text-[#666666] hover:text-black'
    }`;

  return (
    <>
      <header className="fixed top-4 md:top-8 left-1/2 -translate-x-1/2 z-[100] w-[92%] max-w-6xl">
        <nav className="glass-light rounded-full px-6 md:px-10 h-14 flex items-center justify-between shadow-sm">
          <button 
            onClick={() => setView('home')}
            className="flex items-center space-x-2 md:space-x-3 outline-none group"
          >
            <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center shrink-0">
               <Globe size={12} className="text-white" />
            </div>
            <span className="text-[12px] md:text-[14px] font-semibold uppercase tracking-tight-custom text-black whitespace-nowrap">SLB Overseas</span>
          </button>
          
          <ul className="hidden lg:flex items-center space-x-10">
            <li>
              <button onClick={() => setView('about')} className={navLinkClass(currentView === 'about')}>About</button>
            </li>
            <li>
              <button onClick={() => setView('portfolio')} className={navLinkClass(currentView === 'portfolio')}>Portfolio</button>
            </li>
            <li>
              <button onClick={() => setView('contact')} className={navLinkClass(currentView === 'contact')}>Contact</button>
            </li>
          </ul>

          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setView('contact')}
              className="hidden sm:block px-6 py-2 bg-black text-white text-[11px] font-semibold uppercase tracking-widest-custom rounded-full hover:bg-neutral-800 transition-all"
            >
              Inquiry
            </button>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center bg-black/5 rounded-full"
            >
              {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[90] lg:hidden bg-white transition-transform duration-500 ease-in-out ${
          isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="flex flex-col h-full pt-32 px-10">
          <div className="flex flex-col space-y-8">
            <button 
              onClick={() => setView('home')} 
              className={`text-4xl font-black tracking-tight-custom text-left ${currentView === 'home' ? 'text-black' : 'text-neutral-300'}`}
            >
              Home
            </button>
            <button 
              onClick={() => setView('about')} 
              className={`text-4xl font-black tracking-tight-custom text-left ${currentView === 'about' ? 'text-black' : 'text-neutral-300'}`}
            >
              About
            </button>
            <button 
              onClick={() => setView('portfolio')} 
              className={`text-4xl font-black tracking-tight-custom text-left ${currentView === 'portfolio' ? 'text-black' : 'text-neutral-300'}`}
            >
              Portfolio
            </button>
            <button 
              onClick={() => setView('contact')} 
              className={`text-4xl font-black tracking-tight-custom text-left ${currentView === 'contact' ? 'text-black' : 'text-neutral-300'}`}
            >
              Contact
            </button>
          </div>

          <div className="mt-auto pb-12 border-t border-neutral-100 pt-8">
            <div className="flex flex-col space-y-2">
              <a href="mailto:slboverseas2025@gmail.com" className="text-xs font-semibold text-neutral-500">slboverseas2025@gmail.com</a>
              <a href="tel:+917793003465" className="text-xs font-semibold text-neutral-500">+91 7793003465</a>
            </div>
            <p className="mt-6 text-[9px] font-black uppercase tracking-widest-custom text-neutral-300">© 2025 SLB OVERSEAS</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;