
import React from 'react';
import { Mail, Phone, MapPin, Instagram, Globe, ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="logistics" className="bg-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
          <div className="lg:col-span-2">
            <div className="text-2xl font-black uppercase tracking-tight-custom mb-6">SLB OVERSEAS.</div>
            <p className="text-neutral-600 text-lg max-w-sm leading-relaxed mb-6">
              Dedicated manufacturer and exporter of premium leather and canvas bags from Jodhpur to the world.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <Globe size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-widest-custom mb-6 text-neutral-500">Logistics</h4>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest-custom">
              <li><a href="#" className="hover:text-neutral-400">OEM Solutions</a></li>
              <li><a href="#" className="hover:text-neutral-400">Private Label</a></li>
              <li><a href="#" className="hover:text-neutral-400">Sample Requests</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-widest-custom mb-6 text-neutral-500">Export Desk</h4>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest-custom">
              <li><a href="mailto:slboverseas2025@gmail.com" className="flex items-center space-x-2"><span>Email Us</span> <ArrowUpRight size={12} /></a></li>
              <li><a href="tel:+917793003465" className="hover:text-neutral-400">+91 7793003465</a></li>
              <li><a href="#" className="hover:text-neutral-400">Jodhpur, India</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] font-black uppercase tracking-widest-custom text-neutral-700">
          <span>© 2025 SLB OVERSEAS — Premium Export Heritage.</span>
          <div className="flex space-x-12">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
