import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Settings, LogOut, RefreshCw } from 'lucide-react';
import AppHeader from '../components/AppHeader';
import PageWrapper from '../components/PageWrapper';
import { useAuth } from '../hooks/useAuth';
import { useProfile, type UserProfile } from '../hooks/useProfile';
import { useToast } from '../components/Toast';

const CALC_MESSAGES = [
  'Recalcul de votre profil métabolique...',
  'Mise à jour des dosages...',
  'Nouvelle formule générée',
];

export default function ProfilPage() {
  useAuth();
  const navigate = useNavigate();
  const { getProfile, updateProfile, logout } = useProfile();
  const { showToast } = useToast();

  const profile = getProfile();
  const email = localStorage.getItem('stylo_user_email') || '';

  const [poids, setPoids] = useState(profile?.poids_actuel || 80);
  const [poidsIdeal, setPoidsIdeal] = useState(profile?.poids_ideal || 65);
  const [editing, setEditing] = useState(false);
  const [recalculating, setRecalculating] = useState(false);
  const [calcIndex, setCalcIndex] = useState(0);

  if (!profile) return null;

  const handleSave = () => {
    updateProfile({ poids_actuel: poids, poids_ideal: poidsIdeal });
    setEditing(false);
    showToast('Profil mis à jour avec succès');
  };

  const handleRecalculate = () => {
    setRecalculating(true);
    setCalcIndex(0);
    const interval = setInterval(() => {
      setCalcIndex(prev => {
        if (prev < CALC_MESSAGES.length - 1) return prev + 1;
        return prev;
      });
    }, 1000);

    setTimeout(() => {
      clearInterval(interval);
      updateProfile({ poids_actuel: poids, poids_ideal: poidsIdeal });
      setRecalculating(false);
      showToast('Formule recalculée avec vos nouvelles données');
    }, 3000);
  };

  const handleLogout = () => {
    logout();
    navigate('/app');
  };

  const genreLabels: Record<string, string> = {
    Femme: 'Femme',
    Homme: 'Homme',
    Autre: 'Autre',
  };

  const activityLabels: Record<string, string> = {
    sedentaire: 'Sédentaire',
    leger: 'Légèrement actif',
    modere: 'Modérément actif',
    actif: 'Très actif',
  };

  if (recalculating) {
    return (
      <div className="min-h-screen stylo-bg flex flex-col items-center justify-center px-4">
        <div className="relative w-14 h-14 mb-8">
          <div className="absolute inset-0 rounded-full border-4 border-border" />
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary animate-spin-slow" />
        </div>
        <AnimatePresence mode="wait">
          <motion.p
            key={calcIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-text-muted text-center flex items-center gap-2"
          >
            {CALC_MESSAGES[calcIndex]}
            {calcIndex === CALC_MESSAGES.length - 1 && <span className="text-primary font-semibold">&#10003;</span>}
          </motion.p>
        </AnimatePresence>
      </div>
    );
  }

  const sliderProgress = (val: number, min: number, max: number) =>
    `${((val - min) / (max - min)) * 100}%`;

  return (
    <div className="min-h-screen stylo-bg">
      <AppHeader showBack title="Mon Profil" />
      <PageWrapper>
        <div className="max-w-lg mx-auto px-4 py-6 space-y-6">
          {/* User info */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="stylo-card">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                {email.charAt(0).toUpperCase()}
              </div>
              <div>
                <p className="font-semibold text-text-dark">{email}</p>
                <p className="text-text-muted text-xs">Membre Stylo Maison</p>
              </div>
            </div>
          </motion.div>

          {/* Profile data */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="stylo-card">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-serif text-lg font-bold text-text-dark flex items-center gap-2">
                <Settings className="w-5 h-5 text-text-muted" />
                Vos données
              </h2>
              {!editing && (
                <button onClick={() => setEditing(true)} className="text-primary text-sm font-semibold hover:underline">
                  Modifier
                </button>
              )}
            </div>

            <div className="space-y-3">
              <div className="flex justify-between py-2 border-b border-border">
                <span className="text-text-muted text-sm">Genre</span>
                <span className="text-text-dark text-sm font-medium">{genreLabels[profile.genre] || profile.genre}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border">
                <span className="text-text-muted text-sm">Âge</span>
                <span className="text-text-dark text-sm font-medium">{profile.age} ans</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border">
                <span className="text-text-muted text-sm">Taille</span>
                <span className="text-text-dark text-sm font-medium">{profile.taille} cm</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border">
                <span className="text-text-muted text-sm">Activité</span>
                <span className="text-text-dark text-sm font-medium">{activityLabels[profile.activite] || profile.activite}</span>
              </div>

              {editing ? (
                <>
                  <div className="py-3">
                    <label className="text-text-muted text-sm mb-2 block">Poids actuel : <strong className="text-primary">{poids} kg</strong></label>
                    <input
                      type="range" min={40} max={200} value={poids}
                      onChange={e => setPoids(Number(e.target.value))}
                      className="stylo-slider"
                      style={{ '--progress': sliderProgress(poids, 40, 200) } as React.CSSProperties}
                    />
                  </div>
                  <div className="py-3">
                    <label className="text-text-muted text-sm mb-2 block">Poids idéal : <strong className="text-primary">{poidsIdeal} kg</strong></label>
                    <input
                      type="range" min={40} max={150} value={poidsIdeal}
                      onChange={e => setPoidsIdeal(Number(e.target.value))}
                      className="stylo-slider"
                      style={{ '--progress': sliderProgress(poidsIdeal, 40, 150) } as React.CSSProperties}
                    />
                    {poidsIdeal >= poids && (
                      <p className="text-danger text-xs mt-1">L'objectif doit être inférieur au poids actuel</p>
                    )}
                  </div>
                  <div className="flex gap-3 pt-2">
                    <button onClick={() => setEditing(false)} className="flex-1 py-3 rounded-xl border border-border text-text-dark font-semibold text-sm hover:bg-gray-50">
                      Annuler
                    </button>
                    <button onClick={handleSave} disabled={poidsIdeal >= poids} className="stylo-btn flex-1 !py-3 text-sm">
                      Enregistrer
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-text-muted text-sm">Poids actuel</span>
                    <span className="text-text-dark text-sm font-medium">{profile.poids_actuel} kg</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-text-muted text-sm">Poids idéal</span>
                    <span className="text-primary text-sm font-medium">{profile.poids_ideal} kg</span>
                  </div>
                </>
              )}
            </div>
          </motion.div>

          {/* Recalculate */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <button onClick={handleRecalculate} className="stylo-card w-full flex items-center gap-3 hover:border-primary/30 transition-colors">
              <div className="p-2 rounded-xl bg-accent-green">
                <RefreshCw className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-text-dark text-sm">Refaire mon calcul personnalisé</p>
                <p className="text-text-muted text-xs">Recalcule votre formule avec vos données actuelles</p>
              </div>
            </button>
          </motion.div>

          {/* Logout */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <button onClick={handleLogout} className="w-full py-4 rounded-xl border border-danger/20 text-danger font-semibold flex items-center justify-center gap-2 hover:bg-red-50 transition-colors">
              <LogOut className="w-5 h-5" />
              Déconnexion
            </button>
          </motion.div>

          <p className="text-text-muted text-xs text-center pt-4">
            © 2026 Stylo Maison App. Tous droits réservés.
          </p>
        </div>
      </PageWrapper>
    </div>
  );
}
