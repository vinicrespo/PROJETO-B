import { motion } from 'motion/react';
import { RefreshCw, CheckCircle, AlertTriangle } from 'lucide-react';
import AppHeader from '../../components/AppHeader';
import PageWrapper from '../../components/PageWrapper';
import { useAuth } from '../../hooks/useAuth';

export default function MaintienReset48hPage() {
  useAuth();

  return (
    <div className="min-h-screen stylo-bg">
      <AppHeader showBack title="Reset 48H" />
      <PageWrapper>
        <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-2 mb-6"
          >
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
              <RefreshCw className="w-6 h-6 text-blue-600" />
            </div>
            <h1 className="font-serif text-2xl font-bold text-text-dark">Le Protocole "Reset 48H"</h1>
            <p className="text-text-muted italic">Pour effacer les excès d'un gros week-end ou de vacances</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white border border-border rounded-2xl p-6 shadow-sm"
          >
            <p className="text-text-dark text-sm leading-relaxed">
              Vous avez fait un excès ? Pas de panique. La graisse met 72 heures pour se stocker définitivement. Si vous agissez dans cette fenêtre avec le protocole Reset 48H, vous "effacez" l'excès avant qu'il ne s'installe sur vos hanches.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="stylo-card border-t-[3px]"
            style={{ borderColor: '#1E3A8A' }} // dark blue
          >
            <h2 className="font-serif text-xl font-bold text-text-dark mb-4">Le Plan d'Urgence</h2>
            
            <div className="space-y-6">
              {/* Étape 1 */}
              <div className="relative pl-6 border-l-2 border-blue-200">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 border-4 border-white"></div>
                <h3 className="font-bold text-blue-900 text-sm mb-2">1. Le Sur-Dosage Ponctuel (Matin 1 & 2)</h3>
                <p className="text-sm text-text-muted leading-relaxed mb-2">
                  Dès le premier matin post-excès, préparez votre Stylo Maison avec <strong>3 cuillères à soupe</strong> de vinaigre de cidre (dosage maximal). L'acide acétique va bloquer immédiatement la conversion du sucre résiduel en graisse.
                </p>
              </div>

              {/* Étape 2 */}
              <div className="relative pl-6 border-l-2 border-blue-200">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 border-4 border-white"></div>
                <h3 className="font-bold text-blue-900 text-sm mb-2">2. Jeûne Protéiné de 16h</h3>
                <p className="text-sm text-text-muted leading-relaxed mb-2">
                  Sautez le petit-déjeuner. Au déjeuner, mangez UNIQUEMENT des protéines pures (œufs, poulet, poisson blanc) avec un peu de verdure. Zéro glucide, zéro fruit.
                </p>
              </div>

              {/* Étape 3 */}
              <div className="relative pl-6 border-l-2 border-transparent">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 border-4 border-white"></div>
                <h3 className="font-bold text-blue-900 text-sm mb-2">3. Décharge Glycogénique (Fin de journée 1)</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  Faites 20 minutes d'exercice intense (type HIIT ou marche rapide en pente) avant le dîner pour vider les réserves de glycogène gorgées de sucre.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <div className="bg-[#EFF6FF] border border-blue-200 rounded-2xl p-5">
              <h3 className="font-serif font-bold text-blue-900 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue-600" />
                Signes de réussite
              </h3>
              <ul className="space-y-2 text-sm text-blue-800">
                <li>• Urine très claire et abondante (élimination)</li>
                <li>• Dégonflement du ventre (au matin 2)</li>
                <li>• Disparition de la faim "sucrée"</li>
              </ul>
            </div>

            <div className="bg-red-50 border border-red-100 rounded-2xl p-5">
              <h3 className="font-serif font-bold text-red-900 mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-red-500" />
                À proscrire pendant 48h
              </h3>
              <ul className="space-y-2 text-sm text-red-800">
                <li>• Alcool (même 1 verre)</li>
                <li>• Laitage</li>
                <li>• Pain et féculents</li>
                <li>• Sel ajouté</li>
              </ul>
            </div>
          </motion.div>

        </div>
      </PageWrapper>
    </div>
  );
}
