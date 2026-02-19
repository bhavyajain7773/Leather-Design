import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Product } from '../types';

interface ProductCollectionProps {
  onViewAll?: () => void;
}

const products: Product[] = [
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
  }
];

const ProductCollection: React.FC<ProductCollectionProps> = ({ onViewAll }) => {
  const [active, setActive] = useState('All');
  const categories = ['All', 'Leather & Canvas', 'Fashion Bags', 'Lifestyle Essentials'];

  const filteredProducts = active === 'All' 
    ? products 
    : products.filter(product => product.category === active);

  return (
    <section id="collection" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center mb-12 md:mb-24 animate-reveal">
          <h2 className="text-[32px] sm:text-[42px] lg:text-[64px] font-black text-center mb-6 md:mb-8 tracking-tight-custom text-black leading-[1.1]">Curated Portfolio.</h2>
          
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 md:px-6 py-2 rounded-full text-[9px] md:text-[11px] font-semibold uppercase tracking-widest-custom transition-all duration-300 ${
                  active === cat 
                    ? 'bg-black text-white' 
                    : 'bg-neutral-100 text-[#666666] hover:text-black hover:bg-neutral-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-20">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group animate-reveal">
              <div className="relative aspect-[4/3] sm:aspect-[16/10] bg-neutral-100 rounded-[24px] md:rounded-[32px] overflow-hidden mb-6 md:mb-8 border border-black/5">
                <img 
                  src={product.imageUrl} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&q=80&w=1200";
                  }}
                />
                <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8">
                   <div className="px-4 md:px-6 py-2 md:py-3 bg-white/90 backdrop-blur rounded-full text-[8px] md:text-[10px] font-semibold uppercase tracking-widest-custom text-black">
                      MOQ: {product.moq}
                   </div>
                </div>
              </div>
              
              <div className="px-2 md:px-4">
                <h3 className="text-[20px] md:text-[28px] font-serif italic font-light mb-1 md:mb-2 text-black">{product.name}</h3>
                <p className="text-[9px] md:text-[11px] font-semibold uppercase tracking-widest-custom text-[#666666]">{product.category}</p>
              </div>
            </div>
          ))}
        </div>

        {onViewAll && (
          <div className="flex justify-center animate-reveal">
            <button 
              onClick={onViewAll}
              className="w-full sm:w-auto group flex items-center justify-center space-x-4 px-8 py-3 bg-black text-white rounded-full hover:bg-neutral-800 transition-all shadow-lg"
            >
              <span className="text-[12px] font-semibold uppercase tracking-widest-custom">View All Products</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductCollection;