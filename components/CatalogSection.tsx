
import React from 'react';
import { Download, FileText, ArrowRight } from 'lucide-react';

const CatalogSection: React.FC = () => {
  return (
    <section id="catalog-download" className="py-24 bg-black text-white rounded-[4rem] mx-6 my-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-reveal">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/10 border border-white/10 rounded-full mb-6">
              <FileText size={12} className="text-neutral-500" />
              <span className="text-[9px] font-black uppercase tracking-widest-custom text-neutral-400">Export Portfolio 2024</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-[1.1] tracking-tight-custom">
              Our Full <br /><span className="text-neutral-700 italic font-serif font-light">Collection.</span>
            </h2>
            <p className="text-neutral-500 text-lg mb-10 max-w-md font-medium leading-relaxed">
              Explore our comprehensive export catalog featuring over 200+ artisanal full-grain leather artifacts, detailed technical specifications, and volume-based pricing for international partners.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button className="group flex items-center justify-center space-x-3 px-10 py-5 bg-white text-black rounded-full hover:bg-neutral-200 transition-all shadow-xl shadow-white/5">
                <Download size={18} />
                <span className="text-xs font-black uppercase tracking-widest-custom">Download Catalog</span>
              </button>
              <button className="group flex items-center justify-center space-x-3 px-10 py-5 bg-transparent border border-white/10 text-white rounded-full hover:bg-white/5 transition-all">
                <span className="text-xs font-black uppercase tracking-widest-custom">Request Samples</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="flex items-center space-x-8 text-neutral-600">
               <div>
                 <p className="text-[10px] font-black uppercase tracking-widest-custom text-white/40 mb-1">Format</p>
                 <p className="text-xs font-bold">PDF (12.4 MB)</p>
               </div>
               <div className="w-px h-8 bg-white/10" />
               <div>
                 <p className="text-[10px] font-black uppercase tracking-widest-custom text-white/40 mb-1">Last Updated</p>
                 <p className="text-xs font-bold">March 2024</p>
               </div>
            </div>
          </div>

          <div className="relative group">
            <div className="aspect-[4/3] bg-neutral-900 rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl relative">
              <img 
                src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=1200" 
                alt="Catalog Preview" 
                className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80" />
              
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-3xl border border-white/20 flex items-center justify-center animate-pulse">
                    <FileText size={32} className="text-white" />
                 </div>
              </div>

              <div className="absolute bottom-10 left-10 right-10">
                 <div className="p-6 glass rounded-[2rem] border border-white/20">
                    <p className="text-[9px] font-black text-white/40 uppercase tracking-widest-custom mb-1">Preview</p>
                    <p className="text-sm font-bold tracking-tight">Heritage & Volume Pricing Guide</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CatalogSection;
