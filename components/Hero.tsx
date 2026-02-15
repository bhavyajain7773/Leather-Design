import React from 'react';
import { ArrowRight, Globe } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-28 md:pt-32 pb-12 md:pb-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        <div className="inline-flex items-center space-x-2 px-3 md:px-4 py-2 bg-neutral-100 border border-black/5 rounded-full mb-6 md:mb-8 animate-reveal" style={{ animationDelay: '0.1s' }}>
          <Globe size={10} className="md:size-3 text-black" />
          <span className="text-[9px] md:text-[11px] font-semibold uppercase tracking-widest-custom text-black">Exclusively Exporting to Germany</span>
        </div>

        <h1 className="text-[36px] sm:text-[42px] md:text-[52px] lg:text-[64px] font-black leading-[1.1] tracking-tight-custom mb-6 md:mb-10 animate-reveal" style={{ animationDelay: '0.2s' }}>
          <span style={{ color: '#E5E5E5' }}>Crafting</span> <span className="text-black">Excellence.</span> <br className="hidden sm:block" />
          <span className="text-black">
            <span className="font-serif italic font-light text-black">Global</span> Logistics.
          </span>
        </h1>
        
        <div className="max-w-2xl mb-8 md:mb-12 animate-reveal" style={{ animationDelay: '0.3s' }}>
          <p className="text-[#666666] text-sm md:text-base font-medium leading-relaxed font-inter mx-auto px-4 md:px-0">
            From the heritage looms of Jodhpur to the elite boutiques of Germany. SLB OVERSEAS translates centuries of artisanal leather mastery into precision-engineered artifacts for the global professional.
          </p>
        </div>

        <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8 animate-reveal" style={{ animationDelay: '0.4s' }}>
          <a 
            href="https://slboverseas.com"
            className="w-full sm:w-auto group flex items-center justify-center space-x-4 px-8 py-3 bg-black text-white rounded-full hover:bg-neutral-800 transition-all shadow-lg"
          >
            <span className="text-[12px] font-semibold uppercase tracking-widest-custom">Export Portfolio</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="https://slboverseas.com"
            className="w-full sm:w-auto flex items-center justify-center px-8 py-3 bg-white border border-black text-black rounded-full text-[12px] font-semibold uppercase tracking-widest-custom hover:bg-neutral-50 transition-all"
          >
            OEM Request
          </a>
        </div>

        <div className="mt-12 md:mt-16 w-full relative animate-reveal" style={{ animationDelay: '0.5s' }}>
          <div className="relative rounded-[24px] md:rounded-[32px] overflow-hidden bg-neutral-100 border border-black/5 aspect-[16/9] md:aspect-[21/9]">
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