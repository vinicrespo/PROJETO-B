import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Leaf } from 'lucide-react';

const MESSAGES = [
  'Vérification de votre email d\'achat...',
  'Confirmation de votre licence...',
  'Préparation de votre espace personnel...',
  'Chargement du protocole Dr. Cohen...',
  'Accès autorisé',
];

export default function LoadingPage() {
  const [messageIndex, setMessageIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('stylo_user_email')) {
      navigate('/app', { replace: true });
      return;
    }

    const messageInterval = setInterval(() => {
      setMessageIndex(prev => {
        if (prev < MESSAGES.length - 1) return prev + 1;
        return prev;
      });
    }, 1200);

    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) return 100;
        return prev + 1.67;
      });
    }, 100);

    const redirect = setTimeout(() => {
      const onboardingDone = localStorage.getItem('stylo_onboarding_complete') === 'true';
      navigate(onboardingDone ? '/app/dashboard' : '/app/onboarding', { replace: true });
    }, 6000);

    return () => {
      clearInterval(messageInterval);
      clearInterval(progressInterval);
      clearTimeout(redirect);
    };
  }, [navigate]);

  return (
    <div className="min-h-screen stylo-bg flex flex-col items-center justify-center px-4">
      {/* Logo */}
      <div className="flex items-center gap-2 mb-16">
        <Leaf className="w-7 h-7 text-primary" />
        <span className="font-serif text-2xl font-bold text-primary">Stylo</span>
        <span className="font-serif text-2xl font-bold text-text-dark">Maison</span>
      </div>

      {/* Spinner */}
      <div className="relative w-16 h-16 mb-8">
        <div className="absolute inset-0 rounded-full border-4 border-border" />
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary animate-spin-slow" />
      </div>

      {/* Messages */}
      <div className="h-8 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.p
            key={messageIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="text-text-muted text-sm md:text-base text-center flex items-center gap-2"
          >
            {MESSAGES[messageIndex]}
            {messageIndex === MESSAGES.length - 1 && (
              <span className="text-primary font-semibold">&#10003;</span>
            )}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Progress bar */}
      <div className="w-full max-w-xs mt-12">
        <div className="h-1 bg-border rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-primary rounded-full"
            style={{ width: `${Math.min(progress, 100)}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>
      </div>
    </div>
  );
}
