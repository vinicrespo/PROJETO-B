import { motion } from 'motion/react';
import { AlertTriangle, ShieldAlert, ArrowRight } from 'lucide-react';
import AppHeader from '../components/AppHeader';
import PageWrapper from '../components/PageWrapper';
import { useAuth } from '../hooks/useAuth';

interface Aliment {
  name: string;
  danger: string;
  alternative: string;
  consideredHealthy?: boolean;
}

const ALIMENTS: Aliment[] = [
  { name: 'Pain de mie industriel', danger: 'Contient des conservateurs, des émulsifiants et des sucres ajoutés qui perturbent votre flore intestinale et provoquent des pics d\'insuline. Le leaky gut s\'aggrave à chaque tranche.', alternative: 'Pain au levain artisanal ou pain complet bio' },
  { name: 'Yaourts allégés aux fruits', danger: 'Présentés comme "diététiques", ils contiennent en réalité jusqu\'à 15g de sucres cachés par pot, plus des édulcorants qui perturbent vos signaux de satiété et votre microbiote.', alternative: 'Yaourt grec nature + fruits frais', consideredHealthy: true },
  { name: 'Jus de fruits "100% pur jus"', danger: 'Même sans sucres ajoutés, un verre contient autant de sucre qu\'un soda. Sans les fibres du fruit, le sucre provoque un pic d\'insuline massif qui bloque la combustion des graisses.', alternative: 'Le fruit entier, ou eau infusée aux fruits', consideredHealthy: true },
  { name: 'Charcuterie industrielle', danger: 'Les nitrites et nitrates utilisés comme conservateurs provoquent une inflammation intestinale chronique. Cette inflammation bloque la production naturelle de GLP-1 par votre intestin.', alternative: 'Viande blanche grillée ou jambon artisanal sans nitrites' },
  { name: 'Céréales "fitness" du petit-déjeuner', danger: 'Marketing trompeur : la plupart contiennent 25 à 35% de sucres ajoutés, des arômes artificiels et des céréales ultra-transformées. Elles provoquent une faim incontrôlable 2h après.', alternative: 'Flocons d\'avoine nature + noix + cannelle', consideredHealthy: true },
  { name: 'Sodas light', danger: 'Les édulcorants artificiels (aspartame, sucralose) perturbent gravement votre microbiote intestinal. Ils trompent votre cerveau et augmentent paradoxalement les envies de sucre.', alternative: 'Eau gazeuse + citron + menthe fraîche' },
  { name: 'Plats préparés "minceur"', danger: 'Même ceux étiquetés "légers" contiennent des additifs, du glutamate, et un excès de sodium qui provoque de la rétention d\'eau et masque votre vraie perte de poids.', alternative: 'Batch cooking maison le dimanche' },
  { name: 'Margarine', danger: 'Contient des graisses trans et des huiles végétales hydrogénées qui augmentent l\'inflammation systémique et perturbent vos membranes cellulaires, ralentissant votre métabolisme.', alternative: 'Beurre bio en petite quantité ou huile d\'olive' },
  { name: 'Sauces industrielles', danger: 'Ketchup, sauce barbecue, vinaigrette en bouteille : toutes contiennent du sirop de glucose-fructose, des conservateurs et des colorants qui sabotent votre intestin.', alternative: 'Sauce maison : huile d\'olive + citron + herbes' },
  { name: 'Biscottes', danger: 'Index glycémique très élevé (supérieur au pain blanc !). Elles provoquent un pic de glycémie qui déclenche le stockage des graisses, surtout au niveau abdominal.', alternative: 'Galettes de sarrasin ou pain de seigle complet' },
];

export default function AlimentsPage() {
  useAuth();

  return (
    <div className="min-h-screen stylo-bg">
      <AppHeader showBack title="10 Aliments à Éviter" />
      <PageWrapper>
        <div className="max-w-2xl mx-auto px-4 py-6 space-y-4">
          <p className="text-text-muted text-sm text-center mb-2">Les aliments qui sabotent votre perte de poids — 3 sont considérés sains !</p>

          {ALIMENTS.map((aliment, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 + i * 0.04 }}
              className="stylo-card"
            >
              <div className="flex items-start gap-3">
                <div className={`p-2 rounded-xl flex-shrink-0 ${aliment.consideredHealthy ? 'bg-red-50' : 'bg-gray-50'}`}>
                  {aliment.consideredHealthy ? (
                    <ShieldAlert className="w-5 h-5 text-danger" />
                  ) : (
                    <AlertTriangle className="w-5 h-5 text-text-muted" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-serif text-base font-bold text-text-dark">{i + 1}. {aliment.name}</h3>
                    {aliment.consideredHealthy && (
                      <span className="px-2 py-0.5 rounded-full bg-danger/10 text-danger text-xs font-semibold">
                        Considéré sain — mais dangereux !
                      </span>
                    )}
                  </div>
                  <p className="text-text-muted text-sm leading-relaxed mt-2">{aliment.danger}</p>
                  <div className="mt-3 bg-accent-green/50 rounded-lg p-3 flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
                    <p className="text-sm text-primary font-medium">Alternative : {aliment.alternative}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </PageWrapper>
    </div>
  );
}
