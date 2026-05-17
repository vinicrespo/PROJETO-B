import { motion } from 'motion/react';
import { Wind, Activity, Clock } from 'lucide-react';
import AppHeader from '../../components/AppHeader';
import PageWrapper from '../../components/PageWrapper';
import { useAuth } from '../../hooks/useAuth';

export default function DetoxRespirationPage() {
  useAuth();

  return (
    <div className="min-h-screen stylo-bg">
      <AppHeader showBack title="Respiration Lymphatique" />
      <PageWrapper>
        <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-2 mb-6"
          >
            <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-4">
              <Wind className="w-6 h-6 text-amber-600" />
            </div>
            <h1 className="font-serif text-2xl font-bold text-text-dark">La Respiration Lymphatique</h1>
            <p className="text-text-muted italic">Pompez vos toxines par le souffle</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white border border-border rounded-2xl p-6 shadow-sm"
          >
            <p className="text-text-dark text-sm leading-relaxed">
              Le système lymphatique est l'égout de votre corps, mais contrairement au sang, il n'a pas de cœur pour le pomper. C'est le mouvement de votre diaphragme (la respiration profonde) qui fait circuler la lymphe et évacue les graisses mortes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="stylo-card border-t-[3px]"
            style={{ borderColor: '#D4A574' }}
          >
            <h2 className="font-serif text-xl font-bold text-text-dark mb-4">Le Protocole "4-7-8" Modifié</h2>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-amber-50 flex items-center justify-center flex-shrink-0 text-2xl font-bold text-amber-600">
                  4s
                </div>
                <div>
                  <h3 className="font-bold text-text-dark">Inspiration par le nez</h3>
                  <p className="text-sm text-text-muted">Gonflez le ventre au maximum. Sentez votre diaphragme descendre.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 text-2xl font-bold text-amber-700">
                  7s
                </div>
                <div>
                  <h3 className="font-bold text-text-dark">Rétention</h3>
                  <p className="text-sm text-text-muted">Bloquez l'air. C'est ici que la pression interne pousse la lymphe vers le haut.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-amber-50 flex items-center justify-center flex-shrink-0 text-2xl font-bold text-amber-600">
                  8s
                </div>
                <div>
                  <h3 className="font-bold text-text-dark">Expiration par la bouche</h3>
                  <p className="text-sm text-text-muted">Expirez lentement en rentrant le ventre. Poussez tout l'air dehors.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <div className="bg-[#FFFDF5] border border-[#D4A574]/30 rounded-2xl p-5">
              <h3 className="font-serif font-bold text-amber-900 mb-2 flex items-center gap-2">
                <Activity className="w-5 h-5 text-amber-500" />
                La Dose Minimum
              </h3>
              <p className="text-amber-800 text-sm">
                Faites <strong>10 cycles</strong> consécutifs (environ 3 minutes).
              </p>
            </div>
            <div className="stylo-card p-5">
              <h3 className="font-serif font-bold text-text-dark mb-2 flex items-center gap-2">
                <Clock className="w-5 h-5 text-text-muted" />
                Le Moment Parfait
              </h3>
              <p className="text-text-muted text-sm">
                Le matin à jeun, avant de boire votre Stylo Maison, ou le soir dans votre lit pour abaisser le cortisol.
              </p>
            </div>
          </motion.div>
        </div>
      </PageWrapper>
    </div>
  );
}
