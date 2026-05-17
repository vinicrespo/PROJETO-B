import { motion } from 'motion/react';
import { Scissors, Beaker, Clock, AlertTriangle } from 'lucide-react';
import AppHeader from '../../components/AppHeader';
import PageWrapper from '../../components/PageWrapper';
import { useAuth } from '../../hooks/useAuth';

export default function DetoxLipoMaisonPage() {
  useAuth();

  return (
    <div className="min-h-screen stylo-bg">
      <AppHeader showBack title="La Lipo Maison" />
      <PageWrapper>
        <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-2 mb-6"
          >
            <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-4">
              <Scissors className="w-6 h-6 text-amber-600" />
            </div>
            <h1 className="font-serif text-2xl font-bold text-text-dark">La Lipo Maison</h1>
            <p className="text-text-muted italic">Le secret des mannequins pour affiner la taille en 72 heures</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white border border-border rounded-2xl p-6 shadow-sm"
          >
            <p className="text-text-dark text-sm leading-relaxed">
              Avant un shooting, les mannequins ont 72h pour gommer la rétention et redessiner leur silhouette. Voici leur méthode exacte.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="stylo-card border-t-[3px]"
            style={{ borderColor: '#D4A574' }}
          >
            <h2 className="font-serif text-xl font-bold text-text-dark mb-4 flex items-center gap-2">
              <Beaker className="w-5 h-5 text-amber-600" />
              Recette du Drainage Express
            </h2>
            <p className="text-xs text-text-muted mb-4 uppercase tracking-wider font-semibold">À boire chaque matin pendant 3 jours</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <ul className="space-y-2 bg-amber-50 p-4 rounded-xl border border-amber-100">
                <li className="text-sm text-text-dark">• 200ml de thé vert infusé 5 min</li>
                <li className="text-sm text-text-dark">• 1 c.à.c de gingembre frais râpé</li>
                <li className="text-sm text-text-dark">• 1/2 c.à.c de poivre de Cayenne</li>
                <li className="text-sm text-text-dark">• Jus d'1/2 citron</li>
                <li className="text-sm text-text-dark">• 1 c.à.c d'huile de coco</li>
              </ul>
              <div className="bg-gray-50 p-4 rounded-xl border border-border flex flex-col justify-center">
                <h3 className="font-bold text-text-dark text-sm mb-2">Préparation :</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  Infuser le thé, ajouter le gingembre 2 min, incorporer le reste. Boire chaud à jeun.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h2 className="font-serif text-xl font-bold text-text-dark px-2">Protocole 72 heures</h2>
            
            <div className="grid gap-4">
              {/* Jour 1 */}
              <div className="bg-white border border-border rounded-2xl p-5 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-amber-400"></div>
                <h3 className="font-bold text-text-dark mb-3">Jour 1 — Démarrage</h3>
                <ul className="space-y-2 text-sm text-text-muted">
                  <li><strong className="text-text-dark">Matin :</strong> Drainage Express</li>
                  <li><strong className="text-text-dark">Repas :</strong> Protéines maigres + légumes verts</li>
                  <li><strong className="text-text-dark">Hydratation :</strong> 3L d'eau minimum</li>
                  <li><strong className="text-text-dark">Soir :</strong> Tisane queues de cerise</li>
                </ul>
              </div>

              {/* Jour 2 */}
              <div className="bg-white border border-border rounded-2xl p-5 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-amber-500"></div>
                <h3 className="font-bold text-text-dark mb-3">Jour 2 — Intensification</h3>
                <ul className="space-y-2 text-sm text-text-muted">
                  <li><strong className="text-text-dark">Matin :</strong> Drainage Express + 30 min de marche rapide</li>
                  <li><strong className="text-text-dark">Repas :</strong> Identiques au jour 1</li>
                  <li><strong className="text-text-dark">Soir :</strong> Bain chaud sel d'Epsom (2 poignées) + palper-rouler 5 min</li>
                </ul>
              </div>

              {/* Jour 3 */}
              <div className="bg-white border border-border rounded-2xl p-5 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-amber-600"></div>
                <h3 className="font-bold text-text-dark mb-3">Jour 3 — Sculpting</h3>
                <ul className="space-y-2 text-sm text-text-muted">
                  <li><strong className="text-text-dark">Matin :</strong> Drainage Express + automassage ventre</li>
                  <li><strong className="text-text-dark">Repas :</strong> Léger (soupes, salades, fruits)</li>
                  <li><strong className="text-text-dark">Soir :</strong> Sauna ou bain chaud + hydratation max</li>
                </ul>
                
                <div className="mt-4 pt-4 border-t border-border">
                  <h4 className="font-bold text-xs uppercase tracking-wider text-amber-700 mb-2">Mouvements de sculpting (5 min/jour) :</h4>
                  <div className="grid grid-cols-2 gap-2 text-xs text-text-dark">
                    <div className="bg-amber-50 p-2 rounded">1. Bicyclettes au sol : 30 sec</div>
                    <div className="bg-amber-50 p-2 rounded">2. Russian twists : 30 sec</div>
                    <div className="bg-amber-50 p-2 rounded">3. Side planks : 20 sec / côté</div>
                    <div className="bg-amber-50 p-2 rounded">4. Crunchs obliques : 30 sec</div>
                    <div className="bg-amber-50 p-2 rounded col-span-2 text-center font-bold">5. Vacuum abdominal : 4x15 sec</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <div className="flex-1 bg-[#FFFDF5] border border-[#D4A574]/30 rounded-2xl p-5">
              <h3 className="font-serif font-bold text-amber-900 mb-2">Résultats</h3>
              <ul className="space-y-1 text-sm text-amber-800">
                <li>• Tour de taille - 4 à 7 cm</li>
                <li>• Ventre plus plat</li>
                <li>• Effet drainé global</li>
              </ul>
            </div>

            <div className="flex-1 bg-red-50 border border-red-100 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-5 h-5 text-red-500" />
                <h3 className="font-bold text-red-900">Avertissement</h3>
              </div>
              <p className="text-sm text-red-800">
                Protocole ponctuel (3 jours max). Ne pas répéter plus d'une fois par mois pour ne pas épuiser l'organisme.
              </p>
            </div>
          </motion.div>

        </div>
      </PageWrapper>
    </div>
  );
}
