import { motion } from 'motion/react';
import { Beaker, Clock, AlertCircle, Droplets, Citrus } from 'lucide-react';
import AppHeader from '../components/AppHeader';
import PageWrapper from '../components/PageWrapper';
import { useAuth } from '../hooks/useAuth';
import { useProfile } from '../hooks/useProfile';

export default function RecettePage() {
  useAuth();
  const { getProfile, getRecipeValues } = useProfile();
  const profile = getProfile();
  const recipe = getRecipeValues(profile);

  if (!profile) return null;

  const activityLabels: Record<string, string> = {
    sedentaire: 'un mode de vie sédentaire',
    leger: 'une activité légère',
    modere: 'une activité modérée',
    actif: 'un mode de vie très actif',
  };

  const ingredients = [
    { name: 'Vinaigre de cidre de pomme', amount: recipe.vinaigre, unit: 'cuillère(s) à soupe', icon: Beaker, color: 'bg-amber-50 text-amber-600' },
    { name: 'Eau tiède', amount: recipe.eau, unit: 'ml', icon: Droplets, color: 'bg-blue-50 text-blue-500' },
    { name: 'Miel cru', amount: recipe.miel, unit: 'cuillère à café', icon: Droplets, color: 'bg-yellow-50 text-yellow-600' },
    { name: 'Jus de citron frais', amount: recipe.citron, unit: 'cuillère(s) à soupe', icon: Citrus, color: 'bg-lime-50 text-lime-600' },
  ];

  const steps = [
    'Faire chauffer l\'eau (sans la faire bouillir, environ 40°C)',
    'Verser le vinaigre de cidre dans l\'eau tiède',
    'Ajouter le jus de citron frais',
    'Incorporer le miel et bien mélanger',
    'Boire à jeun, 15 minutes avant le petit-déjeuner',
  ];

  return (
    <div className="min-h-screen stylo-bg">
      <AppHeader showBack title="Votre Recette Personnalisée" />
      <PageWrapper>
        <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
          <p className="text-text-muted text-sm text-center">Calculée spécifiquement pour votre profil</p>

          {/* Ingredients */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="stylo-card gold-border p-6"
          >
            <h2 className="font-serif text-xl font-bold text-text-dark mb-1">Votre Formule Stylo Maison</h2>
            <p className="text-text-muted text-xs mb-5">Dosage personnalisé pour {profile.poids_actuel} kg</p>

            <div className="grid grid-cols-2 gap-3">
              {ingredients.map((ing, i) => {
                const Icon = ing.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="bg-white border border-border rounded-xl p-4 text-center"
                  >
                    <div className={`w-10 h-10 mx-auto rounded-full ${ing.color} flex items-center justify-center mb-2`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <p className="text-2xl font-bold text-text-dark">{ing.amount}</p>
                    <p className="text-text-muted text-xs">{ing.unit}</p>
                    <p className="text-text-dark text-sm font-medium mt-1">{ing.name}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Preparation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="stylo-card"
          >
            <h2 className="font-serif text-xl font-bold text-text-dark mb-4">Mode de préparation</h2>
            <ol className="space-y-3">
              {steps.map((s, i) => (
                <li key={i} className="flex gap-3">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-sm font-semibold flex items-center justify-center">{i + 1}</span>
                  <p className="text-text-dark text-sm pt-0.5 leading-relaxed">{s}</p>
                </li>
              ))}
            </ol>
          </motion.div>

          {/* When to take */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="stylo-card"
          >
            <h2 className="font-serif text-xl font-bold text-text-dark mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              Quand le prendre
            </h2>
            <div className="space-y-3">
              <div className="bg-accent-green/50 rounded-xl p-4">
                <p className="font-semibold text-text-dark text-sm">Matin à jeun</p>
                <p className="text-text-muted text-sm">1 verre (dose principale)</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="font-semibold text-text-dark text-sm">Après le déjeuner</p>
                <p className="text-text-muted text-sm">1 verre (optionnel — accélère les résultats)</p>
              </div>
            </div>
          </motion.div>

          {/* Why it works */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="stylo-card"
          >
            <h2 className="font-serif text-xl font-bold text-text-dark mb-3">Pourquoi ça marche pour VOUS</h2>
            <p className="text-text-dark text-sm leading-relaxed">
              Avec votre poids actuel de <strong>{profile.poids_actuel} kg</strong> et votre objectif de <strong>{profile.poids_ideal} kg</strong>,
              votre formule a été dosée pour stimuler progressivement vos hormones GLP-1 et GIP sans choc métabolique.
              La concentration en épigallocatéchine est calibrée pour {activityLabels[profile.activite] || 'votre niveau d\'activité'}.
            </p>
          </motion.div>

          {/* Precautions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-gray-50 rounded-2xl p-5 border border-border"
          >
            <div className="flex gap-3">
              <AlertCircle className="w-5 h-5 text-text-muted flex-shrink-0 mt-0.5" />
              <p className="text-text-muted text-xs leading-relaxed">
                Consultez votre médecin si vous êtes enceinte, allaitante, ou sous traitement. Ne pas dépasser les doses indiquées.
              </p>
            </div>
          </motion.div>
        </div>
      </PageWrapper>
    </div>
  );
}
