import { motion } from 'motion/react';
import { FlaskConical, Clock, AlertCircle, Droplets, Info } from 'lucide-react';
import AppHeader from '../../components/AppHeader';
import PageWrapper from '../../components/PageWrapper';
import { useAuth } from '../../hooks/useAuth';
import { useProfile } from '../../hooks/useProfile';

export default function HormonalRecettePage() {
  useAuth();
  const { getProfile } = useProfile();
  const profile = getProfile();

  if (!profile) return null;

  // Calcul dynamique des dosages
  const age = profile.age || 40; // Default if not set
  const poids = profile.poids_actuel || 70;

  const lin = age > 50 ? 2 : 1; // c.à.s
  const trefle = age > 45 ? 2 : 1; // c.à.c
  const maca = poids > 75 ? 1.5 : 1; // c.à.c

  const ingredients = [
    { name: 'Graines de lin moulues', amount: lin, unit: 'cuillère(s) à soupe', icon: Droplets, color: 'bg-purple-50 text-purple-600' },
    { name: 'Trèfle rouge (infusion)', amount: trefle, unit: 'cuillère(s) à café', icon: Droplets, color: 'bg-pink-50 text-pink-600' },
    { name: 'Maca en poudre', amount: maca, unit: 'cuillère(s) à café', icon: Droplets, color: 'bg-amber-50 text-amber-600' },
    { name: 'Eau chaude', amount: 250, unit: 'ml', icon: Droplets, color: 'bg-blue-50 text-blue-500' },
  ];

  return (
    <div className="min-h-screen stylo-bg">
      <AppHeader showBack title="Mon Shot Hormonal" />
      <PageWrapper>
        <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-2 mb-6"
          >
            <div className="w-12 h-12 rounded-full bg-violet-100 flex items-center justify-center mx-auto mb-4">
              <FlaskConical className="w-6 h-6 text-violet-600" />
            </div>
            <h1 className="font-serif text-2xl font-bold text-text-dark">Votre Shot Hormonal Personnalisé</h1>
            <p className="text-text-muted italic">Formule calculée pour rééquilibrer votre estrogène</p>
          </motion.div>

          {/* User Profile Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-violet-50 border border-violet-100 rounded-2xl p-4 text-center"
          >
            <p className="text-violet-900 text-sm font-medium">
              Calculée spécifiquement pour une femme de <strong>{age} ans</strong>, pesant <strong>{poids} kg</strong>
            </p>
          </motion.div>

          {/* Ingredients */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="stylo-card border-t-[3px] p-6"
            style={{ borderColor: '#8B5CF6' }} // violet
          >
            <h2 className="font-serif text-xl font-bold text-text-dark mb-5">Ingrédients calibrés</h2>

            <div className="grid grid-cols-2 gap-3 mb-6">
              {ingredients.map((ing, i) => {
                const Icon = ing.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
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

            <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl border border-border">
              <span className="font-bold text-sm text-text-dark">+ À ajouter :</span>
              <span className="text-sm text-text-muted">Jus d'1/2 citron</span>
              <span className="text-sm text-text-muted">1 c.à.c miel cru (opt.)</span>
            </div>
          </motion.div>

          {/* Preparation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="stylo-card"
          >
            <h2 className="font-serif text-xl font-bold text-text-dark mb-4">Mode de préparation</h2>
            <ol className="space-y-3">
              {[
                "Faire chauffer l'eau à 80°C",
                "Infuser le trèfle rouge 7 minutes",
                "Filtrer, ajouter la maca et les graines de lin moulues",
                "Incorporer le citron et le miel",
                "Boire tiède, le matin à jeun"
              ].map((s, i) => (
                <li key={i} className="flex gap-3">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-violet-100 text-violet-700 text-sm font-bold flex items-center justify-center">{i + 1}</span>
                  <p className="text-text-dark text-sm pt-0.5 leading-relaxed">{s}</p>
                </li>
              ))}
            </ol>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {/* When to take */}
            <div className="stylo-card">
              <h2 className="font-serif text-lg font-bold text-text-dark mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-violet-600" />
                Quand le prendre
              </h2>
              <ul className="space-y-2 text-sm text-text-muted">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-400"></span>
                  1 verre par jour, le matin à jeun
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-400"></span>
                  Pendant 28 jours minimum
                </li>
              </ul>
            </div>

            {/* Why it works */}
            <div className="bg-[#FAF5FF] border border-violet-200 rounded-2xl p-5">
              <h3 className="font-serif font-bold text-violet-900 mb-2 flex items-center gap-2">
                <Info className="w-5 h-5 text-violet-500" />
                Pourquoi ça marche pour VOUS
              </h3>
              <p className="text-violet-800 text-sm leading-relaxed">
                Avec votre âge de <strong>{age} ans</strong> et votre profil hormonal, votre dose de phytoestrogènes a été calibrée pour stimuler progressivement la production d'estrogène sans choc hormonal.
              </p>
            </div>
          </motion.div>

          {/* Results & Precautions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="space-y-4"
          >
            <div className="stylo-card">
              <h3 className="font-serif font-bold text-text-dark mb-3">Effets attendus</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-text-muted">
                <li>✅ Réduction bouffées chaleur (7-10j)</li>
                <li>✅ Stabilisation de l'humeur</li>
                <li>✅ Diminution de la rétention d'eau</li>
                <li>✅ Réactivation du métabolisme</li>
              </ul>
            </div>

            <div className="bg-red-50 rounded-2xl p-5 border border-red-100 flex gap-3 items-start">
              <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
              <p className="text-red-800 text-xs leading-relaxed">
                Si vous avez des antécédents de cancers hormonodépendants, consultez votre médecin avant. Ne pas combiner avec un traitement hormonal substitutif sans avis médical.
              </p>
            </div>
          </motion.div>

        </div>
      </PageWrapper>
    </div>
  );
}
