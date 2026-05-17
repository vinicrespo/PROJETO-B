import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function useAuth() {
  const navigate = useNavigate();
  const email = typeof window !== 'undefined' ? localStorage.getItem('stylo_user_email') : null;
  const isAuthenticated = !!email;

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/app', { replace: true });
    }
  }, [isAuthenticated, navigate]);

  return { email, isAuthenticated };
}

export function useOnboardingGuard() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const onboardingComplete = typeof window !== 'undefined' ? localStorage.getItem('stylo_onboarding_complete') === 'true' : false;

  useEffect(() => {
    if (isAuthenticated && !onboardingComplete) {
      navigate('/app/onboarding', { replace: true });
    }
  }, [isAuthenticated, onboardingComplete, navigate]);

  return { onboardingComplete };
}
