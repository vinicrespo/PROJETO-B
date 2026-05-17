import { useEffect } from 'react';
import { Hand } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Up2Page() {
  useEffect(() => {
    const scriptId = 'vturb-player-script-up2';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://scripts.converteai.net/d21a9e1d-910e-4254-b2bc-30b12586d2ef/players/6a091d7aaf83766f2b46d654/v4/player.js";
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

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
      <div className="w-full max-w-3xl px-4 pt-8 pb-24 text-center flex flex-col items-center">
        
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
        <div className="w-full max-w-[400px] mx-auto mt-4 mb-8">
          {/* Vturb Embed */}
          {/* @ts-ignore */}
          <vturb-smartplayer id="vid-6a091d7aaf83766f2b46d654" style={{ display: 'block', margin: '0 auto', width: '100%', maxWidth: '400px' }}></vturb-smartplayer>
        </div>

        {/* Upsell Action Area */}
        <div className="w-full max-w-[400px] mx-auto mt-4 space-y-4">
          <button 
            onClick={() => (window as any).acceptUpsell('https://app.kashpay.com.br/u/d4ae4ffb98163314')} 
            style={{ fontFamily: 'Poppins', fontSize: '18px', fontWeight: 600, lineHeight: 1.3, color: '#ffffff', backgroundColor: '#057932', border: 'none', borderRadius: '10px', padding: '13px 7%', cursor: 'pointer', textAlign: 'center', display: 'block', margin: 'auto', width: '100%' }}
          >
            Accepter l’offre
          </button>

          <Link to="/up3" className="block text-center text-sm text-gray-500 underline hover:text-gray-300">
            Non merci, je passe mon tour.
          </Link>
        </div>
      </div>
    </div>
  );
}
