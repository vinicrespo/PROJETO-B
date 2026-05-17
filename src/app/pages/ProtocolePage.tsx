import { useState } from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import AppHeader from '../components/AppHeader';
import PageWrapper from '../components/PageWrapper';
import { useAuth } from '../hooks/useAuth';
import { useProfile } from '../hooks/useProfile';
import { useToast } from '../components/Toast';

interface DayContent {
  title: string;
  mission: string;
  tasks: string[];
  tips: string[];
}

const DAYS: DayContent[] = [
  // Phase 1: Réparation intestinale (1-7)
  { title: 'Activation métabolique', mission: 'Aujourd\'hui, vous posez les fondations de votre transformation. Votre corps commence à s\'adapter à la recette du Stylo Maison.', tasks: ['Prendre la recette du matin', 'Boire 2L d\'eau', 'Marcher 20 minutes', 'Respecter le jeûne de 12h'], tips: ['Buvez la recette lentement, en petites gorgées', 'Gardez une bouteille d\'eau visible'] },
  { title: 'Nettoyage intestinal', mission: 'Votre système digestif commence à se purifier. Les bonnes bactéries se renforcent grâce au vinaigre de cidre.', tasks: ['Prendre la recette du matin', 'Boire 2L d\'eau', 'Marcher 20 minutes', 'Ajouter un légume vert au déjeuner'], tips: ['Privilégiez les aliments fermentés', 'Évitez le sucre blanc aujourd\'hui'] },
  { title: 'Réduction de l\'inflammation', mission: 'Le leaky gut commence à se refermer. Vous pourriez ressentir une légère fatigue : c\'est normal, votre corps se détoxifie.', tasks: ['Prendre la recette du matin', 'Boire 2L d\'eau', 'Faire 10 minutes d\'étirements', 'Respecter le jeûne de 12h'], tips: ['Si vous avez faim, une poignée d\'amandes est permise', 'Couchez-vous avant 22h'] },
  { title: 'Restauration du microbiote', mission: 'Vos bactéries intestinales se rééquilibrent. La digestion devrait déjà s\'améliorer.', tasks: ['Prendre la recette du matin', 'Boire 2,5L d\'eau', 'Marcher 25 minutes', 'Éviter les produits laitiers'], tips: ['Essayez le kéfir comme alternative', 'Mâchez lentement chaque bouchée'] },
  { title: 'Équilibre acido-basique', mission: 'Le pH de votre corps se normalise. Malgré son goût acide, le vinaigre de cidre alcalinise votre organisme.', tasks: ['Prendre la recette du matin', 'Boire 2L d\'eau', 'Marcher 20 minutes', 'Manger 3 portions de légumes'], tips: ['Ajoutez du concombre et de la menthe à votre eau', 'Respirez profondément 5 minutes'] },
  { title: 'Première adaptation', mission: 'Votre corps s\'est habitué à la recette. Beaucoup remarquent une réduction des ballonnements à ce stade.', tasks: ['Prendre la recette du matin', 'Boire 2L d\'eau', 'Faire 15 minutes d\'exercice', 'Jeûner 13h cette nuit'], tips: ['Pesez-vous : vous pourriez être agréablement surprise', 'Notez votre niveau d\'énergie'] },
  { title: 'Fin de la phase de réparation', mission: 'Félicitations ! Votre intestin est réparé. Votre corps est maintenant prêt pour la phase d\'activation hormonale.', tasks: ['Prendre la recette du matin', 'Boire 2,5L d\'eau', 'Marcher 30 minutes', 'Se peser et noter le résultat'], tips: ['Prenez une photo de votre progression', 'La semaine prochaine sera encore plus puissante'] },
  // Phase 2: Activation hormonale (8-14)
  { title: 'Réveil du GLP-1', mission: 'Phase 2 ! Votre corps commence à produire plus de GLP-1 naturellement grâce à la formule calibrée.', tasks: ['Prendre la recette du matin', 'Prendre la dose optionnelle après le déjeuner', 'Boire 2L d\'eau', 'Marcher 20 minutes'], tips: ['La deuxième dose accélère vos résultats', 'Mangez des protéines à chaque repas'] },
  { title: 'Activation du GIP', mission: 'L\'hormone GIP s\'active en synergie avec le GLP-1. Votre appétit devrait diminuer naturellement.', tasks: ['Prendre la recette du matin', 'Boire 2,5L d\'eau', 'Faire 20 minutes d\'exercice', 'Respecter le jeûne de 14h'], tips: ['Ne forcez pas si vous n\'avez pas faim', 'Écoutez les signaux de votre corps'] },
  { title: 'Sensibilité à l\'insuline', mission: 'Votre corps gère mieux le sucre. Les envies de sucré devraient commencer à diminuer.', tasks: ['Prendre la recette du matin', 'Boire 2L d\'eau', 'Marcher 25 minutes', 'Zéro sucre ajouté aujourd\'hui'], tips: ['Remplacez le sucre par de la cannelle', 'Les fruits entiers sont permis'] },
  { title: 'Optimisation métabolique', mission: 'Votre métabolisme de base augmente. Vous brûlez plus de calories même au repos.', tasks: ['Prendre la recette du matin', 'Prendre la dose optionnelle', 'Boire 2L d\'eau', 'Faire 15 minutes de renforcement'], tips: ['Les squats et les fentes activent les gros muscles', 'Plus de muscles = plus de calories brûlées'] },
  { title: 'Cascade hormonale', mission: 'Toutes vos hormones de satiété fonctionnent en harmonie. La perte de poids s\'accélère visiblement.', tasks: ['Prendre la recette du matin', 'Boire 2,5L d\'eau', 'Marcher 30 minutes', 'Jeûner 14h cette nuit'], tips: ['Vous devriez voir une nette différence sur la balance', 'Vos vêtements commencent à être plus amples'] },
  { title: 'Stabilisation hormonale', mission: 'Les hormones se stabilisent à un niveau optimal. Votre corps entre en mode combustion continue.', tasks: ['Prendre la recette du matin', 'Boire 2L d\'eau', 'Faire 20 minutes d\'exercice', 'Manger 4 portions de légumes'], tips: ['Variez les couleurs de légumes dans votre assiette', 'Le brocoli est votre meilleur allié'] },
  { title: 'Fin de la phase hormonale', mission: 'Phase 2 terminée ! Vos hormones travaillent pour vous. La phase finale de combustion intensive commence demain.', tasks: ['Prendre la recette du matin', 'Boire 2,5L d\'eau', 'Marcher 30 minutes', 'Se peser et noter le résultat'], tips: ['Comparez avec votre poids de début', 'Prenez une photo de progression'] },
  // Phase 3: Combustion intensive (15-21)
  { title: 'Mode combustion', mission: 'Phase finale ! Votre corps est maintenant une machine à brûler les graisses. Chaque jour compte.', tasks: ['Prendre la recette du matin', 'Prendre la dose optionnelle', 'Boire 3L d\'eau', 'Faire 25 minutes d\'exercice'], tips: ['Augmentez légèrement l\'intensité de vos marches', 'Ajoutez des montées d\'escaliers'] },
  { title: 'Accélération de la lipolyse', mission: 'Les cellules graisseuses libèrent massivement leur contenu. Restez hydratée pour faciliter l\'élimination.', tasks: ['Prendre la recette du matin', 'Boire 3L d\'eau', 'Marcher 30 minutes', 'Jeûner 15h cette nuit'], tips: ['Le thé vert non sucré aide à éliminer', 'Évitez l\'alcool cette semaine'] },
  { title: 'Remodelage corporel', mission: 'Votre silhouette se transforme visiblement. Les zones rebelles commencent à fondre.', tasks: ['Prendre la recette du matin', 'Prendre la dose optionnelle', 'Boire 3L d\'eau', 'Faire 20 minutes d\'exercice ciblé'], tips: ['Concentrez les exercices sur les zones qui vous préoccupent', 'Le palper-rouler aide énormément'] },
  { title: 'Détoxification finale', mission: 'Votre corps élimine les dernières toxines stockées dans les graisses. Vous devriez vous sentir plus légère et énergique.', tasks: ['Prendre la recette du matin', 'Boire 3L d\'eau', 'Marcher 30 minutes', 'Manger uniquement des aliments non transformés'], tips: ['Cuisinez maison aujourd\'hui', 'Légumes, protéines, bonnes graisses'] },
  { title: 'Sprint final', mission: 'Avant-avant-dernier jour ! Restez concentrée, les résultats les plus impressionnants arrivent dans les derniers jours.', tasks: ['Prendre la recette du matin', 'Prendre la dose optionnelle', 'Boire 3L d\'eau', 'Faire 25 minutes d\'exercice'], tips: ['Visualisez votre objectif atteint', 'Vous êtes si proche du but'] },
  { title: 'Consolidation', mission: 'Votre corps a complètement changé sa façon de gérer les graisses. Demain sera le dernier jour officiel.', tasks: ['Prendre la recette du matin', 'Boire 3L d\'eau', 'Marcher 30 minutes', 'Jeûner 14h cette nuit'], tips: ['Préparez-vous à vous peser demain matin', 'Soyez fière de votre persévérance'] },
  { title: 'Jour de victoire !', mission: 'Félicitations ! Vous avez terminé le Protocole 21 Jours du Stylo Maison ! Pesez-vous et célébrez votre transformation.', tasks: ['Prendre la recette du matin', 'Se peser et noter le résultat final', 'Prendre une photo avant/après', 'Continuer la recette en entretien'], tips: ['Vous pouvez continuer la recette 1 fois par jour en entretien', 'Partagez vos résultats avec vos proches'] },
];

const PHASES = [
  { name: 'Phase 1 : Réparation intestinale', range: [1, 7], desc: 'Focus sur le leaky gut' },
  { name: 'Phase 2 : Activation hormonale', range: [8, 14], desc: 'GLP-1 et GIP' },
  { name: 'Phase 3 : Combustion intensive', range: [15, 21], desc: 'Phase finale' },
];

export default function ProtocolePage() {
  useAuth();
  const { getCompletedDays, toggleDayComplete, getProtocoleDay } = useProfile();
  const [completedDays, setCompletedDays] = useState(getCompletedDays());
  const [expandedDay, setExpandedDay] = useState<number | null>(null);
  const currentDay = getProtocoleDay();
  const { showToast } = useToast();

  const handleToggle = (day: number) => {
    const updated = toggleDayComplete(day);
    setCompletedDays(updated);
    if (updated.includes(day)) {
      showToast(`Jour ${day} marqué comme complété`);
    }
  };

  return (
    <div className="min-h-screen stylo-bg">
      <AppHeader showBack title="Protocole 21 Jours" />
      <PageWrapper>
        <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
          {/* Progress */}
          <div className="stylo-card p-5">
            <div className="flex items-center justify-between mb-2">
              <p className="font-semibold text-text-dark text-sm">{completedDays.length}/21 jours complétés</p>
              <p className="text-primary font-bold text-sm">{Math.round((completedDays.length / 21) * 100)}%</p>
            </div>
            <div className="h-2 bg-border rounded-full overflow-hidden">
              <motion.div className="h-full bg-primary rounded-full" animate={{ width: `${(completedDays.length / 21) * 100}%` }} />
            </div>
          </div>

          {/* Phases */}
          {PHASES.map((phase, pi) => (
            <div key={pi} className="space-y-3">
              <div className="flex items-center gap-2">
                <h2 className="font-serif text-lg font-bold text-text-dark">{phase.name}</h2>
                <span className="text-text-muted text-xs">— {phase.desc}</span>
              </div>

              <div className="grid grid-cols-7 gap-2">
                {Array.from({ length: 7 }, (_, i) => {
                  const day = phase.range[0] + i;
                  const isCompleted = completedDays.includes(day);
                  const isCurrent = day === currentDay;
                  return (
                    <button
                      key={day}
                      onClick={() => setExpandedDay(expandedDay === day ? null : day)}
                      className={`aspect-square rounded-xl flex flex-col items-center justify-center text-sm font-semibold transition-all duration-200 border ${
                        isCompleted
                          ? 'bg-primary text-white border-primary'
                          : isCurrent
                          ? 'bg-accent-green text-primary border-primary ring-2 ring-primary/20'
                          : 'bg-white text-text-muted border-border hover:border-primary/30'
                      }`}
                    >
                      <span className="text-xs opacity-70">J</span>
                      <span>{day}</span>
                      {isCompleted && <Check className="w-3 h-3 mt-0.5" />}
                    </button>
                  );
                })}
              </div>

              {/* Expanded day */}
              {expandedDay && expandedDay >= phase.range[0] && expandedDay <= phase.range[1] && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="stylo-card overflow-hidden"
                >
                  <h3 className="font-serif text-lg font-bold text-text-dark mb-1">
                    Jour {expandedDay} : {DAYS[expandedDay - 1].title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed mb-4">{DAYS[expandedDay - 1].mission}</p>

                  <div className="space-y-2 mb-4">
                    {DAYS[expandedDay - 1].tasks.map((task, ti) => (
                      <div key={ti} className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
                        <div className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 ${completedDays.includes(expandedDay) ? 'bg-primary border-primary' : 'border-border'}`}>
                          {completedDays.includes(expandedDay) && <Check className="w-3 h-3 text-white" />}
                        </div>
                        <span className="text-text-dark text-sm">{task}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-accent-green/50 rounded-xl p-4 mb-4">
                    <p className="font-semibold text-text-dark text-xs mb-2">Conseils du jour</p>
                    <ul className="space-y-1">
                      {DAYS[expandedDay - 1].tips.map((tip, ti) => (
                        <li key={ti} className="text-text-muted text-xs flex gap-2">
                          <span className="text-primary">-</span> {tip}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => handleToggle(expandedDay)}
                    className={`w-full py-3 rounded-xl font-semibold text-sm transition-all ${
                      completedDays.includes(expandedDay)
                        ? 'bg-gray-100 text-text-muted hover:bg-gray-200'
                        : 'bg-primary text-white hover:bg-primary-dark'
                    }`}
                  >
                    {completedDays.includes(expandedDay) ? 'Retirer de la liste' : 'Marquer comme complété'}
                  </button>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </PageWrapper>
    </div>
  );
}
