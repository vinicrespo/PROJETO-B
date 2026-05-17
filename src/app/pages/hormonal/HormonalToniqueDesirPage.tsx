import { motion } from 'motion/react';
import { Heart, Info, Droplet } from 'lucide-react';
import AppHeader from '../../components/AppHeader';
import PageWrapper from '../../components/PageWrapper';
import { useAuth } from '../../hooks/useAuth';

export default function HormonalToniqueDesirPage() {
  useAuth();

  return (
    <div className="min-h-screen stylo-bg">
      <AppHeader showBack title="Tonique du Désir" />
      <PageWrapper>
        <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-2 mb-6"
          >
            <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center mx-auto mb-4">
              <Heart className="w-6 h-6 text-pink-600" />
            </div>
            <h1 className="font-serif text-2xl font-bold text-text-dark">Tonique du Désir</h1>
            <p className="text-text-muted italic">La recette naturelle qui réveille la libido endormie</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white border border-border rounded-2xl p-6 shadow-sm"
          >
            <p className="text-text-dark text-sm leading-relaxed">
              La baisse de libido n'est pas "dans la tête", c'est souvent purement hormonal (baisse de testostérone et d'estrogène). Ce tonique amazonien stimule la circulation pelvienne et ravive le désir en quelques jours.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="stylo-card border-t-[3px]"
            style={{ borderColor: '#EC4899' }} // pink
          >
            <h2 className="font-serif text-xl font-bold text-text-dark mb-4">Recette : "L'Élixir Inca"</h2>
            
            <div className="bg-pink-50 p-4 rounded-xl border border-pink-100 mb-6">
              <h3 className="font-bold text-pink-900 text-sm mb-3 uppercase tracking-wider">Ingrédients (pour 2 personnes)</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-3 text-sm text-pink-800">
                  <Droplet className="w-4 h-4 shrink-0 text-pink-500" /> 1 c.à.s poudre de Maca rouge
                </li>
                <li className="flex items-center gap-3 text-sm text-pink-800">
                  <Droplet className="w-4 h-4 shrink-0 text-pink-500" /> 200ml lait d'amande chaud
                </li>
                <li className="flex items-center gap-3 text-sm text-pink-800">
                  <Droplet className="w-4 h-4 shrink-0 text-pink-500" /> 1 c.à.c de cacao cru
                </li>
                <li className="flex items-center gap-3 text-sm text-pink-800">
                  <Droplet className="w-4 h-4 shrink-0 text-pink-500" /> 1/2 c.à.c de cannelle
                </li>
                <li className="flex items-center gap-3 text-sm text-pink-800">
                  <Droplet className="w-4 h-4 shrink-0 text-pink-500" /> Pincée de piment d'Espelette
                </li>
                <li className="flex items-center gap-3 text-sm text-pink-800">
                  <Droplet className="w-4 h-4 shrink-0 text-pink-500" /> Miel au goût
                </li>
              </ul>
            </div>

            <h3 className="font-bold text-text-dark text-sm mb-3">Préparation :</h3>
            <p className="text-text-muted text-sm leading-relaxed bg-gray-50 p-4 rounded-lg">
              Chauffez doucement le lait d'amande sans le faire bouillir. Hors du feu, ajoutez la Maca, le cacao, la cannelle et le piment. Fouettez vigoureusement pour faire mousser. Sucrez avec du miel si désiré.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <div className="stylo-card bg-[#FFFDF5] border border-pink-200">
              <h3 className="font-serif font-bold text-pink-900 mb-2 flex items-center gap-2">
                <Info className="w-5 h-5 text-pink-500" />
                Quand le consommer ?
              </h3>
              <p className="text-pink-800 text-sm leading-relaxed">
                Buvez cette préparation à deux, de préférence l'après-midi vers 17h, ou environ 2 heures avant le moment intime.
              </p>
            </div>
            
            <div className="bg-gray-50 border border-border rounded-2xl p-5">
              <h3 className="font-serif font-bold text-text-dark mb-2">Pourquoi ça marche</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                La Maca péruvienne est un adaptogène puissant qui augmente naturellement l'énergie et la libido. Le cacao libère des endorphines, tandis que le piment active la circulation sanguine vers les extrémités.
              </p>
            </div>
          </motion.div>

        </div>
      </PageWrapper>
    </div>
  );
}
