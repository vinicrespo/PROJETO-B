import { motion } from 'motion/react';
import { ShieldAlert, AlertTriangle } from 'lucide-react';
import AppHeader from '../../components/AppHeader';
import PageWrapper from '../../components/PageWrapper';
import { useAuth } from '../../hooks/useAuth';

export default function HormonalAlimentsPage() {
  useAuth();

  const badFoods = [
    { title: "Soja Non-Fermenté", desc: "Le lait de soja et le tofu industriel contiennent des phytoestrogènes agressifs qui miment mal vos propres hormones et créent une 'dominance estrogénique' stockant la graisse." },
    { title: "Huiles de Graines (Tournesol, Colza)", desc: "Hautement inflammatoires. Elles perturbent la membrane cellulaire, empêchant les hormones thyroïdiennes d'entrer dans vos cellules pour brûler les calories." },
    { title: "Sucre Liquide (Sodas, Jus)", desc: "Provoque un pic d'insuline monstrueux qui force le corps à convertir immédiatement la testostérone en estrogène (via l'enzyme aromatase)." },
    { title: "Viandes Industrielles", desc: "Souvent bourrées d'hormones de croissance artificielles qui dérèglent totalement votre cycle naturel de satiété." },
    { title: "Pesticides sur les Fruits Rouges", desc: "Les fraises et framboises non-bio sont recouvertes de perturbateurs endocriniens appelés 'xénoestrogènes'." }
  ];

  return (
    <div className="min-h-screen stylo-bg">
      <AppHeader showBack title="Les 5 Destructeurs Hormonaux" />
      <PageWrapper>
        <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-2 mb-6"
          >
            <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">
              <ShieldAlert className="w-6 h-6 text-red-600" />
            </div>
            <h1 className="font-serif text-2xl font-bold text-text-dark">Les 5 Destructeurs Hormonaux</h1>
            <p className="text-text-muted italic">Les aliments qui bloquent votre perte de poids</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white border border-border rounded-2xl p-6 shadow-sm"
          >
            <p className="text-text-dark text-sm leading-relaxed">
              Même si vous prenez votre Shot Hormonal tous les matins, ces 5 aliments agissent comme des "bloqueurs". Ils saturent vos récepteurs hormonaux et empêchent votre corps de brûler la graisse, peu importe ce que vous mangez par ailleurs.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="stylo-card border-t-[3px]"
            style={{ borderColor: '#DC2626' }} // red
          >
            <h2 className="font-serif text-xl font-bold text-text-dark mb-4">La Liste Rouge</h2>
            <div className="space-y-4">
              {badFoods.map((food, idx) => (
                <div key={idx} className="flex gap-3 items-start p-4 bg-gray-50 rounded-xl border border-border">
                  <AlertTriangle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-text-dark text-sm">{food.title}</h3>
                    <p className="text-text-muted text-xs mt-1 leading-relaxed">{food.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </PageWrapper>
    </div>
  );
}
