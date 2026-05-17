import { motion } from 'motion/react';
import { Moon, Clock, ArrowRight } from 'lucide-react';
import AppHeader from '../../components/AppHeader';
import PageWrapper from '../../components/PageWrapper';
import { useAuth } from '../../hooks/useAuth';

export default function DetoxRituelNuitPage() {
  useAuth();

  return (
    <div className="min-h-screen stylo-bg">
      <AppHeader showBack title="Rituel de Nuit Anti-Gonflement" />
      <PageWrapper>
        <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-2"
          >
            <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-4">
              <Moon className="w-6 h-6 text-amber-600" />
            </div>
            <h1 className="font-serif text-2xl font-bold text-text-dark">Rituel de Nuit Anti-Gonflement</h1>
            <p className="text-text-muted italic">2 minutes avant de dormir pour vous réveiller dégonflée</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white border border-border rounded-2xl p-6 shadow-sm"
          >
            <p className="text-text-dark text-sm leading-relaxed">
              Le ventre gonflé du matin n'est pas une fatalité. Il vient de la rétention nocturne et de la fermentation digestive. Ce rituel de 2 minutes active votre drainage lymphatique pendant que vous dormez.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="stylo-card border-t-[3px]"
            style={{ borderColor: '#D4A574' }}
          >
            <h2 className="font-serif text-xl font-bold text-text-dark mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-sm font-bold">1</span>
              La Boisson du Soir
            </h2>
            
            <div className="bg-amber-50 rounded-xl p-4 mb-4">
              <h3 className="font-bold text-amber-900 text-sm mb-2 uppercase tracking-wider">Ingrédients</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-amber-800"><ArrowRight className="w-4 h-4 text-amber-500" /> 200ml d'eau tiède (40°C)</li>
                <li className="flex items-center gap-2 text-sm text-amber-800"><ArrowRight className="w-4 h-4 text-amber-500" /> 1 c.à.c de vinaigre de cidre</li>
                <li className="flex items-center gap-2 text-sm text-amber-800"><ArrowRight className="w-4 h-4 text-amber-500" /> 1 pincée de cannelle</li>
                <li className="flex items-center gap-2 text-sm text-amber-800"><ArrowRight className="w-4 h-4 text-amber-500" /> 1 feuille de menthe fraîche</li>
                <li className="flex items-center gap-2 text-sm text-amber-800"><ArrowRight className="w-4 h-4 text-amber-500" /> 1 c.à.c de miel cru (optionnel)</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-bold text-text-dark text-sm">Préparation :</h3>
              <ol className="list-decimal list-inside space-y-2 text-sm text-text-muted">
                <li>Chauffer l'eau sans bouillir</li>
                <li>Ajouter le vinaigre</li>
                <li>Incorporer cannelle et miel</li>
                <li>Décorer avec la menthe</li>
                <li className="font-semibold text-text-dark">Boire par petites gorgées, 30 min avant le coucher</li>
              </ol>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="stylo-card border-t-[3px]"
            style={{ borderColor: '#D4A574' }}
          >
            <h2 className="font-serif text-xl font-bold text-text-dark mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-sm font-bold">2</span>
              Automassage du Ventre
            </h2>
            <div className="flex items-center gap-2 mb-4 text-amber-600 bg-amber-50 px-3 py-2 rounded-lg w-fit">
              <Clock className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">Durée : 90 secondes</span>
            </div>
            
            <ol className="space-y-3">
              {[
                "Allongée sur le dos, genoux pliés",
                "Frottez vos mains 10 secondes pour les réchauffer",
                "20 cercles lents dans le sens des aiguilles d'une montre autour du nombril",
                "Pression douce sur 4 points (haut, bas, droite, gauche du nombril), 5 secondes chacun",
                "Lissage du haut vers le bas, 10 fois"
              ].map((step, idx) => (
                <li key={idx} className="flex gap-3">
                  <div className="w-6 h-6 rounded bg-gray-100 text-text-muted flex items-center justify-center text-xs font-bold shrink-0">{idx + 1}</div>
                  <p className="text-sm text-text-dark pt-0.5">{step}</p>
                </li>
              ))}
            </ol>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">
              <h3 className="font-serif font-bold text-blue-900 mb-2">3. Position de Sommeil</h3>
              <p className="text-sm text-blue-800 leading-relaxed">
                Dormez sur le <strong>côté gauche</strong>. Cette position favorise la digestion et active la circulation lymphatique pendant la nuit.
              </p>
            </div>
            
            <div className="bg-green-50 border border-green-100 rounded-2xl p-5">
              <h3 className="font-serif font-bold text-green-900 mb-2">4. Au Réveil</h3>
              <p className="text-sm text-green-800 leading-relaxed">
                Grand verre d'eau tiède à jeun. Cela évacue immédiatement ce que le drainage nocturne a préparé.
              </p>
            </div>
          </motion.div>

        </div>
      </PageWrapper>
    </div>
  );
}
