
import React from 'react';
import { Users, Factory, ShieldCheck } from 'lucide-react';

const TeamSection: React.FC = () => {
  return (
    <section id="heritage" className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center mb-16 text-center animate-reveal">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-neutral-50 border border-neutral-100 rounded-full mb-6">
            <Users size={12} className="text-black" />
            <span className="text-[9px] font-black uppercase tracking-widest-custom text-neutral-400">Our Crafting Force</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-6 leading-[1.1] tracking-tight-custom">
            The Hands Behind <br />
            <span className="text-neutral-200 font-serif italic font-light">SLB Overseas Bags.</span>
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl font-medium leading-relaxed">
            In our Jodhpur manufacturing unit, we believe that true excellence isn't just about the hide—it's about the masters who shape every bag for the German market.
          </p>
        </div>

        <div className="relative mb-16 animate-reveal" style={{ animationDelay: '0.2s' }}>
          <div className="relative aspect-[21/9] rounded-[4rem] overflow-hidden shadow-2xl border border-neutral-100 bg-neutral-50">
            <img 
              src="https://images.unsplash.com/photo-1517436073-3b1313e2f02c?auto=format&fit=crop&q=80&w=2400" 
              alt="Master artisan crafting a premium leather bag in the Jodhpur atelier" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80" />
            
            <div className="absolute bottom-10 left-10 right-10 flex flex-col md:flex-row justify-between items-end gap-6">
              <div className="glass px-8 py-6 rounded-[2.5rem] border border-white/20 backdrop-blur-3xl">
                <p className="text-[10px] font-black uppercase tracking-widest-custom text-black/40 mb-1">Facility Location</p>
                <p className="text-sm font-bold tracking-tight text-black">Pratap Nagar Industrial Hub — Jodhpur, Rajasthan</p>
              </div>
              
              <div className="flex -space-x-4">
                 {[...Array(5)].map((_, i) => (
                   <div key={i} className="w-14 h-14 rounded-full border-4 border-white bg-neutral-200 overflow-hidden shadow-xl">
                     <img src={`https://i.pravatar.cc/150?img=${i + 30}`} alt="Master Artisan" />
                   </div>
                 ))}
                 <div className="w-14 h-14 rounded-full border-4 border-white bg-black flex items-center justify-center text-white text-[10px] font-black shadow-xl">
                    +50
                 </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-reveal" style={{ animationDelay: '0.4s' }}>
          <div className="p-8 rounded-[3rem] bg-neutral-50 border border-neutral-100 hover:bg-black hover:text-white group transition-all">
            <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:bg-white/10 group-hover:text-white text-black">
              <Factory size={20} />
            </div>
            <h4 className="text-[11px] font-black uppercase tracking-widest-custom mb-4">In-House Unit</h4>
            <p className="text-[13px] leading-relaxed opacity-60">Full control over tanning and stitching ensures zero quality deviation for our leather bag exclusive German shipments.</p>
          </div>

          <div className="p-8 rounded-[3rem] bg-neutral-50 border border-neutral-100 hover:bg-black hover:text-white group transition-all">
            <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:bg-white/10 group-hover:text-white text-black">
              <Users size={20} />
            </div>
            <h4 className="text-[11px] font-black uppercase tracking-widest-custom mb-4">Export Trained</h4>
            <p className="text-[13px] leading-relaxed opacity-60">Our workforce consists of 50+ artisans specializing in the unique precision and quality demands of the German leather market.</p>
          </div>

          <div className="p-8 rounded-[3rem] bg-neutral-50 border border-neutral-100 hover:bg-black hover:text-white group transition-all">
            <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:bg-white/10 group-hover:text-white text-black">
              <ShieldCheck size={20} />
            </div>
            <h4 className="text-[11px] font-black uppercase tracking-widest-custom mb-4">SLB Certified</h4>
            <p className="text-[13px] leading-relaxed opacity-60">Every leather bag undergoes a 3-step inspection to meet rigorous European standards before packing.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
