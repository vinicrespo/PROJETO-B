import { motion } from 'motion/react';
import { Check, ShieldCheck, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Up4Page() {
  return (
    <div className="min-h-screen stylo-bg font-sans flex flex-col items-center pb-24 text-text-dark">
      {/* Top Banner (Sticky) */}
      <div className="w-full bg-[#ef4444] text-white text-center py-3 px-4 shadow-md sticky top-0 z-50">
        <h1 className="text-sm md:text-base font-bold uppercase tracking-widest">
          ATTENTION : VOTRE COMMANDE N'EST PAS ENCORE COMPLÈTE !
        </h1>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-white shadow-sm py-2 px-4 flex items-center justify-center gap-3">
        <span className="text-xs font-bold text-gray-500 uppercase tracking-wider hidden sm:block">
          Une seule étape restante ›
        </span>
        <div className="w-full max-w-xs h-3 bg-gray-200 rounded-full overflow-hidden flex-shrink-0 relative">
          <div className="h-full bg-green-500 rounded-full" style={{ width: '95%' }}></div>
        </div>
        <span className="text-xs font-bold text-green-600">95%</span>
      </div>

      {/* Main Content Container */}
      <div className="w-full max-w-[600px] px-4 py-8 space-y-12">
        
        {/* BLOC 1 — PROBLÈME */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4"
        >
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-text-dark">
            Avant de finaliser, lisez ceci.
          </h2>
          <div className="space-y-4 text-base md:text-lg text-text-muted leading-relaxed">
            <p>
              Vous êtes à un pas d'obtenir le corps de vos rêves avec le <strong className="text-text-dark">Stylo Maison App</strong>.
            </p>
            <p>
              Mais il existe un piège silencieux : <strong className="text-[#ef4444]">87% des femmes qui perdent du poids le reprennent dans les 6 mois.</strong>
            </p>
            <p>
              L'effet yo-yo détruit les efforts. Tout revient. Parfois pire qu'avant.
            </p>
          </div>
        </motion.div>

        {/* BLOC 2 — SOLUTION + PRIX */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="stylo-card p-6 md:p-8 space-y-6"
        >
          {/* Mockup Placeholder */}
          <div className="aspect-[4/3] bg-gradient-to-br from-[#f3e8d2] to-[#dfc49c] rounded-xl flex flex-col items-center justify-center p-6 border-2 border-white shadow-inner text-center">
             <div className="w-12 h-1 h-12 rounded-full bg-white/30 flex items-center justify-center mb-3">
               <ShieldCheck className="w-6 h-6 text-gold" />
             </div>
             <p className="text-xs uppercase tracking-widest text-gray-600 mb-2 font-bold">Accès VIP</p>
             <h3 className="font-serif text-2xl font-bold text-gray-900 leading-tight">
               Programme<br/>Maintien 365
             </h3>
          </div>

          <h2 className="font-serif text-xl md:text-2xl font-bold text-primary text-center">
            Le Programme Maintien 365
          </h2>

          <ul className="space-y-3 font-medium text-text-muted">
            <li className="flex gap-3 items-start">
              <div className="bg-green-100 text-green-600 rounded-full p-0.5 mt-0.5 flex-shrink-0"><Check className="w-4 h-4" /></div>
              <span>Verrouille votre perte de poids pour 365 jours</span>
            </li>
            <li className="flex gap-3 items-start">
              <div className="bg-green-100 text-green-600 rounded-full p-0.5 mt-0.5 flex-shrink-0"><Check className="w-4 h-4" /></div>
              <span>Stabilise vos hormones GLP-1 et GIP</span>
            </li>
            <li className="flex gap-3 items-start">
              <div className="bg-green-100 text-green-600 rounded-full p-0.5 mt-0.5 flex-shrink-0"><Check className="w-4 h-4" /></div>
              <span>Élimine totalement le risque de reprise</span>
            </li>
            <li className="flex gap-3 items-start">
              <div className="bg-green-100 text-green-600 rounded-full p-0.5 mt-0.5 flex-shrink-0"><Check className="w-4 h-4" /></div>
              <span>Routine simple, jour après jour</span>
            </li>
          </ul>

          <div className="pt-6 border-t border-border text-center">
            <p className="text-text-muted line-through text-lg">Valeur normale : 197 €</p>
            <p className="text-4xl font-black text-primary my-2">
              Aujourd'hui : 27 €
            </p>
            <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">
              Paiement unique · Garantie 90 jours
            </p>
          </div>
        </motion.div>

        {/* BLOC 3 — CTA + URGENCE */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center space-y-4"
        >
          <p className="text-sm font-bold text-[#ef4444] animate-pulse">
            ⚠️ Cette offre disparaît si vous quittez cette page.
          </p>

          <div className="w-full space-y-4 max-w-sm mx-auto">
            <button 
              onClick={() => (window as any).acceptUpsell('https://app.kashpay.com.br/u/edffb3ef691c6cbe')} 
              style={{ fontFamily: 'Poppins', fontSize: '18px', fontWeight: 600, lineHeight: 1.3, color: '#ffffff', backgroundColor: '#057932', border: 'none', borderRadius: '10px', padding: '13px 7%', cursor: 'pointer', textAlign: 'center', display: 'block', margin: 'auto', width: '100%' }}
            >
              Accepter l’offre
            </button>
            
            <Link to="/thanks" className="block text-center text-sm text-gray-500 underline hover:text-gray-300">
              Non, merci !
            </Link>
          </div>

          <div className="flex items-center justify-center gap-1.5 text-xs text-text-muted mt-4 font-medium">
            <Lock className="w-3.5 h-3.5" />
            <span>Paiement sécurisé · Accès immédiat · Garantie 90 jours</span>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
