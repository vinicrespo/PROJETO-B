/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Routes, Route, Navigate } from 'react-router-dom';
import { Volume2 } from 'lucide-react';
import VSL from './components/VSL';
import TrustLogos from './components/TrustLogos';
import Comments from './components/Comments';
import { ToastProvider } from './app/components/Toast';

// App pages
import Up1Page from './pages/Up1Page';
import Up2Page from './pages/Up2Page';
import Up3Page from './pages/Up3Page';
import Up4Page from './pages/Up4Page';
import LoginPage from './app/pages/LoginPage';
import LoadingPage from './app/pages/LoadingPage';
import OnboardingPage from './app/pages/OnboardingPage';
import DashboardPage from './app/pages/DashboardPage';
import RecettePage from './app/pages/RecettePage';
import ProtocolePage from './app/pages/ProtocolePage';
import RoutinePage from './app/pages/RoutinePage';
import AlimentsPage from './app/pages/AlimentsPage';
import ShotPage from './app/pages/ShotPage';
import CellulitePage from './app/pages/CellulitePage';
import VergeturesPage from './app/pages/VergeturesPage';
import FessiersPage from './app/pages/FessiersPage';
import ProfilPage from './app/pages/ProfilPage';

function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Header */}
      <header id="header" className="bg-[#89c39e] text-white py-4 px-2 text-center shadow-md">
        <h1 className="text-xl md:text-3xl font-black uppercase text-[#e33036] mb-1 tracking-tight drop-shadow-sm">
          ATTENTION:
        </h1>
        <p className="text-lg md:text-2xl font-bold leading-tight max-w-2xl mx-auto">
          Regardez jusqu'à la fin, cette présentation sera retirée demain !
        </p>
      </header>

      <main className="flex-grow">
        {/* Video Section */}
        <VSL />

        {/* Sound Warning */}
        <div id="sound-warning" className="bg-white py-3 flex justify-center items-center space-x-2 animate-pulse">
           <Volume2 className="w-5 h-5 text-gray-800" />
           <p className="text-[#e33036] font-bold text-sm md:text-base">
             Veuillez vérifier si le son est activé.
           </p>
        </div>

        {/* Call to Action */}
        <div className="flex justify-center pt-8 pb-2 bg-white px-4 vsl">
          <a href="https://checkout.kashpay.com.br/checkout/checkout-1778981145336" className="w-full max-w-xl bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg shadow-xl text-lg md:text-2xl uppercase transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl active:scale-95 text-center leading-tight block">
            Je veux perdre 17 kilos en 21 jours
          </a>
        </div>

        {/* Logos */}
        <TrustLogos />

        {/* Comments */}
        <Comments />
      </main>

      {/* Footer */}
      <footer id="footer">
        {/* Disclaimer Section */}
        <div className="bg-[#f0f0f0] p-6 md:p-10 text-center text-gray-500 text-[10px] md:text-xs leading-relaxed max-w-5xl mx-auto">
          <p className="mb-4">
            Notre vidéo, contenu et matériel sont enregistrés auprès de la CBL et de l'INPI, toute reproduction sera poursuivie. 
            Nous n'avons pas l'intention de diagnostiquer, traiter, guérir ou prévenir toute maladie ou affection. 
            Les informations sont partagées uniquement à des fins éducatives. 
            Vous devez toujours consulter votre médecin avant d'agir sur tout contenu de ce site, 
            en particulier si vous êtes enceinte, allaitez, prenez des médicaments ou avez une condition médicale.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="bg-[#75b38b] py-6 px-4 text-center text-white text-sm md:text-base font-medium">
          <p>
            Copyright © {new Date().getFullYear()} <span className="font-black">Vitalite Pure</span> | Tous droits réservés
          </p>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <ToastProvider>
      <Routes>
        {/* Landing / VSL page */}
        <Route path="/" element={<LandingPage />} />
        
        {/* Upsell 1 */}
        <Route path="/up1" element={<Up1Page />} />
        
        {/* Upsell 2 */}
        <Route path="/up2" element={<Up2Page />} />
        
        {/* Upsell 3 */}
        <Route path="/up3" element={<Up3Page />} />
        
        {/* Upsell 4 */}
        <Route path="/up4" element={<Up4Page />} />

        {/* Stylo Maison App routes */}
        <Route path="/app" element={<LoginPage />} />
        <Route path="/app/loading" element={<LoadingPage />} />
        <Route path="/app/onboarding" element={<OnboardingPage />} />
        <Route path="/app/dashboard" element={<DashboardPage />} />
        <Route path="/app/dashboard/recette" element={<RecettePage />} />
        <Route path="/app/dashboard/protocole" element={<ProtocolePage />} />
        <Route path="/app/dashboard/routine" element={<RoutinePage />} />
        <Route path="/app/dashboard/aliments" element={<AlimentsPage />} />
        <Route path="/app/dashboard/shot" element={<ShotPage />} />
        <Route path="/app/dashboard/cellulite" element={<CellulitePage />} />
        <Route path="/app/dashboard/vergetures" element={<VergeturesPage />} />
        <Route path="/app/dashboard/fessiers" element={<FessiersPage />} />
        <Route path="/app/dashboard/profil" element={<ProfilPage />} />

        {/* Catch-all: redirect unknown app routes to dashboard */}
        <Route path="/app/*" element={<Navigate to="/app/dashboard" replace />} />
      </Routes>
    </ToastProvider>
  );
}
