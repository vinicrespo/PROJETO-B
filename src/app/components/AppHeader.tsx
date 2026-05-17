import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, LogOut, Settings, ChevronLeft } from 'lucide-react';

interface AppHeaderProps {
  showBack?: boolean;
  backTo?: string;
  title?: string;
}

export default function AppHeader({ showBack, backTo = '/app/dashboard', title }: AppHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const email = localStorage.getItem('stylo_user_email') || '';
  const initial = email.charAt(0).toUpperCase();

  const handleLogout = () => {
    localStorage.removeItem('stylo_user_email');
    localStorage.removeItem('stylo_user_profile');
    localStorage.removeItem('stylo_onboarding_complete');
    localStorage.removeItem('stylo_protocole_progress');
    localStorage.removeItem('stylo_protocole_start');
    navigate('/app');
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {showBack && (
            <Link to={backTo} className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors">
              <ChevronLeft className="w-5 h-5 text-text-dark" />
            </Link>
          )}
          {title ? (
            <h1 className="text-lg font-semibold text-text-dark truncate">{title}</h1>
          ) : (
            <Link to="/app/dashboard" className="flex items-center gap-1">
              <span className="font-serif text-xl font-bold text-primary">Stylo</span>
              <span className="font-serif text-xl font-bold text-text-dark">Maison</span>
            </Link>
          )}
        </div>

        <div className="relative" ref={menuRef}>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center justify-center w-9 h-9 rounded-full bg-primary text-white font-semibold text-sm hover:bg-primary-dark transition-colors"
          >
            {initial || <User className="w-4 h-4" />}
          </button>

          {menuOpen && (
            <div className="absolute right-0 top-12 w-48 bg-white border border-border rounded-xl shadow-lg py-1 z-50">
              <Link
                to="/app/dashboard/profil"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2 px-4 py-3 text-sm text-text-dark hover:bg-gray-50 transition-colors"
              >
                <Settings className="w-4 h-4 text-text-muted" />
                Profil
              </Link>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-3 text-sm text-danger hover:bg-red-50 transition-colors w-full text-left"
              >
                <LogOut className="w-4 h-4" />
                Déconnexion
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
