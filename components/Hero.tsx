import React from 'react';
import { ArrowRight, Globe } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-48 pb-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        <div className="inline-flex items-center space-x-2 px-4 py-2 bg-neutral-100 border border-black/5 rounded-full mb-12 animate-reveal" style={{ animationDelay: '0.1s' }}>
          <Globe size={12} className="text-black" />
          <span className="text-[11px] font-semibold uppercase tracking-widest-custom text-black">Exclusively Exporting to Germany</span>
        </div>

        <h1 className="text-[42px] md:text-[64px] font-black leading-[1.1] tracking-tight-custom mb-12 animate-reveal" style={{ animationDelay: '0.2s' }}>
          <span style={{ color: '#E5E5E5' }}>Crafting</span> <span className="text-black">Excellence.</span> <br />
          <span className="text-black">
            <span className="font-serif italic font-light text-black">Global</span> Logistics.
          </span>
        </h1>
        
        <div className="max-w-2xl mb-16 animate-reveal" style={{ animationDelay: '0.3s' }}>
          <p className="text-[#666666] text-sm md:text-base font-medium leading-relaxed font-inter mx-auto">
            SLB OVERSEAS bridges artisanal Jodhpur craft with everyday practicality, delivering premium lifestyle essentials exclusively to the German market.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8 animate-reveal" style={{ animationDelay: '0.4s' }}>
          <a 
            href="https://slboverseas.com"
            className="group flex items-center space-x-4 px-8 py-3 bg-black text-white rounded-full hover:bg-neutral-800 transition-all shadow-lg"
          >
            <span className="text-[12px] font-semibold uppercase tracking-widest-custom">Export Portfolio</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="https://slboverseas.com"
            className="px-8 py-3 bg-white border border-black text-black rounded-full text-[12px] font-semibold uppercase tracking-widest-custom hover:bg-neutral-50 transition-all"
          >
            OEM Request
          </a>
        </div>

        <div className="mt-24 w-full relative animate-reveal" style={{ animationDelay: '0.5s' }}>
          <div className="relative rounded-[32px] overflow-hidden bg-neutral-100 border border-black/5 aspect-[21/9]">
            <img 
              src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=2400" 
              alt="Premium SLB Overseas Leather" 
              className="w-full h-full object-cover grayscale opacity-90 transition-transform duration-[4000ms] hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;