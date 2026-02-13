import React from 'react';
import { MapPin, Phone, Mail, Building2, ExternalLink } from 'lucide-react';

const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          <div className="relative rounded-[24px] md:rounded-[3rem] overflow-hidden bg-black/5 min-h-[300px] md:min-h-[400px] shadow-sm border border-black/5 group animate-reveal">
            <iframe
              title="SLB Overseas Factory Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.2625867168!2d72.986887!3d26.280144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418c39e2621f37%3A0xc6657c9454199468!2sPratap%20Nagar%2C%20Jodhpur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(1) contrast(1.2) opacity(0.6)' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 transition-all duration-700 group-hover:opacity-100"
            />
            <div className="absolute top-4 md:top-6 left-4 md:left-6 pointer-events-none">
              <div className="glass px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-black/5 flex items-center gap-2">
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-black animate-pulse" />
                <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest-custom">Global HQ & Factory</span>
              </div>
            </div>
            
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="absolute bottom-4 md:bottom-6 right-4 md:right-6 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black text-white flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
            >
              <ExternalLink size={16} md:size={18} />
            </a>
          </div>

          <div className="flex flex-col justify-center p-8 lg:p-12 bg-black/5 rounded-[24px] md:rounded-[3rem] border border-black/5 animate-reveal" style={{ animationDelay: '0.2s' }}>
            <div className="mb-6 md:mb-8">
              <div className="flex items-center gap-3 mb-3 md:mb-4">
                <Building2 size={18} md:size={20} className="text-black/20" />
                <h3 className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-black/30">Company Registry</h3>
              </div>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight-custom mb-2">
                SLB OVERSEAS <br />
                <span className="opacity-20 font-serif italic font-light">German Export Specialist.</span>
              </h2>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 md:gap-6 group">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center border border-black/5 shadow-sm group-hover:bg-black group-hover:text-white transition-colors shrink-0">
                  <MapPin size={16} md:size={18} />
                </div>
                <div>
                  <p className="text-[9px] md:text-[10px] font-black uppercase tracking-widest-custom text-black/30 mb-0.5 md:mb-1">Our Facility</p>
                  <p className="text-xs md:text-sm font-bold leading-relaxed max-w-xs">
                    J-231 Pratap Nagar, Jodhpur, India.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 md:gap-6 group">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center border border-black/5 shadow-sm group-hover:bg-black group-hover:text-white transition-colors shrink-0">
                  <Phone size={16} md:size={18} />
                </div>
                <div>
                  <p className="text-[9px] md:text-[10px] font-black uppercase tracking-widest-custom text-black/30 mb-0.5 md:mb-1">Inquiries</p>
                  <p className="text-xs md:text-sm font-bold">+91 7793003465</p>
                </div>
              </div>

              <div className="flex items-start gap-4 md:gap-6 group">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center border border-black/5 shadow-sm group-hover:bg-black group-hover:text-white transition-colors shrink-0">
                  <Mail size={16} md:size={18} />
                </div>
                <div>
                  <p className="text-[9px] md:text-[10px] font-black uppercase tracking-widest-custom text-black/30 mb-0.5 md:mb-1">Digital Correspondence</p>
                  <a href="mailto:slboverseas2025@gmail.com" className="text-xs md:text-sm font-bold hover:underline decoration-black/20 underline-offset-4 break-all">
                    slboverseas2025@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 md:mt-10 pt-6 md:pt-8 border-t border-black/10 flex items-center gap-3 md:gap-4">
              <div className="flex shrink-0">
                <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-white bg-neutral-100 overflow-hidden shadow-sm">
                   <img src="https://flagcdn.com/w80/de.png" alt="Germany" className="w-full h-full object-cover" />
                </div>
              </div>
              <p className="text-[8px] md:text-[10px] font-black uppercase tracking-widest-custom text-black/30 leading-tight">Port Shipments: Germany (Hamburg, Bremerhaven)</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LocationSection;