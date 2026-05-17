import { motion } from 'motion/react';
import { BrainCircuit, Info } from 'lucide-react';
import AppHeader from '../../components/AppHeader';
import PageWrapper from '../../components/PageWrapper';
import { useAuth } from '../../hooks/useAuth';

export default function MaintienPsychologiePage() {
  useAuth();

  return (
    <div className="min-h-screen stylo-bg">
      <AppHeader showBack title="Psychologie de la Minceur" />
      <PageWrapper>
        <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-2 mb-6"
          >
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
              <BrainCircuit className="w-6 h-6 text-blue-600" />
            </div>
            <h1 className="font-serif text-2xl font-bold text-text-dark">Reprogrammez votre Cerveau</h1>
            <p className="text-text-muted italic">Acceptez votre nouvelle identité</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white border border-border rounded-2xl p-6 shadow-sm"
          >
            <p className="text-text-dark text-sm leading-relaxed">
              Le plus grand danger de l'effet yoyo n'est pas dans votre assiette, il est dans votre tête. Votre cerveau a été habitué pendant des années à l'identité "Je suis en surpoids". Il va tout faire pour vous saboter et vous ramener à votre zone de confort si vous ne le reprogrammez pas.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="stylo-card border-t-[3px]"
            style={{ borderColor: '#1E3A8A' }}
          >
            <h2 className="font-serif text-xl font-bold text-text-dark mb-4">Les 3 Lois de l'Identité</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-xl border border-border">
                <h3 className="font-bold text-text-dark text-sm mb-1">1. Videz votre dressing</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  Jetez TOUS vos anciens vêtements trop grands. Garder un "pantalon de secours" envoie un message clair à votre subconscient : "Je sais que je vais reprendre du poids". Brûlez les ponts, vous ne retournerez pas en arrière.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl border border-border">
                <h3 className="font-bold text-text-dark text-sm mb-1">2. Changez votre vocabulaire</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  Ne dites plus "Je ne PEUX PAS manger ça" (qui implique une restriction et crée de la frustration). Dites "Je ne VEUX PAS manger ça" (qui implique du pouvoir et un choix conscient d'une personne saine).
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl border border-border">
                <h3 className="font-bold text-text-dark text-sm mb-1">3. Le Syndrome de l'Imposteur Mince</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  Quand on vous complimente, ne vous justifiez pas. Ne dites pas "Oh c'est juste mon régime". Dites simplement "Merci". Acceptez que votre nouveau corps est la nouvelle norme.
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
              <Info className="w-5 h-5 text-blue-600" />
              L'Exercice du Miroir
            </h3>
            <p className="text-sm text-blue-800">
              Pendant 21 jours, regardez-vous dans le miroir chaque matin et répétez : "Je mérite ce corps, je suis capable de le maintenir". C'est scientifiquement prouvé pour recâbler les voies neuronales de l'estime de soi.
            </p>
          </motion.div>
        </div>
      </PageWrapper>
    </div>
  );
}
