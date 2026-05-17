import { motion } from 'motion/react';
import { FlaskConical, AlertTriangle } from 'lucide-react';
import AppHeader from '../../components/AppHeader';
import PageWrapper from '../../components/PageWrapper';
import { useAuth } from '../../hooks/useAuth';
import { useProfile } from '../../hooks/useProfile';

export default function MaintienRecettePage() {
  useAuth();
  const { getProfile, getRecipeValues } = useProfile();
  const profile = getProfile();
  const recipe = getRecipeValues(profile);

  if (!profile) return null;

  // Calcul pour la phase de maintien : on divise le vinaigre par 2, on garde le reste.
  const vinaigreMaintien = Math.max(1, Math.floor(recipe.vinaigre / 2));

  const ingredients = [
    { name: 'Vinaigre de cidre de pomme', amount: vinaigreMaintien, unit: 'cuillère(s) à soupe', color: 'bg-amber-50 text-amber-600' },
    { name: 'Eau tiède', amount: recipe.eau, unit: 'ml', color: 'bg-blue-50 text-blue-500' },
    { name: 'Miel cru', amount: recipe.miel, unit: 'cuillère à café', color: 'bg-yellow-50 text-yellow-600' },
    { name: 'Jus de citron frais', amount: recipe.citron, unit: 'cuillère(s) à soupe', color: 'bg-lime-50 text-lime-600' },
  ];

  return (
    <div className="min-h-screen stylo-bg">
      <AppHeader showBack title="Recette Maintien" />
      <PageWrapper>
        <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-2 mb-6"
          >
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
              <FlaskConical className="w-6 h-6 text-blue-800" />
            </div>
            <h1 className="font-serif text-2xl font-bold text-text-dark">Formule d'Entretien</h1>
            <p className="text-text-muted italic">Votre dose quotidienne pour ne jamais reprendre</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white border border-border rounded-2xl p-6 shadow-sm"
          >
            <p className="text-text-dark text-sm leading-relaxed text-center">
              Félicitations pour votre perte de poids. Pour maintenir votre métabolisme actif sans continuer à maigrir, nous avons ajusté le dosage d'acide acétique.
            </p>
          </motion.div>

          {/* Ingredients */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="stylo-card border-t-[3px]"
            style={{ borderColor: '#1E3A8A' }} // dark blue
          >
            <h2 className="font-serif text-xl font-bold text-text-dark mb-5 text-center">Votre Dosage Maintien</h2>

            <div className="grid grid-cols-2 gap-3 mb-6">
              {ingredients.map((ing, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="bg-gray-50 border border-border rounded-xl p-4 text-center"
                >
                  <p className={`text-2xl font-bold ${ing.color.split(' ')[1]}`}>{ing.amount}</p>
                  <p className="text-text-muted text-xs">{ing.unit}</p>
                  <p className="text-text-dark text-sm font-medium mt-1">{ing.name}</p>
                </motion.div>
              ))}
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 flex gap-3 items-start">
              <AlertTriangle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-blue-900 text-sm mb-1">Changement Important</h3>
                <p className="text-sm text-blue-800 leading-relaxed">
                  Vous remarquerez que la dose de vinaigre a été réduite. C'est normal. Une dose trop forte en phase de maintien pourrait ralentir votre thyroïde.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="stylo-card"
          >
            <h3 className="font-serif font-bold text-text-dark mb-3">Rythme de prise</h3>
            <ul className="space-y-2 text-sm text-text-muted">
              <li>• Prendre 1 fois par jour, le matin à jeun.</li>
              <li>• Vous pouvez faire des pauses le week-end (5 jours sur 7 suffisent en maintien).</li>
              <li>• Ne pas augmenter la dose sauf en cas d'excès (voir Reset 48H).</li>
            </ul>
          </motion.div>

        </div>
      </PageWrapper>
    </div>
  );
}
