import { Check, ShieldCheck, Image as ImageIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Up3Page() {
  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col items-center pb-24">
      {/* Top Banner */}
      <div className="w-full bg-[#facc15] text-black text-center py-2 px-4 font-bold text-sm md:text-base uppercase tracking-tight">
        ATTENTION ! VOTRE COMMANDE N'EST PAS ENCORE COMPLÈTE !
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-[#991b1b] border-b border-[#7f1d1d] shadow-md flex flex-col items-center justify-center py-3 px-4">
        <div className="w-full max-w-md flex flex-col gap-2">
           <div className="flex justify-between items-center text-white font-bold text-sm md:text-base tracking-wide">
             <span>Statut de traitement</span>
             <span>89%</span>
           </div>
           <div className="w-full bg-black/40 h-4 rounded-full overflow-hidden relative border border-black/30 shadow-inner">
             <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#facc15] to-[#f59e0b] shadow-[0_0_10px_rgba(250,204,21,0.5)] rounded-full" style={{ width: '89%' }}>
                {/* Stripes */}
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.5) 10px, rgba(255,255,255,0.5) 20px)' }}></div>
             </div>
           </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-2xl px-4 py-8 text-center space-y-8">
        
        <h2 className="text-xl md:text-2xl font-bold leading-tight">
          <span className="text-[#facc15]">⚠️ Attention :</span> Votre commande n'est pas encore complète !
        </h2>

        <p className="text-base md:text-lg leading-relaxed">
          Avant d'effectuer votre commande du <span className="text-[#ef4444] font-bold">programme Stylo Maison App</span>, j'ai une devinette très sérieuse pour vous (que très peu de gens réussissent du premier coup).
        </p>

        <p className="text-lg md:text-xl font-bold text-[#facc15]">
          Que se passe-t-il lorsque l'on perd 15 kilos en un temps record... ?
        </p>

        <p className="text-sm md:text-base leading-relaxed text-gray-300">
          50% d'entre vous pensent à la perte de poids (c'est faux), et les autres 50% pensent au regain d'énergie...
          <br/><br/>
          Vous avez tout faux. (Ne vous inquiétez pas, j'ai fait pareil).
        </p>

        <p className="text-base md:text-lg leading-relaxed">
          Vous venez d'acheter le <span className="text-[#ef4444] font-bold">programme Stylo Maison App</span> (Félicitations !) et dans 21 jours, au grand maximum, si vous le suivez à la lettre, vous aurez fondu de 15 kilos (ou plus selon votre profil).
        </p>

        <p className="text-base md:text-lg leading-relaxed">
          Mais il va y avoir un effet secondaire très visible lorsque vous commencerez à perdre du poids :
          <br/>
          <span className="text-[#ef4444] font-bold text-xl block mt-2">La peau flasque.</span>
        </p>

        <p className="text-base md:text-lg leading-relaxed">
          Et ce que 21 jours de perte de graisse donne à la peau... est désolant.
        </p>

        {/* Green Box */}
        <div className="bg-[#2f5d37] border-2 border-[#4ade80] rounded-xl p-6 text-left max-w-lg mx-auto shadow-lg">
          <h3 className="font-bold text-lg md:text-xl text-center mb-4 text-white">
            Si rien n'est fait, vous remarquerez :
          </h3>
          <ul className="space-y-3 font-medium text-white/90">
            <li className="flex items-center gap-3"><span className="text-white">•</span> Une peau morte et pendante</li>
            <li className="flex items-center gap-3"><span className="text-white">•</span> Un ventre flasque et ridé</li>
            <li className="flex items-center gap-3"><span className="text-white">•</span> Un excédent de peau très fâcheux</li>
            <li className="flex items-center gap-3"><span className="text-white">•</span> Des bras et un dos qui vous "lâchent"</li>
          </ul>
        </div>

        <p className="text-base md:text-lg leading-relaxed">
          Ceci est dû à la perte de graisse rapide.<br/>
          Votre peau a été "tendue" pendant des mois, voire des années.
        </p>


        <p className="text-base md:text-lg leading-relaxed">
          Soudainement, cette graisse disparaît... laissant place à la fameuse peau "pendante" que vous voyez chez les personnes ayant subi une liposuccion.
          <br/><br/>
          Mais rassurez-vous, j'ai une solution.
        </p>

        <h2 className="text-xl md:text-2xl font-black text-[#facc15] uppercase">
          LA MÉTHODE ANTI-PEAU FLASQUE
        </h2>

        {/* Mockup Placeholder */}
        <div className="aspect-[3/4] md:aspect-square bg-gray-900 border border-gray-800 rounded-2xl flex flex-col items-center justify-center w-full max-w-sm mx-auto overflow-hidden relative shadow-2xl p-6">
          <div className="absolute inset-0 bg-gradient-to-br from-[#facc15]/10 via-black to-[#b91c1c]/10"></div>
          <div className="relative z-10 text-center p-8 border border-[#facc15]/30 bg-black/60 backdrop-blur-md rounded-xl w-full shadow-inner">
             <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#facc15]/50 to-transparent mx-auto mb-6"></div>
             <p className="text-xs uppercase tracking-widest text-[#facc15] mb-3 font-bold">Guide exclusif</p>
             <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">Le Secret pour<br/>Raffermir la Peau</h3>
             <p className="text-sm font-medium text-gray-300">Méthode Collagène V3</p>
          </div>
        </div>

        <p className="text-base md:text-lg leading-relaxed">
          La plupart des crèmes raffermissantes de la peau vous coûteront au bas mot 75 € (et ne feront pas grand chose, à part vider votre compte en banque).
        </p>

        {/* Checklist */}
        <div className="text-left space-y-4 max-w-lg mx-auto">
          <div className="flex gap-3 items-start">
            <div className="bg-green-500 text-white rounded p-1 mt-0.5"><Check className="w-4 h-4" /></div>
            <p className="font-medium text-[#facc15]">Raffermit la peau du ventre et supprime la peau morte</p>
          </div>
          <div className="flex gap-3 items-start">
            <div className="bg-green-500 text-white rounded p-1 mt-0.5"><Check className="w-4 h-4" /></div>
            <p className="font-medium text-[#facc15]">Redonne de l'élasticité à la peau des bras (l'effet "chauve-souris")</p>
          </div>
          <div className="flex gap-3 items-start">
            <div className="bg-green-500 text-white rounded p-1 mt-0.5"><Check className="w-4 h-4" /></div>
            <p className="font-medium text-[#facc15]">Lisse la peau du cou et du visage (et supprime le double menton)</p>
          </div>
          <div className="flex gap-3 items-start">
            <div className="bg-green-500 text-white rounded p-1 mt-0.5"><Check className="w-4 h-4" /></div>
            <p className="font-medium text-[#facc15]">Méthode 100% naturelle (sans crèmes ni opérations coûteuses)</p>
          </div>
        </div>

        <div className="py-6 border-t border-b border-gray-800 space-y-6">
          <h3 className="text-lg md:text-xl font-bold text-white uppercase tracking-wider">
            ❓ Pourquoi ça fonctionne ?
          </h3>
          <p className="text-base leading-relaxed text-gray-300">
            Le secret de l'élasticité de la peau réside dans un nutriment bien précis : le Collagène.<br/>
            Mais pas n'importe quel type de collagène.
          </p>
          <p className="text-base leading-relaxed text-gray-300">
            Il y a un ingrédient naturel qui a la faculté de lier le collagène aux cellules de la peau... pour un résultat spectaculaire.
          </p>
          <p className="text-lg font-bold">
            Nous l'appelons le <span className="text-[#facc15]">Collagène V3</span> (le format le plus actif).
          </p>
          <p className="text-base leading-relaxed text-gray-300">
            À chaque fois que vous boirez votre recette Stylo Maison App, ajoutez cet ingrédient naturel pour stimuler la production de collagène.<br/>
            C'est pour ça que la peau de nos clientes se raffermit à vue d'œil.
          </p>
          <p className="text-base leading-relaxed text-gray-300">
            Et la méthode (avec la recette du Collagène V3) se trouve dans ce guide, spécialement conçu pour compléter votre routine.
          </p>
          <p className="text-base leading-relaxed text-gray-300 italic">
            Pour un chemin direct et sans détour vers un corps ferme et un ventre plat (sans peau morte).
          </p>
        </div>

        {/* Warning list */}
        <div className="bg-gray-900 rounded-xl p-6 text-left max-w-lg mx-auto">
          <h4 className="font-bold text-[#facc15] mb-4 text-center">
            ⚠️ Si vous cherchez une alternative pour traiter la peau flasque (et les rides), vous risquez :
          </h4>
          <ul className="space-y-2 text-gray-300 text-sm md:text-base">
            <li>• Des crèmes, des gels et des lotions (entre 45 € et 150 €)</li>
            <li>• Des séances de cryothérapie à 300 € (dont il faut se méfier)</li>
            <li>• Un lifting (à plus de 3000 €... très lourd)</li>
          </ul>
          <p className="mt-4 text-center font-medium text-white">Le tout pour des résultats décevants et un budget explosé.</p>
          <p className="mt-2 text-center font-bold text-white text-lg">C'est pour cette raison que je vous offre un accès au guide pour seulement 17 €.</p>
        </div>

        <p className="text-base md:text-lg leading-relaxed font-bold">
          Ajoutez-le à votre commande pour bénéficier de cette offre unique (vous ne le reverrez plus).
        </p>

        <div className="text-center">
          <p className="text-gray-400 line-through text-lg">Prix normal : 39 €</p>
          <p className="text-[#facc15] font-black text-2xl">👉 pour seulement 17 €</p>
        </div>

        {/* Guarantee */}
        <div className="flex flex-col items-center justify-center gap-2 mt-4 mb-8">
          <div className="flex items-center gap-2 text-green-500 font-bold text-xl uppercase">
            <ShieldCheck className="w-6 h-6" /> Garantie 30 jours
          </div>
          <p className="text-gray-400 text-sm max-w-md">
            Si vous n'êtes pas satisfaite dans les 30 jours, je vous rembourse (même si vous avez tout lu). 
            Vous ne prenez aucun risque. Essayez-le. C'est à moi de prouver.
          </p>
        </div>

        <div className="space-y-4 max-w-lg mx-auto pt-6 border-t border-gray-800">
          <h4 className="text-xl font-bold text-[#ef4444]">❌ Mais faites attention :</h4>
          <p className="text-base leading-relaxed text-gray-300">
            Vous ne verrez plus cette offre <span className="text-[#ef4444] font-bold">absolument nulle part</span>. 
            C'est la seule fois qu'elle sera disponible à ce tarif.
          </p>
          <p className="text-base leading-relaxed font-medium">
            👉 Cliquez sur le bouton vert ci-dessous pour ajouter la Méthode Anti-Peau Flasque à votre commande (pour 17 €)
          </p>
          <p className="text-base leading-relaxed text-gray-400">
            Le choix vous appartient.<br/>
            L'ignorer c'est prendre le risque.<br/>
            Ou l'ajouter, et l'associer au programme pour un corps ferme et tonique (sans chirurgie).
          </p>
          <p className="text-lg font-bold text-[#facc15]">
            👇 Cliquez ci-dessous. Votre futur corps vous remerciera.
          </p>
        </div>

        {/* Upsell Button Placeholder */}
        <div className="w-full pt-6 space-y-4 max-w-sm mx-auto">
          <button 
            onClick={() => (window as any).acceptUpsell('https://app.kashpay.com.br/u/5e189e5e8b23a84d')} 
            style={{ fontFamily: 'Poppins', fontSize: '18px', fontWeight: 600, lineHeight: 1.3, color: '#ffffff', backgroundColor: '#057932', border: 'none', borderRadius: '10px', padding: '13px 7%', cursor: 'pointer', textAlign: 'center', display: 'block', margin: 'auto', width: '100%' }}
          >
            Accepter l’offre
          </button>
          
          <Link to="/up4" className="block text-center text-sm text-gray-500 underline hover:text-gray-300">
            Non, merci !
          </Link>
        </div>

      </div>
    </div>
  );
}
