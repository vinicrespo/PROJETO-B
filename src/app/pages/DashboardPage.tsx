import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, TrendingDown, ShieldCheck } from 'lucide-react';
import AppHeader from '../components/AppHeader';
import PageWrapper from '../components/PageWrapper';
import { useAuth, useOnboardingGuard } from '../hooks/useAuth';
import { useProfile } from '../hooks/useProfile';
import { programs } from '../config/programs';
import ProgramSection from '../components/ProgramSection';

export default function DashboardPage() {
  useAuth();
  useOnboardingGuard();
  const { getProfile, getProtocoleDay, getCompletedDays } = useProfile();
  const profile = getProfile();
  const currentDay = getProtocoleDay();
  const completedDays = getCompletedDays();

  if (!profile) return null;

  const weightLost = profile.poids_actuel - profile.poids_ideal;
  const progressPercent = Math.min((completedDays.length / 21) * 100, 100);

  return (
    <div className="min-h-screen stylo-bg">
      <AppHeader />
      <PageWrapper>
        <div className="max-w-5xl mx-auto px-4 py-6 space-y-6">
          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="stylo-card p-6 md:p-8 bg-gradient-to-br from-white to-accent-green/30"
          >
            <div className="inline-flex items-center gap-1.5 bg-accent-green/80 text-primary px-3 py-1.5 rounded-lg mb-4 text-xs font-semibold">
              <ShieldCheck className="w-4 h-4" />
              Accès à vie • Mises à jour mensuelles incluses
            </div>
            
            <h1 className="font-serif text-2xl md:text-3xl font-bold text-text-dark mb-1">
              Bienvenue dans votre programme
            </h1>
            <p className="text-text-muted text-sm mb-6">Votre transformation personnalisée commence ici</p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white rounded-xl p-4 border border-border">
                <p className="text-text-muted text-xs mb-1">Poids actuel</p>
                <p className="text-2xl font-bold text-text-dark">{profile.poids_actuel} <span className="text-sm font-normal text-text-muted">kg</span></p>
              </div>
              <div className="bg-white rounded-xl p-4 border border-border">
                <p className="text-text-muted text-xs mb-1">Objectif</p>
                <p className="text-2xl font-bold text-primary">{profile.poids_ideal} <span className="text-sm font-normal text-text-muted">kg</span></p>
              </div>
            </div>

            <div className="flex items-center gap-2 mb-2">
              <TrendingDown className="w-4 h-4 text-primary" />
              <p className="text-sm font-medium text-text-dark">Objectif : -{weightLost} kg</p>
            </div>
            <div className="h-2 bg-border rounded-full overflow-hidden mb-2">
              <motion.div
                className="h-full bg-primary rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progressPercent}%` }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </div>
            <p className="text-text-muted text-xs">Jour {currentDay}/21 du protocole — {completedDays.length} jour{completedDays.length !== 1 ? 's' : ''} complété{completedDays.length !== 1 ? 's' : ''}</p>
          </motion.div>

          {/* Module cards (Programs) */}
          <div className="space-y-12 mt-8">
            {programs.map((program, index) => (
              <ProgramSection key={program.id} program={program} index={index} />
            ))}
          </div>
        </div>
      </PageWrapper>
    </div>
  );
}
