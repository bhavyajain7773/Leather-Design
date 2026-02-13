import React from 'react';
import { ArrowDown, CheckCircle2, Globe, Shield, PenTool, ExternalLink } from 'lucide-react';

const AboutUsStory: React.FC = () => {
  return (
    <section id="heritage" className="bg-white pt-32 pb-48">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Editorial Header */}
        <div className="mb-24 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-50 rounded-full border border-neutral-100 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
            <span className="text-[9px] font-black uppercase tracking-widest-custom text-neutral-400">The Identity Statement</span>
          </div>
          <h2 className="text-[42px] md:text-[64px] font-black tracking-tight-custom mb-10 leading-[1.1]">
            Heritage in <br />
            <span className="font-serif italic font-light text-neutral-300">Every Stitch.</span>
          </h2>
          <div className="w-12 h-px bg-black mx-auto mb-10" />
        </div>

        {/* Chapter 1: The Identity Statement */}
        <article className="prose prose-neutral max-w-none">
          <div className="mb-20">
            <p className="text-2xl md:text-3xl font-medium text-black leading-tight mb-8">
              A bag is never just an accessory. It is an identity statement. At SLB OVERSEAS, we understand that for the global citizen, the professional, and the wanderer, their choice of carry is a silent declaration of their standards.
            </p>
            <p className="text-lg text-neutral-600 leading-relaxed mb-6">
              Based in the heart of Jodhpur, India—the Blue City known for its resilient spirit and ancient artisanal lineages—SLB OVERSEAS has evolved from a local workshop into a premier global manufacturer and exporter. We specialize in high-end Leather and Canvas bags that bridge the gap between old-world soul and modern utility. We don't believe in the ephemeral "trends" of fast fashion. Instead, we build lifestyle essentials intended to age alongside their owners, gaining character with every mile and every meeting.
            </p>
          </div>

          {/* Chapter 2: The Jodhpur Heritage */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-start">
            <div>
              <h3 className="text-sm font-black uppercase tracking-[0.3em] text-black mb-6">The Jodhpur Heritage</h3>
              <p className="text-neutral-600 leading-relaxed mb-6">
                Our story is inseparable from the landscape of Rajasthan. Jodhpur has always been a place where the sun is unforgiving and the craft is uncompromising. In our atelier, we employ over 50 skilled artisans whose hands possess the muscle memory of generations. They don't just see a piece of hide; they see the potential for a legacy. 
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default AboutUsStory;