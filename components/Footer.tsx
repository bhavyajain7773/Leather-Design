import React from 'react';
import { Mail, Phone, MapPin, Instagram, ArrowUpRight, Facebook, Linkedin, Pin as Pinterest } from 'lucide-react';

interface FooterProps {
  setView: (view: 'home' | 'about' | 'contact' | 'portfolio' | 'gallery' | 'privacy' | 'terms') => void;
}

const Footer: React.FC<FooterProps> = ({ setView }) => {
  return (
    <footer id="logistics" className="bg-black text-white pt-20 md:pt-32 pb-12 md:pb-16">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-20 mb-20 md:32">
          <div className="lg:col-span-2">
            <div className="mb-6 md:mb-10 flex items-center space-x-4">
              <img 
                src="https://drive.google.com/thumbnail?id=1JDfZZCSY7SgPfcuZYF0n5hj5ADg42i6L&sz=w1200" 
                alt="SLB Overseas Logo" 
                className="h-12 md:h-16 w-auto object-contain invert"
                referrerPolicy="no-referrer"
              />
              <span className="text-[20px] md:text-[24px] font-black uppercase tracking-widest-custom text-white">Overseas</span>
            </div>
            <p className="text-neutral-400 text-base md:text-xl max-w-sm leading-relaxed mb-8 md:mb-12 font-inter font-light">
              Premium manufacturer and exporter of leather artifacts from Jodhpur to Germany, EU, USA & Canada.
            </p>
            <div className="flex flex-wrap gap-4 md:gap-6">
              <a 
                href="https://www.instagram.com/slb_overseas_jodhpur/?hl=en" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all"
              >
                <Instagram className="w-[18px] h-[18px] md:w-5 md:h-5" />
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=61588170375475" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all"
              >
                <Facebook className="w-[18px] h-[18px] md:w-5 md:h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/company/slb-overseas/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all"
              >
                <Linkedin className="w-[18px] h-[18px] md:w-5 md:h-5" />
              </a>
              <a 
                href="https://in.pinterest.com/slboverseas2025/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all"
              >
                <svg 
                  viewBox="0 0 24 24" 
                  fill="currentColor" 
                  className="w-[18px] h-[18px] md:w-5 md:h-5"
                >
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.965 1.406-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.261 7.929-7.261 4.162 0 7.398 2.967 7.398 6.93 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"/>
                </svg>
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
                 <a href="mailto:business@slboverseasexim.com" className="hover:text-neutral-400 normal-case text-base md:text-lg break-all">business@slboverseasexim.com</a>
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