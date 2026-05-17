export interface UserProfile {
  genre: string;
  age: number;
  taille: number;
  poids_actuel: number;
  poids_ideal: number;
  activite: string;
}

export function useProfile() {
  const getProfile = (): UserProfile | null => {
    try {
      const data = localStorage.getItem('stylo_user_profile');
      return data ? JSON.parse(data) : null;
    } catch {
      return null;
    }
  };

  const saveProfile = (profile: UserProfile) => {
    localStorage.setItem('stylo_user_profile', JSON.stringify(profile));
    localStorage.setItem('stylo_onboarding_complete', 'true');
  };

  const updateProfile = (updates: Partial<UserProfile>) => {
    const current = getProfile();
    if (current) {
      const updated = { ...current, ...updates };
      localStorage.setItem('stylo_user_profile', JSON.stringify(updated));
      return updated;
    }
    return null;
  };

  const getRecipeValues = (profile: UserProfile | null) => {
    if (!profile) return { vinaigre: 2, eau: 360, miel: 1, citron: 1 };
    const poids = profile.poids_actuel;
    return {
      vinaigre: poids < 70 ? 1 : poids < 90 ? 2 : 3,
      eau: 200 + (poids * 2),
      miel: 1,
      citron: poids < 80 ? 1 : 2,
    };
  };

  const getProtocoleDay = (): number => {
    const startDate = localStorage.getItem('stylo_protocole_start');
    if (!startDate) {
      const today = new Date().toISOString().split('T')[0];
      localStorage.setItem('stylo_protocole_start', today);
      return 1;
    }
    const start = new Date(startDate);
    const now = new Date();
    const diff = Math.floor((now.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
    return Math.min(Math.max(diff + 1, 1), 21);
  };

  const getCompletedDays = (): number[] => {
    try {
      const data = localStorage.getItem('stylo_protocole_progress');
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  };

  const toggleDayComplete = (day: number): number[] => {
    const completed = getCompletedDays();
    const index = completed.indexOf(day);
    if (index > -1) {
      completed.splice(index, 1);
    } else {
      completed.push(day);
    }
    localStorage.setItem('stylo_protocole_progress', JSON.stringify(completed));
    return completed;
  };

  const logout = () => {
    localStorage.removeItem('stylo_user_email');
    localStorage.removeItem('stylo_user_profile');
    localStorage.removeItem('stylo_onboarding_complete');
    localStorage.removeItem('stylo_protocole_progress');
    localStorage.removeItem('stylo_protocole_start');
  };

  return { getProfile, saveProfile, updateProfile, getRecipeValues, getProtocoleDay, getCompletedDays, toggleDayComplete, logout };
}
