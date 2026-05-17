import { motion } from 'motion/react';
import { Activity, Droplet } from 'lucide-react';
import AppHeader from '../../components/AppHeader';
import PageWrapper from '../../components/PageWrapper';
import { useAuth } from '../../hooks/useAuth';

export default function AntiFlasqueGommagePage() {
  useAuth();

  return (
    <div className="min-h-screen stylo-bg">
      <AppHeader showBack title="Gommage Circulatoire" />
      <PageWrapper>
        <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-2 mb-6"
          >
            <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center mx-auto mb-4">
              <Activity className="w-6 h-6" style={{ color: '#C19A8C' }} />
            </div>
            <h1 className="font-serif text-2xl font-bold text-text-dark">Le Gommage au Café Vasodilatateur</h1>
            <p className="text-text-muted italic">Pour retendre l'épiderme en surface</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white border border-border rounded-2xl p-6 shadow-sm"
          >
            <p className="text-text-dark text-sm leading-relaxed">
              La caféine appliquée sur la peau agit comme un vasodilatateur puissant. Elle draine l'excès d'eau logé sous la peau flasque et stimule la microcirculation, redonnant un aspect lisse et tendu aux zones critiques (ventre, bras, cuisses).
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="stylo-card border-t-[3px]"
            style={{ borderColor: '#C19A8C' }}
          >
            <h2 className="font-serif text-xl font-bold text-text-dark mb-4">Préparation Minute</h2>
            <div className="space-y-4">
              <div className="flex gap-4 items-center p-3 bg-stone-50 rounded-xl">
                <div className="w-10 h-10 rounded-full bg-stone-200 flex items-center justify-center text-stone-700 font-bold">1</div>
                <p className="text-sm text-text-dark"><strong>2 c.à.s de marc de café</strong> (frais de préférence, pour la caféine active)</p>
              </div>
              <div className="flex gap-4 items-center p-3 bg-stone-50 rounded-xl">
                <div className="w-10 h-10 rounded-full bg-stone-200 flex items-center justify-center text-stone-700 font-bold">2</div>
                <p className="text-sm text-text-dark"><strong>1 c.à.s d'huile végétale</strong> (coco fondue, olive ou amande douce)</p>
              </div>
              <div className="flex gap-4 items-center p-3 bg-stone-50 rounded-xl">
                <div className="w-10 h-10 rounded-full bg-stone-200 flex items-center justify-center text-stone-700 font-bold">3</div>
                <p className="text-sm text-text-dark"><strong>1 c.à.s de sucre roux</strong> (pour l'action exfoliante mécanique)</p>
              </div>
              <p className="text-sm text-text-muted italic text-center mt-2">Mélangez le tout dans un bol jusqu'à obtenir une pâte sableuse.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="stylo-card"
          >
            <h3 className="font-serif font-bold text-text-dark mb-3 flex items-center gap-2">
              <Droplet className="w-5 h-5 text-stone-500" />
              Rituel sous la Douche
            </h3>
            <ol className="list-decimal pl-5 text-sm text-text-dark space-y-3">
              <li>Mettez-vous sous la douche à l'eau chaude pendant 2 minutes pour ouvrir les pores.</li>
              <li>Coupez l'eau. Appliquez le gommage sur les zones flasques.</li>
              <li><strong>Massez énergiquement en mouvements circulaires DE BAS EN HAUT</strong> (toujours vers le cœur) pendant 3 à 5 minutes.</li>
              <li>Laissez poser 2 minutes pour que la caféine pénètre.</li>
              <li>Rincez à l'eau tiède, puis terminez par un jet d'eau fraîche (obligatoire) pour resserrer immédiatement les tissus.</li>
            </ol>
            <div className="mt-4 p-3 bg-red-50 text-red-800 text-xs rounded-lg text-center">
              À faire 2 fois par semaine maximum pour ne pas irriter la peau.
            </div>
          </motion.div>
        </div>
      </PageWrapper>
    </div>
  );
}
