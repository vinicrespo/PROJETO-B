import { useState } from 'react';
import { motion } from 'motion/react';
import { Layers, Check, Sparkles, Droplets } from 'lucide-react';
import AppHeader from '../../components/AppHeader';
import PageWrapper from '../../components/PageWrapper';
import { useAuth } from '../../hooks/useAuth';
import { useProgramProgress } from '../../hooks/useProgramProgress';
import { useToast } from '../../components/Toast';

const TASKS = [
  { id: 'hydration', icon: Droplets, title: 'Hydratation Collagénique', desc: 'Boire 2.5L d\'eau avec 1 pincée de vitamine C (ou citron)' },
  { id: 'protein', icon: Check, title: 'Quota Protéines Atteint', desc: '1.5g par kilo de poids corporel pour nourrir la peau' },
  { id: 'massage', icon: Sparkles, title: 'Massage Palper-Rouler', desc: '5 min sur les zones critiques avec l\'huile de fermeté' },
  { id: 'exercise', icon: Layers, title: 'Contraction Isométrique', desc: '10 min de renforcement musculaire lent' }
];

export default function AntiFlasquePlanPage() {
  useAuth();
  const { currentDay, completedDays, toggleDayComplete } = useProgramProgress('anti_flasque', 30);
  const [expandedDay, setExpandedDay] = useState<number | null>(null);
  
  // Pour ce programme, on veut stocker l'état des sous-tâches pour chaque jour.
  // Utilisation d'un state local simple pour la démo, en production on l'ajouterait au hook useProgramProgress.
  const [dailyTasks, setDailyTasks] = useState<Record<number, string[]>>({});
  const { showToast } = useToast();

  const handleToggleSubtask = (day: number, taskId: string) => {
    const currentTasks = dailyTasks[day] || [];
    let newTasks;
    if (currentTasks.includes(taskId)) {
      newTasks = currentTasks.filter(t => t !== taskId);
    } else {
      newTasks = [...currentTasks, taskId];
    }
    
    setDailyTasks(prev => ({ ...prev, [day]: newTasks }));
    
    // Si toutes les tâches sont complétées et que le jour n'est pas encore marqué complété
    if (newTasks.length === TASKS.length && !completedDays.includes(day)) {
      toggleDayComplete(day);
      showToast(`Jour ${day} parfaitement accompli !`);
    } else if (newTasks.length < TASKS.length && completedDays.includes(day)) {
      toggleDayComplete(day); // un-toggle
    }
  };

  const handleToggleDay = (day: number) => {
    toggleDayComplete(day);
    if (!completedDays.includes(day)) {
      // Marquer toutes les sous-tâches comme faites
      setDailyTasks(prev => ({ ...prev, [day]: TASKS.map(t => t.id) }));
      showToast(`Jour ${day} validé !`);
    } else {
      setDailyTasks(prev => ({ ...prev, [day]: [] }));
    }
  };

  return (
    <div className="min-h-screen stylo-bg">
      <AppHeader showBack title="Plan Raffermissement 30 Jours" />
      <PageWrapper>
        <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-2 mb-6"
          >
            <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center mx-auto mb-4">
              <Layers className="w-6 h-6" style={{ color: '#C19A8C' }} />
            </div>
            <h1 className="font-serif text-2xl font-bold text-text-dark">Le Plan Anti-Peau Flasque</h1>
            <p className="text-text-muted italic">30 jours pour redensifier votre peau</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-stone-50 border border-stone-200 rounded-2xl p-6 shadow-sm mb-6 text-center"
          >
            <p className="text-stone-800 text-sm font-medium mb-2">
              Le secret d'une peau ferme après la perte de poids n'est pas la chirurgie.
            </p>
            <p className="text-stone-600 text-sm">
              C'est la constance. Répétez ces 4 actions cliniques chaque jour pendant 30 jours pour relancer la production naturelle de collagène et d'élastine.
            </p>
          </motion.div>

          {/* Progress */}
          <div className="stylo-card p-5 border-t-[3px]" style={{ borderColor: '#C19A8C' }}>
            <div className="flex items-center justify-between mb-2">
              <p className="font-semibold text-text-dark text-sm">{completedDays.length}/30 jours complétés</p>
              <p className="font-bold text-sm" style={{ color: '#C19A8C' }}>{Math.round((completedDays.length / 30) * 100)}%</p>
            </div>
            <div className="h-2 bg-border rounded-full overflow-hidden">
              <motion.div className="h-full rounded-full" style={{ backgroundColor: '#C19A8C' }} animate={{ width: `${(completedDays.length / 30) * 100}%` }} />
            </div>
          </div>

          {/* Grid de 30 jours (divisée en 4 semaines) */}
          <div className="space-y-6">
            {[0, 1, 2, 3, 4].map(weekIndex => {
              const startDay = weekIndex * 7 + 1;
              if (startDay > 30) return null;
              const daysInWeek = Math.min(7, 30 - startDay + 1);
              
              return (
                <div key={weekIndex} className="space-y-3">
                  <h3 className="font-serif font-bold text-stone-800 text-sm pl-1 uppercase tracking-wider">
                    Semaine {weekIndex + 1}
                  </h3>
                  <div className="grid grid-cols-7 gap-2">
                    {Array.from({ length: daysInWeek }, (_, i) => {
                      const day = startDay + i;
                      const isCompleted = completedDays.includes(day);
                      const isCurrent = day === currentDay;
                      
                      return (
                        <button
                          key={day}
                          onClick={() => setExpandedDay(expandedDay === day ? null : day)}
                          className={`aspect-square rounded-xl flex flex-col items-center justify-center text-sm font-semibold transition-all duration-200 border ${
                            isCompleted
                              ? 'text-white border-transparent'
                              : isCurrent
                              ? 'bg-stone-100 text-stone-800 border-stone-400 ring-2 ring-stone-400/20'
                              : 'bg-white text-text-muted border-border hover:border-stone-300'
                          }`}
                          style={isCompleted ? { backgroundColor: '#C19A8C' } : {}}
                        >
                          <span className="text-xs opacity-70">J</span>
                          <span>{day}</span>
                          {isCompleted && <Check className="w-3 h-3 mt-0.5" />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Expanded day */}
          {expandedDay && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="stylo-card overflow-hidden mt-6 border-t-[3px]"
              style={{ borderColor: '#C19A8C' }}
            >
              <h3 className="font-serif text-lg font-bold text-text-dark mb-4 text-center">
                Checklist du Jour {expandedDay}
              </h3>

              <div className="space-y-3 mb-6">
                {TASKS.map((task, idx) => {
                  const Icon = task.icon;
                  const isDone = (dailyTasks[expandedDay] || []).includes(task.id);
                  
                  return (
                    <button
                      key={idx}
                      onClick={() => handleToggleSubtask(expandedDay, task.id)}
                      className={`w-full text-left flex items-start gap-3 p-4 rounded-xl border transition-all ${
                        isDone 
                          ? 'bg-stone-50 border-stone-300' 
                          : 'bg-white border-border hover:border-stone-300'
                      }`}
                    >
                      <div className={`w-6 h-6 rounded flex items-center justify-center flex-shrink-0 mt-0.5 border ${
                        isDone ? 'bg-[#C19A8C] border-[#C19A8C]' : 'border-stone-300 bg-white'
                      }`}>
                        {isDone && <Check className="w-4 h-4 text-white" />}
                      </div>
                      <div>
                        <h4 className={`font-bold text-sm ${isDone ? 'text-stone-800 line-through opacity-70' : 'text-text-dark'}`}>
                          {task.title}
                        </h4>
                        <p className={`text-xs mt-1 ${isDone ? 'text-stone-500 opacity-70' : 'text-text-muted'}`}>
                          {task.desc}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>

              <button
                onClick={() => handleToggleDay(expandedDay)}
                className={`w-full py-3 rounded-xl font-semibold text-sm transition-all ${
                  completedDays.includes(expandedDay)
                    ? 'bg-gray-100 text-text-muted hover:bg-gray-200'
                    : 'text-white shadow-md'
                }`}
                style={!completedDays.includes(expandedDay) ? { backgroundColor: '#C19A8C' } : {}}
              >
                {completedDays.includes(expandedDay) ? 'Réinitialiser ce jour' : 'Tout marquer comme fait'}
              </button>
            </motion.div>
          )}

        </div>
      </PageWrapper>
    </div>
  );
}
