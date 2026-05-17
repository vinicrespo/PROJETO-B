import { useState, useEffect, useCallback, createContext, useContext, type ReactNode } from 'react';
import { CheckCircle } from 'lucide-react';

interface ToastMessage {
  id: number;
  text: string;
}

interface ToastContextType {
  showToast: (text: string) => void;
}

const ToastContext = createContext<ToastContextType>({ showToast: () => {} });

export function useToast() {
  return useContext(ToastContext);
}

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const showToast = useCallback((text: string) => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, text }]);
  }, []);

  useEffect(() => {
    if (toasts.length > 0) {
      const timer = setTimeout(() => {
        setToasts(prev => prev.slice(1));
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [toasts]);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] flex flex-col gap-2 pointer-events-none">
        {toasts.map(toast => (
          <div
            key={toast.id}
            className="toast-enter bg-text-dark text-white px-5 py-3 rounded-xl shadow-lg flex items-center gap-2 text-sm font-medium whitespace-nowrap"
          >
            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
            {toast.text}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}
