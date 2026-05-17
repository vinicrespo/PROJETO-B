import { motion } from 'motion/react';
import { Pizza, ShieldCheck } from 'lucide-react';
import AppHeader from '../../components/AppHeader';
import PageWrapper from '../../components/PageWrapper';
import { useAuth } from '../../hooks/useAuth';

export default function MaintienCheatMealPage() {
  useAuth();

  return (
    <div className="min-h-screen stylo-bg">
      <AppHeader showBack title="Le Cheat Meal Parfait" />
      <PageWrapper>
        <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-2 mb-6"
          >
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
              <Pizza className="w-6 h-6 text-blue-600" />
            </div>
            <h1 className="font-serif text-2xl font-bold text-text-dark">Le Guide du "Cheat Meal"</h1>
            <p className="text-text-muted italic">Comment se faire plaisir sans stocker 1 gramme</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white border border-border rounded-2xl p-6 shadow-sm"
          >
            <p className="text-text-dark text-sm leading-relaxed">
              En phase de maintien, le repas "plaisir" (pizza, burger, restaurant) est obligatoire. Il prouve à votre corps que vous n'êtes pas en famine et maintient votre métabolisme élevé. Mais il faut le faire intelligemment pour bloquer le pic d'insuline.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="stylo-card border-t-[3px]"
            style={{ borderColor: '#1E3A8A' }}
          >
            <h2 className="font-serif text-xl font-bold text-text-dark mb-4">La Règle des 3 Boucliers</h2>
            <div className="space-y-6">
              <div className="relative pl-6 border-l-2 border-blue-200">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 border-4 border-white"></div>
                <h3 className="font-bold text-blue-900 text-sm mb-2">Bouclier 1 : Le Pré-Repas Acétique</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  20 minutes avant le Cheat Meal, buvez 1 grand verre d'eau avec 1 c.à.s de Vinaigre de Cidre. L'acide acétique va ralentir la vidange gastrique de 30% et diminuer le pic de sucre dans le sang.
                </p>
              </div>

              <div className="relative pl-6 border-l-2 border-blue-200">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 border-4 border-white"></div>
                <h3 className="font-bold text-blue-900 text-sm mb-2">Bouclier 2 : Le Tapis de Fibres</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  Commencez TOUJOURS votre repas plaisir par une petite salade verte ou des crudités. Les fibres vont tapisser vos intestins et créer un filet qui ralentit l'absorption des glucides (frites, pain, pâtes).
                </p>
              </div>

              <div className="relative pl-6 border-l-2 border-transparent">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 border-4 border-white"></div>
                <h3 className="font-bold text-blue-900 text-sm mb-2">Bouclier 3 : La Marche Digestive de 10 min</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  Ne vous asseyez pas sur le canapé juste après. Marchez 10 minutes (même dans votre maison). Vos muscles vont aspirer le glucose directement du sang sans passer par l'insuline.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-[#EFF6FF] border border-blue-200 rounded-2xl p-5"
          >
            <h3 className="font-serif font-bold text-blue-900 mb-2 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-blue-600" />
              La Loi Unique du Cheat Meal
            </h3>
            <p className="text-sm text-blue-800">
              Un "Cheat Meal" est UN repas. Ce n'est pas un "Cheat Day" (journée entière). Vous pouvez manger la plus grosse pizza le samedi soir, à condition que le petit-déjeuner du dimanche matin soit 100% propre et léger.
            </p>
          </motion.div>
        </div>
      </PageWrapper>
    </div>
  );
}
