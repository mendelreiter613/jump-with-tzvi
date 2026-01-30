
import React, { useState, useEffect } from 'react';

const JumpingHero: React.FC = () => {
  const [jumpCount, setJumpCount] = useState(0);
  const [isJumping, setIsJumping] = useState(false);

  const handleJump = () => {
    setJumpCount(prev => prev + 1);
    setIsJumping(true);
    setTimeout(() => setIsJumping(false), 500);
  };

  return (
    <section className="relative h-[600px] flex flex-col items-center justify-center bg-gradient-to-b from-blue-400 to-yellow-50 overflow-hidden">
      <div className="absolute top-10 left-10 animate-pulse hidden md:block">
        <div className="bg-white/30 p-4 rounded-xl backdrop-blur-sm border border-white/50">
          <p className="text-white font-bold">CURRENT ALTITUDE</p>
          <p className="text-4xl font-bungee text-white">{(jumpCount * 1.5).toFixed(1)}m</p>
        </div>
      </div>

      <div className="z-10 text-center mb-12">
        <h1 className="text-6xl md:text-8xl font-bungee text-white drop-shadow-lg mb-4">
          TZVI JUMPS
        </h1>
        <p className="text-xl text-blue-900 font-bold uppercase tracking-widest">
          The Vertical Legend of the Millennium
        </p>
      </div>

      <div className="relative h-64 w-64 flex items-end justify-center">
        {/* Shadow */}
        <div className={`absolute bottom-0 h-4 bg-black/20 rounded-full transition-all duration-300 ${isJumping ? 'w-16 blur-md opacity-20' : 'w-48 blur-lg opacity-40'}`} />
        
        {/* The Jumping Character (Avatar) */}
        <div 
          className={`relative transition-transform duration-300 transform cursor-pointer select-none ${isJumping ? '-translate-y-48 scale-90' : 'translate-y-0 scale-100'}`}
          onClick={handleJump}
        >
          <div className="w-32 h-44 bg-orange-500 rounded-2xl relative border-4 border-white shadow-xl flex items-center justify-center">
             {/* Character Face */}
             <div className="absolute top-4 w-full flex flex-col items-center">
                <div className="flex gap-4">
                   <div className="w-3 h-3 bg-white rounded-full" />
                   <div className="w-3 h-3 bg-white rounded-full" />
                </div>
                <div className="mt-4 w-12 h-6 border-b-4 border-white rounded-full" />
             </div>
             {/* T-Shirt Brand */}
             <div className="mt-16 font-bungee text-white/50 text-xs">JUMP LIFE</div>
          </div>
          {/* Arms */}
          <div className={`absolute -left-4 top-16 w-6 h-20 bg-orange-600 rounded-full border-2 border-white transition-all ${isJumping ? 'rotate-45' : '-rotate-12'}`} />
          <div className={`absolute -right-4 top-16 w-6 h-20 bg-orange-600 rounded-full border-2 border-white transition-all ${isJumping ? '-rotate-45' : 'rotate-12'}`} />
        </div>
      </div>

      <div className="z-10 mt-12 flex flex-col items-center gap-4">
        <button 
          onClick={handleJump}
          className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bungee text-2xl rounded-full shadow-2xl transform hover:scale-105 active:scale-95 transition-all"
        >
          MAKE HIM JUMP!
        </button>
        <div className="text-blue-900 font-bold text-xl bg-white/50 px-6 py-2 rounded-full">
          TOTAL JUMPS RECORDED: <span className="text-red-600">{jumpCount}</span>
        </div>
      </div>

      {/* Clouds Background */}
      <div className="absolute top-20 right-[10%] opacity-20 animate-bounce delay-75"><svg width="100" height="40"><path d="M10 30 Q 30 10 50 30 T 90 30" fill="white" /></svg></div>
      <div className="absolute top-40 left-[15%] opacity-20 animate-bounce delay-150"><svg width="120" height="50"><path d="M10 40 Q 40 10 70 40 T 110 40" fill="white" /></svg></div>
    </section>
  );
};

export default JumpingHero;
