import { motion } from 'motion/react';
import { CheckCircle, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ThanksPage() {
  return (
    <div className="min-h-screen stylo-bg font-sans flex flex-col items-center justify-center p-4 text-text-dark">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="stylo-card p-8 md:p-10 max-w-md w-full text-center space-y-6 bg-white shadow-xl rounded-2xl"
      >
        <div className="flex justify-center">
          <div className="bg-green-100 p-4 rounded-full">
            <CheckCircle className="w-16 h-16 text-green-500" />
          </div>
        </div>

        <h1 className="font-serif text-3xl font-bold text-text-dark">
          Félicitations !
        </h1>

        <div className="space-y-4 text-text-muted text-base">
          <p>
            Votre commande a été confirmée avec succès.
          </p>
          <div className="flex items-center justify-center gap-2 text-primary font-medium bg-primary/10 py-3 px-4 rounded-xl border border-primary/20">
            <Mail className="w-5 h-5" />
            <span>Vos accès ont été envoyés par e-mail.</span>
          </div>
          <p className="text-sm">
            Veuillez vérifier votre boîte de réception (et vos spams) pour accéder à votre programme Stylo Maison App.
          </p>
        </div>

        <div className="pt-6">
          <Link 
            to="/app"
            className="block w-full bg-primary hover:bg-green-600 text-white font-bold py-4 px-6 rounded-xl shadow-[0_8px_20px_rgba(22,163,74,0.3)] transition-transform hover:scale-105 active:scale-95 uppercase text-sm"
          >
            Accéder à l'application
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
