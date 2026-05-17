import { motion } from 'motion/react';
import { AlertTriangle, TrendingUp, CheckCircle2 } from 'lucide-react';
import AppHeader from '../../components/AppHeader';
import PageWrapper from '../../components/PageWrapper';
import { useAuth } from '../../hooks/useAuth';

export default function MaintienAntiYoyoPage() {
  useAuth();

  const signals = [
    { title: "Fringale de sucre à 16h", desc: "Signe que votre insuline devient instable." },
    { title: "Réveil nocturne (vers 3h)", desc: "Le foie est surchargé et tente de se détoxifier." },
    { title: "Ventre gonflé après les repas", desc: "La digestion ralentit, le microbiote s'affaiblit." },
    { title: "Sensation de froid aux extrémités", desc: "La thyroïde ralentit le métabolisme de base." },
    { title: "Brouillard mental le matin", desc: "Inflammation systémique de bas grade." },
    { title: "Constipation (même légère)", desc: "Le transit n'évacue plus les déchets hormonaux." },
    { title: "Prise de +1.5 kg sur la balance", desc: "La limite absolue avant que la graisse ne se fige." }
  ];

  return (
    <div className="min-h-screen stylo-bg">
      <AppHeader showBack title="Anti-Effet Yoyo" />
      <PageWrapper>
        <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-2 mb-6"
          >
            <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-6 h-6 text-red-600" />
            </div>
            <h1 className="font-serif text-2xl font-bold text-text-dark">Les 7 Signaux d'Alerte</h1>
            <p className="text-text-muted italic">Comment bloquer la reprise de poids avant qu'elle ne s'installe</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white border border-border rounded-2xl p-6 shadow-sm"
          >
            <p className="text-text-dark text-sm leading-relaxed">
              L'effet yoyo ne se produit jamais du jour au lendemain. Votre corps vous envoie des signaux discrets des semaines avant que les kilos ne s'affichent sur la balance. Si vous repérez UN SEUL de ces signaux, agissez.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="stylo-card border-t-[3px]"
            style={{ borderColor: '#1E3A8A' }} // dark blue
          >
            <div className="space-y-4">
              {signals.map((signal, idx) => (
                <div key={idx} className="flex gap-3 items-start p-3 bg-gray-50 rounded-xl border border-border">
                  <div className="bg-red-100 text-red-700 font-bold text-xs w-6 h-6 rounded flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-text-dark text-sm">{signal.title}</h3>
                    <p className="text-text-muted text-xs mt-1">{signal.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-blue-50 border border-blue-100 rounded-2xl p-6"
          >
            <h2 className="font-serif text-lg font-bold text-blue-900 mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-blue-600" />
              Plan d'Action Immédiat
            </h2>
            <p className="text-sm text-blue-800 mb-4">
              Dès l'apparition d'un de ces signaux :
            </p>
            <ol className="space-y-3 text-sm text-blue-800 list-decimal pl-5">
              <li className="font-medium">Arrêtez le sucre raffiné pendant 3 jours.</li>
              <li className="font-medium">Reprenez la recette du Stylo Maison en "Dosage Fort" (2 c.à.s) au lieu du maintien.</li>
              <li className="font-medium">Faites 12h de jeûne nocturne strict (ex: 20h - 8h).</li>
            </ol>
            <div className="mt-5 bg-white p-4 rounded-xl text-center shadow-sm">
              <p className="text-xs text-text-muted font-bold uppercase tracking-wider mb-1">Si le signal persiste ou si +1.5kg</p>
              <p className="text-sm font-bold text-blue-600">Passez immédiatement au protocole "Reset 48H"</p>
            </div>
          </motion.div>

        </div>
      </PageWrapper>
    </div>
  );
}
