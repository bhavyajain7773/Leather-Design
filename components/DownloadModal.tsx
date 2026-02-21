import React, { useState } from 'react';
import { X, CheckCircle2, Loader2 } from 'lucide-react';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

const countries = [
  "Germany", "United States", "United Kingdom", "France", "Italy", "Spain", 
  "Netherlands", "Belgium", "Switzerland", "Austria", "Sweden", "Norway", 
  "Denmark", "Finland", "Australia", "Canada", "Japan", "South Korea", 
  "Singapore", "United Arab Emirates", "India", "Other"
];

const DownloadModal: React.FC<DownloadModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: 'Germany'
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      // In a real app, you'd send this data to your backend/CRM here
      console.log('Lead Captured:', formData);
      
      setTimeout(() => {
        onSuccess();
        onClose();
        setStatus('idle');
        setFormData({ name: '', email: '', phone: '', country: 'Germany' });
      }, 1500);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-6">
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-reveal" 
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-lg bg-white rounded-[32px] overflow-hidden shadow-2xl animate-reveal">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 hover:bg-neutral-100 rounded-full transition-colors z-10"
        >
          <X size={20} className="text-neutral-400" />
        </button>

        <div className="p-8 md:p-12">
          {status === 'success' ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 size={40} className="text-emerald-500" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight-custom mb-2">Access Granted</h3>
              <p className="text-neutral-500 font-light">Your download will begin shortly.</p>
            </div>
          ) : (
            <>
              <div className="mb-10">
                <span className="text-[10px] font-semibold uppercase tracking-widest-custom text-black mb-2 block">Exclusive Access</span>
                <h3 className="text-3xl font-black tracking-tight-custom leading-tight text-black">
                  Unlock the <br /><span className="font-serif italic font-light opacity-80">2026 Collection.</span>
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest-custom text-black/70 ml-1">Full Name</label>
                  <input 
                    required
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-6 py-4 bg-neutral-50 border border-neutral-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black/5 transition-all font-medium text-black"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest-custom text-black/70 ml-1">Gmail / Email</label>
                  <input 
                    required
                    type="email"
                    placeholder="john@gmail.com"
                    className="w-full px-6 py-4 bg-neutral-50 border border-neutral-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black/5 transition-all font-medium text-black"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest-custom text-black/70 ml-1">Phone Number</label>
                    <input 
                      required
                      type="tel"
                      placeholder="+49 ..."
                      className="w-full px-6 py-4 bg-neutral-50 border border-neutral-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black/5 transition-all font-medium text-black"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest-custom text-black/70 ml-1">Location</label>
                    <select 
                      className="w-full px-6 py-4 bg-neutral-50 border border-neutral-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black/5 transition-all font-medium appearance-none text-black"
                      value={formData.country}
                      onChange={(e) => setFormData({...formData, country: e.target.value})}
                    >
                      {countries.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                </div>

                <button 
                  disabled={status === 'submitting'}
                  type="submit"
                  className="w-full py-5 bg-black text-white rounded-2xl font-bold uppercase tracking-widest-custom text-[12px] hover:bg-neutral-800 transition-all flex items-center justify-center space-x-3 shadow-xl disabled:opacity-50"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      <span>Processing...</span>
                    </>
                  ) : (
                    <span>Request Access</span>
                  )}
                </button>
                
                <p className="text-[9px] text-center text-black/50 uppercase tracking-widest-custom">
                  By clicking, you agree to our privacy terms.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DownloadModal;
