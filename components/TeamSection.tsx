import React from 'react';
import { Users, Factory, ShieldCheck } from 'lucide-react';

const TeamSection: React.FC = () => {
  return (
    <section id="heritage" className="py-12 md:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center mb-10 md:mb-16 text-center animate-reveal">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-black/5 border border-black/5 rounded-full mb-4 md:mb-6">
            <Users size={12} className="text-black" />
            <span className="text-[9px] font-black uppercase tracking-widest-custom text-neutral-500">Our Crafting Force</span>
          </div>
          <h2 className="text-[32px] sm:text-[42px] md:text-[64px] font-black mb-4 md:mb-6 leading-[1.1] tracking-tight-custom">
            The Hands Behind <br />
            <span className="opacity-20 font-serif italic font-light">SLB Overseas Bags.</span>
          </h2>
          <p className="text-neutral-600 text-base md:text-lg max-w-2xl font-medium leading-relaxed px-2">
            In our Jodhpur manufacturing unit, we believe that true excellence isn't just about the hide—it's about the masters who shape every bag for the German market.
          </p>
        </div>

        <div className="relative mb-12 md:mb-16 animate-reveal" style={{ animationDelay: '0.2s' }}>
          <div className="relative aspect-video sm:aspect-[21/9] rounded-[24px] md:rounded-[4rem] overflow-hidden shadow-2xl border border-black/5 bg-black/5">
            <img 
              src="https://images.unsplash.com/photo-1511406361295-0a5ff814c0e3?auto=format&fit=crop&q=80&w=2400" 
              alt="Artisans working on leather bags" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 mix-blend-multiply opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            
            <div className="absolute bottom-4 md:bottom-10 left-4 md:left-10 right-4 md:right-10 flex flex-col md:flex-row justify-between items-center md:items-end gap-4 md:gap-6">
              <div className="glass px-6 md:px-8 py-4 md:py-6 rounded-[20px] md:rounded-[2.5rem] border border-white/20 backdrop-blur-3xl w-full sm:w-auto">
                <p className="text-[8px] md:text-[10px] font-black uppercase tracking-widest-custom text-black/40 mb-1">Facility Location</p>
                <p className="text-[10px] md:text-sm font-bold tracking-tight text-black">Pratap Nagar Hub — Jodhpur, IN</p>
              </div>
              
              <div className="flex -space-x-3 md:-space-x-4">
                 {[...Array(4)].map((_, i) => (
                   <div key={i} className="w-10 h-10 md:w-14 md:h-14 rounded-full border-2 md:border-4 border-white bg-neutral-200 overflow-hidden shadow-xl">
                     <img src={`https://i.pravatar.cc/150?img=${i + 30}`} alt="Master Artisan" />
                   </div>
                 ))}
                 <div className="w-10 h-10 md:w-14 md:h-14 rounded-full border-2 md:border-4 border-white bg-black flex items-center justify-center text-white text-[8px] md:text-[10px] font-black shadow-xl">
                    +50
                 </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 animate-reveal" style={{ animationDelay: '0.4s' }}>
          <div className="p-6 md:p-8 rounded-[24px] md:rounded-[3rem] bg-black/5 border border-black/5 transition-all">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-6 text-black">
              {/* Fix: Replaced invalid md:size prop with responsive Tailwind classes */}
              <Factory className="w-[18px] h-[18px] md:w-5 md:h-5" />
            </div>
            <h4 className="text-[10px] md:text-[11px] font-black uppercase tracking-widest-custom mb-3 md:mb-4">In-House Unit</h4>
            <p className="text-[12px] md:text-[13px] leading-relaxed opacity-60">Full control over tanning and stitching ensures zero quality deviation for our leather bag exclusive German shipments.</p>
          </div>

          <div className="p-6 md:p-8 rounded-[24px] md:rounded-[3rem] bg-black/5 border border-black/5 transition-all">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-6 text-black">
              {/* Fix: Replaced invalid md:size prop with responsive Tailwind classes */}
              <Users className="w-[18px] h-[18px] md:w-5 md:h-5" />
            </div>
            <h4 className="text-[10px] md:text-[11px] font-black uppercase tracking-widest-custom mb-3 md:mb-4">Export Trained</h4>
            <p className="text-[12px] md:text-[13px] leading-relaxed opacity-60">Our workforce consists of 50+ artisans specializing in the unique precision and quality demands of the German leather market.</p>
          </div>

          <div className="p-6 md:p-8 rounded-[24px] md:rounded-[3rem] bg-black/5 border border-black/5 transition-all">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-6 text-black">
              {/* Fix: Replaced invalid md:size prop with responsive Tailwind classes */}
              <ShieldCheck className="w-[18px] h-[18px] md:w-5 md:h-5" />
            </div>
            <h4 className="text-[10px] md:text-[11px] font-black uppercase tracking-widest-custom mb-3 md:mb-4">SLB Certified</h4>
            <p className="text-[12px] md:text-[13px] leading-relaxed opacity-60">Every leather bag undergoes a 3-step inspection to meet rigorous European standards before packing.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;