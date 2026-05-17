import { motion } from 'motion/react';
import { Clock, Sparkles, AlertCircle } from 'lucide-react';
import AppHeader from '../components/AppHeader';
import PageWrapper from '../components/PageWrapper';
import { useAuth } from '../hooks/useAuth';

const INGREDIENTS = [
  { name: 'Gingembre frais râpé', amount: '1 c.à.c' },
  { name: 'Curcuma en poudre', amount: '1 c.à.c' },
  { name: 'Poivre noir', amount: '1 pincée' },
  { name: 'Eau chaude', amount: '200 ml' },
  { name: 'Jus de citron', amount: '1/2 citron' },
  { name: 'Miel cru', amount: '1 c.à.c' },
];

const STEPS = [
  'Faire chauffer 200 ml d\'eau (ne pas faire bouillir)',
  'Ajouter le gingembre frais râpé et le curcuma',
  'Ajouter la pincée de poivre noir (augmente l\'absorption du curcuma de 2000%)',
  'Laisser infuser 3 minutes en remuant doucement',
  'Ajouter le jus de citron et le miel',
  'Mélanger et boire tiède',
];

const BENEFITS = [
  'Réduction de l\'inflammation articulaire en 7 jours',
  'Amélioration de la mobilité et de la souplesse',
  'Soulagement des douleurs chroniques (genoux, hanches, dos)',
  'Renforcement du cartilage grâce à la curcumine',
  'Effet anti-oxydant puissant contre le vieillissement articulaire',
  'Amélioration de la circulation sanguine dans les articulations',
];

export default function ShotPage() {
  useAuth();

  return (
    <div className="min-h-screen stylo-bg">
      <AppHeader showBack title="Shot Japonais Articulations" />
      <PageWrapper>
        <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
          <p className="text-text-muted text-sm text-center">La boisson japonaise qui soulage vos articulations en 7 jours</p>

          {/* Ingredients */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="stylo-card gold-border">
            <h2 className="font-serif text-xl font-bold text-text-dark mb-4">Ingrédients</h2>
            <div className="grid grid-cols-2 gap-3">
              {INGREDIENTS.map((ing, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-3 text-center">
                  <p className="text-lg font-bold text-primary">{ing.amount}</p>
                  <p className="text-text-dark text-sm">{ing.name}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Preparation */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="stylo-card">
            <h2 className="font-serif text-xl font-bold text-text-dark mb-4">Préparation</h2>
            <ol className="space-y-3">
              {STEPS.map((s, i) => (
                <li key={i} className="flex gap-3">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white text-sm font-semibold flex items-center justify-center">{i + 1}</span>
                  <p className="text-text-dark text-sm pt-0.5 leading-relaxed">{s}</p>
                </li>
              ))}
            </ol>
          </motion.div>

          {/* When */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="stylo-card">
            <div className="flex items-center gap-2 mb-3">
              <Clock className="w-5 h-5 text-primary" />
              <h2 className="font-serif text-xl font-bold text-text-dark">Quand le prendre</h2>
            </div>
            <div className="bg-accent-green/50 rounded-xl p-4">
              <p className="text-text-dark text-sm font-medium">1 fois par jour, le matin</p>
              <p className="text-text-muted text-sm mt-1">Pendant 7 jours pour des résultats optimaux. Vous pouvez continuer en entretien 3 fois par semaine.</p>
            </div>
          </motion.div>

          {/* Benefits */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="stylo-card">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-gold" />
              <h2 className="font-serif text-xl font-bold text-text-dark">Bénéfices</h2>
            </div>
            <ul className="space-y-2">
              {BENEFITS.map((b, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-text-dark text-sm leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Note */}
          <div className="bg-gray-50 rounded-2xl p-5 border border-border">
            <div className="flex gap-3">
              <AlertCircle className="w-5 h-5 text-text-muted flex-shrink-0 mt-0.5" />
              <p className="text-text-muted text-xs leading-relaxed">
                Le poivre noir est essentiel : il multiplie par 20 l'absorption de la curcumine. Ne l'oubliez pas ! Consultez votre médecin en cas de traitement anticoagulant.
              </p>
            </div>
          </div>
        </div>
      </PageWrapper>
    </div>
  );
}
