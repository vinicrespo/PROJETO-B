import { motion } from 'motion/react';
import { Coffee, Flame, CheckCircle2 } from 'lucide-react';
import AppHeader from '../../components/AppHeader';
import PageWrapper from '../../components/PageWrapper';
import { useAuth } from '../../hooks/useAuth';

export default function HormonalCafeBariatriquePage() {
  useAuth();

  return (
    <div className="min-h-screen stylo-bg">
      <AppHeader showBack title="Café Bariatrique" />
      <PageWrapper>
        <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-2 mb-6"
          >
            <div className="w-12 h-12 rounded-full bg-violet-100 flex items-center justify-center mx-auto mb-4">
              <Coffee className="w-6 h-6 text-violet-600" />
            </div>
            <h1 className="font-serif text-2xl font-bold text-text-dark">Le Café Bariatrique</h1>
            <p className="text-text-muted italic">La boisson qui prolonge la combustion des graisses</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white border border-border rounded-2xl p-6 shadow-sm"
          >
            <p className="text-text-dark text-sm leading-relaxed">
              Inspiré des protocoles post-chirurgie bariatrique, ce café sans caféine est conçu pour couper net la faim de l'après-midi et stabiliser la glycémie, évitant ainsi le stockage des graisses le soir.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="stylo-card border-t-[3px]"
            style={{ borderColor: '#8B5CF6' }} // violet
          >
            <h2 className="font-serif text-xl font-bold text-text-dark mb-4">La Recette</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="font-bold text-violet-900 text-sm mb-3 uppercase tracking-wider">Ingrédients</h3>
                <ul className="space-y-3">
                  <li className="text-sm text-text-dark flex items-start gap-2">
                    <span className="text-violet-500">•</span> 1 tasse de chicorée ou de café décaféiné bio
                  </li>
                  <li className="text-sm text-text-dark flex items-start gap-2">
                    <span className="text-violet-500">•</span> 1 c.à.c de beurre de cacao cru (ou huile de coco)
                  </li>
                  <li className="text-sm text-text-dark flex items-start gap-2">
                    <span className="text-violet-500">•</span> 1 c.à.s de collagène en poudre (non aromatisé)
                  </li>
                  <li className="text-sm text-text-dark flex items-start gap-2">
                    <span className="text-violet-500">•</span> Lait d'amande au goût
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl border border-border">
                <h3 className="font-bold text-text-dark text-sm mb-2">Préparation</h3>
                <p className="text-sm text-text-muted leading-relaxed mb-2">
                  Préparez votre base chaude. Ajoutez le beurre de cacao et le collagène. Mixez le tout au blender pendant 15 secondes pour créer une émulsion mousseuse type "latte".
                </p>
                <p className="text-xs font-semibold text-violet-700 bg-violet-100 p-2 rounded inline-block mt-2">
                  Le mixage au blender est obligatoire pour l'effet coupe-faim.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <div className="bg-[#FAF5FF] border border-violet-200 rounded-2xl p-5">
              <h3 className="font-serif font-bold text-violet-900 mb-4 flex items-center gap-2">
                <Flame className="w-5 h-5 text-violet-500" />
                Bénéfices Hormonaux
              </h3>
              <ul className="space-y-3 text-sm text-violet-800">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-violet-500 shrink-0 mt-0.5" />
                  <span>Stoppe net l'hormone de la faim (Ghréline)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-violet-500 shrink-0 mt-0.5" />
                  <span>Stabilise l'insuline avant le dîner</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-violet-500 shrink-0 mt-0.5" />
                  <span>Apporte les acides aminés essentiels pour la peau (Collagène)</span>
                </li>
              </ul>
            </div>
            
            <div className="stylo-card flex flex-col justify-center">
              <h3 className="font-bold text-text-dark mb-2">Quand le boire ?</h3>
              <p className="text-sm text-text-muted leading-relaxed mb-4">
                L'heure idéale est entre <strong>15h00 et 16h30</strong>, au moment précis où le corps réclame naturellement du sucre à cause du pic de cortisol.
              </p>
              <div className="bg-gray-100 p-3 rounded-lg text-xs font-medium text-text-dark text-center">
                Ne pas ajouter de sucre ni d'édulcorant
              </div>
            </div>
          </motion.div>

        </div>
      </PageWrapper>
    </div>
  );
}
