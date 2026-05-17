import { motion } from 'motion/react';
import { Heart } from 'lucide-react';
import AppHeader from '../components/AppHeader';
import PageWrapper from '../components/PageWrapper';
import { useAuth } from '../hooks/useAuth';

const RECIPES = [
  {
    title: 'Sérum aux rétinoïdes naturels',
    ingredients: ['2 cuillères à soupe d\'huile d\'amande douce', '1 carotte cuite et mixée en purée lisse', '5 gouttes d\'huile essentielle de carotte', '1 capsule de vitamine E (percer et vider)'],
    instructions: 'Mélangez la purée de carotte avec l\'huile d\'amande douce jusqu\'à obtenir une consistance homogène. Ajoutez l\'huile essentielle de carotte et la vitamine E. Appliquez une fine couche sur les vergetures en massant en cercles pendant 5 minutes. La bêta-carotène de la carotte est un précurseur naturel de la vitamine A (rétinoïde), connue pour stimuler le renouvellement cellulaire.',
    frequency: 'Tous les soirs pendant 6 semaines',
  },
  {
    title: 'Gommage sucre + miel',
    ingredients: ['3 cuillères à soupe de sucre de canne fin', '2 cuillères à soupe de miel liquide', '1 cuillère à soupe de jus de citron frais', '1 cuillère à café d\'huile d\'olive'],
    instructions: 'Mélangez tous les ingrédients jusqu\'à obtenir une pâte granuleuse. Appliquez sur les vergetures en mouvements circulaires pendant 5 minutes sous la douche. Le sucre exfolie les cellules mortes, le miel hydrate en profondeur, le citron éclaircit les marques et l\'huile d\'olive nourrit la peau. Rincez à l\'eau tiède et séchez en tamponnant.',
    frequency: '2 à 3 fois par semaine',
  },
  {
    title: 'Masque adoucissant à l\'aloe vera',
    ingredients: ['3 cuillères à soupe de gel d\'aloe vera pur', '1 cuillère à soupe d\'huile de coco vierge', '1 cuillère à café de miel', '2 gouttes d\'huile essentielle de lavande'],
    instructions: 'Mélangez le gel d\'aloe vera avec l\'huile de coco tiède, le miel et la lavande. Appliquez généreusement sur les zones de vergetures. Laissez poser 30 minutes, idéalement sous un film alimentaire pour maximiser la pénétration. L\'aloe vera contient des glucomannanes qui stimulent la production de collagène et d\'élastine, les deux protéines essentielles pour la souplesse de la peau.',
    frequency: '3 fois par semaine',
  },
  {
    title: 'Bouillon stimulant de collagène',
    ingredients: ['Os à moelle de boeuf (500g)', '2L d\'eau', '2 cuillères à soupe de vinaigre de cidre', '1 citron (jus)', '500mg de vitamine C en poudre (optionnel)'],
    instructions: 'Faites mijoter les os dans l\'eau avec le vinaigre de cidre pendant 12 à 24 heures à feu très doux. Le vinaigre aide à extraire le collagène et les minéraux des os. Filtrez et ajoutez le jus de citron. Buvez 1 tasse par jour. La vitamine C est essentielle à la synthèse du collagène par votre corps — sans elle, le collagène ne peut pas se former correctement.',
    frequency: '1 tasse par jour pendant 8 semaines',
  },
  {
    title: 'Huile cicatrisante rosier muscat',
    ingredients: ['30 ml d\'huile de rosier muscat (Rosa Mosqueta)', '10 gouttes d\'huile essentielle de lavande vraie', '5 gouttes d\'huile essentielle d\'hélichryse (immortelle)', '5 gouttes de vitamine E'],
    instructions: 'Mélangez toutes les huiles dans un flacon en verre ambré. Appliquez quelques gouttes sur les vergetures matin et soir en massant jusqu\'à absorption complète. L\'huile de rosier muscat est la star des soins anti-vergetures grâce à sa richesse en acide rétinoïque naturel et en acides gras essentiels. L\'hélichryse est connue pour ses propriétés cicatrisantes exceptionnelles.',
    frequency: 'Matin et soir, tous les jours',
  },
];

export default function VergeturesPage() {
  useAuth();

  return (
    <div className="min-h-screen stylo-bg">
      <AppHeader showBack title="Éliminer les Vergetures" />
      <PageWrapper>
        <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Heart className="w-5 h-5 text-primary" />
              <span className="px-2 py-0.5 rounded-full bg-gold/20 text-gold text-xs font-semibold">Bonus</span>
            </div>
            <p className="text-text-muted text-sm">5 recettes naturelles pour une peau lisse et régénérée</p>
          </div>

          {RECIPES.map((recipe, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.05 }}
              className="stylo-card"
            >
              <h3 className="font-serif text-lg font-bold text-text-dark mb-3">{i + 1}. {recipe.title}</h3>

              <div className="bg-gray-50 rounded-xl p-4 mb-3">
                <p className="text-xs font-semibold text-text-muted mb-2">Ingrédients</p>
                <ul className="space-y-1">
                  {recipe.ingredients.map((ing, j) => (
                    <li key={j} className="text-text-dark text-sm flex gap-2">
                      <span className="text-primary">-</span> {ing}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-text-dark text-sm leading-relaxed mb-3">{recipe.instructions}</p>

              <div className="bg-accent-green/50 rounded-lg px-3 py-2 inline-block">
                <p className="text-primary text-xs font-semibold">Fréquence : {recipe.frequency}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </PageWrapper>
    </div>
  );
}
