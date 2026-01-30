
import React, { useEffect, useState } from 'react';
import { generateJumpLore } from '../services/geminiService';
import { JumpStory } from '../types';

const LoreSection: React.FC = () => {
  const [lore, setLore] = useState<JumpStory | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLore = async () => {
      try {
        const data = await generateJumpLore();
        setLore(data);
      } catch (error) {
        console.error("Failed to fetch lore", error);
      } finally {
        setLoading(false);
      }
    };
    fetchLore();
  }, []);

  if (loading) {
    return (
      <div className="py-20 text-center">
        <div className="animate-spin w-12 h-12 border-4 border-red-500 border-t-transparent rounded-full mx-auto mb-4" />
        <p className="font-bold text-slate-500">CONSULTING THE ANCIENT JUMP SCROLLS...</p>
      </div>
    );
  }

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="bg-white p-8 rounded-3xl shadow-xl border-l-8 border-red-500">
          <h2 className="text-4xl font-bungee text-red-600 mb-6">{lore?.title || "The Legend of Tzvi"}</h2>
          <p className="text-lg leading-relaxed text-slate-700 mb-6">
            {lore?.biography}
          </p>
          <div className="bg-yellow-100 p-4 rounded-xl border border-yellow-200">
            <h3 className="font-bold text-yellow-800 uppercase text-sm mb-2">Signature Style</h3>
            <p className="text-slate-700 italic">"{lore?.jumpingStyle}"</p>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-3xl font-bungee text-slate-900">Jump Facts</h3>
          {lore?.funFacts.map((fact, i) => (
            <div key={i} className="flex items-start gap-4 bg-white/50 p-4 rounded-2xl border border-white hover:bg-white transition-colors">
              <span className="flex-shrink-0 w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center font-bungee text-xl">
                {i + 1}
              </span>
              <p className="text-slate-800 font-medium pt-1">{fact}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoreSection;
