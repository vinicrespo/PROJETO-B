import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Microscope, CheckCircle2, Circle, ChevronLeft, ChevronRight, 
  Flame, Leaf, Droplets, Utensils, HeartPulse, Brain, Coffee, ShieldCheck, Gift, Star
} from 'lucide-react';
import AppHeader from '../../components/AppHeader';
import PageWrapper from '../../components/PageWrapper';
import { useAuth } from '../../hooks/useAuth';

// Premium Content for Upsell 1 (Anti-Chargeback)
const DAYS = [
  {
    day: 1,
    title: 'Préparation et Activation',
    subtitle: 'Préparez le terrain pour les bonnes bactéries',
    mission: 'Créer l\’environnement parfait dans votre intestin pour que les nouvelles bactéries puissent s\’y installer et proliférer.',
    mindset: 'Votre intestin est comme un jardin. Aujourd\’hui, nous arrachons les mauvaises herbes.',
    meals: {
      morning: '400ml d\’eau tiède + jus d\’1 citron entier + 1 c.à.c de gingembre frais râpé.',
      breakfast: 'Yaourt nature entier (riche en graisses pour la satiété) + 1 c.à.s de graines de lin + fruits rouges.',
      lunch: 'Soupe miso chaude + riz complet + légumes vapeur (brocolis, courgettes).',
      dinner: 'Poisson blanc + épinards sautés à l\’ail (prébiotique puissant) + patate douce.',
      drink: 'Tisane de fenouil (réduit les ballonnements instantanément).'
    },
    avoid: 'Sucre raffiné, gluten, produits laitiers industriels, alcool.',
    advice: 'Mâchez chaque bouchée au moins 20 fois — la digestion commence dans la bouche. Si vous ne mâchez pas, les bactéries devront faire le travail et cela crée des gaz.',
    bonus: 'Le gingembre du matin va éteindre l\’inflammation qui vous empêche de maigrir.'
  },
  {
    day: 2,
    title: 'Élimination des Parasites',
    subtitle: 'Commencer à purger les bactéries nuisibles',
    mission: 'Affamer les bactéries qui vous font stocker de la graisse et réclamer du sucre.',
    mindset: 'Les envies de sucre que vous ressentez ne sont pas les vôtres, ce sont celles de vos mauvaises bactéries. Résistez pour les tuer.',
    meals: {
      morning: 'Shot d\’ail frais — 1 gousse d\’ail écrasée + eau tiède + citron (antibiotique naturel).',
      breakfast: 'Smoothie vert (épinards, banane, kéfir nature, gingembre).',
      lunch: 'Salade de choucroute crue + poulet grillé + quinoa.',
      dinner: 'Bouillon d\’os maison + légumes de saison.',
      drink: 'Kombucha 200ml (thé fermenté).'
    },
    priority: 'Ail, oignon, poireau (ce sont des prébiotiques naturels qui nourrissent EXCLUSIVEMENT les bonnes bactéries).',
    advice: 'Si vous avez mal à la tête aujourd\’hui, félicitations ! C\’est le "Die-off" : les mauvaises bactéries meurent et libèrent des toxines. Buvez beaucoup d\’eau.',
    bonus: 'L\’ail agit comme un sniper contre les bactéries pathogènes tout en épargnant les bonnes.'
  },
  {
    day: 3,
    title: 'Extinction de l\’Inflammation',
    subtitle: 'Dégonfler le ventre de l\’intérieur',
    mission: 'Calmer l\’inflammation intestinale qui bloque votre métabolisme depuis des années.',
    mindset: 'Un intestin enflammé retient l\’eau et gonfle. Aujourd\’hui, nous éteignons cet incendie.',
    meals: {
      morning: 'Lait doré (lait d\’amande + curcuma + poivre noir + miel).',
      breakfast: 'Porridge d\’avoine + myrtilles + graines de chia (pour le transit).',
      lunch: 'Curry de légumes au curcuma + lentilles corail.',
      dinner: 'Saumon au four + asperges (prébiotique star) + quinoa.',
      drink: 'Infusion curcuma-gingembre.'
    },
    priority: 'Curcuma, saumon, myrtilles, noix (Anti-inflammatoires puissants).',
    advice: 'Le curcuma est 40x plus efficace avec du poivre noir — ne l\’utilisez jamais sans. C\’est le secret asiatique pour un ventre plat.',
    bonus: 'Le saumon apporte des Oméga-3 qui réparent la paroi poreuse de votre intestin.'
  },
  {
    day: 4,
    title: 'La Grande Recolonisation',
    subtitle: 'Introduire des milliards de bonnes bactéries',
    mission: 'Envoyer une armée de bonnes bactéries pour reprendre le contrôle de votre système digestif.',
    mindset: 'Chaque aliment fermenté que vous mangez aujourd\’hui envoie des renforts à votre armée métabolique.',
    meals: {
      morning: 'Kéfir de lait ou de coco 200ml à jeun.',
      breakfast: '2 œufs + avocat + pain au levain (le levain contient des probiotiques naturels).',
      lunch: 'Bowl : riz noir + kimchi + tofu + concombre + sésame.',
      dinner: 'Soupe de miso + algues wakamé + crevettes.',
      drink: 'Kombucha ou jus de choucroute cru (2 c.à.s).'
    },
    priority: 'Aliments fermentés à chaque repas — ils sont les "camions de livraison" de bonnes bactéries.',
    advice: 'Le kimchi et la choucroute crus (non pasteurisés) contiennent plus de probiotiques qu\’une boîte entière de gélules en pharmacie.',
    bonus: 'Le kimchi a été élu l\’un des 5 aliments les plus sains au monde par la revue Health.'
  },
  {
    day: 5,
    title: 'Ancrage et Consolidation',
    subtitle: 'Sécuriser le territoire des bonnes bactéries',
    mission: 'Ancrer les nouvelles bactéries dans votre intestin pour qu\’elles s\’y reproduisent.',
    mindset: 'Vous avez fait la moitié du chemin. Votre corps est en train de se reprogrammer.',
    meals: {
      morning: '500ml d\’eau tiède + 1 c.à.s de vinaigre de cidre (synergie puissante).',
      breakfast: 'Pancakes à la farine de sarrasin + fruits frais + miel cru.',
      lunch: 'Salade de légumineuses (pois chiches, lentilles) + légumes grillés + tahini.',
      dinner: 'Poulet rôti + ratatouille + riz basmati.',
      drink: 'Tisane de camomille (calme le système nerveux entérique).'
    },
    advice: 'Bilan à mi-parcours : notez vos symptômes. Vos ballonnements doivent déjà être réduits de moitié et votre énergie décuplée.',
    bonus: 'Le vinaigre de cidre agit comme un engrais pour les bonnes bactéries fraîchement plantées.'
  },
  {
    day: 6,
    title: 'Le Boost Métabolique',
    subtitle: 'La combustion des graisses s\’accélère',
    mission: 'Vos bonnes bactéries commencent à dicter à votre métabolisme de brûler plus de calories.',
    mindset: 'Votre corps n\’est plus en mode "stockage", il passe en mode "combustion".',
    meals: {
      morning: 'Eau citronnée + 1 pincée de cannelle.',
      breakfast: 'Smoothie protéiné (yaourt kéfir + banane + purée d\’amande + cannelle).',
      lunch: 'Saumon fumé + salade verte + avocats + graines de tournesol.',
      dinner: 'Velouté de potiron + graines de courge + pain au levain.',
      drink: 'Thé vert matcha (stimulant doux du métabolisme).'
    },
    advice: 'Si vous avez moins faim que d\’habitude, c\’est normal. Les bonnes bactéries (les bactéroïdètes) régulent l\’hormone de la satiété mieux que les mauvaises (les firmicutes).',
    bonus: 'La cannelle aide à réguler le taux de sucre dans le sang, empêchant le stockage des graisses.'
  },
  {
    day: 7,
    title: 'Le Bilan Intermédiaire',
    subtitle: 'Mesurer la transformation de l\’intérieur',
    mission: 'Évaluer objectivement la progression de votre reprogrammation intestinale.',
    mindset: 'La balance ne dit pas tout. Le vrai changement se sent dans vos vêtements et votre énergie.',
    meals: {
      morning: '400ml d\’eau tiède + jus d\’1 citron entier.',
      breakfast: 'Yaourt nature entier + 1 c.à.s de graines de lin + fruits rouges.',
      lunch: 'Soupe miso + riz complet + légumes vapeur.',
      dinner: 'Poisson blanc + épinards sautés à l\’ail + patate douce.',
      drink: 'Tisane de fenouil.'
    },
    questions: '1. Dormez-vous mieux ? 2. Êtes-vous moins ballonnée le soir ? 3. Avez-vous moins d\’envies de sucré ?',
    advice: 'Si vous répondez OUI à au moins 2 questions, cela prouve scientifiquement que vos bonnes bactéries ont déjà pris le contrôle.',
    bonus: 'Prenez vos mensurations aujourd\’hui, vous serez surprise de voir les centimètres envolés autour de la taille.'
  },
  {
    day: 8,
    title: 'Intensification Extrême',
    subtitle: 'Maximiser l\’effet brûle-graisse',
    mission: 'Faire travailler vos nouvelles bactéries à plein régime pour détruire les graisses stockées.',
    mindset: 'Votre flore intestinale est maintenant votre alliée n°1 pour la perte de poids.',
    meals: {
      morning: 'Shot gingembre-citron-curcuma frais (15ml).',
      breakfast: 'Bol de fruits rouges + granola maison sans sucre ajouté + kéfir.',
      lunch: 'Quinoa + brocolis (cuit vapeur) + poulet + sauce au yaourt et ail.',
      dinner: 'Soupe de légumes lacto-fermentés + tofu grillé.',
      drink: 'Kombucha.'
    },
    advice: 'Votre corps brûle maintenant davantage de graisses même au repos, car les bonnes bactéries extraient moins de calories des aliments.',
    bonus: 'Le brocoli contient du sulforaphane, un composé qui répare les dommages intestinaux passés.'
  },
  {
    day: 9,
    title: 'Scellement et Protection',
    subtitle: 'Verrouiller les résultats',
    mission: 'Rendre votre nouvelle flore intestinale indestructible face aux écarts futurs.',
    mindset: 'Vous avez construit une forteresse. Maintenant, nous en renforçons les murs.',
    meals: {
      morning: 'Vinaigre de cidre + eau tiède (synergie Stylo Maison).',
      breakfast: 'Yaourt fermenté + graines de lin + pomme râpée.',
      lunch: 'Wrap au sarrasin + légumes lacto-fermentés + houmous maison.',
      dinner: 'Poisson gras (maquereau, sardines) + légumes verts + riz complet.',
      drink: 'Infusion menthe poivrée.'
    },
    advice: 'Intégrez 1 aliment fermenté par repas de manière permanente. C\’est l\’assurance anti-reprise de poids.',
    bonus: 'La pomme râpée oxydée produit de la pectine spéciale qui tapisse et protège l\’intestin.'
  },
  {
    day: 10,
    title: 'Célébration et Autonomie',
    subtitle: 'Votre nouvelle vie métabolique',
    mission: 'Bilan final et transition vers votre routine quotidienne pour la vie.',
    mindset: 'Ce n\’est pas la fin, c\’est le premier jour de votre vie avec un métabolisme réparé.',
    meals: {
      morning: 'L\’hydratation de votre choix (eau citronnée ou vinaigre).',
      breakfast: 'Le petit-déjeuner protéiné qui vous a le plus plu durant les 9 derniers jours.',
      lunch: 'Repas libre mais structuré (protéines + légumes + portion de fermenté).',
      dinner: 'Repas léger (soupe ou poisson).',
      drink: 'Boisson fermentée festive (Kombucha dans une coupe de champagne !)'
    },
    plan: 'Les 3 règles d\’or pour la suite : 1. Toujours mâcher 20 fois. 2. Un aliment fermenté par jour minimum. 3. Limiter le sucre industriel.',
    advice: 'Votre intestin est maintenant dominé par les bonnes bactéries. Elles travaillent pour vous 24h/24. Continuez de les nourrir !',
    bonus: 'Faites des photos avant/après, la diminution de l\’inflammation du ventre est généralement spectaculaire.'
  }
];

export default function Protocole7XPage() {
  useAuth(); // Protections and hooks
  const [currentDay, setCurrentDay] = useState(1);
  const [completedDays, setCompletedDays] = useState<number[]>([]);
  const [showBonusModal, setShowBonusModal] = useState(false);

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
    <div className="min-h-screen stylo-bg">
      <AppHeader />
      <PageWrapper>
        <div className="max-w-4xl mx-auto space-y-8 pb-20">
          
          {/* Header Premium Section */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-br from-[#D4A574] via-[#B88655] to-[#8C6239] rounded-3xl p-8 md:p-10 text-white shadow-2xl relative overflow-hidden"
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 opacity-10">
              <Microscope className="w-64 h-64" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center space-x-3 mb-6">
                <span className="bg-white/20 px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase border border-white/30 backdrop-blur-sm">
                  Programme Accélérateur
                </span>
                <span className="bg-green-500/80 px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase flex items-center">
                  <ShieldCheck className="w-4 h-4 mr-1" /> Accès VIP
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
                Protocole 7X <br/>
                <span className="text-[#FFFDF5] font-light">Transformation Intestinale</span>
              </h1>
              <p className="text-white/90 text-lg max-w-2xl leading-relaxed mb-8">
                10 jours exclusifs pour éradiquer les mauvaises bactéries, stopper le stockage des graisses et reprogrammer votre métabolisme de l'intérieur.
              </p>

              {/* Progress Bar Premium */}
              <div className="bg-black/20 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                <div className="flex justify-between items-end mb-3">
                  <div>
                    <span className="block text-white/70 text-sm font-medium uppercase tracking-wider mb-1">Votre Progression</span>
                    <span className="text-2xl font-bold">{completedDays.length} <span className="text-lg font-normal text-white/70">/ 10 Jours</span></span>
                  </div>
                  <span className="text-xl font-bold text-[#F5E6D3]">{progressPercentage}%</span>
                </div>
                <div className="h-4 bg-black/40 rounded-full overflow-hidden p-0.5">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${progressPercentage}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-[#FFFDF5] to-[#F5E6D3] rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bonus / Guarantee Banner */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl p-6 shadow-sm border border-[#D4A574]/30 flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div className="flex items-center gap-4">
              <div className="bg-[#FFFDF5] p-4 rounded-full">
                <Star className="w-8 h-8 text-[#D4A574]" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg">Inclus dans votre offre 7X</h3>
                <p className="text-gray-600 text-sm mt-1">Vous avez débloqué les protocoles nutritionnels avancés.</p>
              </div>
            </div>
            <button 
              onClick={() => setShowBonusModal(true)}
              className="w-full md:w-auto bg-[#D4A574] hover:bg-[#B88655] text-white px-6 py-3 rounded-xl font-bold transition-colors flex items-center justify-center gap-2"
            >
              <Gift className="w-5 h-5" />
              Voir mes Bonus VIP
            </button>
          </motion.div>

          {/* Day Selector */}
          <div className="flex items-center justify-between bg-white rounded-2xl p-3 shadow-sm border border-gray-100 sticky top-20 z-20">
            <button 
              onClick={() => setCurrentDay(prev => Math.max(1, prev - 1))}
              disabled={currentDay === 1}
              className="p-3 text-gray-400 hover:text-[#D4A574] hover:bg-[#FFFDF5] rounded-xl disabled:opacity-50 transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <div className="flex space-x-3 overflow-x-auto px-2 py-2 scrollbar-hide flex-1 justify-center">
              {DAYS.map(d => (
                <button
                  key={d.day}
                  onClick={() => setCurrentDay(d.day)}
                  className={`flex-shrink-0 w-14 h-14 rounded-2xl flex flex-col items-center justify-center font-bold transition-all relative
                    ${currentDay === d.day 
                      ? 'bg-gradient-to-br from-[#D4A574] to-[#B88655] text-white shadow-lg transform scale-110 z-10' 
                      : completedDays.includes(d.day)
                        ? 'bg-[#F5E6D3] text-[#B88655] border border-[#D4A574]/20'
                        : 'bg-gray-50 text-gray-400 hover:bg-gray-100 border border-transparent'
                    }`}
                >
                  <span className="text-xs font-normal opacity-80 -mb-1">Jour</span>
                  <span className="text-lg">{d.day}</span>
                  {completedDays.includes(d.day) && currentDay !== d.day && (
                    <CheckCircle2 className="w-3 h-3 absolute top-1 right-1 text-[#D4A574]" />
                  )}
                </button>
              ))}
            </div>

            <button 
              onClick={() => setCurrentDay(prev => Math.min(10, prev + 1))}
              disabled={currentDay === 10}
              className="p-3 text-gray-400 hover:text-[#D4A574] hover:bg-[#FFFDF5] rounded-xl disabled:opacity-50 transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Day Content */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentDay}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden"
            >
              {/* Day Header */}
              <div className="p-8 border-b border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <div className="inline-flex items-center space-x-2 bg-[#FFFDF5] text-[#D4A574] px-3 py-1 rounded-lg text-sm font-bold mb-3 border border-[#F5E6D3]">
                    <CalendarDayIcon day={dayData.day} />
                    <span>Jour {dayData.day} sur 10</span>
                  </div>
                  <h2 className="text-3xl font-extrabold text-gray-900">{dayData.title}</h2>
                  <h3 className="text-xl text-gray-500 mt-2">{dayData.subtitle}</h3>
                </div>
                
                <button
                  onClick={() => toggleDay(currentDay)}
                  className={`flex items-center justify-center space-x-2 px-6 py-4 rounded-2xl font-bold transition-all w-full md:w-auto shadow-sm
                    ${isCompleted 
                      ? 'bg-green-500 text-white hover:bg-green-600' 
                      : 'bg-[#F5E6D3] text-[#B88655] hover:bg-[#D4A574] hover:text-white'
                    }`}
                >
                  {isCompleted ? <CheckCircle2 className="w-6 h-6" /> : <Circle className="w-6 h-6" />}
                  <span>{isCompleted ? 'Mission Accomplie !' : 'Valider ce jour'}</span>
                </button>
              </div>

              <div className="p-8 space-y-8">
                
                {/* Mission & Mindset */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100">
                    <h4 className="font-bold text-blue-900 flex items-center mb-3">
                      <Flame className="w-5 h-5 mr-2 text-blue-600" /> Objectif Biologique
                    </h4>
                    <p className="text-blue-800 leading-relaxed">{dayData.mission}</p>
                  </div>
                  
                  <div className="bg-purple-50/50 p-6 rounded-2xl border border-purple-100">
                    <h4 className="font-bold text-purple-900 flex items-center mb-3">
                      <Brain className="w-5 h-5 mr-2 text-purple-600" /> État d'Esprit
                    </h4>
                    <p className="text-purple-800 leading-relaxed italic">"{dayData.mindset}"</p>
                  </div>
                </div>

                <hr className="border-gray-100" />

                {/* Meals Section */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <Utensils className="w-6 h-6 mr-3 text-[#D4A574]" />
                    Votre Plan Alimentaire
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {dayData.meals.morning && (
                      <MealCard title="Au réveil (À jeun)" icon={Droplets} content={dayData.meals.morning} color="blue" />
                    )}
                    {dayData.meals.breakfast && (
                      <MealCard title="Petit-déjeuner" icon={Coffee} content={dayData.meals.breakfast} color="orange" />
                    )}
                    {dayData.meals.lunch && (
                      <MealCard title="Déjeuner" icon={Utensils} content={dayData.meals.lunch} color="green" />
                    )}
                    {dayData.meals.dinner && (
                      <MealCard title="Dîner" icon={Leaf} content={dayData.meals.dinner} color="indigo" />
                    )}
                  </div>
                  
                  {dayData.meals.drink && (
                    <div className="mt-4 bg-gray-50 p-4 rounded-xl border border-gray-200 flex items-start space-x-3">
                      <HeartPulse className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-bold text-gray-900">Rituel du soir : </span>
                        <span className="text-gray-700">{dayData.meals.drink}</span>
                      </div>
                    </div>
                  )}
                </div>

                <hr className="border-gray-100" />

                {/* Specifics (Avoid, Priority, Questions) */}
                <div className="space-y-4">
                  {dayData.avoid && (
                    <div className="flex items-start space-x-4 p-5 bg-red-50 rounded-2xl border border-red-100">
                      <div className="bg-red-100 p-2 rounded-lg">
                        <Flame className="w-6 h-6 text-red-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-red-900 mb-1">Interdiction formelle aujourd'hui</h4>
                        <p className="text-red-800">{dayData.avoid}</p>
                      </div>
                    </div>
                  )}
                  
                  {dayData.priority && (
                    <div className="flex items-start space-x-4 p-5 bg-green-50 rounded-2xl border border-green-100">
                      <div className="bg-green-100 p-2 rounded-lg">
                        <CheckCircle2 className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-green-900 mb-1">Aliments prioritaires</h4>
                        <p className="text-green-800">{dayData.priority}</p>
                      </div>
                    </div>
                  )}

                  {dayData.questions && (
                    <div className="flex items-start space-x-4 p-5 bg-[#FFFDF5] rounded-2xl border border-[#D4A574]/30">
                      <div className="bg-[#D4A574]/20 p-2 rounded-lg">
                        <Brain className="w-6 h-6 text-[#D4A574]" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Check-in de mi-parcours</h4>
                        <p className="text-gray-700 font-medium">{dayData.questions}</p>
                      </div>
                    </div>
                  )}
                  
                  {dayData.plan && (
                    <div className="flex items-start space-x-4 p-5 bg-blue-50 rounded-2xl border border-blue-100">
                      <div className="bg-blue-100 p-2 rounded-lg">
                        <ShieldCheck className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-blue-900 mb-1">Votre Plan d'Action Final</h4>
                        <p className="text-blue-800">{dayData.plan}</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Advice & Bonus */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                  <div className="p-6 bg-gray-900 rounded-2xl text-white shadow-lg relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                      <Microscope className="w-16 h-16" />
                    </div>
                    <h4 className="font-bold text-[#D4A574] mb-2 flex items-center">
                      <Star className="w-5 h-5 mr-2" /> Conseil de l'Expert
                    </h4>
                    <p className="text-gray-300 leading-relaxed relative z-10">{dayData.advice}</p>
                  </div>
                  
                  <div className="p-6 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl border border-yellow-200 shadow-sm relative overflow-hidden">
                    <h4 className="font-bold text-yellow-800 mb-2 flex items-center">
                      <Gift className="w-5 h-5 mr-2 text-yellow-600" /> Le Bonus du Jour
                    </h4>
                    <p className="text-yellow-900 leading-relaxed">{dayData.bonus}</p>
                  </div>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bonus Modal */}
        {showBonusModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-3xl p-8 max-w-lg w-full shadow-2xl"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Vos Bonus VIP Débloqués</h3>
              <p className="text-gray-600 mb-6">Merci d'avoir rejoint l'Accélérateur Intestinal 7X. Voici vos accès additionnels :</p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="bg-[#FFFDF5] p-2 rounded-lg border border-[#F5E6D3] mr-4">
                    <Utensils className="w-6 h-6 text-[#D4A574]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Guide de Survie au Supermarché</h4>
                    <p className="text-sm text-gray-500">Inclus dans votre espace</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="bg-[#FFFDF5] p-2 rounded-lg border border-[#F5E6D3] mr-4">
                    <ShieldCheck className="w-6 h-6 text-[#D4A574]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Protocole SOS Ballonnements</h4>
                    <p className="text-sm text-gray-500">Inclus dans votre espace</p>
                  </div>
                </div>
              </div>

              <button 
                onClick={() => setShowBonusModal(false)}
                className="w-full bg-gray-900 text-white font-bold py-4 rounded-xl hover:bg-gray-800 transition-colors"
              >
                Fermer et retourner au Protocole
              </button>
            </motion.div>
          </div>
        )}

      </PageWrapper>
    </div>
  );
}

// Helpers
function MealCard({ title, icon: Icon, content, color }: any) {
  const colorClasses = {
    blue: 'bg-blue-50 border-blue-100 text-blue-900',
    orange: 'bg-orange-50 border-orange-100 text-orange-900',
    green: 'bg-green-50 border-green-100 text-green-900',
    indigo: 'bg-indigo-50 border-indigo-100 text-indigo-900',
  }[color as string] || 'bg-gray-50 border-gray-100 text-gray-900';

  const iconColors = {
    blue: 'text-blue-500 bg-blue-100',
    orange: 'text-orange-500 bg-orange-100',
    green: 'text-green-500 bg-green-100',
    indigo: 'text-indigo-500 bg-indigo-100',
  }[color as string] || 'text-gray-500 bg-gray-200';

  return (
    <div className={`p-5 rounded-2xl border ${colorClasses}`}>
      <h4 className="font-bold mb-3 flex items-center">
        <div className={`p-1.5 rounded-lg mr-2 ${iconColors}`}>
          <Icon className="w-4 h-4" />
        </div>
        {title}
      </h4>
      <p className="opacity-90 leading-relaxed text-sm">{content}</p>
    </div>
  );
}

function CalendarDayIcon({ day }: { day: number }) {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );
}
