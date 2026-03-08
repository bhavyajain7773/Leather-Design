import React from 'react';

const GalleryPage: React.FC = () => {
  const images = [
    'https://drive.google.com/thumbnail?id=135gh8Ow5wnYPtPgtNJcsZ-EMnXhsNYLn&sz=w1200',
    'https://drive.google.com/thumbnail?id=1Mzsh1ue4ZZwWGrAH7G542NPU_vDs6ThG&sz=w1200',
    'https://drive.google.com/thumbnail?id=1ufVb4cIRF7oKfWf6FxGWscp0Vhqq-XJ_&sz=w1200',
    'https://drive.google.com/thumbnail?id=1fASDGiB8zf-WLjZXMTMV99MHWwNXgO2W&sz=w1200',
    'https://drive.google.com/thumbnail?id=1PD4VvvTln65H9WmFS6SGRmHICkKaXeDm&sz=w1200',
    'https://drive.google.com/thumbnail?id=1KakinDjXcX40CWtEkK278qFLOZph8ES8&sz=w1200',
    'https://drive.google.com/thumbnail?id=1AH1ImLhggZNfhU96Ddt_u8ZPoD3wriGr&sz=w1200'
  ];

  return (
    <div className="pt-32 pb-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((url, index) => (
            <div 
              key={index} 
              className="relative group overflow-hidden rounded-[24px] md:rounded-[32px] break-inside-avoid animate-reveal"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img 
                src={url} 
                alt={`Gallery image ${index + 1}`}
                className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
