import { motion } from 'motion/react';
import { Droplet, Info, AlertCircle } from 'lucide-react';
import AppHeader from '../../components/AppHeader';
import PageWrapper from '../../components/PageWrapper';
import { useAuth } from '../../hooks/useAuth';

export default function DetoxBainEpsomPage() {
  useAuth();

  return (
    <div className="min-h-screen stylo-bg">
      <AppHeader showBack title="Bain Détox au Sel d'Epsom" />
      <PageWrapper>
        <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-2 mb-6"
          >
            <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-4">
              <Droplet className="w-6 h-6 text-amber-600" />
            </div>
            <h1 className="font-serif text-2xl font-bold text-text-dark">Bain Détox au Sel d'Epsom</h1>
            <p className="text-text-muted italic">Drainage par osmose inversée</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white border border-border rounded-2xl p-6 shadow-sm"
          >
            <p className="text-text-dark text-sm leading-relaxed">
              Le sel d'Epsom (sulfate de magnésium) ne se mange pas, il s'absorbe par la peau. Dans un bain chaud, il crée un phénomène d'osmose qui aspire les toxines hors de votre corps tout en rechargeant vos cellules en magnésium anti-stress.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="stylo-card border-t-[3px]"
            style={{ borderColor: '#D4A574' }}
          >
            <h2 className="font-serif text-xl font-bold text-text-dark mb-4">Le Protocole du Bain</h2>
            <div className="space-y-4">
              <div className="bg-amber-50 p-4 rounded-xl">
                <h3 className="font-bold text-amber-900 text-sm mb-2">Ingrédients</h3>
                <ul className="text-sm text-amber-800 space-y-2">
                  <li>• 500g de Sel d'Epsom (en pharmacie)</li>
                  <li>• 2 c.à.s de bicarbonate de soude</li>
                  <li>• 10 gouttes d'huile essentielle de lavande (optionnel)</li>
                </ul>
              </div>
              <ol className="list-decimal pl-5 text-sm text-text-dark space-y-3">
                <li>Faites couler un bain bien chaud (38-39°C).</li>
                <li>Versez le sel et le bicarbonate, mélangez avec la main.</li>
                <li><strong>Plongez-vous pendant exactement 20 minutes.</strong> (Pas plus, pour éviter de réabsorber les toxines).</li>
                <li>Sortez lentement (attention aux vertiges).</li>
                <li>Ne vous rincez pas, séchez-vous en tapotant avec une serviette.</li>
              </ol>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <div className="bg-[#FFFDF5] border border-[#D4A574]/30 rounded-2xl p-5">
              <h3 className="font-serif font-bold text-amber-900 mb-2 flex items-center gap-2">
                <Info className="w-5 h-5 text-amber-500" />
                Quand le faire ?
              </h3>
              <p className="text-amber-800 text-sm">
                Idéalement le soir, juste avant de dormir. 1 à 2 fois par semaine pendant votre Détox 10X.
              </p>
            </div>
            <div className="bg-red-50 border border-red-100 rounded-2xl p-5">
              <h3 className="font-serif font-bold text-red-900 mb-2 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-red-500" />
                Attention
              </h3>
              <p className="text-red-800 text-sm">
                Buvez un grand verre d'eau avant et après le bain. Déconseillé en cas de problèmes cardiaques ou d'hypotension.
              </p>
            </div>
          </motion.div>
        </div>
      </PageWrapper>
    </div>
  );
}
