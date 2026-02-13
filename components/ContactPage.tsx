import React from 'react';
import { Mail, Phone, MapPin, Send, Globe, MessageSquare } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div className="bg-white text-black min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="mb-16 animate-reveal">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-50 rounded-full border border-neutral-100 mb-8">
            <MessageSquare size={12} className="text-black" />
            <span className="text-[9px] font-black uppercase tracking-widest-custom text-neutral-500">Global Communication Desk</span>
          </div>
          <h1 className="text-[42px] md:text-[64px] font-black leading-[1.1] tracking-tight-custom mb-8">
            Get in <br />
            <span className="font-serif italic font-light text-neutral-300">Touch.</span>
          </h1>
          <p className="text-xl text-neutral-500 font-light max-w-xl leading-relaxed">
            Our export desk is ready to facilitate your next premium leather or canvas collection for the German market.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          {/* Inquiry Form */}
          <div className="bg-neutral-50 p-10 md:p-12 rounded-[40px] border border-black/5 animate-reveal" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-[12px] font-black uppercase tracking-widest-custom text-black mb-10">Export Inquiry Form</h3>
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest-custom text-black/40 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-transparent border-b border-black/10 py-3 outline-none focus:border-black transition-colors text-sm font-medium"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest-custom text-black/40 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@company.de"
                    className="w-full bg-transparent border-b border-black/10 py-3 outline-none focus:border-black transition-colors text-sm font-medium"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest-custom text-black/40 ml-1">Subject</label>
                <input 
                  type="text" 
                  placeholder="OEM Production / Wholesale Inquiry"
                  className="w-full bg-transparent border-b border-black/10 py-3 outline-none focus:border-black transition-colors text-sm font-medium"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest-custom text-black/40 ml-1">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us about your requirements..."
                  className="w-full bg-transparent border-b border-black/10 py-3 outline-none focus:border-black transition-colors text-sm font-medium resize-none"
                />
              </div>
              
              <button 
                type="submit"
                className="group flex items-center justify-center gap-4 px-8 py-3 bg-black text-white rounded-full text-[12px] font-semibold uppercase tracking-widest-custom hover:bg-neutral-800 transition-all shadow-xl"
              >
                <span>Send Message</span>
                <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>

          {/* Contact Details & Map */}
          <div className="space-y-12 animate-reveal" style={{ animationDelay: '0.2s' }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 bg-white border border-black/5 rounded-[32px] hover:shadow-lg transition-all">
                <Phone size={20} className="text-black/20 mb-6" />
                <p className="text-[10px] font-black uppercase tracking-widest-custom text-black/30 mb-2">Direct Line</p>
                <p className="text-lg font-bold">+91 7793003465</p>
              </div>
              <div className="p-8 bg-white border border-black/5 rounded-[32px] hover:shadow-lg transition-all">
                <Mail size={20} className="text-black/20 mb-6" />
                <p className="text-[10px] font-black uppercase tracking-widest-custom text-black/30 mb-2">Email Desk</p>
                <p className="text-lg font-bold">slboverseas2025@gmail.com</p>
              </div>
            </div>

            <div className="p-8 bg-white border border-black/5 rounded-[32px]">
              <div className="flex items-start gap-6 mb-8">
                <MapPin size={24} className="text-black/20 mt-1" />
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest-custom text-black/30 mb-2">Manufacturing Unit & HQ</p>
                  <p className="text-lg font-bold leading-relaxed">
                    J-231 Pratap Nagar, Jodhpur,<br />
                    Rajasthan, India - 342001
                  </p>
                </div>
              </div>
              
              {/* Map Embed Container */}
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-black/5 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                <iframe
                  title="Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.2625867168!2d72.986887!3d26.280144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418c39e2621f37%3A0xc6657c9454199468!2sPratap%20Nagar%2C%20Jodhpur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>

            <div className="flex items-center gap-6 p-6 border border-black/5 rounded-full justify-center">
              <span className="text-[10px] font-black uppercase tracking-widest-custom text-black/30">Primary Logistics Hub:</span>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-3 rounded-[2px] overflow-hidden shadow-sm">
                    <img src="https://flagcdn.com/w20/in.png" alt="India" />
                  </div>
                  <span className="text-[10px] font-bold">Jodhpur (IN)</span>
                </div>
                <div className="w-4 h-px bg-black/10" />
                <div className="flex items-center gap-2">
                  <div className="w-4 h-3 rounded-[2px] overflow-hidden shadow-sm">
                    <img src="https://flagcdn.com/w20/de.png" alt="Germany" />
                  </div>
                  <span className="text-[10px] font-bold">Hamburg (DE)</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;