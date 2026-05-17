import { motion } from 'motion/react';
import { Cookie, Info, ArrowRight } from 'lucide-react';
import AppHeader from '../../components/AppHeader';
import PageWrapper from '../../components/PageWrapper';
import { useAuth } from '../../hooks/useAuth';

export default function DetoxChocolatMinceurPage() {
  useAuth();

  return (
    <div className="min-h-screen stylo-bg">
      <AppHeader showBack title="Chocolat Minceur" />
      <PageWrapper>
        <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-2 mb-6"
          >
            <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-4">
              <Cookie className="w-6 h-6 text-amber-600" />
            </div>
            <h1 className="font-serif text-2xl font-bold text-text-dark">Chocolat Minceur</h1>
            <p className="text-text-muted italic">Satisfaire l'envie de sucré tout en brûlant</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-[#FFFDF5] border border-[#D4A574]/30 rounded-2xl p-6 shadow-sm"
          >
            <p className="text-text-dark text-sm leading-relaxed">
              Manger du chocolat et brûler de la graisse ? Oui, à condition d'utiliser les bons ingrédients. Cette recette virale dans le milieu fitness fonctionne pour une raison simple : elle satisfait l'envie sucrée tout en activant le métabolisme.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="stylo-card border-t-[3px]"
            style={{ borderColor: '#D4A574' }}
          >
            <h2 className="font-serif text-xl font-bold text-text-dark mb-4">Ingrédients (pour 8 carrés)</h2>
            <ul className="space-y-3 mb-6">
              {[
                { i: "100g de cacao cru en poudre", desc: "PAS du chocolat sucré" },
                { i: "50g d'huile de coco vierge", desc: "" },
                { i: "30ml de sirop d'érable pur ou miel cru", desc: "" },
                { i: "1 c.à.c d'extrait de vanille", desc: "" },
                { i: "1 pincée de sel rose", desc: "" },
                { i: "1 c.à.c de cannelle de Ceylan", desc: "" },
                { i: "1 pincée de poivre de Cayenne", desc: "optionnel — booste le métabolisme" },
              ].map((ing, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-text-dark bg-gray-50 p-2 rounded-lg">
                  <ArrowRight className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span>
                    <strong>{ing.i}</strong>
                    {ing.desc && <span className="text-text-muted text-xs block">{ing.desc}</span>}
                  </span>
                </li>
              ))}
            </ul>

            <h2 className="font-serif text-xl font-bold text-text-dark mb-4">Préparation</h2>
            <ol className="space-y-3">
              {[
                "Faire fondre l'huile de coco au bain-marie (jamais au micro-ondes)",
                "Incorporer le cacao cru en poudre, mélanger jusqu'à obtenir une pâte lisse",
                "Ajouter le sirop d'érable, vanille, sel, cannelle, cayenne",
                "Verser dans un moule à glaçons ou tapis silicone",
                "Placer au congélateur 30 minutes",
                "Démouler — conserver au frigo"
              ].map((step, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded bg-amber-100 text-amber-700 text-xs font-bold flex items-center justify-center mt-0.5">{idx + 1}</span>
                  <p className="text-text-dark text-sm pt-0.5 leading-relaxed">{step}</p>
                </li>
              ))}
            </ol>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <div className="stylo-card">
              <h3 className="font-serif font-bold text-amber-900 mb-3 flex items-center gap-2">
                <Info className="w-5 h-5 text-amber-500" />
                Pourquoi ça fonctionne
              </h3>
              <ul className="space-y-2 text-sm">
                <li><strong className="text-text-dark">Cacao cru :</strong> <span className="text-text-muted">théobromine (énergisant) + antioxydants</span></li>
                <li><strong className="text-text-dark">Huile de coco :</strong> <span className="text-text-muted">MCT = énergie immédiate, pas de stockage</span></li>
                <li><strong className="text-text-dark">Cannelle :</strong> <span className="text-text-muted">régule la glycémie</span></li>
                <li><strong className="text-text-dark">Cayenne :</strong> <span className="text-text-muted">active la thermogenèse</span></li>
              </ul>
            </div>
            
            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5">
              <h3 className="font-serif font-bold text-amber-900 mb-3">Comment le consommer</h3>
              <ul className="space-y-2 text-sm text-amber-800">
                <li>• 1 à 2 carrés par jour maximum</li>
                <li>• Idéal en collation de l'après-midi (16h) ou en dessert</li>
                <li>• À mâcher lentement (10 secondes minimum en bouche)</li>
              </ul>
              <div className="mt-4 pt-4 border-t border-amber-200">
                <p className="text-xs text-amber-900"><strong>Conservation :</strong> 2 semaines au frigo dans un contenant hermétique.</p>
              </div>
            </div>
          </motion.div>

        </div>
      </PageWrapper>
    </div>
  );
}
