import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';
import { Loader2, Sparkles } from 'lucide-react';

const AIDesignStudio: React.FC = () => {
  const [patina, setPatina] = useState<'Matte' | 'Glossy' | 'Pebbled'>('Matte');
  const [loading, setLoading] = useState(false);
  const [aiInsight, setAiInsight] = useState<string>('');

  const finishImages = {
    Matte: 'https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&q=80&w=1200',
    Glossy: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=1200',
    Pebbled: 'https://images.unsplash.com/photo-1524289286702-f07229da36f5?auto=format&fit=crop&q=80&w=1200'
  };

  const generateInsight = async (selectedPatina: string) => {
    setLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Characterize ${selectedPatina} leather bag finish for a luxury global export client in Germany in 10-12 punchy words.`,
      });
      setAiInsight(response.text || '');
    } catch (err) {
      setAiInsight('Refined texture, unmatched durability, and a signature luxury hand-feel for every bag.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="design-studio" className="py-20 bg-black text-white rounded-[32px] mx-4 my-8 overflow-hidden shadow-2xl">
      <div className="max-w-7xl mx-auto px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <div className="flex items-center gap-4 mb-10 opacity-40">
               <Sparkles size={16} />
               <span className="text-[10px] font-semibold uppercase tracking-widest-custom">Digital Atelier v.2.0</span>
            </div>
            <h2 className="text-[42px] md:text-[64px] font-black mb-12 leading-[1.1] tracking-tight-custom">
              The <span className="opacity-30 font-serif italic font-light">Digital</span> <br />Customization.
            </h2>
            <p className="text-neutral-400 text-lg md:text-xl mb-16 max-w-md font-light leading-relaxed">
              Simulate high-density bag patinas for the professional German market. Refine your collection with AI-driven grain analysis.
            </p>
            
            <div className="grid grid-cols-1 gap-4 mb-16">
              {(['Matte', 'Glossy', 'Pebbled'] as const).map((p) => (
                <button
                  key={p}
                  onClick={() => { setPatina(p); generateInsight(p); }}
                  className={`flex items-center justify-between px-6 py-4 rounded-full border transition-all group ${
                    patina === p ? 'bg-white border-white text-black' : 'bg-white/5 border-white/10 text-white hover:bg-white/10'
                  }`}
                >
                  <span className="text-[11px] font-semibold uppercase tracking-widest-custom">{p} Finish Profile</span>
                  <div className={`w-2 h-2 rounded-full transition-transform group-hover:scale-150 ${patina === p ? 'bg-black' : 'bg-white/40'}`} />
                </button>
              ))}
            </div>

            <div className="min-h-[100px] flex items-center bg-white/5 p-8 rounded-[32px] border border-white/5">
              {loading ? (
                <div className="flex items-center space-x-4 text-white/40">
                  <Loader2 className="animate-spin" size={20} />
                  <span className="text-[10px] font-semibold uppercase tracking-widest-custom">Analyzing Spec...</span>
                </div>
              ) : (
                <p className="text-lg italic font-light text-neutral-300 leading-relaxed">
                  {aiInsight || "Select a leather finish to begin the technical characterization analysis."}
                </p>
              )}
            </div>
          </div>

          <div className="relative group">
            <div className="aspect-square bg-neutral-900 rounded-[32px] overflow-hidden border border-white/10 shadow-2xl relative">
              <img 
                key={patina}
                src={finishImages[patina]} 
                alt={`${patina} Leather Bag Profile`} 
                className="w-full h-full object-cover transition-all duration-1000 animate-reveal grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-12 left-12 right-12">
                 <div className="bg-white/10 backdrop-blur-md p-8 rounded-[32px] border border-white/10">
                    <p className="text-[10px] font-semibold uppercase tracking-widest-custom text-white/40 mb-2">Atelier View</p>
                    <p className="text-sm font-semibold tracking-tight text-white">Technical Simulation: {patina} Grain Density Active</p>
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