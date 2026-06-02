import { BookOpen, AlertCircle, Leaf, Sparkles, Calendar } from 'lucide-react';
import AppHeader from '../../components/AppHeader';
import PageWrapper from '../../components/PageWrapper';

const DESTRUCTEURS = [
  { nom: 'Ail cru', mecanisme: 'Allicine : antibiotique naturel qui détruit sélectivement les mauvaises bactéries', usage: '1 gousse écrasée à jeun le matin' },
  { nom: 'Gingembre', mecanisme: 'Gingerols : crée un environnement hostile aux bactéries nuisibles', usage: 'En infusion ou râpé sur les plats' },
  { nom: 'Vinaigre de cidre', mecanisme: 'Acide acétique : acidifie l\'intestin, tue les bactéries pathogènes', usage: '1 c.à.s dans eau tiède avant les repas' },
  { nom: 'Curcuma', mecanisme: 'Curcumine : anti-bactérien et anti-inflammatoire puissant', usage: 'Toujours avec poivre noir' },
  { nom: 'Huile de noix de coco', mecanisme: 'Acide laurique : détruit les parois des mauvaises bactéries', usage: '1 c.à.s par jour en cuisson' },
  { nom: 'Thym', mecanisme: 'Thymol : antiseptique intestinal naturel', usage: 'En infusion ou en assaisonnement' },
  { nom: 'Cranberry (canneberge)', mecanisme: 'Proanthocyanidines : empêchent les mauvaises bactéries de s\'accrocher', usage: 'En jus pur ou baies fraîches' },
  { nom: 'Citron', mecanisme: 'Acide citrique : alcalinise et nettoie le côlon', usage: 'Jus frais chaque matin' },
  { nom: 'Pamplemousse', mecanisme: 'Extrait de pépins : antibiotique naturel à large spectre', usage: '1/2 pamplemousse par jour' },
  { nom: 'Eau pétillante', mecanisme: 'Le CO2 perturbe les colonies de mauvaises bactéries', usage: 'Remplace les sodas' }
];

const PROBIOTIQUES = [
  { nom: 'Kéfir', usage: '50 souches de bactéries bénéfiques. 200ml par jour à jeun.' },
  { nom: 'Yaourt nature entier', usage: 'Lactobacillus vivants. Choisir "ferments vivants" sur l\'étiquette.' },
  { nom: 'Choucroute crue', usage: 'Milliards de lactobacilles par cuillerée. Non pasteurisée obligatoirement.' },
  { nom: 'Kimchi', usage: 'Fermenté coréen, plus diversifié que la choucroute en souches.' },
  { nom: 'Miso', usage: 'Fermenté japonais, riche en enzymes digestives. En soupe, jamais bouilli.' },
  { nom: 'Kombucha', usage: 'Thé fermenté avec levures et bactéries. 200ml par jour.' },
  { nom: 'Pain au levain', usage: 'Fermentation longue = probiotiques naturels. Remplace le pain industriel.' },
  { nom: 'Tempeh', usage: 'Soja fermenté, protéines complètes + probiotiques. Alternatif au tofu.' },
  { nom: 'Fromage affiné', usage: 'Moisissures nobles = bonnes bactéries (camembert, roquefort, comté).' },
  { nom: 'Vinaigre de cidre non pasteurisé', usage: 'La "mère" du vinaigre contient des probiotiques actifs.' }
];

const PREBIOTIQUES = [
  { nom: 'Ail et oignon', effet: 'Inuline : aliment préféré des Lactobacillus' },
  { nom: 'Banane (légèrement verte)', effet: 'Amidon résistant : nourrit les bifidobactéries' },
  { nom: 'Artichaut', effet: 'Fructo-oligosaccharides : multiplie les bonnes bactéries par 10' },
  { nom: 'Poireau', effet: 'Fibres prébiotiques intenses. À consommer cuit.' },
  { nom: 'Avoine', effet: 'Bêta-glucanes : prébiotique puissant qui stimule la diversité' }
];

export default function GuideBacteriesPage() {
  return (
    <div className="min-h-screen stylo-bg">
      <AppHeader />
      <PageWrapper>
        <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Header Section */}
        <div className="bg-gradient-to-r from-[#D4A574] to-[#B88655] rounded-2xl p-8 text-white shadow-lg">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-white/20 rounded-xl">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Guide des Bonnes Bactéries</h1>
              <p className="text-white/90 mt-1">Les aliments qui transforment votre microbiote</p>
            </div>
          </div>
        </div>

        {/* Intro */}
        <div className="bg-[#FFFDF5] border border-[#F5E6D3] rounded-2xl p-6 text-gray-800 shadow-sm">
          <p className="leading-relaxed font-medium">
            Les femmes minces ont <span className="font-bold text-[#D4A574]">80% plus de bonnes bactéries</span> que de mauvaises. Ce guide vous montre exactement quoi manger pour inverser ce ratio — naturellement, sans médicaments ni compléments coûteux.
          </p>
        </div>

        {/* Section 1: Destructeurs */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center">
            <AlertCircle className="w-6 h-6 text-red-500 mr-2" />
            Les 10 Aliments qui Détruisent les Mauvaises Bactéries
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {DESTRUCTEURS.map((item, i) => (
              <div key={i} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:border-red-200 transition-colors">
                <h3 className="font-bold text-red-700">{i+1}. {item.nom}</h3>
                <p className="text-sm text-gray-600 mt-2"><span className="font-semibold text-gray-800">Action :</span> {item.mecanisme}</p>
                <p className="text-sm text-gray-600 mt-1"><span className="font-semibold text-gray-800">Usage :</span> {item.usage}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Probiotiques */}
        <div className="space-y-4 pt-4">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center">
            <Sparkles className="w-6 h-6 text-[#D4A574] mr-2" />
            Les 10 Aliments qui Peuplent les Bonnes Bactéries (Probiotiques)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {PROBIOTIQUES.map((item, i) => (
              <div key={i} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:border-[#D4A574] transition-colors">
                <h3 className="font-bold text-[#B88655]">{i+1}. {item.nom}</h3>
                <p className="text-sm text-gray-600 mt-2">{item.usage}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Prébiotiques */}
        <div className="space-y-4 pt-4">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center">
            <Leaf className="w-6 h-6 text-green-600 mr-2" />
            Les 5 Aliments qui Nourrissent les Bonnes Bactéries (Prébiotiques)
          </h2>
          <div className="bg-green-50 rounded-2xl p-6 border border-green-100 text-green-900 mb-4">
            <p className="italic font-medium">Les prébiotiques sont la nourriture des bonnes bactéries — sans eux, elles meurent même si vous en consommez.</p>
          </div>
          <div className="grid grid-cols-1 gap-3">
            {PREBIOTIQUES.map((item, i) => (
              <div key={i} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col sm:flex-row sm:items-center">
                <h3 className="font-bold text-green-700 sm:w-1/3">{i+1}. {item.nom}</h3>
                <p className="text-sm text-gray-600 mt-1 sm:mt-0 sm:w-2/3">{item.effet}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 4: Plan de la Semaine */}
        <div className="space-y-4 pt-4 pb-12">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center">
            <Calendar className="w-6 h-6 text-blue-600 mr-2" />
            Plan de la Semaine Type
          </h2>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6">
              <p className="text-gray-700 mb-6">L'objectif est d'intégrer un aliment <strong className="text-[#B88655]">probiotique</strong> ET un aliment <strong className="text-green-700">prébiotique</strong> à chaque repas.</p>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-gray-600 min-w-[600px]">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-4 py-3 w-1/4">Repas</th>
                      <th className="px-4 py-3 w-1/4 text-[#B88655]">Source Probiotique</th>
                      <th className="px-4 py-3 w-1/4 text-green-700">Source Prébiotique</th>
                      <th className="px-4 py-3 w-1/4 text-red-600">Action Destructrice</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="px-4 py-4 font-medium text-gray-900 bg-gray-50">Matin (À jeun)</td>
                      <td className="px-4 py-4">Kéfir ou Vinaigre de cidre</td>
                      <td className="px-4 py-4">-</td>
                      <td className="px-4 py-4">Ail écrasé ou Citron</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-4 font-medium text-gray-900 bg-gray-50">Petit-déjeuner</td>
                      <td className="px-4 py-4">Yaourt nature entier</td>
                      <td className="px-4 py-4">Avoine + Banane</td>
                      <td className="px-4 py-4">-</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-4 font-medium text-gray-900 bg-gray-50">Déjeuner</td>
                      <td className="px-4 py-4">Choucroute ou Kimchi</td>
                      <td className="px-4 py-4">Ail/Oignon cuit</td>
                      <td className="px-4 py-4">Gingembre râpé</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-4 font-medium text-gray-900 bg-gray-50">Dîner</td>
                      <td className="px-4 py-4">Soupe Miso ou Tempeh</td>
                      <td className="px-4 py-4">Poireau ou Artichaut</td>
                      <td className="px-4 py-4">Curcuma + Poivre noir</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        </div>
      </PageWrapper>
    </div>
  );
}
