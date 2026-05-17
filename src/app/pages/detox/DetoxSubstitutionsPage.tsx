import { motion } from 'motion/react';
import { ArrowLeftRight, CheckCircle2, XCircle } from 'lucide-react';
import AppHeader from '../../components/AppHeader';
import PageWrapper from '../../components/PageWrapper';
import { useAuth } from '../../hooks/useAuth';

const SUBSTITUTIONS = [
  { bad: 'Sucre blanc raffiné', good: 'Miel cru ou sirop d\'érable pur', reason: 'Pic glycémique', benefit: 'Index glycémique modéré' },
  { bad: 'Pain blanc industriel', good: 'Pain au levain à grains anciens', reason: 'Gluten ultra-transformé', benefit: 'Microbiote préservé' },
  { bad: 'Lait de vache pasteurisé', good: 'Lait d\'amande/avoine/coco non sucré', reason: 'Lactose inflammatoire', benefit: 'Digestion légère' },
  { bad: 'Margarine', good: 'Beurre clarifié (ghee) ou huile d\'olive vierge', reason: 'Graisses trans', benefit: 'Graisses saines' },
  { bad: 'Jus de fruits industriel', good: 'Eau infusée fruits frais ou jus pressé', reason: 'Fructose liquide', benefit: 'Vitamines intactes' },
  { bad: 'Sodas (même light)', good: 'Eau pétillante + citron + menthe', reason: 'Édulcorants toxiques', benefit: 'Zéro calorie chimique' },
  { bad: 'Sauces industrielles', good: 'Sauces maison (huile + vinaigre + herbes)', reason: 'Sucre caché', benefit: 'Antioxydants' },
  { bad: 'Charcuterie industrielle', good: 'Poulet rôti maison, œufs durs, poisson', reason: 'Nitrites', benefit: 'Protéines pures' },
  { bad: 'Yaourt aux fruits sucré', good: 'Yaourt nature + fruits frais + miel', reason: 'Additifs', benefit: 'Probiotiques naturels' },
  { bad: 'Céréales "fitness" du matin', good: 'Flocons d\'avoine nature + fruits', reason: 'Faux ami minceur', benefit: 'Satiété durable' },
  { bad: 'Biscuits secs', good: 'Fruits secs + amandes (10 max)', reason: 'Calories vides', benefit: 'Nutriments denses' },
  { bad: 'Pâtes blanches', good: 'Pâtes complètes, sarrasin, riz noir', reason: 'Farine raffinée', benefit: 'Fibres complètes' },
  { bad: 'Sel raffiné de table', good: 'Sel rose Himalaya ou fleur de sel', reason: 'Rétention d\'eau', benefit: 'Minéraux essentiels' },
  { bad: 'Café instantané', good: 'Thé vert matcha ou café filtre bio', reason: 'Surrénales épuisées', benefit: 'Énergie stable' },
  { bad: 'Plats préparés "minceur"', good: 'Batch cooking maison du dimanche', reason: 'Sodium excessif', benefit: 'Contrôle total' },
];

export default function DetoxSubstitutionsPage() {
  useAuth();

  return (
    <div className="min-h-screen stylo-bg">
      <AppHeader showBack title="Guide Anti-Toxines" />
      <PageWrapper>
        <div className="max-w-3xl mx-auto px-4 py-6 space-y-6">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-2 mb-8"
          >
            <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-4">
              <ArrowLeftRight className="w-6 h-6 text-amber-600" />
            </div>
            <h1 className="font-serif text-2xl font-bold text-text-dark">Guide Anti-Toxines</h1>
            <p className="text-text-muted italic">Remplacez les aliments qui vous épuisent</p>
          </motion.div>

          <div className="space-y-4">
            {SUBSTITUTIONS.map((sub, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * idx }}
                className="grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden shadow-sm border border-border"
              >
                {/* Bad side */}
                <div className="bg-red-50/50 p-4 border-b md:border-b-0 md:border-r border-red-100 relative">
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-red-900 text-sm mb-1">{sub.bad}</p>
                      <p className="text-xs text-red-700/70 uppercase tracking-wider font-semibold">{sub.reason}</p>
                    </div>
                  </div>
                </div>

                {/* Good side */}
                <div className="bg-green-50/50 p-4 relative">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-green-900 text-sm mb-1">{sub.good}</p>
                      <p className="text-xs text-green-700/70 uppercase tracking-wider font-semibold">{sub.benefit}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-[#FFFDF5] border border-[#D4A574]/30 rounded-2xl p-6 shadow-sm mt-8"
          >
            <h3 className="font-serif text-lg font-bold text-amber-900 mb-4">Comment commencer sans frustration</h3>
            <ul className="space-y-3">
              <li className="flex gap-3 text-sm text-text-dark">
                <span className="font-bold text-amber-600">Semaine 1</span>
                <span>Remplacez 3 aliments seulement de cette liste.</span>
              </li>
              <li className="flex gap-3 text-sm text-text-dark">
                <span className="font-bold text-amber-600">Semaine 2</span>
                <span>Ajoutez 3 nouvelles substitutions à votre routine.</span>
              </li>
              <li className="flex gap-3 text-sm text-text-dark">
                <span className="font-bold text-amber-600">Semaine 3</span>
                <span>Continuez jusqu'à intégrer toutes les substitutions.</span>
              </li>
            </ul>
            <div className="mt-5 p-3 bg-amber-100/50 rounded-lg text-center">
              <p className="text-amber-800 text-sm font-medium">Ne cherchez pas la perfection — la progression suffit.</p>
            </div>
          </motion.div>

        </div>
      </PageWrapper>
    </div>
  );
}
