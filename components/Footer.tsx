
import React from 'react';
import { Mail, Phone, MapPin, Instagram, Globe, ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="logistics" className="bg-black text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="lg:col-span-2">
            <div className="text-2xl font-black uppercase tracking-tight-custom mb-8">Royal Leather.</div>
            <p className="text-neutral-600 text-lg max-w-sm leading-relaxed mb-8">
              Artisanal leather house bridging Jodhpur craft with global luxury standards.
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
              <li><a href="#" className="hover:text-neutral-400">Track Consignment</a></li>
              <li><a href="#" className="hover:text-neutral-400">MOQ Estimator</a></li>
              <li><a href="#" className="hover:text-neutral-400">Port Directory</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-widest-custom mb-6 text-neutral-500">Export Desk</h4>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest-custom">
              <li><a href="mailto:exports@royalleather.in" className="flex items-center space-x-2"><span>Email Us</span> <ArrowUpRight size={12} /></a></li>
              <li><a href="#" className="hover:text-neutral-400">+91 98765 43210</a></li>
              <li><a href="#" className="hover:text-neutral-400">Jodhpur, India</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] font-black uppercase tracking-widest-custom text-neutral-700">
          <span>© 2024 Royal Leather Exports — Premium Heritage.</span>
          <div className="flex space-x-12">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Sourcing Guide</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
