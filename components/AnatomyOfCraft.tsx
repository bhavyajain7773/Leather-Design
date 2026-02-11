
import React from 'react';
import { ArrowRight } from 'lucide-react';

const AnatomyOfCraft: React.FC = () => {
  return (
    <section id="heritage" className="py-32 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative rounded-[3.5rem] overflow-hidden aspect-square shadow-2xl">
             <img 
               src="https://images.unsplash.com/photo-1517423568366-8b83523034fd?auto=format&fit=crop&q=80&w=1200" 
               alt="Artisanal Leatherwork" 
               className="absolute inset-0 w-full h-full object-cover grayscale"
             />
             <div className="absolute inset-0 bg-black/20" />
          </div>
          
          <div>
            <h2 className="text-5xl md:text-7xl font-black mb-10 leading-[1.1] tracking-tight-custom">
              Built for<br /><span className="text-neutral-300 font-serif italic font-light">the World.</span>
            </h2>
            
            <div className="space-y-10 mb-12">
              {[
                { title: 'Top Grain Selection', text: 'Only the top 5% of raw hides pass our structural integrity tests.' },
                { title: 'Structural Lining', text: 'Dual-stitched microfiber linings ensuring long-term export durability.' },
                { title: 'Reinforced Base', text: 'Marine-grade brass hardware to withstand global logistics transit.' }
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-6 border-b border-neutral-200 pb-6 last:border-0">
                  <span className="text-[10px] font-black text-neutral-300 uppercase tracking-widest-custom mt-1">0{i+1}</span>
                  <div>
                    <h4 className="text-sm font-black mb-1 uppercase tracking-widest-custom">{item.title}</h4>
                    <p className="text-neutral-500 text-sm leading-relaxed max-w-sm">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="group flex items-center space-x-6 px-10 py-6 bg-black text-white rounded-full hover:bg-neutral-900 shadow-xl">
              <span className="text-xs font-black uppercase tracking-widest-custom">Full Heritage Story</span>
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnatomyOfCraft;
