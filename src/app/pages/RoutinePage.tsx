import { motion } from 'motion/react';
import { Droplets, Sun, FlaskConical, Footprints, UtensilsCrossed, Wind, GlassWater } from 'lucide-react';
import AppHeader from '../components/AppHeader';
import PageWrapper from '../components/PageWrapper';
import { useAuth } from '../hooks/useAuth';

const STEPS = [
  { time: '6h00-6h30', title: 'Réveil et hydratation', desc: 'Buvez 1 grand verre d\'eau tiède dès le réveil. Cela réveille votre système digestif en douceur et réhydrate votre corps après la nuit. Ajoutez une rondelle de citron pour un effet détox.', icon: Droplets },
  { time: '6h30', title: 'Exposition à la lumière', desc: 'Passez 5 minutes près d\'une fenêtre ou sur votre balcon. La lumière naturelle du matin régule votre horloge biologique et stimule la production de cortisol matinal (l\'hormone qui active votre métabolisme).', icon: Sun },
  { time: '6h45', title: 'Recette du Stylo Maison', desc: 'Préparez et buvez votre formule personnalisée au vinaigre de cidre. Buvez lentement, en petites gorgées. Attendez 15 minutes avant de manger quoi que ce soit.', icon: FlaskConical },
  { time: '7h00', title: 'Mouvement doux', desc: '10 minutes d\'étirements légers ou une marche douce dans votre quartier. Pas besoin de courir ! Le mouvement léger à jeun active la lipolyse (combustion des graisses stockées).', icon: Footprints },
  { time: '7h30', title: 'Petit-déjeuner protéiné', desc: 'Exemples : 2 oeufs brouillés + avocat + pain complet, ou yaourt grec nature + noix + fruits rouges, ou smoothie protéiné avec lait d\'amande + épinards + banane + protéine. La clé : protéines + bonnes graisses + fibres.', icon: UtensilsCrossed },
  { time: '8h00', title: 'Respiration consciente', desc: '3 minutes de respiration profonde. Inspirez 4 secondes par le nez, retenez 4 secondes, expirez 6 secondes par la bouche. Cela réduit le cortisol (hormone du stress qui stocke les graisses).', icon: Wind },
  { time: 'Toute la matinée', title: 'Hydratation continue', desc: 'Buvez au moins 1L d\'eau avant midi. Gardez une bouteille à portée de main. L\'eau aide à éliminer les toxines libérées par la combustion des graisses et maintient un métabolisme actif.', icon: GlassWater },
];

export default function RoutinePage() {
  useAuth();

  return (
    <div className="min-h-screen stylo-bg">
      <AppHeader showBack title="Routine Matinale" />
      <PageWrapper>
        <div className="max-w-2xl mx-auto px-4 py-6 space-y-4">
          <p className="text-text-muted text-sm text-center mb-2">7 étapes pour activer votre métabolisme chaque matin</p>

          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05 }}
                className="stylo-card"
              >
                <div className="flex gap-4">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-11 h-11 rounded-full bg-accent-green flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    {i < STEPS.length - 1 && <div className="w-0.5 flex-1 bg-border mt-2" />}
                  </div>
                  <div className="pb-2">
                    <span className="text-primary text-xs font-semibold">{step.time}</span>
                    <h3 className="font-serif text-lg font-bold text-text-dark mt-0.5">{step.title}</h3>
                    <p className="text-text-muted text-sm leading-relaxed mt-1">{step.desc}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </PageWrapper>
    </div>
  );
}
