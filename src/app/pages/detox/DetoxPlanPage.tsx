import { useState } from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import AppHeader from '../../components/AppHeader';
import PageWrapper from '../../components/PageWrapper';
import { useAuth } from '../../hooks/useAuth';
import { useProgramProgress } from '../../hooks/useProgramProgress';
import { useToast } from '../../components/Toast';

const DAYS = [
  {
    title: 'Activation du nettoyage',
    mission: 'Préparer le corps à éliminer les toxines',
    routine: [
      { time: 'Au réveil', text: '1 verre d\'eau tiède + jus d\'1/2 citron + 1 c.à.c gingembre râpé' },
      { time: 'Petit-déjeuner', text: 'Bol de fruits rouges + 2 c.à.s graines de chia + yaourt nature' },
      { time: 'Déjeuner', text: 'Salade verte (épinards, roquette, concombre) + 100g poulet grillé + huile d\'olive' },
      { time: 'Collation', text: '1 pomme + 10 amandes' },
      { time: 'Dîner', text: 'Bouillon de légumes maison + 1 filet de poisson blanc vapeur' },
      { time: 'Avant coucher', text: 'Tisane de fenouil' },
    ],
    rules: [
      'Hydratation : 2,5L d\'eau minimum',
      'À éviter : Lactose, gluten, sucre raffiné, café'
    ]
  },
  {
    title: 'Drainage hépatique',
    mission: 'Stimuler le foie',
    routine: [
      { time: 'Au réveil', text: 'Shot jus de betterave 50ml + citron + poivre noir' },
      { time: 'Petit-déjeuner', text: 'Smoothie vert (épinards, pomme verte, gingembre, eau de coco)' },
      { time: 'Déjeuner', text: 'Quinoa 80g + brocolis vapeur + 1 œuf dur + graines de tournesol' },
      { time: 'Collation', text: '1 poire + 5 noix' },
      { time: 'Dîner', text: 'Soupe miso + tofu grillé + chou kale sauté' },
      { time: 'Avant coucher', text: 'Infusion chardon-marie' },
    ],
    rules: [
      'Hydratation : 2,5L + thé vert (2 tasses)'
    ]
  },
  {
    title: 'Nettoyage intestinal',
    mission: 'Évacuer les déchets du côlon',
    routine: [
      { time: 'Au réveil', text: '1 c.à.s psyllium dans 250ml d\'eau + citron' },
      { time: 'Petit-déjeuner', text: 'Yaourt de coco + 1 banane + graines de lin' },
      { time: 'Déjeuner', text: 'Salade de lentilles + tomates + concombre + persil' },
      { time: 'Collation', text: 'Crudités + houmous maison' },
      { time: 'Dîner', text: 'Cabillaud en papillote + courgettes + patate douce' },
      { time: 'Avant coucher', text: 'Infusion menthe poivrée' },
    ],
    rules: []
  },
  {
    title: 'Anti-inflammation',
    mission: 'Apaiser l\'intestin avec le curcuma',
    routine: [
      { time: 'Au réveil', text: 'Lait doré (lait amande + curcuma + poivre noir + miel)' },
      { time: 'Petit-déjeuner', text: 'Porridge d\'avoine sans gluten + myrtilles + cannelle' },
      { time: 'Déjeuner', text: 'Curry de légumes au curcuma + riz basmati complet' },
      { time: 'Collation', text: '1 mangue + graines de courge' },
      { time: 'Dîner', text: 'Saumon au four + asperges + quinoa' },
      { time: 'Avant coucher', text: 'Infusion curcuma-gingembre' },
    ],
    rules: []
  },
  {
    title: 'Rééquilibrage microbiote',
    mission: 'Repeupler la flore intestinale',
    routine: [
      { time: 'Au réveil', text: 'Kéfir de coco 200ml + 1 c.à.c miel cru' },
      { time: 'Petit-déjeuner', text: 'Bol de fruits + yaourt fermenté + graines' },
      { time: 'Déjeuner', text: 'Bowl de lacto-fermentés (choucroute, kimchi) + sarrasin + avocat' },
      { time: 'Collation', text: 'Kombucha 200ml' },
      { time: 'Dîner', text: 'Soupe miso + algues + crevettes vapeur' },
      { time: 'Avant coucher', text: 'Tisane camomille' },
    ],
    rules: []
  },
  {
    title: 'Activation lymphatique',
    mission: 'Drainer la lymphe',
    routine: [
      { time: 'Au réveil', text: 'Eau citronnée + automassage du ventre 5 min' },
      { time: 'Petit-déjeuner', text: 'Smoothie diurétique (concombre, menthe, citron, gingembre)' },
      { time: 'Déjeuner', text: 'Salade (mâche, betterave, noix, fromage de chèvre frais)' },
      { time: 'Collation', text: 'Pastèque 200g ou ananas' },
      { time: 'Dîner', text: 'Poulet rôti aux herbes + ratatouille' },
      { time: 'Avant coucher', text: '20 min de marche douce' },
    ],
    rules: []
  },
  {
    title: 'Bilan première semaine',
    mission: 'Évaluer les progrès',
    routine: [
      { time: 'Routine', text: 'Identique au Jour 1 (consolidation)' },
      { time: 'Bilan', text: 'Peser, mesurer taille, noter énergie' },
    ],
    rules: [
      '3 questions d\'auto-évaluation : Comment je dors ? Mon énergie ? Mon ventre ?'
    ]
  },
  {
    title: 'Boost métabolique',
    mission: 'Activer la thermogenèse',
    routine: [
      { time: 'Au réveil', text: 'Eau chaude + citron + cayenne (pincée)' },
      { time: 'Petit-déjeuner', text: 'Œufs brouillés + avocat + tomates + herbes' },
      { time: 'Déjeuner', text: 'Poisson grillé + quinoa + courgettes sautées' },
      { time: 'Collation', text: 'Bâtonnets de carotte + houmous' },
      { time: 'Dîner', text: 'Soupe poireau-pomme de terre + 1 tranche de saumon fumé' },
      { time: 'Avant coucher', text: 'Infusion thé vert au jasmin' },
    ],
    rules: []
  },
  {
    title: 'Détox profonde',
    mission: 'Nettoyage cellulaire',
    routine: [
      { time: 'Au réveil', text: 'Jus vert pressé (céleri, concombre, pomme, citron)' },
      { time: 'Petit-déjeuner', text: 'Bowl chia + lait amande + fruits rouges + noix' },
      { time: 'Déjeuner', text: 'Salade composée + thon + œuf dur + olives + huile d\'olive' },
      { time: 'Collation', text: '1 orange + amandes' },
      { time: 'Dîner', text: 'Poulet vapeur + chou-fleur rôti + riz complet' },
      { time: 'Avant coucher', text: 'Infusion verveine' },
    ],
    rules: []
  },
  {
    title: 'Reset énergétique',
    mission: 'Restaurer la vitalité',
    routine: [
      { time: 'Au réveil', text: 'Eau chaude + curcuma + miel' },
      { time: 'Petit-déjeuner', text: 'Pancakes farine de coco + fruits frais' },
      { time: 'Déjeuner', text: 'Saumon + lentilles + épinards + huile de noix' },
      { time: 'Collation', text: 'Smoothie protéiné (banane + amande + cacao cru)' },
      { time: 'Dîner', text: 'Velouté de potiron + œufs pochés + salade' },
      { time: 'Avant coucher', text: 'Tisane mélisse' },
    ],
    rules: []
  },
  {
    title: 'Drainage avancé',
    mission: 'Éliminer la rétention finale',
    routine: [
      { time: 'Au réveil', text: 'Shot gingembre-citron-curcuma frais' },
      { time: 'Petit-déjeuner', text: 'Pamplemousse + 2 œufs + 1 tranche pain complet' },
      { time: 'Déjeuner', text: 'Bouddha bowl (quinoa, légumes rôtis, tofu, sauce tahini)' },
      { time: 'Collation', text: 'Concombre + graines de tournesol' },
      { time: 'Dîner', text: 'Poisson blanc + asperges + patate douce' },
      { time: 'Avant coucher', text: 'Infusion queues de cerise' },
    ],
    rules: []
  },
  {
    title: 'Combustion intensive',
    mission: 'Maximiser la perte de graisses',
    routine: [
      { time: 'Au réveil', text: 'Eau citronnée tiède + cannelle' },
      { time: 'Petit-déjeuner', text: 'Smoothie vert protéiné (épinards, banane, beurre amande, lait coco)' },
      { time: 'Déjeuner', text: 'Poulet aux herbes + ratatouille + riz basmati' },
      { time: 'Collation', text: 'Pomme + beurre d\'amande' },
      { time: 'Dîner', text: 'Soupe lentilles corail + curcuma + coriandre' },
      { time: 'Avant coucher', text: 'Thé vert au gingembre' },
    ],
    rules: []
  },
  {
    title: 'Préparation finale',
    mission: 'Autonomie alimentaire',
    routine: [
      { time: 'Au réveil', text: 'Routine du Jour 1' },
      { time: 'Repas', text: 'Composer librement avec les aliments validés des 12 derniers jours' },
      { time: 'Avant coucher', text: 'Méditation 10 min + infusion choisie' },
    ],
    rules: []
  },
  {
    title: 'Célébration et transition',
    mission: 'Bilan et nouvelles habitudes',
    routine: [
      { time: 'Bilan final', text: 'Pesée + mesures + photo (Comparaison avec Jour 1)' },
      { time: 'Transition', text: 'Plan de transition : intégrer 3 nouvelles habitudes à garder' },
    ],
    rules: [
      'Message du Dr. Cohen : "Vous avez accompli quelque chose d\'extraordinaire. Votre corps vous remercie. Maintenant, vous savez ce qui fonctionne pour vous. Gardez vos rituels préférés."'
    ]
  }
];

export default function DetoxPlanPage() {
  useAuth();
  const { currentDay, completedDays, toggleDayComplete } = useProgramProgress('detox', 14);
  const [expandedDay, setExpandedDay] = useState<number | null>(null);
  const { showToast } = useToast();

  const handleToggle = (day: number) => {
    toggleDayComplete(day);
    if (!completedDays.includes(day)) {
      showToast(`Jour ${day} marqué comme complété`);
    }
  };

  return (
    <div className="min-h-screen stylo-bg">
      <AppHeader showBack title="Plan Brûle-Détox 14 Jours" />
      <PageWrapper>
        <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
          
          {/* Introduction Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#FFFDF5] border border-[#D4A574]/30 rounded-2xl p-6 shadow-sm"
          >
            <h2 className="font-serif text-xl font-bold text-text-dark mb-3">Votre protocole jour par jour pour expulser les toxines</h2>
            <p className="text-text-dark text-sm leading-relaxed">
              Pendant 14 jours, vous allez réinitialiser complètement votre système digestif. Ce protocole agit en parfaite synergie avec votre formule Stylo Maison pour amplifier vos résultats.
            </p>
            <p className="text-text-dark text-sm leading-relaxed mt-2 font-medium">
              Suivez chaque jour à la lettre. Les premiers effets arrivent dès la 48ème heure.
            </p>
          </motion.div>

          {/* Progress */}
          <div className="stylo-card p-5 border-t-[3px]" style={{ borderColor: '#D4A574' }}>
            <div className="flex items-center justify-between mb-2">
              <p className="font-semibold text-text-dark text-sm">{completedDays.length}/14 jours complétés</p>
              <p className="font-bold text-sm" style={{ color: '#D4A574' }}>{Math.round((completedDays.length / 14) * 100)}%</p>
            </div>
            <div className="h-2 bg-border rounded-full overflow-hidden">
              <motion.div className="h-full rounded-full" style={{ backgroundColor: '#D4A574' }} animate={{ width: `${(completedDays.length / 14) * 100}%` }} />
            </div>
          </div>

          {/* Days Grid */}
          <div className="space-y-4">
            <div className="grid grid-cols-7 gap-2">
              {Array.from({ length: 14 }, (_, i) => {
                const day = i + 1;
                const isCompleted = completedDays.includes(day);
                const isCurrent = day === currentDay;
                return (
                  <button
                    key={day}
                    onClick={() => setExpandedDay(expandedDay === day ? null : day)}
                    className={`aspect-square rounded-xl flex flex-col items-center justify-center text-sm font-semibold transition-all duration-200 border ${
                      isCompleted
                        ? 'text-white border-transparent'
                        : isCurrent
                        ? 'bg-amber-50 text-amber-700 border-amber-500 ring-2 ring-amber-500/20'
                        : 'bg-white text-text-muted border-border hover:border-amber-300'
                    }`}
                    style={isCompleted ? { backgroundColor: '#D4A574' } : {}}
                  >
                    <span className="text-xs opacity-70">J</span>
                    <span>{day}</span>
                    {isCompleted && <Check className="w-3 h-3 mt-0.5" />}
                  </button>
                );
              })}
            </div>

            {/* Expanded day */}
            {expandedDay && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="stylo-card overflow-hidden border-t-[3px]"
                style={{ borderColor: '#D4A574' }}
              >
                <h3 className="font-serif text-lg font-bold text-text-dark mb-1">
                  Jour {expandedDay} : {DAYS[expandedDay - 1].title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed mb-6">
                  <strong>Mission :</strong> {DAYS[expandedDay - 1].mission}
                </p>

                <div className="space-y-3 mb-6">
                  {DAYS[expandedDay - 1].routine.map((item, idx) => (
                    <div key={idx} className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3 bg-gray-50 rounded-lg p-3">
                      <span className="font-bold text-xs uppercase tracking-wider whitespace-nowrap" style={{ color: '#D4A574' }}>
                        {item.time}
                      </span>
                      <span className="text-text-dark text-sm">{item.text}</span>
                    </div>
                  ))}
                </div>

                {DAYS[expandedDay - 1].rules.length > 0 && (
                  <div className="bg-amber-50 rounded-xl p-4 mb-6 border border-amber-100">
                    <p className="font-semibold text-amber-900 text-xs mb-2 uppercase tracking-wider">Règles du jour</p>
                    <ul className="space-y-2">
                      {DAYS[expandedDay - 1].rules.map((rule, idx) => (
                        <li key={idx} className="text-amber-800 text-sm flex gap-2">
                          <span className="text-amber-500">•</span> {rule}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <button
                  onClick={() => handleToggle(expandedDay)}
                  className={`w-full py-3 rounded-xl font-semibold text-sm transition-all ${
                    completedDays.includes(expandedDay)
                      ? 'bg-gray-100 text-text-muted hover:bg-gray-200'
                      : 'text-white shadow-md'
                  }`}
                  style={!completedDays.includes(expandedDay) ? { backgroundColor: '#D4A574' } : {}}
                >
                  {completedDays.includes(expandedDay) ? 'Retirer de la liste' : 'Marquer ce jour comme complété'}
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </PageWrapper>
    </div>
  );
}
