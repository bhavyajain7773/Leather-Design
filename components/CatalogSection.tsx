import React from 'react';
import { Download, FileText, ArrowRight } from 'lucide-react';

const CatalogSection: React.FC = () => {
  return (
    <section id="catalog-download" className="py-20 bg-black text-white rounded-[32px] mx-4 my-8 overflow-hidden shadow-2xl">
      <div className="max-w-7xl mx-auto px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="animate-reveal">
            <div className="inline-flex items-center space-x-3 px-5 py-2 bg-white/10 border border-white/10 rounded-full mb-10">
              <FileText size={14} className="text-white" />
              <span className="text-[10px] font-semibold uppercase tracking-widest-custom">Export Portfolio 2025 v.4</span>
            </div>
            <h2 className="text-[42px] md:text-[64px] font-black mb-12 leading-[1.1] tracking-tight-custom">
              Download <br /><span className="opacity-30 font-serif italic font-light">The Catalog.</span>
            </h2>
            <p className="text-neutral-400 text-xl mb-16 max-w-md font-light leading-relaxed">
              Explore our comprehensive collection of artisanal carry, including technical specs for the German professional sector.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <a 
                href="https://slboverseas.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center justify-center space-x-4 px-8 py-3 bg-white text-black rounded-full hover:bg-neutral-200 transition-all shadow-2xl"
              >
                <Download size={20} />
                <span className="text-[12px] font-semibold uppercase tracking-widest-custom">Get PDF Collection</span>
              </a>
              <a 
                href="https://slboverseas.com"
                className="group flex items-center justify-center space-x-4 px-8 py-3 bg-transparent border border-white/20 text-white rounded-full hover:bg-white/10 transition-all"
              >
                <span className="text-[12px] font-semibold uppercase tracking-widest-custom">Sample Request</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          <div className="relative group rounded-[32px] overflow-hidden border border-white/10 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&q=80&w=1200" 
              alt="SLB Overseas Portfolio Preview" 
              className="w-full aspect-[4/3] object-cover transition-all duration-1000 group-hover:scale-105 grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CatalogSection;