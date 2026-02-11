
import React from 'react';
import { Users, Factory, ShieldCheck } from 'lucide-react';

const TeamSection: React.FC = () => {
  return (
    <section id="heritage" className="py-24 bg-neutral-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="w-full lg:w-1/2 animate-reveal">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-black/5 border border-black/5 rounded-full mb-8">
              <Users size={12} className="text-neutral-500" />
              <span className="text-[9px] font-black uppercase tracking-widest-custom text-neutral-400">Our Crafting Force</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-[1.1] tracking-tight-custom">
              The Hands Behind <br />
              <span className="text-neutral-300 font-serif italic font-light">the Heritage.</span>
            </h2>
            
            <p className="text-neutral-500 text-lg mb-10 max-w-lg font-medium leading-relaxed">
              In our Jodhpur manufacturing unit, we believe that true excellence isn't just about the hide—it's about the people who shape it. Every artisan in our facility brings generations of expertise to the workbench, ensuring that every export piece meets the highest standards of international luxury.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-12">
              <div className="group">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white transition-transform group-hover:scale-110">
                    <Factory size={18} />
                  </div>
                  <h4 className="text-[11px] font-black uppercase tracking-widest-custom">Direct Sourcing</h4>
                </div>
                <p className="text-neutral-400 text-[11px] leading-relaxed pl-14">
                  Full control over the tanning and production process within our own dedicated export unit.
                </p>
              </div>
              
              <div className="group">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white transition-transform group-hover:scale-110">
                    <ShieldCheck size={18} />
                  </div>
                  <h4 className="text-[11px] font-black uppercase tracking-widest-custom">Quality Assurance</h4>
                </div>
                <p className="text-neutral-400 text-[11px] leading-relaxed pl-14">
                  Multi-stage inspection by senior craftsmen before every global shipment leaves our floor.
                </p>
              </div>
            </div>

            <button className="group flex items-center space-x-4 px-10 py-5 bg-black text-white rounded-full text-xs font-bold uppercase tracking-widest-custom hover:bg-neutral-800 transition-all shadow-xl shadow-black/10">
              <span>Tour Our Factory</span>
              <Users size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          <div className="w-full lg:w-1/2 relative">
            <div className="relative aspect-[16/9] lg:aspect-[4/3] rounded-[4rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-white">
              {/* Note: In a real environment, you would use the actual local file path. 
                  Using the provided team photo as the primary visual focus. */}
              <img 
                src="https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=2400" 
                alt="Our Manufacturing Team" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-60" />
              
              <div className="absolute bottom-10 left-10 right-10 flex justify-between items-center">
                <div className="glass px-6 py-4 rounded-[2rem] border border-white/20">
                  <p className="text-[9px] font-black uppercase tracking-widest-custom text-black/40 mb-1">Established</p>
                  <p className="text-sm font-bold">2018 — Jodhpur, Rajasthan</p>
                </div>
                
                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center">
                  <Users size={24} className="text-white" />
                </div>
              </div>
            </div>
            
            {/* Floating interaction element */}
            <div className="absolute -top-10 -left-10 glass p-8 rounded-[3rem] border border-white shadow-2xl hidden xl:block animate-reveal" style={{ animationDelay: '0.4s' }}>
              <div className="flex flex-col items-center">
                <span className="text-4xl font-black tracking-tight-custom mb-2">50+</span>
                <span className="text-[9px] font-black uppercase tracking-widest-custom text-neutral-400 text-center">Export Trained<br/>Master Artisans</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
