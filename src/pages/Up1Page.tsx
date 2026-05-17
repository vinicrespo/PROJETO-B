export default function Up1Page() {
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
          
          {/* Replace this div with your Vturb Embed code later */}
          <div className="aspect-[9/16] bg-gray-900 border border-gray-800 flex items-center justify-center">
             <p className="text-gray-500 text-sm">Espace pour votre vidéo Vturb</p>
          </div>
          
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
