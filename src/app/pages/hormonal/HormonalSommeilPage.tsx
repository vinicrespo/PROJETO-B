import { motion } from 'motion/react';
import { Moon, Star, BellOff } from 'lucide-react';
import AppHeader from '../../components/AppHeader';
import PageWrapper from '../../components/PageWrapper';
import { useAuth } from '../../hooks/useAuth';

export default function HormonalSommeilPage() {
  useAuth();

  return (
    <div className="min-h-screen stylo-bg">
      <AppHeader showBack title="Routine Sommeil Profond" />
      <PageWrapper>
        <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-2 mb-6"
          >
            <div className="w-12 h-12 rounded-full bg-violet-100 flex items-center justify-center mx-auto mb-4">
              <Moon className="w-6 h-6 text-violet-600" />
            </div>
            <h1 className="font-serif text-2xl font-bold text-text-dark">Sommeil Réparateur d'Hormones</h1>
            <p className="text-text-muted italic">La fenêtre de 22h à 2h du matin</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white border border-border rounded-2xl p-6 shadow-sm"
          >
            <p className="text-text-dark text-sm leading-relaxed">
              Vos hormones de jeunesse (GH) et de minceur (Leptine) se régénèrent exclusivement pendant le sommeil profond. Si vous manquez la fenêtre de 22h-2h, aucun régime ne fonctionnera car votre corps sera en état d'alerte (Cortisol élevé) le lendemain.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="stylo-card border-t-[3px]"
            style={{ borderColor: '#8B5CF6' }} // violet
          >
            <h2 className="font-serif text-xl font-bold text-text-dark mb-4">La Routine du Coucher</h2>
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="bg-violet-100 text-violet-700 font-bold px-3 py-1 rounded text-sm w-16 text-center shrink-0">H - 2</div>
                <div>
                  <h3 className="font-bold text-text-dark text-sm">Extinction Digitale</h3>
                  <p className="text-sm text-text-muted">Coupez les écrans bleus (téléphone, TV). La lumière bleue détruit la mélatonine, l'hormone qui endort le cerveau.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-violet-100 text-violet-700 font-bold px-3 py-1 rounded text-sm w-16 text-center shrink-0">H - 1</div>
                <div>
                  <h3 className="font-bold text-text-dark text-sm">Baisse de la température</h3>
                  <p className="text-sm text-text-muted">Votre chambre doit être à 18°C. Le corps a besoin de se refroidir pour déclencher le sommeil profond.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-violet-100 text-violet-700 font-bold px-3 py-1 rounded text-sm w-16 text-center shrink-0">H - 0</div>
                <div>
                  <h3 className="font-bold text-text-dark text-sm">L'Obscurité Totale</h3>
                  <p className="text-sm text-text-muted">Aucune veilleuse, aucun LED de télévision. Portez un masque de sommeil si vos volets laissent passer la lumière.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <div className="bg-[#FAF5FF] border border-violet-200 rounded-2xl p-5">
              <h3 className="font-serif font-bold text-violet-900 mb-2 flex items-center gap-2">
                <Star className="w-5 h-5 text-violet-500" />
                L'Astuce Tisane
              </h3>
              <p className="text-violet-800 text-sm">
                Une infusion de Passiflore ou de Valériane 1h avant de dormir agit comme un sédatif naturel sur le système nerveux central.
              </p>
            </div>
            <div className="bg-gray-50 border border-border rounded-2xl p-5">
              <h3 className="font-serif font-bold text-text-dark mb-2 flex items-center gap-2">
                <BellOff className="w-5 h-5 text-text-muted" />
                Le Réveil
              </h3>
              <p className="text-text-muted text-sm">
                Exposez-vous à la lumière du jour dès le réveil (ouvrez la fenêtre). Cela stoppe la mélatonine et lance le métabolisme.
              </p>
            </div>
          </motion.div>
        </div>
      </PageWrapper>
    </div>
  );
}
