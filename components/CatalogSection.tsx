import React, { useState } from 'react';
import { Download, FileText, ArrowRight } from 'lucide-react';
import DownloadModal from './DownloadModal';

interface CatalogSectionProps {
  onSampleRequest?: () => void;
}

const CatalogSection: React.FC<CatalogSectionProps> = ({ onSampleRequest }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDownload = () => {
    // This will be called after form submission
    const pdfUrl = 'https://slboverseas.com'; // Replace with actual PDF link
    window.open(pdfUrl, '_blank');
  };

  return (
    <section id="catalog-download" className="py-12 md:py-20 bg-black text-white rounded-[24px] md:rounded-[32px] mx-4 my-4 md:my-8 overflow-hidden shadow-2xl">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center">
          <div className="animate-reveal">
            <div className="inline-flex items-center space-x-3 px-4 md:px-5 py-2 bg-white/10 border border-white/10 rounded-full mb-8 md:mb-10">
              <FileText size={12} className="text-white" />
              <span className="text-[9px] md:text-[10px] font-semibold uppercase tracking-widest-custom">Export Portfolio 2026 v.2</span>
            </div>
            <h2 className="text-[32px] sm:text-[42px] lg:text-[64px] font-black mb-8 md:mb-12 leading-[1.1] tracking-tight-custom">
              Download <br /><span className="opacity-30 font-serif italic font-light">The Catalog.</span>
            </h2>
            <p className="text-neutral-400 text-base md:text-xl mb-10 md:mb-16 max-w-md font-light leading-relaxed">
              Explore our comprehensive collection of artisanal carry, including technical specs for the German professional sector.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="group flex items-center justify-center space-x-4 px-8 py-3 bg-white text-black rounded-full hover:bg-neutral-200 transition-all shadow-2xl outline-none"
              >
                <Download size={20} />
                <span className="text-[12px] font-semibold uppercase tracking-widest-custom">Get PDF Collection</span>
              </button>
              <button 
                onClick={onSampleRequest}
                className="group flex items-center justify-center space-x-4 px-8 py-3 bg-transparent border border-white/20 text-white rounded-full hover:bg-white/10 transition-all outline-none"
              >
                <span className="text-[12px] font-semibold uppercase tracking-widest-custom">Sample Request</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="relative group rounded-[24px] md:rounded-[32px] overflow-hidden border border-white/10 shadow-2xl">
            <img 
              src="https://drive.google.com/thumbnail?id=1963Q3pKK90maxD6XJp1pVkO_b5VEZjkD&sz=w1200" 
              alt="SLB Overseas Portfolio Preview" 
              className="w-full aspect-[4/3] object-cover transition-all duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        </div>
      </div>

      <DownloadModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSuccess={handleDownload}
      />
    </section>
  );
};

export default CatalogSection;
