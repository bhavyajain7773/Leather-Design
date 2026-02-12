
import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

interface AboutSummaryProps {
  onKnowMore: () => void;
}

const AboutSummary: React.FC<AboutSummaryProps> = ({ onKnowMore }) => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="animate-reveal">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-50 rounded-full border border-neutral-100 mb-8">
              <Star size={12} className="text-black" />
              <span className="text-[9px] font-bold uppercase tracking-widest-custom text-neutral-400">Our Heritage</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black tracking-tight-custom mb-10 leading-[1.1]">
              Legacy <br />
              <span className="font-serif italic font-light text-neutral-300">Stitched in Stone.</span>
            </h2>
            
            <p className="text-xl text-neutral-800 font-medium leading-relaxed mb-8">
              Born in the Blue City of Jodhpur, SLB OVERSEAS is more than a manufacturer—we are the stewards of a multi-generational craft focused on the German market.
            </p>
            
            <div className="space-y-6 text-neutral-500 font-medium leading-relaxed mb-12 max-w-lg">
              <p>
                We believe a bag is a silent extension of your identity. It carries your history, your tools, and your ambitions. In our Jodhpur atelier, history isn't tucked away; it's alive in the hands of 50+ master artisans who treat every hide as a living canvas.
              </p>
              <p>
                From the bustling local alleys to the luxury hubs of Berlin and Munich, we export the soul of Indian craftsmanship, refined for the rigor of the German landscape.
              </p>
            </div>

            <button 
              onClick={onKnowMore}
              className="group flex items-center gap-4 px-10 py-5 bg-black text-white rounded-full text-xs font-bold uppercase tracking-widest-custom hover:bg-neutral-800 transition-all shadow-xl shadow-black/5"
            >
              <span>Know More</span>
              <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>

          <div className="relative animate-reveal" style={{ animationDelay: '0.2s' }}>
            <div className="aspect-[4/5] rounded-[4rem] overflow-hidden border border-neutral-100 shadow-2xl relative group">
              <img 
                src="https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&q=80&w=1200" 
                alt="Premium Leather Messenger" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              
              <div className="absolute bottom-10 left-10 right-10">
                <div className="glass p-8 rounded-[3rem] border border-white/20">
                  <p className="text-[10px] font-bold text-black/40 uppercase tracking-widest-custom mb-2">Atelier Insight</p>
                  <p className="text-lg font-serif italic text-black leading-tight">
                    "Crafting items not to be replaced, but to be remembered."
                  </p>
                </div>
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-neutral-50 rounded-full -z-10 border border-neutral-100 flex items-center justify-center">
              <div className="w-20 h-20 bg-white rounded-full border border-neutral-100 flex items-center justify-center animate-spin-slow">
                 <span className="text-[8px] font-black uppercase tracking-tighter text-neutral-200">SLB • EST • 2018 •</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSummary;
