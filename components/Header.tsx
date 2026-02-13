import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Globe, Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  setView: (view: 'home' | 'about' | 'contact' | 'portfolio') => void;
  currentView: 'home' | 'about' | 'contact' | 'portfolio';
}

const Header: React.FC<HeaderProps> = ({ setView, currentView }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

  // Close mobile menu when view changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [currentView]);

  const navLinkClass = (isActive: boolean) => 
    `transition-colors outline-none text-[12px] font-semibold uppercase tracking-widest-custom ${
      isActive ? 'text-black' : 'text-[#666666] hover:text-black'
    }`;

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    if (currentView !== 'home') {
      setView('home');
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

          <div className="mt-auto pb-12">
            <p className="text-[10px] font-black uppercase tracking-widest-custom text-neutral-400 mb-6">Manufacturing Services</p>
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('heritage-blueprint')} className="text-sm font-bold flex items-center justify-between group">
                Elite Grain Tier <ArrowUpRight size={14} className="opacity-40" />
              </button>
              <button onClick={() => scrollToSection('heritage-blueprint')} className="text-sm font-bold flex items-center justify-between group">
                Structural Precision <ArrowUpRight size={14} className="opacity-40" />
              </button>
              <button onClick={() => scrollToSection('heritage-blueprint')} className="text-sm font-bold flex items-center justify-between group">
                Reinforced Foundation <ArrowUpRight size={14} className="opacity-40" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;