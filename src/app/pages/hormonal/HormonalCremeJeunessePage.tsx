import { motion } from 'motion/react';
import { Droplet, Sparkles, CheckCircle } from 'lucide-react';
import AppHeader from '../../components/AppHeader';
import PageWrapper from '../../components/PageWrapper';
import { useAuth } from '../../hooks/useAuth';

export default function HormonalCremeJeunessePage() {
  useAuth();

  return (
    <div className="min-h-screen stylo-bg">
      <AppHeader showBack title="Crème de Jeunesse" />
      <PageWrapper>
        <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-2 mb-6"
          >
            <div className="w-12 h-12 rounded-full bg-violet-100 flex items-center justify-center mx-auto mb-4">
              <Droplet className="w-6 h-6 text-violet-600" />
            </div>
            <h1 className="font-serif text-2xl font-bold text-text-dark">Crème de Jeunesse</h1>
            <p className="text-text-muted italic">Soin maison activateur de collagène</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white border border-border rounded-2xl p-6 shadow-sm"
          >
            <p className="text-text-dark text-sm leading-relaxed">
              La baisse des estrogènes assèche la peau et détruit le collagène. Ce baume maison riche en phytostérols redensifie l'épiderme de l'extérieur pendant que le Shot Hormonal agit de l'intérieur.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="stylo-card border-t-[3px]"
            style={{ borderColor: '#8B5CF6' }} // violet
          >
            <h2 className="font-serif text-xl font-bold text-text-dark mb-4">Recette du Baume Raffermissant</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div>
                <h3 className="font-bold text-violet-900 text-sm mb-3 uppercase tracking-wider">Ingrédients</h3>
                <ul className="space-y-3">
                  <li className="text-sm text-text-dark flex items-center gap-2">
                    <span className="text-violet-500">•</span> 2 c.à.s de beurre de karité brut
                  </li>
                  <li className="text-sm text-text-dark flex items-center gap-2">
                    <span className="text-violet-500">•</span> 1 c.à.s d'huile d'onagre (ou bourrache)
                  </li>
                  <li className="text-sm text-text-dark flex items-center gap-2">
                    <span className="text-violet-500">•</span> 1 c.à.s d'huile de rose musquée
                  </li>
                  <li className="text-sm text-text-dark flex items-center gap-2">
                    <span className="text-violet-500">•</span> 5 gouttes d'huile essentielle de géranium rosat
                  </li>
                </ul>
              </div>
              <div className="bg-[#FAF5FF] p-4 rounded-xl border border-violet-100">
                <h3 className="font-bold text-violet-900 text-sm mb-2">Préparation</h3>
                <ol className="text-sm text-violet-800 leading-relaxed list-decimal pl-4 space-y-2">
                  <li>Faire fondre le karité au bain-marie très doux</li>
                  <li>Retirer du feu et laisser tiédir (sans figer)</li>
                  <li>Ajouter les huiles végétales et bien mélanger</li>
                  <li>Ajouter l'huile essentielle en dernier</li>
                  <li>Verser dans un petit pot en verre propre</li>
                </ol>
              </div>
            </div>
            
            <p className="text-xs text-text-muted mt-4">
              <em>Conservation : 3 mois à température ambiante, à l'abri de la lumière.</em>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="stylo-card"
          >
            <h3 className="font-serif font-bold text-text-dark mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-violet-500" />
              Rituel d'Application (Le Soir)
            </h3>
            <div className="space-y-3">
              <div className="flex gap-3 items-start">
                <CheckCircle className="w-5 h-5 text-violet-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-text-dark">Chauffer la matière</h4>
                  <p className="text-xs text-text-muted">Prenez une noisette et chauffez-la entre vos paumes jusqu'à obtenir une huile.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <CheckCircle className="w-5 h-5 text-violet-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-text-dark">Application Visage & Cou</h4>
                  <p className="text-xs text-text-muted">Massez toujours de bas en haut, pour contrer l'effet de la gravité.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <CheckCircle className="w-5 h-5 text-violet-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-text-dark">Zones critiques</h4>
                  <p className="text-xs text-text-muted">Insistez sur le contour des lèvres, les bajoues et le décolleté.</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </PageWrapper>
    </div>
  );
}
