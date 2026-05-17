import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, TrendingDown, ShieldCheck } from 'lucide-react';
import AppHeader from '../components/AppHeader';
import PageWrapper from '../components/PageWrapper';
import { useAuth, useOnboardingGuard } from '../hooks/useAuth';
import { useProfile } from '../hooks/useProfile';
import { dashboardCards } from '../config/dashboardCards';

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

          {/* Module cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {dashboardCards.filter(c => c.available).map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.05 }}
                  className={card.featured ? 'sm:col-span-2 lg:col-span-3' : ''}
                >
                  <Link to={card.route} className="block">
                    <div className={`stylo-card h-full transition-all duration-200 hover:scale-[1.02] hover:shadow-lg group ${card.featured ? 'bg-gradient-to-r from-accent-green/40 to-white border-primary/20' : ''}`}>
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-xl ${card.featured ? 'bg-primary/10' : 'bg-gray-50'} group-hover:bg-primary/10 transition-colors`}>
                          <Icon className={`w-6 h-6 ${card.featured ? 'text-primary' : 'text-text-muted group-hover:text-primary'} transition-colors`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1 flex-wrap">
                            <h3 className="font-serif text-lg font-bold text-text-dark">{card.title}</h3>
                            {card.badge && (
                              <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${card.badgeColor === 'gold' ? 'bg-gold/20 text-gold' : 'bg-accent-green text-primary'}`}>
                                {card.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-text-muted text-sm leading-relaxed">{card.description}</p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-border group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </PageWrapper>
    </div>
  );
}
