
import React from 'react';
import JumpingHero from './components/JumpingHero';
import LoreSection from './components/LoreSection';
import StatsVisualizer from './components/StatsVisualizer';
import ImageGenerator from './components/ImageGenerator';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-yellow-50 flex flex-col">
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-white/80 backdrop-blur-md border-b border-slate-200 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center text-white font-bungee">T</div>
          <span className="font-bungee text-xl tracking-tight text-slate-900">REITER JUMP</span>
        </div>
        <nav className="hidden md:flex gap-8 font-bold text-sm uppercase tracking-widest text-slate-500">
          <a href="#hero" className="hover:text-red-600 transition-colors">Jump Zone</a>
          <a href="#lore" className="hover:text-red-600 transition-colors">The Legend</a>
          <a href="#stats" className="hover:text-red-600 transition-colors">Metrics</a>
          <a href="#gallery" className="hover:text-red-600 transition-colors">Visuals</a>
        </nav>
        <button className="bg-red-600 text-white px-5 py-2 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-red-700 transition-all shadow-lg active:scale-95">
          Join the Leap
        </button>
      </header>

      <main className="pt-16">
        <div id="hero">
          <JumpingHero />
        </div>
        
        <div id="lore">
          <LoreSection />
        </div>

        <div id="stats">
          <StatsVisualizer />
        </div>

        <div id="gallery">
          <ImageGenerator />
        </div>
      </main>

      <footer className="bg-slate-900 text-slate-500 py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center text-white font-bungee">T</div>
              <span className="font-bungee text-xl text-white">REITER JUMP</span>
            </div>
            <p className="text-sm leading-relaxed">
              Dedicated to the simple joy of upward momentum. Since 19XX, Tzvi has been proving that gravity is merely a suggestion, not a law.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-white font-bungee text-lg">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Jump Safety Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Vertical Training</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Seismic Reports</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-white font-bungee text-lg">Stay Bouncy</h4>
            <p className="text-sm">Subscribe to the weekly Jump Newsletter for local epicenter alerts.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Your Email" className="bg-slate-800 border-none rounded-lg px-4 py-2 text-white w-full focus:ring-2 ring-red-500" />
              <button className="bg-red-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-red-700">OK</button>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-slate-800 text-xs text-center">
          &copy; {new Date().getFullYear()} Tzvi Reiter Jumping Co. | Warning: Excessive jumping may cause temporary atmospheric disturbances.
        </div>
      </footer>
    </div>
  );
};

export default App;
