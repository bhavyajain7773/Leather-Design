
import React from 'react';

const Stats: React.FC = () => {
  const stats = [
    { value: '50+', label: 'Countries', sub: 'UAE, USA, UK, Australia' },
    { value: '100%', label: 'Full Grain', sub: 'Genuine Hide Selection' },
    { value: '2018', label: 'Established', sub: 'Excellence in Jodhpur' },
    { value: '2k+', label: 'SKUs', sub: 'Customizable Designs' },
  ];

  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 border border-neutral-100 rounded-[2.5rem] overflow-hidden divide-x divide-y md:divide-y-0 divide-neutral-100">
          {stats.map((stat, idx) => (
            <div key={idx} className="p-10 flex flex-col items-start hover:bg-neutral-50">
              <span className="text-5xl font-black tracking-tight-custom mb-4">{stat.value}</span>
              <span className="text-[10px] font-black uppercase tracking-widest-custom text-black mb-1">{stat.label}</span>
              <span className="text-[10px] uppercase tracking-widest-custom text-neutral-300">{stat.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
