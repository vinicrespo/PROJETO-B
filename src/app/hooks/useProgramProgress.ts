import { useState, useEffect } from 'react';

export function useProgramProgress(programKey: string, maxDays: number) {
  const startKey = `stylo_${programKey}_start`;
  const progressKey = `stylo_${programKey}_progress`;

  const [currentDay, setCurrentDay] = useState(1);
  const [completedDays, setCompletedDays] = useState<number[]>([]);

  useEffect(() => {
    // Determine current day based on start date
    const startDate = localStorage.getItem(startKey);
    if (!startDate) {
      const today = new Date().toISOString().split('T')[0];
      localStorage.setItem(startKey, today);
      setCurrentDay(1);
    } else {
      const start = new Date(startDate);
      const now = new Date();
      const diff = Math.floor((now.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
      setCurrentDay(Math.min(Math.max(diff + 1, 1), maxDays));
    }

    // Load completed days
    try {
      const data = localStorage.getItem(progressKey);
      if (data) {
        setCompletedDays(JSON.parse(data));
      }
    } catch {
      setCompletedDays([]);
    }
  }, [programKey, maxDays, startKey, progressKey]);

  const toggleDayComplete = (day: number) => {
    let newCompleted: number[];
    if (completedDays.includes(day)) {
      newCompleted = completedDays.filter(d => d !== day);
    } else {
      newCompleted = [...completedDays, day];
    }
    
    setCompletedDays(newCompleted);
    localStorage.setItem(progressKey, JSON.stringify(newCompleted));
  };

  return { currentDay, completedDays, toggleDayComplete };
}
