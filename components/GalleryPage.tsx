import React from 'react';

const GalleryPage: React.FC = () => {
  const images = [
    {
      url: 'https://picsum.photos/seed/leather1/800/1000',
      title: 'Artisanal Craftsmanship',
      category: 'Production'
    },
    {
      url: 'https://picsum.photos/seed/leather2/1000/800',
      title: 'Premium Materials',
      category: 'Sourcing'
    },
    {
      url: 'https://picsum.photos/seed/leather3/800/800',
      title: 'Precision Stitching',
      category: 'Detail'
    },
    {
      url: 'https://picsum.photos/seed/leather4/1200/800',
      title: 'Quality Control',
      category: 'Standards'
    },
    {
      url: 'https://picsum.photos/seed/leather5/800/1200',
      title: 'Heritage Workshop',
      category: 'Legacy'
    },
    {
      url: 'https://picsum.photos/seed/leather6/1000/1000',
      title: 'Custom Designs',
      category: 'Bespoke'
    },
    {
      url: 'https://picsum.photos/seed/leather7/900/1100',
      title: 'Export Logistics',
      category: 'Operations'
    },
    {
      url: 'https://picsum.photos/seed/leather8/1100/900',
      title: 'Sustainable Leather',
      category: 'Eco'
    }
  ];

  return (
    <div className="pt-32 pb-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="mb-16 md:mb-24 animate-reveal">
          <span className="text-[10px] md:text-[12px] font-semibold uppercase tracking-widest-custom text-neutral-400 mb-4 block">Visual Journey</span>
          <h1 className="text-[48px] md:text-[84px] font-black tracking-tight-custom leading-[0.95] mb-8">
            The <span className="font-serif italic font-light opacity-40">Gallery.</span>
          </h1>
          <p className="text-neutral-500 text-lg md:text-2xl max-w-2xl font-light leading-relaxed">
            A visual documentation of our manufacturing excellence, from raw hide to finished masterpiece.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="relative group overflow-hidden rounded-[24px] md:rounded-[32px] break-inside-avoid animate-reveal"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img 
                src={image.url} 
                alt={image.title}
                className="w-full h-auto object-cover grayscale-img transition-all duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="text-[10px] font-semibold uppercase tracking-widest-custom text-white/60 mb-2">{image.category}</span>
                <h3 className="text-xl font-bold text-white tracking-tight-custom">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
