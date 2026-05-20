/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Volume2 } from 'lucide-react';
import VSL from './components/VSL';
const TrustLogos = lazy(() => import('./components/TrustLogos'));
const Comments = lazy(() => import('./components/Comments'));
import { ToastProvider } from './app/components/Toast';

// App pages (Lazy loaded)
const Up1Page = lazy(() => import('./pages/Up1Page'));
const Up2Page = lazy(() => import('./pages/Up2Page'));
const Up3Page = lazy(() => import('./pages/Up3Page'));
const Up4Page = lazy(() => import('./pages/Up4Page'));
const ThanksPage = lazy(() => import('./pages/ThanksPage'));
const Lead1Page = lazy(() => import('./pages/Lead1Page'));
const Lead2Page = lazy(() => import('./pages/Lead2Page'));

const LoginPage = lazy(() => import('./app/pages/LoginPage'));
const LoadingPage = lazy(() => import('./app/pages/LoadingPage'));
const OnboardingPage = lazy(() => import('./app/pages/OnboardingPage'));
const DashboardPage = lazy(() => import('./app/pages/DashboardPage'));
const RecettePage = lazy(() => import('./app/pages/RecettePage'));
const ProtocolePage = lazy(() => import('./app/pages/ProtocolePage'));
const RoutinePage = lazy(() => import('./app/pages/RoutinePage'));
const AlimentsPage = lazy(() => import('./app/pages/AlimentsPage'));
const ShotPage = lazy(() => import('./app/pages/ShotPage'));
const CellulitePage = lazy(() => import('./app/pages/CellulitePage'));
const VergeturesPage = lazy(() => import('./app/pages/VergeturesPage'));
const FessiersPage = lazy(() => import('./app/pages/FessiersPage'));
const ProfilPage = lazy(() => import('./app/pages/ProfilPage'));

// Détox 10X
const DetoxPlanPage = lazy(() => import('./app/pages/detox/DetoxPlanPage'));
const DetoxRituelNuitPage = lazy(() => import('./app/pages/detox/DetoxRituelNuitPage'));
const DetoxSubstitutionsPage = lazy(() => import('./app/pages/detox/DetoxSubstitutionsPage'));
const DetoxSelRosePage = lazy(() => import('./app/pages/detox/DetoxSelRosePage'));
const DetoxLipoMaisonPage = lazy(() => import('./app/pages/detox/DetoxLipoMaisonPage'));
const DetoxChocolatMinceurPage = lazy(() => import('./app/pages/detox/DetoxChocolatMinceurPage'));
const DetoxBainEpsomPage = lazy(() => import('./app/pages/detox/DetoxBainEpsomPage'));
const DetoxRespirationPage = lazy(() => import('./app/pages/detox/DetoxRespirationPage'));

// Shot Hormonal
const HormonalRecettePage = lazy(() => import('./app/pages/hormonal/HormonalRecettePage'));
const HormonalToniqueDesirPage = lazy(() => import('./app/pages/hormonal/HormonalToniqueDesirPage'));
const HormonalCafeBariatriquePage = lazy(() => import('./app/pages/hormonal/HormonalCafeBariatriquePage'));
const HormonalCremeJeunessePage = lazy(() => import('./app/pages/hormonal/HormonalCremeJeunessePage'));
const HormonalSommeilPage = lazy(() => import('./app/pages/hormonal/HormonalSommeilPage'));
const HormonalAlimentsPage = lazy(() => import('./app/pages/hormonal/HormonalAlimentsPage'));

// Anti-Peau Flasque
const AntiFlasquePlanPage = lazy(() => import('./app/pages/anti-flasque/AntiFlasquePlanPage'));
const AntiFlasqueCollagenPage = lazy(() => import('./app/pages/anti-flasque/AntiFlasqueCollagenPage'));
const AntiFlasqueGommagePage = lazy(() => import('./app/pages/anti-flasque/AntiFlasqueGommagePage'));

// Maintien 365
const MaintienPlanPage = lazy(() => import('./app/pages/maintien/MaintienPlanPage'));
const MaintienRecettePage = lazy(() => import('./app/pages/maintien/MaintienRecettePage'));
const MaintienAntiYoyoPage = lazy(() => import('./app/pages/maintien/MaintienAntiYoyoPage'));
const MaintienReset48hPage = lazy(() => import('./app/pages/maintien/MaintienReset48hPage'));
const MaintienCheatMealPage = lazy(() => import('./app/pages/maintien/MaintienCheatMealPage'));
const MaintienPsychologiePage = lazy(() => import('./app/pages/maintien/MaintienPsychologiePage'));

function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Header */}
      <header id="header" className="bg-[#166534] text-white py-4 px-2 text-center shadow-md">
        <h1 className="text-xl md:text-3xl font-black uppercase text-[#fef08a] mb-1 tracking-tight drop-shadow-sm">
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
        <div className="flex justify-center w-full pt-8 pb-2 bg-white px-4 vsl">
          <a href="https://checkout.kashpay.com.br/checkout/checkout-1778981145336" className="w-full max-w-xl mx-auto bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg shadow-xl text-lg md:text-2xl uppercase transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl active:scale-95 text-center leading-tight block">
            Je veux perdre 17 kilos en 21 jours
          </a>
        </div>

        {/* Logos */}
        <Suspense fallback={<div className="py-6 bg-white min-h-[100px]"></div>}>
          <TrustLogos />
        </Suspense>

        {/* Comments */}
        <Suspense fallback={<div className="bg-[#89c39e] py-8 min-h-[400px]"></div>}>
          <Comments />
        </Suspense>
      </main>

      {/* Footer */}
      <footer id="footer">
        {/* Disclaimer Section */}
        <div className="bg-[#f0f0f0] p-6 md:p-10 text-center text-gray-700 text-[10px] md:text-xs leading-relaxed max-w-5xl mx-auto">
          <p className="mb-4">
            Notre vidéo, contenu et matériel sont enregistrés auprès de la CBL et de l'INPI, toute reproduction sera poursuivie. 
            Nous n'avons pas l'intention de diagnostiquer, traiter, guérir ou prévenir toute maladie ou affection. 
            Les informations sont partagées uniquement à des fins éducatives. 
            Vous devez toujours consulter votre médecin avant d'agir sur tout contenu de ce site, 
            en particulier si vous êtes enceinte, allaitez, prenez des médicaments ou avez une condition médicale.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="bg-[#2f855a] py-6 px-4 text-center text-white text-sm md:text-base font-medium">
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
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-4 border-green-500 border-t-transparent rounded-full animate-spin" /></div>}>
        <Routes>
          {/* Landing / VSL page */}
          <Route path="/" element={<LandingPage />} />
          
          {/* Lead 1 VSL page */}
          <Route path="/19lead1" element={<Lead1Page />} />
          
          {/* Lead 2 VSL page */}
          <Route path="/19lead2" element={<Lead2Page />} />
          
          {/* Upsell 1 */}
          <Route path="/up1" element={<Up1Page />} />
          
          {/* Upsell 2 */}
          <Route path="/up2" element={<Up2Page />} />
          
          {/* Upsell 3 */}
          <Route path="/up3" element={<Up3Page />} />
          
          {/* Upsell 4 */}
          <Route path="/up4" element={<Up4Page />} />

          {/* Thank You Page */}
          <Route path="/thanks" element={<ThanksPage />} />

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

          {/* Détox 10X */}
          <Route path="/app/dashboard/detox/plan" element={<DetoxPlanPage />} />
          <Route path="/app/dashboard/detox/rituel-nuit" element={<DetoxRituelNuitPage />} />
          <Route path="/app/dashboard/detox/substitutions" element={<DetoxSubstitutionsPage />} />
          <Route path="/app/dashboard/detox/sel-rose" element={<DetoxSelRosePage />} />
          <Route path="/app/dashboard/detox/lipo-maison" element={<DetoxLipoMaisonPage />} />
          <Route path="/app/dashboard/detox/chocolat-minceur" element={<DetoxChocolatMinceurPage />} />
          <Route path="/app/dashboard/detox/bain-epsom" element={<DetoxBainEpsomPage />} />
          <Route path="/app/dashboard/detox/respiration" element={<DetoxRespirationPage />} />

          {/* Shot Hormonal */}
          <Route path="/app/dashboard/hormonal/recette" element={<HormonalRecettePage />} />
          <Route path="/app/dashboard/hormonal/tonique-desir" element={<HormonalToniqueDesirPage />} />
          <Route path="/app/dashboard/hormonal/cafe-bariatrique" element={<HormonalCafeBariatriquePage />} />
          <Route path="/app/dashboard/hormonal/creme-jeunesse" element={<HormonalCremeJeunessePage />} />
          <Route path="/app/dashboard/hormonal/sommeil" element={<HormonalSommeilPage />} />
          <Route path="/app/dashboard/hormonal/aliments" element={<HormonalAlimentsPage />} />

          {/* Anti-Peau Flasque */}
          <Route path="/app/dashboard/anti-flasque/plan" element={<AntiFlasquePlanPage />} />
          <Route path="/app/dashboard/anti-flasque/collagene" element={<AntiFlasqueCollagenPage />} />
          <Route path="/app/dashboard/anti-flasque/gommage" element={<AntiFlasqueGommagePage />} />

          {/* Maintien 365 */}
          <Route path="/app/dashboard/maintien/plan" element={<MaintienPlanPage />} />
          <Route path="/app/dashboard/maintien/recette" element={<MaintienRecettePage />} />
          <Route path="/app/dashboard/maintien/anti-yoyo" element={<MaintienAntiYoyoPage />} />
          <Route path="/app/dashboard/maintien/reset-48h" element={<MaintienReset48hPage />} />
          <Route path="/app/dashboard/maintien/cheat-meal" element={<MaintienCheatMealPage />} />
          <Route path="/app/dashboard/maintien/psychologie" element={<MaintienPsychologiePage />} />

          {/* Catch-all: redirect unknown app routes to dashboard */}
          <Route path="/app/*" element={<Navigate to="/app/dashboard" replace />} />
        </Routes>
      </Suspense>
    </ToastProvider>
  );
}
