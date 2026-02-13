import React, { useState } from 'react';
import { ArrowUpRight, Plus, Archive, Briefcase, ShoppingBag, Layers } from 'lucide-react';
import { Product } from '../types';

const portfolioProducts: Product[] = [
  { 
    id: '1', 
    name: 'Vanguard Messenger', 
    category: 'Leather & Canvas', 
    price: '€125.00', 
    moq: '25 units', 
    imageUrl: 'https://images.unsplash.com/photo-1524289286702-f07229da36f5?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: '2', 
    name: 'Metro Satchel', 
    category: 'Leather & Canvas', 
    price: '€85.00', 
    moq: '50 units', 
    imageUrl: 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: '3', 
    name: 'Elite Tote', 
    category: 'Fashion Bags', 
    price: '€110.00', 
    moq: '30 units', 
    imageUrl: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=1200' 
  },
  { 
    id: '4', 
    name: 'Essential Duffel', 
    category: 'Lifestyle Essentials', 
    price: '€145.00', 
    moq: '20 units', 
    imageUrl: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: '5', 
    name: 'Urban Backpack', 
    category: 'Lifestyle Essentials', 
    price: '€95.00', 
    moq: '40 units', 
    imageUrl: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: '6', 
    name: 'Crafted Portfolio', 
    category: 'Fashion Bags', 
    price: '€75.00', 
    moq: '100 units', 
    imageUrl: 'https://images.unsplash.com/photo-1544465544-1b71aee9dfa3?auto=format&fit=crop&q=80&w=800' 
  }
];

const PortfolioPage: React.FC = () => {
  const [active, setActive] = useState('All');
  const categories = ['All', 'Leather & Canvas', 'Fashion Bags', 'Lifestyle Essentials'];

  const filteredProducts = active === 'All' 
    ? portfolioProducts 
    : portfolioProducts.filter(product => product.category === active);

  return (
    <div className="bg-white text-black min-h-screen pt-48 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24 animate-reveal">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-50 rounded-full border border-neutral-100 mb-8">
              <Archive size={12} className="text-black" />
              <span className="text-[9px] font-black uppercase tracking-widest-custom text-neutral-500">The 2025 Collection</span>
            </div>
            <h1 className="text-[42px] md:text-[72px] font-black leading-[1.1] tracking-tight-custom mb-8">
              Curated <br />
              <span className="font-serif italic font-light text-neutral-300">Artifacts.</span>
            </h1>
            <p className="text-xl text-neutral-500 font-light leading-relaxed">
              Explore our comprehensive range of high-end carry solutions, engineered in Jodhpur for the specialized demands of the German export sector.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest-custom transition-all duration-300 ${
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredProducts.map((product, index) => (
            <div 
              key={product.id} 
              className="group animate-reveal" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative aspect-[4/5] bg-neutral-50 rounded-[40px] overflow-hidden mb-8 border border-black/5">
                <img 
                  src={product.imageUrl} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                />
                
                <div className="absolute top-8 right-8">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                    <Plus size={16} className="text-black" />
                  </div>
                </div>

                <div className="absolute bottom-8 left-8 right-8">
                  <div className="flex justify-between items-center bg-white/90 backdrop-blur px-6 py-4 rounded-[2rem] shadow-sm">
                    <span className="text-[9px] font-black uppercase tracking-widest-custom text-black/40">Minimum Order</span>
                    <span className="text-[10px] font-bold text-black">{product.moq}</span>
                  </div>
                </div>
              </div>

              <div className="px-4">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight text-black mb-1">{product.name}</h3>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-black/30">{product.category}</p>
                  </div>
                  <p className="text-sm font-bold">{product.price}</p>
                </div>
                
                <div className="pt-4 border-t border-black/5 flex items-center justify-between">
                   <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-[9px] font-black uppercase tracking-widest-custom text-black/40">Ready for Export</span>
                   </div>
                   <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest-custom text-black group-hover:translate-x-1 transition-transform">
                      <span>Inquire</span>
                      <ArrowUpRight size={14} />
                   </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Catalog CTA */}
        <div className="mt-32 p-16 md:p-24 bg-neutral-900 rounded-[60px] text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
             <Layers size={400} className="text-white -translate-y-20 translate-x-20 rotate-12" />
          </div>
          
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-[42px] md:text-[56px] font-black leading-[1.1] tracking-tight-custom mb-10">
              Need a Custom <br />
              <span className="font-serif italic font-light opacity-40">OEM Solution?</span>
            </h2>
            <p className="text-lg text-neutral-400 font-light mb-12 leading-relaxed">
              Beyond our curated portfolio, we offer full-scale private label manufacturing tailored to your brand's specific DNA and German quality standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
               <button className="px-8 py-3 bg-white text-black rounded-full text-[12px] font-bold uppercase tracking-widest-custom hover:bg-neutral-200 transition-all">
                 Request Design Consultation
               </button>
               <button className="px-8 py-3 border border-white/20 text-white rounded-full text-[12px] font-bold uppercase tracking-widest-custom hover:bg-white/10 transition-all">
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