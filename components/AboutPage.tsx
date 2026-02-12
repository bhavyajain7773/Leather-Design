
import React from 'react';
// Fix: Added missing CheckCircle2 and PenTool icons to the imports from lucide-react
import { ShieldCheck, Globe, Star, ArrowRight, Anchor, Target, Factory, Mail, Phone, MapPin, CheckCircle2, PenTool } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white text-black pt-32 pb-24">
      {/* 01. The Identity Statement */}
      <section className="max-w-4xl mx-auto px-6 mb-32">
        <div className="inline-flex items-center gap-3 px-3 py-1 bg-neutral-50 border border-neutral-100 rounded-full mb-8 animate-reveal">
          <div className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
          <span className="text-[9px] font-black uppercase tracking-widest-custom text-neutral-400">Identity Statement</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black tracking-tight-custom leading-[0.9] mb-12 animate-reveal" style={{ animationDelay: '0.1s' }}>
          More Than a Bag.<br />
          <span className="font-serif italic font-light text-neutral-300">An Identity.</span>
        </h1>
        
        <div className="prose prose-xl max-w-none animate-reveal" style={{ animationDelay: '0.2s' }}>
          <p className="text-2xl md:text-3xl font-medium leading-tight text-neutral-800 mb-8">
            Based in the heart of Jodhpur, India, SLB OVERSEAS is a dedicated manufacturer and exporter of premium Leather and Canvas artifacts. We believe a bag is never just a utility; it is a silent extension of your professional standards and personal journey.
          </p>
          <p className="text-lg text-neutral-500 leading-relaxed font-medium">
            At SLB OVERSEAS, our mission is to redefine artisanal craftsmanship for the modern global landscape. We don't build items to be replaced. We build them to be remembered. Every hide selected, every seam stitched, and every foundation reinforced is done so with a single objective: to create a lifestyle essential that stands the test of time and travel.
          </p>
        </div>
      </section>

      {/* 02. The Heritage Story (1,000 Word Narrative) */}
      <section className="bg-neutral-50 py-32 mb-32">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-6 mb-16">
            <div className="h-px w-12 bg-black" />
            <h2 className="text-sm font-black uppercase tracking-widest-custom">The Heritage Narrative</h2>
          </div>

          <div className="space-y-12 text-lg leading-relaxed text-neutral-700 font-medium">
            <p>
              The sun rising over the sandstone silhouettes of Jodhpur brings more than just heat; it brings a rhythmic certainty. This is the "Blue City," a place where history isn't tucked away in museums, but alive in the calloused hands of its people. SLB OVERSEAS—formerly recognized as Royal Leather Exports—was born in these very alleys. We are the inheritors of a lineage that treats leather not as a material, but as a living canvas.
            </p>

            <p>
              Our journey from a local atelier to a premier global exporter has been one of discipline. In an era where mass production has stripped objects of their soul, we chose a different path. We recognized that the international B2B buyer—whether in the glittering hubs of Dubai or the creative studios of London—isn't just looking for a product. They are looking for a partner. Someone who understands that a single skipped stitch can compromise a year's worth of brand reputation.
            </p>

            <blockquote className="border-l-4 border-black pl-8 my-16">
              <p className="text-3xl font-serif italic text-black leading-tight">
                "Workmanship is our only true currency. We export the soul of Jodhpur, refined for the rigor of the global market."
              </p>
            </blockquote>

            <p>
              As we scaled, we brought Jodhpur's traditional artisanal soul into conversation with the demanding standards of modern manufacturing. We invested in our people—50+ artisans who are trained to meet the specific requirements of Western and Middle Eastern luxury sectors. We transformed our workspace into a hub of "Digital Leathercraft," where traditional methods are guided by rigorous technical specs. This combination is why our portfolio is now a mainstay for brands seeking reliable OEM and private-label solutions.
            </p>

            <p>
              We don't believe in the ephemeral. A bag from SLB OVERSEAS is a commitment. It is designed to be an "identity statement" for the person who carries it. It carries their ambitions, their tools, and their history. This philosophy is embedded in every layer of our creation, from the selection of the hide to the final bolt on the base.
            </p>
          </div>
        </div>
      </section>

      {/* 03. The Three-Tier Quality Philosophy */}
      <section className="max-w-6xl mx-auto px-6 mb-32">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight-custom mb-4">The Architecture of Quality</h2>
          <p className="text-neutral-400 font-medium uppercase tracking-widest-custom text-[10px]">Managing the Three Critical Layers</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* TOP */}
          <div className="p-10 border border-neutral-100 rounded-[3rem] hover:bg-neutral-50 transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <Star size={20} />
            </div>
            <h3 className="text-xs font-black uppercase tracking-widest-custom mb-6">01. THE TOP</h3>
            <p className="text-neutral-500 text-sm leading-relaxed mb-6 font-medium">
              The visible excellence. Our <strong>Top</strong> layer management begins with the selection of elite-grade, 100% genuine hides and premium 18oz cotton canvas. We prioritize full-grain surfaces that age beautifully, developing a unique character that synthetic alternatives can never mimic.
            </p>
            <ul className="space-y-3">
              {['Full-Grain Selection', 'Hand-Picked Hides', 'Water-Resistant Finish'].map((item) => (
                <li key={item} className="flex items-center gap-2 text-[10px] font-black text-black">
                  <CheckCircle2 size={12} className="text-neutral-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* MIDDLE */}
          <div className="p-10 border border-neutral-100 rounded-[3rem] hover:bg-neutral-50 transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <PenTool size={20} />
            </div>
            <h3 className="text-xs font-black uppercase tracking-widest-custom mb-6">02. THE MIDDLE</h3>
            <p className="text-neutral-500 text-sm leading-relaxed mb-6 font-medium">
              The internal integrity. The <strong>Middle</strong> layer focuses on structural durability and organized utility. This is where our OEM and private-label expertise shines—creating custom internal compartments and reinforced structural linings that maintain the bag's silhouette.
            </p>
            <ul className="space-y-3">
              {['Cotton Twill Lining', 'Organized Pockets', 'OEM Customization'].map((item) => (
                <li key={item} className="flex items-center gap-2 text-[10px] font-black text-black">
                  <CheckCircle2 size={12} className="text-neutral-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* BOTTOM */}
          <div className="p-10 border border-neutral-100 rounded-[3rem] hover:bg-neutral-50 transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <Anchor size={20} />
            </div>
            <h3 className="text-xs font-black uppercase tracking-widest-custom mb-6">03. THE BOTTOM</h3>
            <p className="text-neutral-500 text-sm leading-relaxed mb-6 font-medium">
              The lasting foundation. Our <strong>Bottom</strong> layer protocols ensure the bag can withstand the friction of reality. We use hardened foundation boards and premium metal hardware to protect the base, combined with ethical export-grade assembly standards.
            </p>
            <ul className="space-y-3">
              {['Reinforced Bases', 'Foundation Hardware', 'Export Compliance'].map((item) => (
                <li key={item} className="flex items-center gap-2 text-[10px] font-black text-black">
                  <CheckCircle2 size={12} className="text-neutral-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 04. Global Mission & Technical Standards */}
      <section className="bg-black text-white py-32 rounded-[5rem] mx-6">
        <div className="max-w-4xl mx-auto px-10 text-center">
          <Globe className="mx-auto mb-10 opacity-30 animate-spin-slow" size={48} />
          <h2 className="text-4xl md:text-6xl font-black tracking-tight-custom mb-10 leading-tight">
            Accessible Luxury.<br />
            <span className="text-neutral-700">Global Standards.</span>
          </h2>
          <p className="text-neutral-400 text-lg mb-16 leading-relaxed max-w-2xl mx-auto font-medium">
            Our mission is to bring high-end craftsmanship to the UAE, USA, UK, and Australia. We operate with professional transparency: providing a 50% advance payment structure and maintaining strict quality control throughout the manufacturing cycle.
          </p>

          <a 
            href="https://slboverseas.com/compliance" 
            target="_blank" 
            className="inline-flex items-center gap-4 px-12 py-6 bg-white text-black rounded-full text-xs font-black uppercase tracking-widest-custom hover:bg-neutral-200 transition-all group shadow-2xl shadow-white/5"
          >
            <span>Global Standards & Compliance PDF</span>
            <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
          </a>
        </div>
      </section>

      {/* Footer Info */}
      <section className="max-w-4xl mx-auto px-6 mt-32 border-t border-neutral-100 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
           <div className="flex items-start gap-4">
              <Mail className="text-neutral-300" size={20} />
              <div>
                 <p className="text-[10px] font-black uppercase tracking-widest-custom text-neutral-400 mb-1">Electronic Mail</p>
                 <p className="text-sm font-bold">slboverseas2025@gmail.com</p>
              </div>
           </div>
           <div className="flex items-start gap-4">
              <Phone className="text-neutral-300" size={20} />
              <div>
                 <p className="text-[10px] font-black uppercase tracking-widest-custom text-neutral-400 mb-1">Direct Line</p>
                 <p className="text-sm font-bold">+91 7793003465</p>
              </div>
           </div>
           <div className="flex items-start gap-4">
              <MapPin className="text-neutral-300" size={20} />
              <div>
                 <p className="text-[10px] font-black uppercase tracking-widest-custom text-neutral-400 mb-1">Athelier Location</p>
                 <p className="text-sm font-bold">J-231 Pratap Nagar, Jodhpur, Rajasthan.</p>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
