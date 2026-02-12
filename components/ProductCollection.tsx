
import React, { useState } from 'react';
import { ArrowUpRight, Plus } from 'lucide-react';
import { Product } from '../types';

const products: Product[] = [
  { 
    id: '1', 
    name: 'Vanguard Leather Messenger', 
    category: 'Leather & Canvas', 
    price: '$125.00', 
    moq: '25 units', 
    imageUrl: 'https://images.unsplash.com/photo-1524289286702-f07229da36f5?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: '2', 
    name: 'Metro Canvas Satchel', 
    category: 'Leather & Canvas', 
    price: '$85.00', 
    moq: '50 units', 
    imageUrl: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: '3', 
    name: 'Elite Fashion Tote', 
    category: 'Fashion Bags', 
    price: '$110.00', 
    moq: '30 units', 
    imageUrl: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: '4', 
    name: 'Essential Lifestyle Duffel', 
    category: 'Lifestyle Essentials', 
    price: '$145.00', 
    moq: '20 units', 
    imageUrl: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: '5', 
    name: 'Sovereign Briefcase', 
    category: 'Lifestyle Essentials', 
    price: '$165.00', 
    moq: '15 units', 
    imageUrl: 'https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: '6', 
    name: 'Urban Canvas Backpack', 
    category: 'Leather & Canvas', 
    price: '$75.00', 
    moq: '50 units', 
    imageUrl: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&q=80&w=800' 
  },
];

const ProductCollection: React.FC = () => {
  const [active, setActive] = useState('All');

  const categories = ['All', 'Leather & Canvas', 'Fashion Bags', 'Lifestyle Essentials'];

  const filteredProducts = active === 'All' 
    ? products 
    : products.filter(product => product.category === active);

  return (
    <section id="collection" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center mb-12">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-300 mb-4">Export Portfolio 2025</p>
          <h2 className="text-5xl md:text-7xl font-black text-center mb-8 tracking-tight-custom">Lifestyle Essentials.</h2>
          
          <p className="text-center text-neutral-400 max-w-lg mb-12 font-medium">
            Our bags are positioned as must-have lifestyle essentials that bridge personal style with everyday practicality.
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-6 py-2.5 rounded-full text-[9px] font-black uppercase tracking-widest-custom transition-all duration-300 ${
                  active === cat 
                    ? 'bg-black text-white scale-105 shadow-lg shadow-black/10' 
                    : 'bg-neutral-50 text-neutral-400 hover:text-black hover:bg-neutral-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 transition-all duration-500">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group cursor-pointer animate-reveal">
              <div className="relative aspect-[14/10] bg-neutral-50 rounded-[3rem] overflow-hidden mb-6 border border-neutral-100 shadow-[0_4px_12px_rgba(0,0,0,0.02)]">
                <img 
                  src={product.imageUrl} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
                <div className="absolute top-6 right-6">
                   <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110">
                      <Plus size={20} />
                   </div>
                </div>
                <div className="absolute bottom-6 left-6">
                   <div className="px-4 py-2 glass rounded-full text-[9px] font-black uppercase tracking-widest-custom">
                      MOQ: {product.moq}
                   </div>
                </div>
              </div>
              
              <div className="flex justify-between items-end px-4">
                <div>
                  <h3 className="text-2xl font-serif italic font-light mb-1">{product.name}</h3>
                  <p className="text-[10px] font-black uppercase tracking-widest-custom text-neutral-300">{product.category} • {product.price}</p>
                </div>
                <div className="flex items-center space-x-2 text-[10px] font-black uppercase tracking-widest-custom group-hover:translate-x-1">
                   <span>Specs</span>
                   <ArrowUpRight size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCollection;
