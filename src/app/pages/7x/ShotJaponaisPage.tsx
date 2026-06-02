import { Zap, AlertTriangle, CheckCircle, Clock } from 'lucide-react';
import AppHeader from '../../components/AppHeader';
import PageWrapper from '../../components/PageWrapper';

export default function ShotJaponaisPage() {
  return (
    <div className="min-h-screen stylo-bg">
      <AppHeader />
      <PageWrapper>
        <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Header Section */}
        <div className="bg-gradient-to-r from-[#D4A574] to-[#B88655] rounded-2xl p-8 text-white shadow-lg">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-white/20 rounded-xl">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Shot Japonais Anti-Inflammation</h1>
              <p className="text-white/90 mt-1">Réduisez vos douleurs articulaires en 7 jours</p>
            </div>
          </div>
        </div>

        {/* Intro */}
        <div className="bg-[#FFFDF5] border border-[#F5E6D3] rounded-2xl p-6 text-gray-800 shadow-sm">
          <p className="leading-relaxed">
            Ce shot ancestral japonais combine 5 ingrédients anti-inflammatoires puissants. Il cible directement l'inflammation chronique qui provoque les douleurs aux genoux, aux hanches et au dos — un problème fréquent chez les femmes en surpoids.
          </p>
        </div>

        {/* Recette Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="bg-gray-50 px-6 py-4 border-b border-gray-100">
            <h2 className="text-xl font-bold text-gray-900">La Recette (1 Verre)</h2>
          </div>
          <div className="p-6">
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-gray-700">
                <span className="w-2 h-2 rounded-full bg-[#D4A574]"></span>
                <span><strong className="text-gray-900">1 c.à.c</strong> de gingembre frais râpé</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-700">
                <span className="w-2 h-2 rounded-full bg-[#D4A574]"></span>
                <span><strong className="text-gray-900">1 c.à.c</strong> de curcuma frais (ou poudre)</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-700">
                <span className="w-2 h-2 rounded-full bg-[#D4A574]"></span>
                <span><strong className="text-gray-900">1 pincée</strong> de poivre noir (indispensable pour activer le curcuma)</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-700">
                <span className="w-2 h-2 rounded-full bg-[#D4A574]"></span>
                <span>Jus d'<strong className="text-gray-900">1/2 citron</strong></span>
              </li>
              <li className="flex items-center space-x-3 text-gray-700">
                <span className="w-2 h-2 rounded-full bg-[#D4A574]"></span>
                <span><strong className="text-gray-900">200ml</strong> d'eau chaude (70°C, pas bouillante)</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-700">
                <span className="w-2 h-2 rounded-full bg-[#D4A574]"></span>
                <span><strong className="text-gray-900">1 c.à.c</strong> de miel cru (optionnel)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Préparation et Consommation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-[#FFFDF5] text-[#D4A574] flex items-center justify-center mr-3 font-bold border border-[#F5E6D3]">1</span>
              Préparation
            </h3>
            <ol className="space-y-3 text-gray-700 list-decimal list-inside">
              <li>Chauffer l'eau à 70°C</li>
              <li>Râper le gingembre directement dans l'eau</li>
              <li>Ajouter le curcuma et le poivre noir</li>
              <li>Incorporer le jus de citron et le miel</li>
              <li>Mélanger et laisser infuser 3 minutes</li>
              <li>Filtrer si souhaité, boire chaud</li>
            </ol>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
              <Clock className="w-6 h-6 text-[#D4A574] mr-3" />
              Quand le prendre
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="mr-2">🕒</span> 1 verre chaque matin à jeun
              </li>
              <li className="flex items-start">
                <span className="mr-2">📅</span> Pendant 7 jours minimum
              </li>
              <li className="flex items-start">
                <span className="mr-2">⭐</span> Résultats optimaux à 21 jours
              </li>
            </ul>
          </div>
        </div>

        {/* Pourquoi ça fonctionne */}
        <div className="bg-gray-900 rounded-2xl p-6 text-white shadow-lg">
          <h3 className="text-xl font-bold text-[#D4A574] mb-4">Pourquoi ça fonctionne si vite</h3>
          <div className="space-y-4">
            <div>
              <strong className="text-white">Gingembre :</strong> 
              <span className="text-gray-300 ml-2">inhibe les mêmes voies inflammatoires que l'ibuprofène, sans effets secondaires</span>
            </div>
            <div>
              <strong className="text-white">Curcuma :</strong> 
              <span className="text-gray-300 ml-2">la curcumine est 5x plus puissante que de nombreux anti-inflammatoires chimiques</span>
            </div>
            <div>
              <strong className="text-white">Poivre noir :</strong> 
              <span className="text-gray-300 ml-2">la pipérine augmente l'absorption du curcuma de 2000%</span>
            </div>
            <div>
              <strong className="text-white">Citron :</strong> 
              <span className="text-gray-300 ml-2">alcalinise le corps, l'inflammation prospère dans un environnement acide</span>
            </div>
          </div>
        </div>

        {/* Résultats */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="bg-green-50 px-6 py-4 border-b border-green-100">
            <h2 className="text-xl font-bold text-green-800">Résultats attendus</h2>
          </div>
          <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span className="text-gray-700">Réduction des douleurs aux genoux (3-5 jours)</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span className="text-gray-700">Moins de raideur matinale (5-7 jours)</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span className="text-gray-700">Inflammation visible réduite (7 jours)</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span className="text-gray-700">Meilleure mobilité générale</span>
            </div>
          </div>
        </div>

        {/* Précautions */}
        <div className="bg-red-50 rounded-2xl p-6 border border-red-100 flex items-start space-x-4">
          <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-bold text-red-800">Précaution médicale</h4>
            <p className="text-red-700 mt-1">
              Si vous prenez des anticoagulants, consultez votre médecin. Le gingembre et le curcuma ont des propriétés fluidifiantes légères.
            </p>
          </div>
        </div>

      </div>
      </PageWrapper>
    </div>
  );
}
