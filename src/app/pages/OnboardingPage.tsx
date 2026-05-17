import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Leaf } from 'lucide-react';
import { useProfile, type UserProfile } from '../hooks/useProfile';

const CALC_MESSAGES = [
  'Analyse de votre profil métabolique...',
  'Calcul des dosages optimaux...',
  'Génération de votre formule personnalisée...',
  'Votre Stylo Maison est prêt',
];

const ACTIVITIES = [
  { value: 'sedentaire', label: 'Sédentaire', desc: 'Peu ou pas d\'exercice' },
  { value: 'leger', label: 'Légèrement actif', desc: '1-2 fois par semaine' },
  { value: 'modere', label: 'Modérément actif', desc: '3-4 fois par semaine' },
  { value: 'actif', label: 'Très actif', desc: '5+ fois par semaine' },
];

export default function OnboardingPage() {
  const [step, setStep] = useState(1);
  const [genre, setGenre] = useState('');
  const [age, setAge] = useState(45);
  const [taille, setTaille] = useState(165);
  const [poids, setPoids] = useState(85);
  const [poidsIdeal, setPoidsIdeal] = useState(65);
  const [activite, setActivite] = useState('');
  const [calculating, setCalculating] = useState(false);
  const [calcIndex, setCalcIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const navigate = useNavigate();
  const { saveProfile } = useProfile();

  useEffect(() => {
    if (!localStorage.getItem('stylo_user_email')) {
      navigate('/app', { replace: true });
    }
  }, [navigate]);

  const totalSteps = 6;
  const canNext = () => {
    if (step === 1) return !!genre;
    if (step === 5) return poidsIdeal < poids;
    if (step === 6) return !!activite;
    return true;
  };

  const handleNext = () => {
    if (step < totalSteps) {
      setDirection(1);
      setStep(step + 1);
    } else {
      startCalculation();
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setDirection(-1);
      setStep(step - 1);
    }
  };

  const startCalculation = () => {
    setCalculating(true);
    setCalcIndex(0);
    const interval = setInterval(() => {
      setCalcIndex(prev => {
        if (prev < CALC_MESSAGES.length - 1) return prev + 1;
        return prev;
      });
    }, 1000);

    setTimeout(() => {
      clearInterval(interval);
      const profile: UserProfile = {
        genre,
        age,
        taille,
        poids_actuel: poids,
        poids_ideal: poidsIdeal,
        activite,
      };
      saveProfile(profile);
      navigate('/app/dashboard', { replace: true });
    }, 4000);
  };

  if (calculating) {
    return (
      <div className="min-h-screen stylo-bg flex flex-col items-center justify-center px-4">
        <Leaf className="w-10 h-10 text-primary mb-8" />
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

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-text-dark text-center">Quel est votre genre ?</h2>
            <div className="grid grid-cols-3 gap-3 mt-6">
              {['Femme', 'Homme', 'Autre'].map(g => (
                <button
                  key={g}
                  onClick={() => setGenre(g)}
                  className={`stylo-card p-4 text-center font-semibold transition-all duration-200 hover:scale-[1.02] ${genre === g ? 'border-primary bg-accent-green text-primary' : 'text-text-dark hover:border-primary/30'}`}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-text-dark text-center">Quel âge avez-vous ?</h2>
            <p className="text-5xl font-bold text-primary text-center">{age} <span className="text-xl text-text-muted font-normal">ans</span></p>
            <input
              type="range"
              min={18} max={75}
              value={age}
              onChange={e => setAge(Number(e.target.value))}
              className="stylo-slider"
              style={{ '--progress': sliderProgress(age, 18, 75) } as React.CSSProperties}
            />
            <div className="flex justify-between text-xs text-text-muted"><span>18</span><span>75</span></div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-text-dark text-center">Quelle est votre taille ?</h2>
            <p className="text-5xl font-bold text-primary text-center">{taille} <span className="text-xl text-text-muted font-normal">cm</span></p>
            <input
              type="range"
              min={140} max={200}
              value={taille}
              onChange={e => setTaille(Number(e.target.value))}
              className="stylo-slider"
              style={{ '--progress': sliderProgress(taille, 140, 200) } as React.CSSProperties}
            />
            <div className="flex justify-between text-xs text-text-muted"><span>140 cm</span><span>200 cm</span></div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-6">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-text-dark text-center">Quel est votre poids actuel ?</h2>
            <p className="text-5xl font-bold text-primary text-center">{poids} <span className="text-xl text-text-muted font-normal">kg</span></p>
            <input
              type="range"
              min={40} max={200}
              value={poids}
              onChange={e => setPoids(Number(e.target.value))}
              className="stylo-slider"
              style={{ '--progress': sliderProgress(poids, 40, 200) } as React.CSSProperties}
            />
            <div className="flex justify-between text-xs text-text-muted"><span>40 kg</span><span>200 kg</span></div>
          </div>
        );
      case 5:
        return (
          <div className="space-y-6">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-text-dark text-center">Quel est votre poids idéal ?</h2>
            <p className="text-5xl font-bold text-primary text-center">{poidsIdeal} <span className="text-xl text-text-muted font-normal">kg</span></p>
            <input
              type="range"
              min={40} max={150}
              value={poidsIdeal}
              onChange={e => setPoidsIdeal(Number(e.target.value))}
              className="stylo-slider"
              style={{ '--progress': sliderProgress(poidsIdeal, 40, 150) } as React.CSSProperties}
            />
            <div className="flex justify-between text-xs text-text-muted"><span>40 kg</span><span>150 kg</span></div>
            {poidsIdeal >= poids && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-danger text-sm text-center">
                Votre objectif doit être inférieur à votre poids actuel ({poids} kg)
              </motion.p>
            )}
          </div>
        );
      case 6:
        return (
          <div className="space-y-4">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-text-dark text-center">Quel est votre niveau d'activité ?</h2>
            <div className="space-y-3 mt-6">
              {ACTIVITIES.map(a => (
                <button
                  key={a.value}
                  onClick={() => setActivite(a.value)}
                  className={`stylo-card w-full p-4 text-left transition-all duration-200 hover:scale-[1.01] ${activite === a.value ? 'border-primary bg-accent-green' : 'hover:border-primary/30'}`}
                >
                  <p className={`font-semibold ${activite === a.value ? 'text-primary' : 'text-text-dark'}`}>{a.label}</p>
                  <p className="text-text-muted text-sm">{a.desc}</p>
                </button>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen stylo-bg flex flex-col">
      {/* Progress bar */}
      <div className="sticky top-0 z-50 bg-white border-b border-border">
        <div className="max-w-lg mx-auto px-4 py-3 flex items-center gap-3">
          <span className="text-sm text-text-muted font-medium">{step}/{totalSteps}</span>
          <div className="flex-1 h-2 bg-border rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-primary rounded-full"
              animate={{ width: `${(step / totalSteps) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      </div>

      {/* Step content */}
      <div className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-lg">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: direction * 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -50 }}
              transition={{ duration: 0.3 }}
            >
              {renderStep()}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="sticky bottom-0 bg-white border-t border-border">
        <div className="max-w-lg mx-auto px-4 py-4 flex gap-3">
          {step > 1 && (
            <button onClick={handleBack} className="flex items-center justify-center gap-1 px-5 py-3 rounded-xl border border-border text-text-dark hover:bg-gray-50 transition-colors font-medium">
              <ChevronLeft className="w-4 h-4" />
              Précédent
            </button>
          )}
          <button
            onClick={handleNext}
            disabled={!canNext()}
            className="stylo-btn flex-1 flex items-center justify-center gap-1"
          >
            {step === totalSteps ? 'Calculer ma formule' : 'Suivant'}
            {step < totalSteps && <ChevronRight className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </div>
  );
}
