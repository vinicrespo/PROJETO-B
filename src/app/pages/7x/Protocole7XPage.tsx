import { useState, useEffect } from 'react';
import { Microscope, CheckCircle2, Circle, ChevronLeft, ChevronRight } from 'lucide-react';
import DashboardLayout from '../../components/DashboardLayout';

const DAYS = [
  {
    day: 1,
    title: 'Préparation et activation',
    mission: 'Préparer l\\'intestin à recevoir les bonnes bactéries',
    morning: '400ml d\\'eau tiède + jus d\\'1 citron entier + 1 c.à.c de gingembre frais',
    breakfast: 'Yaourt nature entier + 1 c.à.s de graines de lin + fruits rouges',
    lunch: 'Soupe miso + riz complet + légumes vapeur',
    dinner: 'Poisson blanc + épinards sautés à l\\'ail + patate douce',
    drink: 'Tisane de fenouil (réduit les ballonnements)',
    avoid: 'Sucre raffiné, gluten, produits laitiers industriels, alcool',
    advice: 'Mâchez chaque bouchée au moins 20 fois — la digestion commence dans la bouche'
  },
  {
    day: 2,
    title: 'Élimination des mauvaises bactéries',
    mission: 'Commencer à purger les bactéries nuisibles',
    morning: 'Shot d\\'ail frais — 1 gousse d\\'ail écrasée + eau tiède + citron (antibiotique naturel)',
    breakfast: 'Smoothie vert (épinards, banane, kéfir nature, gingembre)',
    lunch: 'Salade de choucroute crue + poulet grillé + quinoa',
    dinner: 'Bouillon d\\'os maison + légumes de saison',
    drink: 'Kombucha 200ml',
    priority: 'Ail, oignon, poireau (prébiotiques naturels qui nourrissent les bonnes bactéries)',
    advice: 'Les mauvaises bactéries se nourrissent de sucre — chaque gramme de sucre évité les affame'
  },
  {
    day: 3,
    title: 'Réduction de l\\'inflammation',
    mission: 'Calmer l\\'inflammation intestinale créée par les mauvaises bactéries',
    morning: 'Lait doré (lait d\\'amande + curcuma + poivre noir + miel)',
    breakfast: 'Porridge d\\'avoine + myrtilles + graines de chia',
    lunch: 'Curry de légumes au curcuma + lentilles corail',
    dinner: 'Saumon au four + asperges + quinoa',
    drink: 'Infusion curcuma-gingembre',
    priority: 'Curcuma, saumon, myrtilles, noix (Anti-inflammatoires)',
    advice: 'Le curcuma est 40x plus efficace avec du poivre noir — ne jamais l\\'utiliser sans'
  },
  {
    day: 4,
    title: 'Recolonisation',
    mission: 'Introduire massivement les bonnes bactéries',
    morning: 'Kéfir de lait ou de coco 200ml à jeun',
    breakfast: '2 œufs + avocat + pain au levain (levain = probiotiques naturels)',
    lunch: 'Bowl : riz noir + kimchi + tofu + concombre + sésame',
    dinner: 'Soupe de miso + algues wakamé + crevettes',
    drink: 'Kombucha ou jus de choucroute cru (2 c.à.s)',
    priority: 'Aliments fermentés à chaque repas — ils sont les "camions de livraison"',
    advice: 'Le kimchi et la choucroute crus (non pasteurisés) contiennent des milliards de bactéries vivantes'
  },
  {
    day: 5,
    title: 'Consolidation',
    mission: 'Ancrer les nouvelles bactéries dans votre intestin',
    morning: '500ml d\\'eau tiède + 1 c.à.s de vinaigre de cidre (synergie avec le Stylo Maison)',
    breakfast: 'Pancakes à la farine de sarrasin + fruits frais + miel cru',
    lunch: 'Salade de légumineuses (pois chiches, lentilles) + légumes grillés + tahini',
    dinner: 'Poulet rôti + ratatouille + riz basmati',
    drink: 'Tisane de camomille',
    advice: 'Bilan à mi-parcours — notez vos symptômes. Les ballonnements doivent déjà diminuer'
  },
  {
    day: 6,
    title: 'Boost métabolique',
    mission: 'Les bonnes bactéries commencent à accélérer votre métabolisme',
    morning: 'Eau citronnée + 1 pincée de cannelle',
    breakfast: 'Smoothie protéiné (yaourt kéfir + banane + beurre d\\'amande + cannelle)',
    lunch: 'Saumon fumé + salade verte + avocats + graines de tournesol',
    dinner: 'Velouté de potiron + graines de courge + pain au levain',
    drink: 'Thé vert matcha',
    advice: 'Si vous avez moins faim que d\\'habitude, c\\'est normal. Les bonnes bactéries régulent l\\'hormone de la satiété'
  },
  {
    day: 7,
    title: 'Bilan mi-parcours',
    mission: 'Évaluer la progression',
    routine: 'Identique au Jour 1 (consolidation)',
    bilan: 'Peser + mesurer tour de taille + noter énergie, sommeil, humeur',
    questions: 'Dormez-vous mieux ? Êtes-vous moins ballonnée ? Avez-vous moins d\\'envies de sucré ?',
    advice: 'Si vous répondez oui à au moins 2 questions, vos bonnes bactéries ont déjà pris le contrôle'
  },
  {
    day: 8,
    title: 'Intensification',
    mission: 'Maximiser la combustion des graisses par les bonnes bactéries',
    morning: 'Shot gingembre-citron-curcuma frais (15ml)',
    breakfast: 'Bol de fruits rouges + granola maison + kéfir',
    lunch: 'Quinoa + brocolis + poulet + sauce au yaourt-ail',
    dinner: 'Soupe de légumes fermentés + tofu grillé',
    drink: 'Kombucha',
    advice: 'Votre corps brûle maintenant davantage de graisses même au repos — c\\'est l\\'effet des bonnes bactéries'
  },
  {
    day: 9,
    title: 'Ancrage définitif',
    mission: 'Fixer durablement les nouvelles bactéries',
    morning: 'Vinaigre de cidre + eau tiède (synergie Stylo Maison)',
    breakfast: 'Yaourt fermenté + graines de lin + pomme râpée',
    lunch: 'Wrap au sarrasin + légumes lacto-fermentés + houmous',
    dinner: 'Poisson gras (maquereau, sardines) + légumes verts + riz complet',
    advice: 'Intégrez 1 aliment fermenté par repas en habitude permanente — c\\'est le secret pour l\\'équilibre'
  },
  {
    day: 10,
    title: 'Célébration et transition',
    mission: 'Bilan final : pesée + mesures + photos',
    bilan: 'Comparaison avec le Jour 1',
    plan: 'Plan de transition : les 5 habitudes à garder à vie',
    advice: 'Votre intestin est maintenant dominé par les bonnes bactéries. Continuez avec le Stylo Maison !'
  }
];

export default function Protocole7XPage() {
  const [currentDay, setCurrentDay] = useState(1);
  const [completedDays, setCompletedDays] = useState<number[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('stylo_7x_progress');
    if (saved) {
      const parsed = JSON.parse(saved);
      setCompletedDays(parsed);
      const nextDay = Math.min(Math.max(...parsed, 0) + 1, 10);
      setCurrentDay(nextDay);
    }
  }, []);

  const toggleDay = (day: number) => {
    setCompletedDays(prev => {
      const newCompleted = prev.includes(day)
        ? prev.filter(d => d !== day)
        : [...prev, day];
      
      localStorage.setItem('stylo_7x_progress', JSON.stringify(newCompleted));
      return newCompleted;
    });
  };

  const dayData = DAYS.find(d => d.day === currentDay) || DAYS[0];
  const isCompleted = completedDays.includes(currentDay);
  const progressPercentage = (completedDays.length / 10) * 100;

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-[#D4A574] to-[#B88655] rounded-2xl p-8 text-white shadow-lg">
          <div className="flex items-center space-x-4 mb-4">
            <div className="p-3 bg-white/20 rounded-xl">
              <Microscope className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Protocole Accélérateur Intestinal 7X</h1>
              <p className="text-white/90 mt-1">10 jours pour transformer votre microbiote et multiplier votre perte de poids</p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-8 bg-white/10 rounded-xl p-4">
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium">Progression du programme</span>
              <span className="font-bold">{completedDays.length} / 10 jours</span>
            </div>
            <div className="h-3 bg-black/20 rounded-full overflow-hidden">
              <div 
                className="h-full bg-white rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>
        </div>

        {/* Intro Box */}
        <div className="bg-[#FFFDF5] border border-[#F5E6D3] rounded-2xl p-6 text-gray-800 shadow-sm">
          <p className="leading-relaxed">
            <span className="font-bold text-[#D4A574]">Votre intestin abrite des milliards de bactéries.</span> Quand les mauvaises dominent, elles extraient 2x plus de calories de tout ce que vous mangez — même une salade se transforme en graisse. Ce protocole de 10 jours élimine les mauvaises bactéries et repeuple votre intestin avec les bonnes, celles qui font fondre la graisse naturellement.
          </p>
        </div>

        {/* Day Selector */}
        <div className="flex items-center justify-between bg-white rounded-2xl p-4 shadow-sm">
          <button 
            onClick={() => setCurrentDay(prev => Math.max(1, prev - 1))}
            disabled={currentDay === 1}
            className="p-2 text-gray-400 hover:text-[#D4A574] hover:bg-[#FFFDF5] rounded-lg disabled:opacity-50 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <div className="flex space-x-2 overflow-x-auto px-4 py-2 scrollbar-hide">
            {DAYS.map(d => (
              <button
                key={d.day}
                onClick={() => setCurrentDay(d.day)}
                className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm transition-all
                  ${currentDay === d.day 
                    ? 'bg-[#D4A574] text-white shadow-md transform scale-110' 
                    : completedDays.includes(d.day)
                      ? 'bg-[#F5E6D3] text-[#B88655]'
                      : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
                  }`}
              >
                {d.day}
              </button>
            ))}
          </div>

          <button 
            onClick={() => setCurrentDay(prev => Math.min(10, prev + 1))}
            disabled={currentDay === 10}
            className="p-2 text-gray-400 hover:text-[#D4A574] hover:bg-[#FFFDF5] rounded-lg disabled:opacity-50 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Day Content */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Jour {dayData.day}</h2>
              <h3 className="text-xl text-[#D4A574] font-semibold mt-1">{dayData.title}</h3>
            </div>
            <button
              onClick={() => toggleDay(currentDay)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-all
                ${isCompleted 
                  ? 'bg-green-50 text-green-600' 
                  : 'bg-gray-50 text-gray-500 hover:bg-[#F5E6D3] hover:text-[#D4A574]'
                }`}
            >
              {isCompleted ? <CheckCircle2 className="w-5 h-5" /> : <Circle className="w-5 h-5" />}
              <span>{isCompleted ? 'Complété' : 'Marquer comme fait'}</span>
            </button>
          </div>

          <div className="space-y-6">
            <div className="bg-[#FFFDF5] p-4 rounded-xl border-l-4 border-[#D4A574]">
              <h4 className="font-bold text-gray-900">Mission du jour</h4>
              <p className="text-gray-700 mt-1">{dayData.mission}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {dayData.morning && (
                <div className="bg-gray-50 p-4 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <span className="w-2 h-2 rounded-full bg-[#D4A574] mr-2"></span> Au réveil
                  </h4>
                  <p className="text-gray-700">{dayData.morning}</p>
                </div>
              )}
              {dayData.breakfast && (
                <div className="bg-gray-50 p-4 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <span className="w-2 h-2 rounded-full bg-[#D4A574] mr-2"></span> Petit-déjeuner
                  </h4>
                  <p className="text-gray-700">{dayData.breakfast}</p>
                </div>
              )}
              {dayData.lunch && (
                <div className="bg-gray-50 p-4 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <span className="w-2 h-2 rounded-full bg-[#D4A574] mr-2"></span> Déjeuner
                  </h4>
                  <p className="text-gray-700">{dayData.lunch}</p>
                </div>
              )}
              {dayData.dinner && (
                <div className="bg-gray-50 p-4 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <span className="w-2 h-2 rounded-full bg-[#D4A574] mr-2"></span> Dîner
                  </h4>
                  <p className="text-gray-700">{dayData.dinner}</p>
                </div>
              )}
            </div>

            {dayData.routine && (
              <div className="bg-gray-50 p-4 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <span className="w-2 h-2 rounded-full bg-[#D4A574] mr-2"></span> Routine
                </h4>
                <p className="text-gray-700">{dayData.routine}</p>
              </div>
            )}
            
            {dayData.bilan && (
              <div className="bg-gray-50 p-4 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <span className="w-2 h-2 rounded-full bg-[#D4A574] mr-2"></span> Bilan
                </h4>
                <p className="text-gray-700">{dayData.bilan}</p>
              </div>
            )}

            {dayData.questions && (
              <div className="bg-[#FFFDF5] p-4 rounded-xl border border-[#F5E6D3]">
                <h4 className="font-bold text-[#D4A574] mb-2">3 questions clés :</h4>
                <p className="text-gray-700 italic">{dayData.questions}</p>
              </div>
            )}

            {dayData.drink && (
              <div className="flex items-center space-x-3 p-4 bg-blue-50/50 rounded-xl text-blue-900">
                <span className="font-semibold">Boisson du soir :</span>
                <span>{dayData.drink}</span>
              </div>
            )}

            {dayData.avoid && (
              <div className="flex items-center space-x-3 p-4 bg-red-50/50 rounded-xl text-red-900">
                <span className="font-semibold">À éviter :</span>
                <span>{dayData.avoid}</span>
              </div>
            )}
            
            {dayData.priority && (
              <div className="flex items-center space-x-3 p-4 bg-green-50/50 rounded-xl text-green-900">
                <span className="font-semibold">Aliments prioritaires :</span>
                <span>{dayData.priority}</span>
              </div>
            )}

            {dayData.plan && (
              <div className="bg-gray-50 p-4 rounded-xl">
                <p className="text-gray-700">{dayData.plan}</p>
              </div>
            )}

            <div className="mt-8 p-4 bg-gray-900 text-white rounded-xl flex items-start space-x-4">
              <div className="p-2 bg-gray-800 rounded-lg shrink-0">
                <Sparkles className="w-5 h-5 text-[#D4A574]" />
              </div>
              <div>
                <h4 className="font-bold text-[#D4A574]">Conseil du jour</h4>
                <p className="text-gray-300 mt-1">{dayData.advice}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
