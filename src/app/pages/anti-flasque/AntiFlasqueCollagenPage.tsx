import { motion } from 'motion/react';
import { Flame, Info, CheckCircle } from 'lucide-react';
import AppHeader from '../../components/AppHeader';
import PageWrapper from '../../components/PageWrapper';
import { useAuth } from '../../hooks/useAuth';

export default function AntiFlasqueCollagenPage() {
  useAuth();

  return (
    <div className="min-h-screen stylo-bg">
      <AppHeader showBack title="Bouillon de Collagène" />
      <PageWrapper>
        <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-2 mb-6"
          >
            <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center mx-auto mb-4">
              <Flame className="w-6 h-6" style={{ color: '#C19A8C' }} />
            </div>
            <h1 className="font-serif text-2xl font-bold text-text-dark">Le Bouillon au Collagène</h1>
            <p className="text-text-muted italic">Le ciment naturel de votre peau</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white border border-border rounded-2xl p-6 shadow-sm"
          >
            <p className="text-text-dark text-sm leading-relaxed">
              Votre peau est composée à 80% de collagène. Pendant une perte de poids rapide, ce collagène se dégrade. Ce bouillon millénaire extrait les acides aminés essentiels des os pour recréer le "ciment" qui tendra votre peau de l'intérieur.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="stylo-card border-t-[3px]"
            style={{ borderColor: '#C19A8C' }}
          >
            <h2 className="font-serif text-xl font-bold text-text-dark mb-4">La Recette Originelle</h2>
            <div className="space-y-4">
              <div className="bg-stone-50 p-4 rounded-xl">
                <h3 className="font-bold text-stone-900 text-sm mb-2">Ingrédients</h3>
                <ul className="text-sm text-stone-800 space-y-2">
                  <li>• 1 kg d'os à moelle (bœuf ou volaille bio)</li>
                  <li>• 2 c.à.s de Vinaigre de Cidre (Crucial : l'acide extrait le collagène)</li>
                  <li>• 1 oignon, 2 carottes, 2 branches de céleri</li>
                  <li>• 1 gousse d'ail, sel, poivre en grains</li>
                  <li>• Eau purifiée pour recouvrir</li>
                </ul>
              </div>
              <ol className="list-decimal pl-5 text-sm text-text-dark space-y-3">
                <li>Placez les os dans une grande marmite ou mijoteuse.</li>
                <li>Versez l'eau et le Vinaigre de Cidre. Laissez reposer 30 min (à froid).</li>
                <li>Ajoutez les légumes grossièrement coupés.</li>
                <li>Portez à ébullition, puis baissez à feu très doux.</li>
                <li><strong>Laissez frémir pendant 12h à 24h.</strong> (Plus c'est long, plus vous extrayez de collagène).</li>
                <li>Filtrez le bouillon. Laissez refroidir au frigo (une couche de gras va figer au-dessus, retirez-la).</li>
              </ol>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <div className="bg-[#FAF5F2] border border-[#C19A8C]/30 rounded-2xl p-5">
              <h3 className="font-serif font-bold text-stone-900 mb-2 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" style={{ color: '#C19A8C' }} />
                Comment le consommer
              </h3>
              <p className="text-stone-800 text-sm">
                1 grande tasse (250ml) par jour, idéalement en collation ou avant le dîner.
              </p>
            </div>
            <div className="stylo-card p-5">
              <h3 className="font-serif font-bold text-text-dark mb-2 flex items-center gap-2">
                <Info className="w-5 h-5 text-text-muted" />
                Le Test du "Jello"
              </h3>
              <p className="text-text-muted text-sm">
                Si votre bouillon est réussi, il deviendra gélatineux comme du "Jello" au réfrigérateur. C'est la preuve qu'il est chargé de collagène pur.
              </p>
            </div>
          </motion.div>
        </div>
      </PageWrapper>
    </div>
  );
}
