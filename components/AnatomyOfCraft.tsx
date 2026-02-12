
import React from 'react';
import { Globe2, Target, MoveUpRight, ShieldCheck, Zap, Anchor } from 'lucide-react';

const AnatomyOfCraft: React.FC = () => {
  return (
    <section id="heritage" className="py-32 bg-white overflow-hidden border-y border-neutral-100">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-3 px-4 py-2 bg-black text-white rounded-full mb-8">
               <Globe2 size={14} className="animate-spin-slow" />
               <span className="text-[10px] font-black uppercase tracking-[0.3em]">Globally Trusted Manufacturer</span>
            </div>
            <h2 className="text-7xl md:text-9xl font-black mb-0 leading-[0.85] tracking-tight-custom text-black">
              Built for<br />
              <span className="text-neutral-200 font-serif italic font-light">the World.</span>
            </h2>
          </div>
          <div className="lg:pb-4">
             <p className="text-neutral-400 text-lg font-medium leading-relaxed max-w-sm border-l-2 border-neutral-100 pl-8">
               SLB OVERSEAS combines skilled craftsmanship with modern manufacturing to deliver international-quality products from India to the global market.
             </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          <div className="lg:col-span-4 flex flex-col justify-between space-y-12">
            <div className="space-y-8">
               <div className="group cursor-default">
                  <div className="w-12 h-12 bg-neutral-50 rounded-2xl flex items-center justify-center mb-6 border border-neutral-100 group-hover:bg-black group-hover:text-white transition-all">
                    <Target size={20} />
                  </div>
                  <h4 className="text-[11px] font-black uppercase tracking-widest-custom mb-4">Our Vision</h4>
                  <p className="text-sm font-medium text-neutral-500 leading-relaxed">To become a globally trusted manufacturer and exporter of premium leather and canvas bags through quality, innovation, and ethical production.</p>
               </div>
               
               <div className="group cursor-default">
                  <div className="w-12 h-12 bg-neutral-50 rounded-2xl flex items-center justify-center mb-6 border border-neutral-100 group-hover:bg-black group-hover:text-white transition-all">
                    <Zap size={20} />
                  </div>
                  <h4 className="text-[11px] font-black uppercase tracking-widest-custom mb-4">Our Mission</h4>
                  <p className="text-sm font-medium text-neutral-500 leading-relaxed">Delivering consistent craftsmanship, competitive pricing, and timely shipments while building long-term international relationships.</p>
               </div>
            </div>

            <div className="p-8 bg-black text-white rounded-[3rem] relative overflow-hidden group">
               <div className="relative z-10">
                  <p className="text-[10px] font-black uppercase tracking-widest-custom mb-4 opacity-40">Export Standards</p>
                  <p className="text-xl font-medium leading-tight mb-8">Strict quality control from raw material selection to final packaging.</p>
                  <button className="flex items-center space-x-2 text-[10px] font-black uppercase tracking-widest-custom hover:translate-x-2 transition-transform">
                    <span>Quality Protocol</span>
                    <MoveUpRight size={14} />
                  </button>
               </div>
               <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-white/10 transition-all" />
            </div>
          </div>

          <div className="lg:col-span-8 relative rounded-[4rem] overflow-hidden bg-neutral-50 border border-neutral-100 min-h-[500px]">
             <img src="https://images.unsplash.com/photo-1517423568366-8b83523034fd?auto=format&fit=crop&q=80&w=1600" className="absolute inset-0 w-full h-full object-cover opacity-80" alt="Material focus" />
             <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-transparent" />
             
             <div className="absolute top-12 left-12 max-w-xs">
                <span className="text-[9px] font-black uppercase tracking-[0.4em] text-black mb-4 block">Manufacturing Focus</span>
                <h3 className="text-4xl font-black tracking-tight-custom mb-6">OEM & Private Label.</h3>
                <p className="text-neutral-500 text-sm font-medium leading-relaxed">
                  We specialize in tailoring our manufacturing force to meet specific brand requirements, ensuring every artifact matches your international portfolio standards.
                </p>
             </div>

             <div className="absolute bottom-12 right-12 flex gap-4">
                <div className="w-16 h-16 bg-white rounded-full border border-neutral-100 flex items-center justify-center shadow-xl hover:scale-110 transition-transform cursor-pointer">
                   <ShieldCheck size={24} />
                </div>
                <div className="w-16 h-16 bg-white rounded-full border border-neutral-100 flex items-center justify-center shadow-xl hover:scale-110 transition-transform cursor-pointer">
                   <Anchor size={24} />
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnatomyOfCraft;
