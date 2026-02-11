
import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        <div className="inline-flex items-center space-x-2 px-3 py-1 bg-neutral-50 border border-neutral-100 rounded-full mb-8 animate-reveal" style={{ animationDelay: '0.1s' }}>
          <span className="text-[9px] font-black uppercase tracking-widest-custom text-neutral-400">Exporting to UAE, USA, UK, AUS</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tight-custom text-center mb-10 animate-reveal" style={{ animationDelay: '0.2s' }}>
          Crafting <span className="text-neutral-200">Heritage</span>.<br />
          <span className="font-serif italic font-light">Exporting</span> Excellence.
        </h1>
        
        <p className="text-neutral-500 text-lg md:text-xl max-w-2xl text-center mb-12 font-medium leading-relaxed animate-reveal" style={{ animationDelay: '0.3s' }}>
          Premium Jodhpur full-grain leather, optimized for global logistics and tailored for elite international portfolios. 
        </p>

        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 animate-reveal" style={{ animationDelay: '0.4s' }}>
          <button className="group flex items-center space-x-3 px-10 py-5 bg-black text-white rounded-full hover:bg-neutral-900 shadow-2xl shadow-black/10">
            <span className="text-xs font-bold uppercase tracking-widest-custom">Shop Collection</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-10 py-5 bg-white border border-neutral-200 text-black rounded-full text-xs font-bold uppercase tracking-widest-custom hover:bg-neutral-50">
            Design Studio
          </button>
        </div>

        <div className="mt-20 w-full relative animate-reveal" style={{ animationDelay: '0.5s' }}>
          <div className="rounded-[3rem] overflow-hidden bg-neutral-100">
            <img 
              src="https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&q=80&w=2400" 
              alt="Luxury Leather Craft" 
              className="w-full aspect-[21/9] object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </div>

          {/* Cal.com style floating UI badge */}
          <div className="absolute -bottom-6 right-6 md:right-16 bg-white p-5 rounded-[2rem] border border-neutral-100 shadow-xl flex items-center space-x-4">
             <div className="flex -space-x-3">
               {[1,2,3].map(i => (
                 <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-neutral-200 overflow-hidden">
                   <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
                 </div>
               ))}
             </div>
             <div>
               <div className="flex space-x-1 mb-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} size={10} fill="black" />)}
               </div>
               <p className="text-[10px] font-black uppercase tracking-widest-custom text-neutral-300">Global Trusted Partner</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
