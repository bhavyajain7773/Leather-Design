import React from 'react';
import { ArrowRight } from 'lucide-react';

interface AboutSummaryProps {
  onKnowMore: () => void;
}

const AboutSummary: React.FC<AboutSummaryProps> = ({ onKnowMore }) => {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center">
          <div className="animate-reveal order-2 lg:order-1">
            <h2 className="text-[32px] sm:text-[42px] md:text-[52px] lg:text-[64px] font-black tracking-tight-custom mb-6 md:mb-12 leading-[1.1] text-black">
              Legacy <br />
              <span className="font-serif font-light italic opacity-30">Stitched in Time.</span>
            </h2>
            
            <p className="text-base md:text-lg text-black font-semibold leading-relaxed mb-6 md:mb-10 font-inter max-w-lg">
              Precision engineered in Jodhpur. Exclusively exported to Germany. SLB OVERSEAS transforms traditional Rajasthani artistry into high-performance lifestyle essentials that define international standards.
            </p>
            
            <div className="space-y-6 md:space-y-8 text-sm md:text-base font-light text-[#666666] leading-relaxed mb-10 md:mb-16 max-w-lg font-inter">
              <p>
                From our Jodhpur atelier to the German market, we deliver international-quality products built with multi-generational mastery.
              </p>
              <p>
                Our lifestyle essentials bridge personal style with everyday practicality, meticulously crafted for partners who demand the absolute best.
              </p>
            </div>

            <button 
              onClick={onKnowMore}
              className="w-full sm:w-auto group flex items-center justify-center gap-6 px-8 py-3 bg-black text-white rounded-full text-[12px] font-semibold uppercase tracking-widest-custom hover:bg-neutral-800 transition-all"
            >
              <span>Our Vision</span>
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>

          <div className="relative animate-reveal order-1 lg:order-2" style={{ animationDelay: '0.2s' }}>
            <div className="aspect-[4/5] rounded-[24px] md:rounded-[32px] overflow-hidden border border-black/5 bg-neutral-100">
              <img 
                src="https://drive.google.com/thumbnail?id=1gfav4qVwtEOc2DKwDBqJJwyfljXDNznD&sz=w1200" 
                alt="SLB OVERSEAS Legacy Leather Bag" 
                className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
                onError={(e) => {
                  // Fallback to a high-end leather texture if the drive link fails
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1559563458-527698bf5295?auto=format&fit=crop&q=80&w=1200";
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSummary;