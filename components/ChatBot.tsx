import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, User, Loader2, Sparkles, UserCheck } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  text: string;
  timestamp: Date;
}

interface ChatBotProps {
  setView: (view: 'home' | 'about' | 'contact' | 'portfolio') => void;
}

const FAQ_SUGGESTIONS = [
  "What is the Minimum Order Quantity?",
  "Do you export to Germany?",
  "Can I request a custom OEM design?",
  "What leather grades do you use?"
];

const ChatBot: React.FC<ChatBotProps> = ({ setView }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      text: "Welcome to SLB Overseas Export Desk. I am your AI concierge. How can I assist you with your premium leather requirements today?",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [availableSuggestions, setAvailableSuggestions] = useState<string[]>(FAQ_SUGGESTIONS);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isLoading, isOpen]);

  const handleTalkToAdmin = () => {
    setIsOpen(false);
    setView('contact');
  };

  const handleSend = async (text: string = inputValue) => {
    const trimmedText = text.trim();
    if (!trimmedText) return;

    // Filter out the used suggestion from the list
    setAvailableSuggestions(prev => prev.filter(s => s.toLowerCase() !== trimmedText.toLowerCase()));

    // Check if user is asking for a human or admin explicitly
    const humanKeywords = ['admin', 'human', 'person', 'talk to someone', 'real person', 'call me', 'representative'];
    if (humanKeywords.some(keyword => trimmedText.toLowerCase().includes(keyword))) {
      const userMsg: Message = {
        id: Date.now().toString(),
        role: 'user',
        text: trimmedText,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, userMsg]);
      
      setIsLoading(true);
      setTimeout(() => {
        const assistantMsg: Message = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          text: "I understand you'd like to speak with our export desk. I am redirecting you to our contact page where you can send a direct inquiry to our admin team.",
          timestamp: new Date()
        };
        setMessages(prev => [...prev, assistantMsg]);
        setIsLoading(false);
        setTimeout(() => handleTalkToAdmin(), 2000);
      }, 800);
      
      setInputValue('');
      return;
    }

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      text: trimmedText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: trimmedText,
        config: {
          systemInstruction: `You are the Official SLB Overseas Support Assistant.
          Context: 
          - Company: SLB OVERSEAS.
          - Specialty: Premium Leather & Canvas bags.
          - Primary Market: Germany.
          - MOQ: 25-50 units.
          - Services: OEM, private label, custom manufacturing.
          Tone: Professional, elite, and premium.
          Answer queries briefly (under 50 words). If the query is too complex or requires a human, tell them to use the 'Talk to Admin' button.`,
        },
      });

      const assistantMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        text: response.text || "I apologize, I couldn't process that. Please contact our export desk directly.",
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMsg]);
    } catch (error) {
      console.error("Chat Error:", error);
      const errorMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        text: "System busy. Please reach us at slboverseas2025@gmail.com for urgent inquiries.",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[200] font-inter">
      {/* FAB */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 transform ${
          isOpen ? 'bg-black rotate-90' : 'bg-black hover:scale-110 active:scale-95'
        }`}
      >
        {isOpen ? <X className="text-white" size={24} /> : <MessageSquare className="text-white" size={24} />}
      </button>

      {/* Chat Window */}
      <div
        className={`absolute bottom-20 md:bottom-24 right-0 w-[90vw] max-w-[400px] h-[70vh] max-h-[600px] bg-white rounded-[32px] shadow-2xl border border-black/5 flex flex-col overflow-hidden transition-all duration-500 ease-out transform origin-bottom-right ${
          isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-90 opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="p-6 bg-black text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center relative">
              <div className="w-2 h-2 rounded-full bg-green-500 absolute bottom-0 right-0 border-2 border-black" />
              <Sparkles size={20} className="text-white/40" />
            </div>
            <div>
              <h4 className="text-[13px] font-black uppercase tracking-widest-custom">
                AI Concierge
              </h4>
              <p className="text-[10px] text-white/40 font-medium">Jodhpur Export Desk • Online</p>
            </div>
          </div>
          <button 
            onClick={handleTalkToAdmin}
            className="flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full text-[9px] font-bold uppercase tracking-widest-custom hover:bg-white text-white hover:text-black transition-all"
          >
            <UserCheck size={12} />
            Talk to Admin
          </button>
        </div>

        {/* Messages */}
        <div className="flex-grow overflow-y-auto p-6 space-y-4 scrollbar-hide">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
            >
              <div
                className={`max-w-[85%] px-5 py-3 rounded-[20px] text-[13px] leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-neutral-100 text-black rounded-tr-none'
                    : 'bg-neutral-50 text-neutral-600 rounded-tl-none border border-black/5'
                }`}
              >
                {msg.text}
              </div>
              <span className="text-[8px] font-bold uppercase tracking-widest-custom text-neutral-300 mt-2 mx-1">
                {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
          ))}
          {isLoading && (
            <div className="flex items-start gap-2">
              <div className="px-5 py-3 bg-neutral-50 rounded-[20px] rounded-tl-none border border-black/5 flex items-center gap-3">
                <Loader2 size={14} className="animate-spin text-black/20" />
                <span className="text-[10px] font-bold uppercase tracking-widest-custom text-neutral-300">Analyzing...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* FAQ Suggestions - Persist remaining options */}
        {!isLoading && availableSuggestions.length > 0 && (
          <div className="px-6 pb-4 flex flex-wrap gap-2 animate-reveal shrink-0">
            <p className="w-full text-[8px] font-black uppercase tracking-widest-custom text-neutral-300 mb-1">
              Explore More Queries
            </p>
            {availableSuggestions.map((faq, i) => (
              <button
                key={i}
                onClick={() => handleSend(faq)}
                className="px-4 py-2 bg-neutral-50 border border-black/5 rounded-full text-[10px] font-semibold text-neutral-500 hover:border-black hover:text-black transition-all whitespace-nowrap"
              >
                {faq}
              </button>
            ))}
          </div>
        )}

        {/* Input */}
        <div className="p-4 border-t border-black/5 shrink-0">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="relative"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Inquire about your collection..."
              className="w-full bg-neutral-100 rounded-full pl-6 pr-14 py-4 text-sm font-medium outline-none focus:ring-2 focus:ring-black/5 transition-all"
            />
            <button
              disabled={!inputValue.trim() || isLoading}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center disabled:opacity-20 transition-all hover:scale-105 active:scale-95"
            >
              <Send size={16} />
            </button>
          </form>
          <p className="text-center text-[8px] font-bold uppercase tracking-widest-custom text-neutral-300 mt-3">
            Elite Manufacturing Service — Jodhpur Desk
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;