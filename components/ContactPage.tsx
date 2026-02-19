import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Loader2, CheckCircle, ArrowLeft } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Constructing the Gmail Compose URL
    const recipient = "slboverseas2025@gmail.com";
    const subject = encodeURIComponent(formData.subject || "Export Inquiry - SLB Overseas");
    const bodyContent = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const body = encodeURIComponent(bodyContent);
    
    // This URL format triggers the Gmail web compose window directly
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${subject}&body=${body}`;

    // Simulating a brief professional delay before redirect
    setTimeout(() => {
      window.open(gmailUrl, '_blank');
      setIsSubmitting(false);
      setIsSent(true);
      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1200);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-white text-black min-h-screen pt-24 md:pt-32 pb-12 md:pb-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="mb-12 md:mb-16 animate-reveal">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-50 rounded-full border border-neutral-100 mb-6 md:mb-8">
            <MessageSquare size={12} className="text-black" />
            <span className="text-[9px] font-black uppercase tracking-widest-custom text-neutral-500">Global Communication Desk</span>
          </div>
          <h1 className="text-[36px] sm:text-[42px] lg:text-[64px] font-black leading-[1.1] tracking-tight-custom mb-6 md:mb-8">
            Get in <br />
            <span className="font-serif italic font-light text-neutral-300">Touch.</span>
          </h1>
          <p className="text-base md:text-xl text-neutral-500 font-light max-w-xl leading-relaxed">
            Our export desk is ready to facilitate your next premium leather or canvas collection for the German market.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Inquiry Form Area */}
          <div className="bg-neutral-50 p-8 md:p-12 rounded-[24px] md:rounded-[40px] border border-black/5 animate-reveal h-full flex flex-col justify-center min-h-[500px]" style={{ animationDelay: '0.1s' }}>
            {!isSent ? (
              <>
                <h3 className="text-[11px] md:text-[12px] font-black uppercase tracking-widest-custom text-black mb-8 md:mb-10">Export Inquiry Form</h3>
                <form className="space-y-6 md:space-y-8" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                    <div className="space-y-2">
                      <label className="text-[9px] md:text-[10px] font-black uppercase tracking-widest-custom text-black/40 ml-1">Full Name</label>
                      <input 
                        type="text" 
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full bg-transparent border-b border-black/10 py-2 md:py-3 outline-none focus:border-black transition-colors text-sm font-medium"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[9px] md:text-[10px] font-black uppercase tracking-widest-custom text-black/40 ml-1">Email Address</label>
                      <input 
                        type="email" 
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@company.de"
                        className="w-full bg-transparent border-b border-black/10 py-2 md:py-3 outline-none focus:border-black transition-colors text-sm font-medium"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] md:text-[10px] font-black uppercase tracking-widest-custom text-black/40 ml-1">Subject</label>
                    <input 
                      type="text" 
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="OEM Production / Wholesale Inquiry"
                      className="w-full bg-transparent border-b border-black/10 py-2 md:py-3 outline-none focus:border-black transition-colors text-sm font-medium"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] md:text-[10px] font-black uppercase tracking-widest-custom text-black/40 ml-1">Message</label>
                    <textarea 
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your requirements..."
                      className="w-full bg-transparent border-b border-black/10 py-2 md:py-3 outline-none focus:border-black transition-colors text-sm font-medium resize-none"
                    />
                  </div>
                  
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto group flex items-center justify-center gap-4 px-10 py-4 bg-black text-white rounded-full text-[12px] font-semibold uppercase tracking-widest-custom hover:bg-neutral-800 transition-all shadow-xl disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        <span>Redirecting to Gmail...</span>
                      </>
                    ) : (
                      <>
                        <span>Open in Gmail</span>
                        <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </button>
                  <div className="flex items-center gap-2 mt-4 opacity-30">
                    <div className="w-1 h-1 rounded-full bg-black" />
                    <p className="text-[8px] font-black uppercase tracking-widest-custom text-black">
                      Direct Dispatch: slboverseas2025@gmail.com
                    </p>
                  </div>
                </form>
              </>
            ) : (
              <div className="text-center py-10 animate-reveal">
                <div className="w-20 h-20 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
                  <CheckCircle size={32} />
                </div>
                <h3 className="text-3xl font-black tracking-tight-custom mb-4">Redirected.</h3>
                <p className="text-neutral-500 font-medium mb-10 max-w-sm mx-auto leading-relaxed">
                  A Gmail compose window has been opened with your details. Please click "Send" in Gmail to finalize your inquiry to our lead desk.
                </p>
                <button 
                  onClick={() => setIsSent(false)}
                  className="inline-flex items-center gap-3 px-8 py-3 bg-white border border-black text-black rounded-full text-[11px] font-bold uppercase tracking-widest-custom hover:bg-neutral-50 transition-all"
                >
                  <ArrowLeft size={14} />
                  Return to Form
                </button>
              </div>
            )}
          </div>

          {/* Contact Details & Map */}
          <div className="space-y-8 md:space-y-12 animate-reveal" style={{ animationDelay: '0.2s' }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              <div className="p-6 md:p-8 bg-white border border-black/5 rounded-[24px] md:rounded-[32px] hover:shadow-lg transition-all">
                <Phone className="text-black/20 mb-4 md:mb-6 w-[18px] h-[18px] md:w-5 md:h-5" />
                <p className="text-[9px] md:text-[10px] font-black uppercase tracking-widest-custom text-black/30 mb-2">Direct Line</p>
                <p className="text-base md:text-lg font-bold">+91 7793003465</p>
              </div>
              <div className="p-6 md:p-8 bg-white border border-black/5 rounded-[24px] md:rounded-[32px] hover:shadow-lg transition-all">
                <Mail className="text-black/20 mb-4 md:mb-6 w-[18px] h-[18px] md:w-5 md:h-5" />
                <p className="text-[9px] md:text-[10px] font-black uppercase tracking-widest-custom text-black/30 mb-2">Email Desk</p>
                <p className="text-base md:text-lg font-bold break-all">slboverseas2025@gmail.com</p>
              </div>
            </div>

            <div className="p-6 md:p-8 bg-white border border-black/5 rounded-[24px] md:rounded-[32px]">
              <div className="flex items-start gap-4 md:gap-6 mb-6 md:mb-8">
                <MapPin size={24} className="text-black/20 mt-1 shrink-0" />
                <div>
                  <p className="text-[9px] md:text-[10px] font-black uppercase tracking-widest-custom text-black/30 mb-2">Manufacturing Unit & HQ</p>
                  <p className="text-base md:text-lg font-bold leading-relaxed">
                    J-231 Pratap Nagar, Jodhpur,<br />
                    Rajasthan, India - 342001
                  </p>
                </div>
              </div>
              
              <div className="relative aspect-video rounded-xl md:rounded-2xl overflow-hidden border border-black/5 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
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

            <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 p-6 border border-black/5 rounded-2xl md:rounded-full justify-center">
              <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest-custom text-black/30">Primary Logistics Hub:</span>
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