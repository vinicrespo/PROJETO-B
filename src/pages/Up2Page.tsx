import { Hand } from 'lucide-react';

export default function Up2Page() {
  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col items-center">
      {/* Header Gradient & Progress */}
      <div className="w-full bg-gradient-to-r from-purple-700 to-orange-500 py-3 px-4 shadow-md flex justify-center">
        <div className="w-full max-w-3xl flex items-center bg-white/20 rounded-full h-4 relative overflow-hidden">
           <div 
             className="absolute top-0 left-0 h-full rounded-full" 
             style={{ 
               width: '89%',
               backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.2) 10px, rgba(255,255,255,0.2) 20px), linear-gradient(to right, #facc15, #ea580c)'
             }}
           ></div>
           <div className="absolute right-2 text-white text-[10px] font-bold z-10 drop-shadow-md">89%</div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-3xl px-4 py-8 text-center flex flex-col items-center">
        
        {/* Icon */}
        <div className="mb-6 mt-4">
          <Hand className="w-20 h-20 text-white" strokeWidth={1.5} />
        </div>

        <h2 className="text-lg md:text-xl font-bold text-orange-500 uppercase tracking-wide mb-6">
          ARRÊTEZ-VOUS ! AVERTISSEMENT IMPORTANT !!!
        </h2>

        <h1 className="text-2xl md:text-4xl font-black uppercase leading-tight mb-8">
          VOUS <span className="text-green-500">N'AUREZ PLUS</span> CETTE OPPORTUNITÉ <span className="text-green-500">SI VOUS FERMEZ CETTE PAGE !</span>
        </h1>

        {/* Video Placeholder Area */}
        <div className="w-full max-w-[400px] mx-auto mt-4">
          
          {/* Replace this div with your Vturb Embed code later */}
          <div className="aspect-[9/16] bg-gray-900 border border-gray-800 flex items-center justify-center">
             <p className="text-gray-500 text-sm">Espace pour votre vidéo Vturb</p>
          </div>
          
        </div>
      </div>
    </div>
  );
}
