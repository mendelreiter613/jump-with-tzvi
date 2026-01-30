
import React, { useState } from 'react';
import { generateJumpImage } from '../services/geminiService';

const locations = [
  "Moon Surface",
  "Top of the Eiffel Tower",
  "Deep Space Nebula",
  "The Great Wall of China",
  "A Volcano Rim",
  "New York Times Square"
];

const ImageGenerator: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);
  const [generatedImageUrl, setGeneratedImageUrl] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    setIsGenerating(true);
    setGeneratedImageUrl(null);
    try {
      const url = await generateJumpImage(selectedLocation);
      if (url) setGeneratedImageUrl(url);
    } catch (error) {
      console.error("Image generation failed", error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bungee text-slate-900 mb-6">See Tzvi Jump Anywhere</h2>
        <p className="text-slate-600 mb-10">Choose a location and witness the power of a Reiter Leap.</p>
        
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {locations.map(loc => (
            <button
              key={loc}
              onClick={() => setSelectedLocation(loc)}
              className={`px-4 py-2 rounded-full border-2 font-bold transition-all ${selectedLocation === loc ? 'bg-red-500 border-red-500 text-white' : 'border-slate-200 text-slate-500 hover:border-red-200'}`}
            >
              {loc}
            </button>
          ))}
        </div>

        <button
          onClick={handleGenerate}
          disabled={isGenerating}
          className="bg-slate-900 text-white font-bungee px-10 py-5 rounded-2xl hover:bg-slate-800 disabled:opacity-50 transition-all shadow-xl flex items-center gap-4 mx-auto"
        >
          {isGenerating ? (
            <>
              <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full" />
              RENDERING THE JUMP...
            </>
          ) : (
            "GENERATE IMAGE"
          )}
        </button>

        <div className="mt-12 relative min-h-[400px] bg-slate-100 rounded-3xl overflow-hidden border-4 border-slate-900 shadow-inner flex items-center justify-center">
          {generatedImageUrl ? (
            <img 
              src={generatedImageUrl} 
              alt={`Tzvi jumping at ${selectedLocation}`} 
              className="w-full h-full object-cover animate-in fade-in zoom-in duration-1000"
            />
          ) : (
            <div className="text-slate-400 p-12 italic">
              {isGenerating ? "The photons are aligning..." : "Tzvi is waiting for his next coordinates."}
            </div>
          )}
          
          {generatedImageUrl && (
            <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/90 backdrop-blur-md rounded-xl border border-slate-200 shadow-lg text-left">
              <p className="text-xs font-bold text-red-600 uppercase tracking-widest mb-1">LOCATION ARCHIVED</p>
              <p className="font-bungee text-slate-900">{selectedLocation}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ImageGenerator;
