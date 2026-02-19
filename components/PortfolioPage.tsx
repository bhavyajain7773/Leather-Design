import React, { useState } from 'react';
import { Archive, Layers } from 'lucide-react';
import { Product } from '../types';

interface PortfolioPageProps {
  setView: (view: 'home' | 'about' | 'contact' | 'portfolio') => void;
}

const portfolioProducts: Product[] = [
  { 
    id: '1', 
    name: '"Sel de Mer" Canvas Rucksack', 
    category: 'Leather & Canvas', 
    moq: '25 units', 
    imageUrl: 'https://drive.google.com/thumbnail?id=1W9TmunVWLGwrpzB92qOTk-4TmvKhJWeU&sz=w1200' 
  },
  { 
    id: '2', 
    name: '"Vanguard" Star Messenger', 
    category: 'Leather & Canvas', 
    moq: '25 units', 
    imageUrl: 'https://drive.google.com/thumbnail?id=1zUfcgf8cReyDfoeLgEFgowYQb7fMZ5Tc&sz=w1200' 
  },
  { 
    id: '3', 
    name: '"Atelier" Tan Backpack', 
    category: 'Leather & Canvas', 
    moq: '25 units', 
    imageUrl: 'https://drive.google.com/thumbnail?id=1ceHF-DUX-LOe22u56wcWOiC1w5E0qicO&sz=w1200' 
  },
  { 
    id: '4', 
    name: '"Manifesto" Star Tote', 
    category: 'Fashion Bags', 
    moq: '25 units', 
    imageUrl: 'https://drive.google.com/thumbnail?id=1Qt6sDsmPEnOGOe-aOSDg-bxEkp6ZPIMI&sz=w1200' 
  },
  { 
    id: '5', 
    name: '"Sage" Heritage Carryall', 
    category: 'Lifestyle Essentials', 
    moq: '25 units', 
    imageUrl: 'https://drive.google.com/thumbnail?id=1963Q3pKK90maxD6XJp1pVkO_b5VEZjkD&sz=w1200' 
  },
  { 
    id: '6', 
    name: '"Fringe" Star Shopper', 
    category: 'Fashion Bags', 
    moq: '25 units', 
    imageUrl: 'https://drive.google.com/thumbnail?id=1P172Bcm8KEe6lo3_7DsK6TvkYbZfmMiL&sz=w1200' 
  }
];

const PortfolioPage: React.FC<PortfolioPageProps> = ({ setView }) => {
  const [active, setActive] = useState('All');
  const categories = ['All', 'Leather & Canvas', 'Fashion Bags', 'Lifestyle Essentials'];

  const filteredProducts = active === 'All' 
    ? portfolioProducts 
    : portfolioProducts.filter(product => product.category === active);

  return (
    <div className="bg-white text-black min-h-screen pt-24 md:pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Editorial Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 lg:gap-12 mb-12 md:mb-16 animate-reveal">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-50 rounded-full border border-neutral-100 mb-6 md:mb-8">
              <Archive size={12} className="text-black" />
              <span className="text-[9px] font-black uppercase tracking-widest-custom text-neutral-500">The 2025 Collection</span>
            </div>
            <h1 className="text-[36px] sm:text-[42px] lg:text-[72px] font-black leading-[1.1] tracking-tight-custom mb-6 md:mb-8">
              Curated <br />
              <span className="font-serif italic font-light text-neutral-300">Artifacts.</span>
            </h1>
            <p className="text-base md:text-xl text-neutral-500 font-light leading-relaxed">
              Explore our comprehensive range of high-end carry solutions, engineered in Jodhpur for the specialized demands of the German export sector.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2 md:gap-3">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 md:px-6 py-2 rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-widest-custom transition-all duration-300 ${
                  active === cat 
                    ? 'bg-black text-white' 
                    : 'bg-neutral-50 text-neutral-400 hover:text-black border border-transparent hover:border-black/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {filteredProducts.map((product, index) => (
            <div 
              key={product.id} 
              className="group animate-reveal" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative aspect-[4/5] bg-neutral-50 rounded-[24px] md:rounded-[40px] overflow-hidden mb-6 md:mb-8 border border-black/5">
                <img 
                  src={product.imageUrl} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&q=80&w=1200";
                  }}
                />
                
                <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8 right-6 md:left-8">
                  <div className="flex justify-between items-center bg-white/90 backdrop-blur px-4 md:px-6 py-3 md:py-4 rounded-[1.5rem] md:rounded-[2rem] shadow-sm">
                    <span className="text-[8px] md:text-[9px] font-black uppercase tracking-widest-custom text-black/40">Min. Order</span>
                    <span className="text-[9px] md:text-[10px] font-bold text-black">{product.moq}</span>
                  </div>
                </div>
              </div>

              <div className="px-2 md:px-4">
                <div className="flex justify-between items-start mb-3 md:mb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-black mb-1">{product.name}</h3>
                    <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-black/30">{product.category}</p>
                  </div>
                </div>
                
                <div className="pt-3 md:pt-4 border-t border-black/5 flex items-center justify-between">
                   <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-[8px] md:text-[9px] font-black uppercase tracking-widest-custom text-black/40">Ready for Export</span>
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Catalog CTA */}
        <div className="mt-16 md:mt-20 p-8 sm:p-16 md:p-24 bg-neutral-900 rounded-[32px] md:rounded-[60px] text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none hidden lg:block">
             <Archive size={400} className="text-white -translate-y-20 translate-x-20 rotate-12" />
          </div>
          
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-[32px] sm:text-[42px] lg:text-[56px] font-black leading-[1.1] tracking-tight-custom mb-6 md:mb-10">
              Need a Custom <br />
              <span className="font-serif italic font-light opacity-40">OEM Solution?</span>
            </h2>
            <p className="text-base md:text-lg text-neutral-400 font-light mb-8 md:mb-12 leading-relaxed">
              Beyond our curated portfolio, we offer full-scale private label manufacturing tailored to your brand's specific DNA and German quality standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
               <button 
                 onClick={() => setView('contact')}
                 className="w-full sm:w-auto px-8 py-3 bg-white text-black rounded-full text-[12px] font-bold uppercase tracking-widest-custom hover:bg-neutral-200 transition-all"
               >
                 Request Consultation
               </button>
               <button className="w-full sm:w-auto px-8 py-3 border border-white/20 text-white rounded-full text-[12px] font-bold uppercase tracking-widest-custom hover:bg-white/10 transition-all">
                 Download Tech Specs
               </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PortfolioPage;