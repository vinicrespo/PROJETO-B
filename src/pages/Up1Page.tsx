import { useEffect } from 'react';

export default function Up1Page() {
  useEffect(() => {
    const scriptId = 'vturb-player-script-up1';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://scripts.converteai.net/d21a9e1d-910e-4254-b2bc-30b12586d2ef/players/6a091d4a2a5846f34be86623/v4/player.js";
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col items-center">
      {/* Header */}
      <div className="w-full bg-[#991b1b] text-center py-4 px-4 shadow-md">
        <h1 className="text-xl md:text-2xl font-bold uppercase tracking-tight">
          <span className="text-yellow-400">ATTENTION :</span> VOTRE ACHAT N'EST PAS ENCORE TERMINÉ !
        </h1>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-3xl px-4 py-8 text-center space-y-6">
        <p className="text-base md:text-lg text-gray-100 leading-relaxed max-w-2xl mx-auto">
          Vous ne verrez cette page qu'une seule fois (et pour toujours). 
          Regardez la vidéo ci-dessous et soyez très attentif à la révélation 
          que j'ai à vous partager...
        </p>

        <div className="space-y-2 max-w-xl mx-auto pt-2">
          <h2 className="text-xl md:text-2xl font-bold text-[#ef4444] uppercase tracking-wide">
            IMPORTANT :
          </h2>
          <p className="text-base md:text-lg font-bold leading-relaxed">
            Si vous fermez cette page ou cliquez sur le bouton retour de votre navigateur, 
            votre achat pourrait rencontrer des problèmes.
          </p>
        </div>

        {/* Video Placeholder Area */}
        <div className="w-full max-w-[400px] mx-auto mt-8">
          {/* Vturb Embed */}
          {/* @ts-ignore */}
          <vturb-smartplayer id="vid-6a091d4a2a5846f34be86623" style={{ display: 'block', margin: '0 auto', width: '100%', maxWidth: '400px' }}></vturb-smartplayer>
          
          {/* Progress bar */}
          <div className="mt-4 px-2">
            <div className="w-full h-3 bg-gray-800 overflow-hidden">
              <div className="h-full bg-green-500" style={{ width: '99%' }}></div>
            </div>
            <p className="text-center text-sm text-gray-400 mt-2 font-medium">99%</p>
          </div>

        </div>
      </div>
    </div>
  );
}
