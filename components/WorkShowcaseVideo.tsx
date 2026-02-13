import React, { useState, useRef } from 'react';
import { Play, Pause, Video } from 'lucide-react';

const WorkShowcaseVideo: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="py-12 md:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center mb-10 md:mb-12 text-center animate-reveal">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-black/5 border border-black/5 rounded-full mb-6">
            <Video size={12} className="text-black" />
            <span className="text-[9px] font-black uppercase tracking-widest-custom text-neutral-500">Process Visualization</span>
          </div>
          <h2 className="text-[32px] sm:text-[42px] md:text-[64px] font-black mb-4 md:mb-6 leading-[1.1] tracking-tight-custom">
            Factory <br />
            <span className="opacity-20 font-serif italic font-light">In Motion.</span>
          </h2>
          <p className="text-neutral-600 text-base md:text-lg max-w-2xl font-medium leading-relaxed px-4">
            A cinematic glimpse into the precision and patience required to transform raw hide into premium leather bags.
          </p>
        </div>

        <div 
          className="relative w-full aspect-video md:aspect-[21/9] rounded-[24px] md:rounded-[4rem] overflow-hidden bg-neutral-900 shadow-2xl group cursor-pointer"
          onClick={togglePlay}
        >
          <div className={`absolute inset-0 bg-black/30 z-10 transition-opacity duration-700 ${isPlaying ? 'opacity-0' : 'opacity-100'}`} />
          
          <video
            ref={videoRef}
            loop
            muted
            playsInline
            className={`w-full h-full object-cover transition-transform duration-[3000ms] ${isPlaying ? 'scale-100' : 'scale-110'}`}
            poster="https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=2400"
          >
            <source 
              src="https://cdn.pixabay.com/video/2019/11/02/28556-370725514_tiny.mp4" 
              type="video/mp4" 
            />
            Your browser does not support the video tag.
          </video>

          <div className="absolute inset-0 flex items-center justify-center z-30">
            <button 
              className={`w-14 h-14 md:w-16 md:h-16 rounded-full glass border border-white/20 flex items-center justify-center transition-all duration-500 hover:scale-110 active:scale-95 ${isPlaying ? 'opacity-0 scale-90 pointer-events-none' : 'opacity-100 scale-100'}`}
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              {isPlaying ? (
                <Pause size={18} md:size={20} className="text-white fill-white" />
              ) : (
                <Play size={18} md:size={20} className="text-white fill-white translate-x-1" />
              )}
            </button>
          </div>

          <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 z-20">
            <div className="glass px-4 md:px-6 py-2 md:py-3 rounded-full border border-white/10 backdrop-blur-md">
              <p className="text-[8px] md:text-[10px] font-black uppercase tracking-widest-custom text-white flex items-center gap-2 md:gap-3">
                <span className={`w-1 h-1 md:w-1.5 md:h-1.5 rounded-full ${isPlaying ? 'bg-green-500' : 'bg-red-500'} animate-pulse`} />
                {isPlaying ? 'Now Playing' : 'Live from our Atelier'}
              </p>
            </div>
          </div>

          <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
            <h2 className="text-white/20 text-4xl sm:text-6xl md:text-9xl font-black uppercase tracking-tighter opacity-10 select-none">
              Precision
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkShowcaseVideo;