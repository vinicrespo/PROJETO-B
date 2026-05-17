import { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Check, Shield } from 'lucide-react';
import AppHeader from '../../components/AppHeader';
import PageWrapper from '../../components/PageWrapper';
import { useAuth } from '../../hooks/useAuth';
import { useProgramProgress } from '../../hooks/useProgramProgress';
import { useToast } from '../../components/Toast';

export default function MaintienPlanPage() {
  useAuth();
  // On utilise maxDays = 12 (pour 12 mois)
  const { currentDay: currentMonth, completedDays: completedMonths, toggleDayComplete: toggleMonthComplete } = useProgramProgress('maintien', 12);
  const [expandedMonth, setExpandedMonth] = useState<number | null>(null);
  const { showToast } = useToast();

  const handleToggle = (month: number) => {
    toggleMonthComplete(month);
    if (!completedMonths.includes(month)) {
      showToast(`Mois ${month} validé avec succès !`);
    }
  };

  return (
    <div className="min-h-screen stylo-bg">
      <AppHeader showBack title="Plan Maintien 12 Mois" />
      <PageWrapper>
        <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-2 mb-6"
          >
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6" style={{ color: '#1E3A8A' }} />
            </div>
            <h1 className="font-serif text-2xl font-bold text-text-dark">Calendrier de Stabilisation</h1>
            <p className="text-text-muted italic">Verrouillez votre nouveau poids mois par mois</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white border border-border rounded-2xl p-6 shadow-sm mb-6"
          >
            <p className="text-text-dark text-sm leading-relaxed text-center">
              Votre corps a besoin d'environ 12 mois pour "mémoriser" votre nouveau poids de forme et arrêter d'essayer de stocker de la graisse. Cochez chaque mois validé.
            </p>
          </motion.div>

          {/* Progress */}
          <div className="stylo-card p-5 border-t-[3px]" style={{ borderColor: '#1E3A8A' }}>
            <div className="flex items-center justify-between mb-2">
              <p className="font-semibold text-text-dark text-sm">{completedMonths.length}/12 mois stabilisés</p>
              <p className="font-bold text-sm" style={{ color: '#1E3A8A' }}>{Math.round((completedMonths.length / 12) * 100)}%</p>
            </div>
            <div className="h-2 bg-border rounded-full overflow-hidden">
              <motion.div className="h-full rounded-full" style={{ backgroundColor: '#1E3A8A' }} animate={{ width: `${(completedMonths.length / 12) * 100}%` }} />
            </div>
          </div>

          {/* Grid de 12 Mois */}
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
            {Array.from({ length: 12 }, (_, i) => {
              const month = i + 1;
              const isCompleted = completedMonths.includes(month);
              const isCurrent = month === currentMonth;
              
              return (
                <button
                  key={month}
                  onClick={() => setExpandedMonth(expandedMonth === month ? null : month)}
                  className={`aspect-square rounded-xl flex flex-col items-center justify-center text-sm font-semibold transition-all duration-200 border ${
                    isCompleted
                      ? 'text-white border-transparent'
                      : isCurrent
                      ? 'bg-blue-50 text-blue-900 border-blue-400 ring-2 ring-blue-400/20'
                      : 'bg-white text-text-muted border-border hover:border-blue-300'
                  }`}
                  style={isCompleted ? { backgroundColor: '#1E3A8A' } : {}}
                >
                  <span className="text-xs opacity-70 mb-1">Mois</span>
                  <span className="text-xl">{month}</span>
                  {isCompleted && <Check className="w-4 h-4 mt-1" />}
                </button>
              );
            })}
          </div>

          {/* Expanded Month */}
          {expandedMonth && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="stylo-card overflow-hidden mt-6 border-t-[3px]"
              style={{ borderColor: '#1E3A8A' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-5 h-5 text-blue-800" />
                <h3 className="font-serif text-lg font-bold text-text-dark">
                  Bilan du Mois {expandedMonth}
                </h3>
              </div>

              <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-5">
                <p className="text-sm text-blue-900 font-medium mb-3">Pour valider ce mois, vous devez avoir :</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-blue-800">
                    <Check className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                    <span>Maintenu votre poids à +/- 1.5 kg</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-blue-800">
                    <Check className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                    <span>Pris la Recette d'Entretien au moins 5 jours/semaine</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-blue-800">
                    <Check className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                    <span>Appliqué le "Reset 48H" en cas d'excès</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => handleToggle(expandedMonth)}
                className={`w-full py-3 rounded-xl font-semibold text-sm transition-all ${
                  completedMonths.includes(expandedMonth)
                    ? 'bg-gray-100 text-text-muted hover:bg-gray-200'
                    : 'text-white shadow-md'
                }`}
                style={!completedMonths.includes(expandedMonth) ? { backgroundColor: '#1E3A8A' } : {}}
              >
                {completedMonths.includes(expandedMonth) ? 'Annuler la validation' : 'Valider ce mois'}
              </button>
            </motion.div>
          )}

        </div>
      </PageWrapper>
    </div>
  );
}
