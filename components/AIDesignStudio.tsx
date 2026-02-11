
import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';
import { Sparkles, Loader2, Cpu } from 'lucide-react';

const AIDesignStudio: React.FC = () => {
  const [patina, setPatina] = useState<'Matte' | 'Glossy' | 'Pebbled'>('Matte');
  const [loading, setLoading] = useState(false);
  const [aiInsight, setAiInsight] = useState<string>('');

  const generateInsight = async (selectedPatina: string) => {
    setLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Characterize ${selectedPatina} leather for a luxury export client in 10-12 punchy words.`,
      });
      setAiInsight(response.text || '');
    } catch (err) {
      setAiInsight('Refined texture, unmatched durability, and a signature luxury hand-feel.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="design-studio" className="py-32 bg-black text-white rounded-[4rem] mx-6 my-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/10 border border-white/10 rounded-full mb-8">
              <Cpu size={12} className="text-neutral-500" />
              <span className="text-[9px] font-black uppercase tracking-widest-custom text-neutral-400">Design Studio v2.0</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-10 leading-[1.1] tracking-tight-custom italic">
              Digital <br /><span className="text-neutral-700">Leathercraft.</span>
            </h2>
            <p className="text-neutral-500 text-lg mb-12 max-w-md font-medium leading-relaxed">
              Simulate custom patinas and grain densities in real-time. Optimize your collection before production begins.
            </p>
            
            <div className="grid grid-cols-1 gap-3 mb-12">
              {(['Matte', 'Glossy', 'Pebbled'] as const).map((p) => (
                <button
                  key={p}
                  onClick={() => { setPatina(p); generateInsight(p); }}
                  className={`flex items-center justify-between p-5 rounded-2xl border transition-all ${
                    patina === p ? 'bg-white border-white text-black' : 'bg-white/5 border-white/10 text-white hover:bg-white/10'
                  }`}
                >
                  <span className="text-[11px] font-black uppercase tracking-widest-custom">{p} Finish</span>
                  <div className={`w-1.5 h-1.5 rounded-full ${patina === p ? 'bg-black' : 'bg-white/20'}`} />
                </button>
              ))}
            </div>

            <div className="min-h-[60px] flex items-center">
              {loading ? (
                <div className="flex items-center space-x-3 text-neutral-600">
                  <Loader2 className="animate-spin" size={16} />
                  <span className="text-[10px] font-black uppercase tracking-widest-custom">Computing Spec...</span>
                </div>
              ) : (
                <p className="text-sm italic text-neutral-400 border-l border-white/20 pl-6 max-w-xs">
                  {aiInsight || "Select a finish to analyze grain characteristics."}
                </p>
              )}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] md:aspect-square bg-neutral-900 rounded-[3rem] overflow-hidden border border-white/10 group shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=1200" 
                alt="Product Simulation" 
                className={`w-full h-full object-cover transition-all duration-1000 ${
                  patina === 'Matte' ? 'brightness-75' : 
                  patina === 'Glossy' ? 'contrast-125 saturate-150' : 'contrast-110 saturate-125'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
              
              <div className="absolute bottom-10 left-10 right-10">
                 <div className="p-6 glass rounded-[2rem] border border-white/20">
                    <div className="flex justify-between items-center">
                       <div>
                          <p className="text-[9px] font-black text-white/40 uppercase tracking-widest-custom mb-1">Rendering Engine</p>
                          <p className="text-xs font-bold tracking-tight">Vanguard Portfolio — {patina}</p>
                       </div>
                       <div className="text-[10px] font-black text-white/60">60 FPS</div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIDesignStudio;
