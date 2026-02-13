import React from 'react';
import { Mail, Phone, MapPin, CheckCircle2, Star, ArrowRight } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white text-black transition-colors duration-500">
      
      {/* SECTION 1: IDENTITY */}
      <section className="pt-32 pb-16 px-6 max-w-7xl mx-auto">
        <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-neutral-100 border border-black/5 rounded-full mb-12 animate-reveal">
          <Star size={12} className="text-black" />
          <span className="text-[10px] font-black uppercase tracking-widest-custom text-black">Identity Statement</span>
        </div>
        
        <h1 className="text-[42px] md:text-[64px] font-black leading-[1.1] tracking-tight-custom mb-16 animate-reveal text-black">
          The Soul <br />
          <span className="opacity-30 font-serif italic font-light">of Jodhpur.</span>
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start animate-reveal" style={{ animationDelay: '0.2s' }}>
          <div className="md:col-span-8">
            <p className="text-2xl md:text-3xl font-semibold leading-tight mb-12 text-black">
              SLB OVERSEAS is a premium manufacturer and exporter of leather artifacts, bridging the gap between ancient Rajasthani soul and global utility.
            </p>
            <div className="space-y-8 text-lg font-light text-[#666666] leading-relaxed max-w-2xl">
              <p>
                A bag is never just an accessory; it is a declaration of standards. In the "Blue City" of Jodhpur, we carry forward a multi-generational lineage of leathercraft. Our mission is to create lifestyle essentials that don't just age—they evolve.
              </p>
              <p>
                Serving the German market with precision and reliability, we ensure that every hide selected and every seam stitched meets the rigorous demands of international trade.
              </p>
            </div>
          </div>
          <div className="md:col-span-4 flex flex-col gap-6">
            <div className="p-10 bg-neutral-50 rounded-[32px] border border-black/5">
              <h4 className="text-[10px] font-black uppercase tracking-widest mb-6 opacity-40">Export Standards</h4>
              <ul className="space-y-4 text-[11px] font-semibold uppercase tracking-widest-custom">
                <li className="flex items-center justify-between"><span>Elite Grain</span> <CheckCircle2 size={12}/></li>
                <li className="flex items-center justify-between"><span>Structure</span> <CheckCircle2 size={12}/></li>
                <li className="flex items-center justify-between"><span>Foundation</span> <CheckCircle2 size={12}/></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE NARRATIVE (DARK BENTO) */}
      <section className="bg-black text-white py-20 px-6 rounded-[32px] mx-4 overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-6 mb-20 opacity-30">
            <div className="h-px w-16 bg-white" />
            <span className="text-[11px] font-semibold uppercase tracking-widest-custom">The Heritage Narrative</span>
          </div>

          <div className="space-y-16">
            <h2 className="font-serif italic text-[32px] md:text-[52px] leading-tight text-white/90">
              "Workmanship is our only true currency. We export the soul of Jodhpur, refined for the rigor of the global market."
            </h2>
            
            <div className="space-y-12 text-lg font-light text-neutral-400 max-w-3xl leading-relaxed">
              <p>
                Jodhpur has always been a place where history isn't tucked away; it's alive in the calloused hands of its people. SLB OVERSEAS was born in these very sandstone alleys. We treat leather not as a commodity, but as a living canvas that records the history of its owner.
              </p>
              <p>
                Our journey from a local atelier to a premier global exporter has been one of discipline. We recognized early that the professional international buyer isn't looking for a product—they are looking for a partner.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: GLOBAL DESK */}
      <section className="bg-white text-black py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-[42px] md:text-[64px] font-black mb-12 tracking-tight-custom leading-[1.1]">Export Desk</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20 text-left">
            <div className="flex flex-col gap-2">
              <Mail className="opacity-20 mb-2" size={24}/>
              <span className="text-[10px] font-black uppercase tracking-widest opacity-40">Email</span>
              <p className="text-lg font-semibold">slboverseas2025@gmail.com</p>
            </div>
            <div className="flex flex-col gap-2">
              <Phone className="opacity-20 mb-2" size={24}/>
              <span className="text-[10px] font-black uppercase tracking-widest opacity-40">Direct Line</span>
              <p className="text-lg font-semibold">+91 7793003465</p>
            </div>
            <div className="flex flex-col gap-2">
              <MapPin className="opacity-20 mb-2" size={24}/>
              <span className="text-[10px] font-black uppercase tracking-widest opacity-40">Factory Address</span>
              <p className="text-lg font-semibold">J-231 Pratap Nagar, Jodhpur, India.</p>
            </div>
          </div>
          
          <a href="https://slboverseas.com" className="inline-flex items-center gap-6 px-8 py-3 bg-black text-white rounded-full text-[12px] font-semibold uppercase tracking-widest-custom hover:bg-neutral-800 transition-all shadow-xl">
            <span>Download Compliance Report</span>
            <ArrowRight size={16}/>
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;