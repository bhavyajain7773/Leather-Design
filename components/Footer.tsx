import React from 'react';
import { Mail, Phone, MapPin, Instagram, Globe, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  setView: (view: 'home' | 'about' | 'contact' | 'portfolio' | 'gallery' | 'privacy' | 'terms') => void;
}

const Footer: React.FC<FooterProps> = ({ setView }) => {
  return (
    <footer id="logistics" className="bg-black text-white pt-20 md:pt-32 pb-12 md:pb-16">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-20 mb-20 md:32">
          <div className="lg:col-span-2">
            <div className="text-[28px] md:text-[32px] font-semibold uppercase font-serif tracking-tight-custom mb-6 md:mb-10">SLB OVERSEAS.</div>
            <p className="text-neutral-400 text-base md:text-xl max-w-sm leading-relaxed mb-8 md:mb-12 font-inter font-light">
              Premium manufacturer and exporter of leather artifacts from Jodhpur to Germany.
            </p>
            <div className="flex space-x-6">
              <a href="https://slboverseas.com" className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <Instagram className="w-[18px] h-[18px] md:w-5 md:h-5" />
              </a>
              <a href="https://slboverseas.com" className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <Globe className="w-[18px] h-[18px] md:w-5 md:h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] md:text-[11px] font-semibold uppercase tracking-widest-custom mb-6 md:mb-10 text-neutral-500">Navigation</h4>
            <ul className="space-y-4 md:space-y-6 text-[11px] md:text-sm font-semibold uppercase tracking-widest-custom">
              <li>
                <button 
                  onClick={() => setView('home')} 
                  className="hover:text-neutral-400 flex items-center gap-3 transition-colors uppercase outline-none"
                >
                  Home <ArrowUpRight size={14}/>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setView('about')} 
                  className="hover:text-neutral-400 flex items-center gap-3 transition-colors uppercase outline-none"
                >
                  About <ArrowUpRight size={14}/>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setView('portfolio')} 
                  className="hover:text-neutral-400 flex items-center gap-3 transition-colors uppercase outline-none"
                >
                  Portfolio <ArrowUpRight size={14}/>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setView('gallery')} 
                  className="hover:text-neutral-400 flex items-center gap-3 transition-colors uppercase outline-none"
                >
                  Gallery <ArrowUpRight size={14}/>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setView('contact')} 
                  className="hover:text-neutral-400 flex items-center gap-3 transition-colors uppercase outline-none"
                >
                  Contact <ArrowUpRight size={14}/>
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] md:text-[11px] font-semibold uppercase tracking-widest-custom mb-6 md:mb-10 text-neutral-500">Contact</h4>
            <ul className="space-y-6 md:space-y-8 text-[11px] md:text-sm font-semibold uppercase tracking-widest-custom">
              <li className="flex flex-col gap-1 md:gap-2">
                 <span className="text-[9px] md:text-[10px] text-neutral-600">Email</span>
                 <a href="mailto:slboverseas2025@gmail.com" className="hover:text-neutral-400 normal-case text-base md:text-lg break-all">slboverseas2025@gmail.com</a>
              </li>
              <li className="flex flex-col gap-1 md:gap-2">
                 <span className="text-[9px] md:text-[10px] text-neutral-600">Phone</span>
                 <a href="tel:+917793003465" className="hover:text-neutral-400 text-base md:text-lg">+91 7793003465</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 md:pt-16 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-10 text-[9px] md:text-[10px] font-semibold uppercase tracking-widest-custom text-neutral-600 text-center md:text-left">
          <span>© 2026 SLB OVERSEAS — Elite Manufacturing Heritage.</span>
          <div className="flex space-x-8 md:space-x-12">
            <button onClick={() => setView('privacy')} className="hover:text-white transition-colors outline-none uppercase">Privacy</button>
            <button onClick={() => setView('terms')} className="hover:text-white transition-colors outline-none uppercase">Terms</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;