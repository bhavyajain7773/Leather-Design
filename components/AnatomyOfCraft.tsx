import React from 'react';
import { Target, ShieldCheck, Zap } from 'lucide-react';

const AnatomyOfCraft: React.FC = () => {
  const tiers = [
    {
      id: '01',
      title: 'Top: Elite Grain',
      icon: <Target size={24} />,
      desc: 'Selected from the highest tier of full-grain hides, ensuring natural durability and premium patina development.'
    },
    {
      id: '02',
      title: 'Middle: Structure',
      icon: <Zap size={24} />,
      desc: 'High-density interior fabric linings and structural padding that maintain form through rigorous global travel.'
    },
    {
      id: '03',
      title: 'Bottom: Foundation',
      icon: <ShieldCheck size={24} />,
      desc: 'Reinforced base construction with export-grade hardware, providing a lasting foundation for lifetime use.'
    }
  ];

  return (
    <section id="heritage-blueprint" className="section-padding bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-24 animate-reveal">
          <h2 className="text-[32px] sm:text-[42px] md:text-[64px] font-black tracking-tight-custom mb-4 md:mb-6 text-black leading-[1.1]">Quality Architecture</h2>
          <p className="text-[#666666] text-base md:text-xl font-light max-w-2xl mx-auto">Three-tier structural excellence for the professional German market.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {tiers.map((tier, idx) => (
            <div 
              key={idx} 
              className="p-8 md:p-12 bg-white rounded-[24px] md:rounded-[32px] border border-black/5 hover:border-black/20 transition-all group animate-reveal"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="w-12 h-12 md:w-14 md:h-14 bg-black text-white rounded-xl md:rounded-2xl flex items-center justify-center mb-8 md:mb-10 group-hover:scale-110 transition-transform">
                {tier.icon}
              </div>
              <h4 className="text-[10px] md:text-[12px] font-semibold uppercase tracking-widest-custom text-[#666666] mb-3 md:mb-4">Tier {tier.id}</h4>
              <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-black font-inter">{tier.title}</h3>
              <p className="text-base md:text-lg font-light text-[#666666] leading-relaxed">
                {tier.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnatomyOfCraft;