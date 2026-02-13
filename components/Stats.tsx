import React from 'react';

const Stats: React.FC = () => {
  const stats = [
    { 
      value: 'DE', 
      label: 'Primary Market', 
      sub: 'Germany Exclusive' 
    },
    { 
      value: '100%', 
      label: 'Full Grain', 
      sub: 'Genuine Hide Selection' 
    },
    { 
      value: '2018', 
      label: 'Established', 
      sub: 'Excellence in Jodhpur' 
    },
    { 
      value: '2k+', 
      label: 'SKUs', 
      sub: 'Customizable Designs' 
    },
  ];

  return (
    <section className="bg-white py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-black/5 rounded-[24px] md:rounded-[32px] overflow-hidden divide-x-0 sm:divide-x lg:divide-x divide-y sm:divide-y lg:divide-y-0 divide-black/5 bg-neutral-50">
          {stats.map((stat, idx) => (
            <div key={idx} className="p-10 md:p-16 flex flex-col items-center text-center transition-colors">
              <span className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight-custom mb-4 md:mb-6 text-black">{stat.value}</span>
              <span className="text-[10px] md:text-[11px] font-semibold uppercase tracking-widest-custom text-black mb-1 md:mb-2">{stat.label}</span>
              <span className="text-[9px] md:text-[10px] uppercase tracking-widest-custom text-[#666666] font-light">{stat.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;