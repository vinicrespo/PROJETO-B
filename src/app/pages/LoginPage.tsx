import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Leaf } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValidEmail) {
      setError('Veuillez entrer une adresse email valide.');
      return;
    }
    setLoading(true);
    localStorage.setItem('stylo_user_email', email);
    setTimeout(() => navigate('/app/loading'), 500);
  };

  return (
    <div className="min-h-screen stylo-bg flex flex-col">
      <div className="flex-1 flex items-center justify-center px-4 py-8">
        <PageWrapper className="w-full max-w-md">
          <div className="stylo-card p-8 md:p-10">
            {/* Logo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center gap-2 mb-8"
            >
              <Leaf className="w-8 h-8 text-primary" />
              <div>
                <span className="font-serif text-3xl font-bold text-primary">Stylo</span>
                <span className="font-serif text-3xl font-bold text-text-dark"> Maison</span>
              </div>
            </motion.div>

            <h1 className="font-serif text-2xl md:text-3xl font-bold text-text-dark text-center mb-2">
              Accédez à votre application
            </h1>
            <p className="text-text-muted text-center text-sm md:text-base mb-8 leading-relaxed">
              Entrez l'email utilisé lors de votre achat pour accéder à votre programme personnalisé.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setError(''); }}
                  placeholder="votre.email@exemple.com"
                  className="stylo-input"
                  autoComplete="email"
                />
                {error && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-danger text-sm mt-2"
                  >
                    {error}
                  </motion.p>
                )}
              </div>

              <button
                type="submit"
                disabled={!email || loading}
                className="stylo-btn flex items-center justify-center gap-2"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  'Accéder à mon programme'
                )}
              </button>
            </form>

            <p className="text-text-muted text-xs text-center mt-8 leading-relaxed">
              Problème de connexion ? Contactez{' '}
              <a href="mailto:contact@stylo-maison.com" className="text-primary hover:underline">
                contact@stylo-maison.com
              </a>
            </p>
          </div>
        </PageWrapper>
      </div>

      <footer className="py-4 px-4 text-center">
        <p className="text-text-muted text-xs">
          <a href="#" className="hover:underline">Mentions légales</a>
          {' · '}
          © 2026 Stylo Maison App. Tous droits réservés.
        </p>
      </footer>
    </div>
  );
}
