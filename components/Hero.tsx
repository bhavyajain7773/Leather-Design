
import React from 'react';
import { ArrowRight, Star, Target } from 'lucide-react';

const Hero: React.FC = () => {
  const annotations = [
    {
      id: '01',
      top: '15%',
      left: '52%',
      label: 'Grain Leather',
      desc: 'Our highest tier of exterior hide, selected for flawless texture.',
      align: 'right',
      linePath: 'M 0 0 L 40 -40 L 100 -40',
    },
    {
      id: '02',
      top: '48%',
      left: '55%',
      label: 'Layer Lining',
      desc: 'Multi-layer structural integrity and luxury hand-feel.',
      align: 'right',
      linePath: 'M 0 0 L 40 0 L 80 0',
    },
    {
      id: '03',
      top: '82%',
      left: '48%',
      label: 'Base Reinforcement',
      desc: 'Hardened foundation for durability and lifestyle practicality.',
      align: 'left',
      linePath: 'M 0 0 L -60 0 L -120 0',
    }
  ];

  return (
    <section className="relative pt-28 pb-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        <div className="inline-flex items-center space-x-2 px-3 py-1 bg-neutral-50 border border-neutral-100 rounded-full mb-6 animate-reveal" style={{ animationDelay: '0.1s' }}>
          <span className="text-[9px] font-black uppercase tracking-widest-custom text-neutral-400">Exporting to UAE, USA, UK, Australia</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tight-custom text-center mb-8 animate-reveal" style={{ animationDelay: '0.2s' }}>
          Crafting <span className="text-neutral-200">Excellence</span>.<br />
          <span className="font-serif italic font-light">Global</span> Logistics.
        </h1>
        
        <p className="text-neutral-500 text-lg md:text-xl max-w-2xl text-center mb-10 font-medium leading-relaxed animate-reveal" style={{ animationDelay: '0.3s' }}>
          SLB OVERSEAS bridges artisanal Jodhpur craft with everyday practicality, delivering premium lifestyle essentials to the global market.
        </p>

        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 animate-reveal" style={{ animationDelay: '0.4s' }}>
          <button className="group flex items-center space-x-3 px-10 py-5 bg-black text-white rounded-full hover:bg-neutral-900 shadow-2xl shadow-black/10 transition-all">
            <span className="text-xs font-bold uppercase tracking-widest-custom">View Portfolio</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-10 py-5 bg-white border border-neutral-200 text-black rounded-full text-xs font-bold uppercase tracking-widest-custom hover:bg-neutral-50 transition-all">
            OEM Request
          </button>
        </div>

        <div className="mt-16 w-full relative animate-reveal" style={{ animationDelay: '0.5s' }}>
          <div className="relative rounded-[3rem] overflow-hidden bg-neutral-100 group border border-neutral-100 shadow-sm">
            <img 
              src="https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&q=80&w=2400" 
              alt="SLB Overseas Luxury Bag" 
              className="w-full aspect-[21/9] object-cover transition-transform duration-[4000ms] group-hover:scale-105"
            />
            
            <div className="absolute inset-0 hidden lg:block overflow-hidden">
              {annotations.map((note, idx) => (
                <div key={idx} className="absolute" style={{ top: note.top, left: note.left }}>
                  <div className="relative flex items-center justify-center">
                    <div className="absolute w-8 h-8 bg-white/40 rounded-full animate-ping" />
                    <div className="w-3 h-3 bg-black rounded-full border-2 border-white relative z-10 shadow-lg" />
                    
                    <svg className={`absolute pointer-events-none overflow-visible transition-all duration-700 ${note.align === 'left' ? 'right-0' : 'left-0'}`} width="200" height="100">
                      <path d={note.linePath} fill="none" stroke="black" strokeWidth="1.5" strokeDasharray="4 2" className="opacity-40 group-hover:opacity-100 transition-opacity" />
                    </svg>
                    
                    <div className={`absolute whitespace-nowrap z-50 transition-all duration-500 transform group-hover:scale-105 ${note.align === 'left' ? 'right-[120px] text-right' : 'left-[100px] text-left'} top-1/2 -translate-y-1/2`}>
                      <div className="bg-black/90 backdrop-blur-md px-5 py-4 rounded-2xl border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
                        <div className="flex items-center gap-3 mb-1.5">
                           <span className="text-[10px] font-black text-neutral-400 font-mono tracking-tighter">SPEC.{note.id}</span>
                           <div className="h-px flex-grow bg-white/10" />
                        </div>
                        <h4 className="text-[11px] font-black uppercase tracking-widest-custom text-white mb-1">{note.label}</h4>
                        <p className="text-[9px] text-neutral-400 font-medium leading-relaxed max-w-[160px] whitespace-normal">
                          {note.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
               <div className="bg-black/80 backdrop-blur-xl px-4 py-2 rounded-full flex items-center gap-3 border border-white/10 shadow-2xl transition-all hover:bg-black">
                  <Target size={12} className="text-white animate-pulse" />
                  <span className="text-[9px] font-black uppercase tracking-widest-custom text-white">Quality Tier Blueprint Active</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
