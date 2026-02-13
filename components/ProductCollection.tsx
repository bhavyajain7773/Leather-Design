import React, { useState } from 'react';
import { ArrowUpRight, Plus, ArrowRight } from 'lucide-react';
import { Product } from '../types';

interface ProductCollectionProps {
  onViewAll?: () => void;
}

const products: Product[] = [
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
        <div className="flex flex-col items-center mb-24 animate-reveal">
          <h2 className="text-[42px] md:text-[64px] font-black text-center mb-8 tracking-tight-custom text-black leading-[1.1]">Curated Portfolio.</h2>
          
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-6 py-2 rounded-full text-[11px] font-semibold uppercase tracking-widest-custom transition-all duration-300 ${
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group animate-reveal">
              <div className="relative aspect-[16/10] bg-neutral-100 rounded-[32px] overflow-hidden mb-8 border border-black/5">
                <img 
                  src={product.imageUrl} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                />
                <div className="absolute top-8 right-8">
                   <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Plus size={20} className="text-black" />
                   </div>
                </div>
                <div className="absolute bottom-8 left-8">
                   <div className="px-6 py-3 bg-white/90 backdrop-blur rounded-full text-[10px] font-semibold uppercase tracking-widest-custom text-black">
                      MOQ: {product.moq}
                   </div>
                </div>
              </div>
              
              <div className="flex justify-between items-end px-4">
                <div>
                  <h3 className="text-[28px] font-serif italic font-light mb-2 text-black">{product.name}</h3>
                  <p className="text-[11px] font-semibold uppercase tracking-widest-custom text-[#666666]">{product.category} • {product.price}</p>
                </div>
                <div className="flex items-center space-x-3 text-[11px] font-semibold uppercase tracking-widest-custom group-hover:translate-x-2 transition-transform text-black">
                   <span>Details</span>
                   <ArrowUpRight size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {onViewAll && (
          <div className="flex justify-center animate-reveal">
            <button 
              onClick={onViewAll}
              className="group flex items-center space-x-4 px-8 py-3 bg-black text-white rounded-full hover:bg-neutral-800 transition-all shadow-lg"
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