import { motion } from 'motion/react';
import { Mountain, Droplets, CheckCircle, AlertTriangle } from 'lucide-react';
import AppHeader from '../../components/AppHeader';
import PageWrapper from '../../components/PageWrapper';
import { useAuth } from '../../hooks/useAuth';

export default function DetoxSelRosePage() {
  useAuth();

  return (
    <div className="min-h-screen stylo-bg">
      <AppHeader showBack title="L'Astuce du Sel Rose" />
      <PageWrapper>
        <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-2 mb-6"
          >
            <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-4">
              <Mountain className="w-6 h-6 text-amber-600" />
            </div>
            <h1 className="font-serif text-2xl font-bold text-text-dark">L'Astuce du Sel Rose</h1>
            <p className="text-text-muted italic">Le protocole japonais qui brûle à chaque mouvement</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white border border-border rounded-2xl p-6 shadow-sm"
          >
            <p className="text-text-dark text-sm leading-relaxed mb-4">
              Cette astuce vient d'une tradition japonaise. Elle a fait le buzz pour une raison simple : elle fonctionne, et elle est gratuite.
            </p>
            <h3 className="font-bold text-text-dark text-sm mb-2">Pourquoi le Sel Rose ?</h3>
            <p className="text-text-muted text-sm leading-relaxed">
              Le sel rose de l'Himalaya contient 84 minéraux essentiels. Ces minéraux activent les électrolytes cellulaires, ce qui augmente la combustion calorique au repos de 15 à 23%.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="stylo-card border-t-[3px]"
            style={{ borderColor: '#D4A574' }}
          >
            <h2 className="font-serif text-xl font-bold text-text-dark mb-5">Le Protocole</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="flex items-center gap-2 font-bold text-amber-900 text-sm mb-3 uppercase tracking-wider">
                  <Droplets className="w-4 h-4 text-amber-500" /> Au réveil (à jeun)
                </h3>
                <ul className="space-y-2 bg-amber-50 rounded-xl p-4 border border-amber-100">
                  <li className="text-sm text-text-dark">1. 500ml d'eau tiède (40°C)</li>
                  <li className="text-sm text-text-dark">2. 1/4 de c.à.c de sel rose</li>
                  <li className="text-sm text-text-dark">3. Jus d'1/2 citron</li>
                  <li className="text-sm font-semibold text-amber-800 pt-2 mt-2 border-t border-amber-200">Boire en 5 minutes maximum</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-amber-900 text-sm mb-3 uppercase tracking-wider">Pendant la journée</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-amber-500 shrink-0" />
                    <span className="text-sm text-text-dark pt-0.5">Remplacez TOUT le sel blanc par du sel rose</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-amber-500 shrink-0" />
                    <span className="text-sm text-text-dark pt-0.5">1 grand verre d'eau avant chaque repas</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-amber-900 text-sm mb-3 uppercase tracking-wider">Avant l'effort physique</h3>
                <p className="text-sm text-text-dark bg-gray-50 p-3 rounded-lg border border-border">
                  1 pincée de sel rose sous la langue
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
            <div className="stylo-card">
              <h3 className="font-serif font-bold text-text-dark mb-4">Résultats attendus</h3>
              <ul className="space-y-2">
                {['Énergie stable toute la journée', 'Réduction rétention d\'eau dès le 3ème jour', 'Meilleure récupération musculaire', 'Combustion calorique augmentée'].map((res, i) => (
                  <li key={i} className="flex gap-2 text-sm text-text-muted">
                    <span className="text-green-500">✅</span> {res}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-red-50 border border-red-100 rounded-2xl p-5 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-5 h-5 text-red-500" />
                <h3 className="font-bold text-red-900">Précautions</h3>
              </div>
              <p className="text-sm text-red-800 leading-relaxed">
                Si vous souffrez d'hypertension, consultez votre médecin avant d'augmenter votre apport en sodium, même avec du sel rose.
              </p>
            </div>
          </motion.div>

        </div>
      </PageWrapper>
    </div>
  );
}
